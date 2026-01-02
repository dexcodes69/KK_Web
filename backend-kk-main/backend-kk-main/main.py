import re
import time
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
from fastapi.middleware.cors import CORSMiddleware

# Initialize the FastAPI app first to avoid NameError
app = FastAPI()

# Configure CORS so your React frontend can talk to this server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

class ScrapeRequest(BaseModel):
    url: str

def get_driver():
    options = Options()
    options.add_argument("--headless") 
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    service = Service(ChromeDriverManager().install())
    return webdriver.Chrome(service=service, options=options)

@app.post("/api/product/scrape-amazon")
async def scrape_amazon(request: ScrapeRequest):
    driver = get_driver()
    try:
        driver.get(request.url)
        time.sleep(7) # Initial wait for the page to load
        
        results = {"success": True, "data": {"name": "", "description": "", "variants": []}}
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        
        # Global Info
        title_el = soup.select_one("#productTitle")
        results["data"]["name"] = title_el.text.strip() if title_el else "Unknown Product"
        bullets = soup.select("#feature-bullets ul li span.a-list-item")
        results["data"]["description"] = "\n".join([f"* {b.get_text().strip()}" for b in bullets])

        # Find all clickable color swatches
        swatches = driver.find_elements(By.CSS_SELECTOR, "#variation_color_name li, #variation_style_name li")
        
        if not swatches: swatches = [None] # Handle products with only one variation

        for i in range(len(swatches)):
            try:
                variant_name = "Default"
                if swatches[i]:
                    # Refresh swatches list to avoid StaleElementReferenceException
                    current_swatches = driver.find_elements(By.CSS_SELECTOR, "#variation_color_name li, #variation_style_name li")
                    variant_name = current_swatches[i].text.strip() or current_swatches[i].get_attribute("data-defaultasmid")
                    
                    # Click the color swatch using JavaScript for reliability
                    driver.execute_script("arguments[0].click();", current_swatches[i])
                    time.sleep(4) # Wait for the gallery and price to update

                variant_soup = BeautifulSoup(driver.page_source, 'html.parser')
                
                # Dynamic Price Extraction for the currently selected variant
                price_el = variant_soup.select_one(".a-price .a-offscreen")
                base_price = float(re.sub(r'[^\d.]', '', price_el.text)) if price_el else 0.0

                # Generate the Price Matrix based on the base price found
                matrix = {
                    "SINGLE": {"sale": str(int(base_price)), "original": str(int(base_price * 1.35))},
                    "DOUBLE": {"sale": str(int(base_price + 400)), "original": str(int((base_price + 400) * 1.35))},
                    "QUEEN": {"sale": str(int(base_price + 800)), "original": str(int((base_price + 800) * 1.35))},
                    "KING": {"sale": str(int(base_price + 1200)), "original": str(int((base_price + 1200) * 1.35))}
                }

                # Extract variant-specific images from the page scripts
                variant_imgs = []
                scripts = variant_soup.find_all("script", type="text/javascript")
                for script in scripts:
                    if script.string and 'hiRes' in script.string:
                        found = re.findall(r'"hiRes":"(https://m\.media-amazon\.com/images/I/[^\\\"]+\.jpg)"', script.string)
                        variant_imgs.extend(found)
                
                # Limit to 8 unique images per color
                variant_imgs = list(dict.fromkeys([img for img in variant_imgs if "sprite" not in img.lower()]))[:8]

                results["data"]["variants"].append({
                    "color": variant_name,
                    "matrixPrices": matrix,
                    "imageUrls": variant_imgs
                })
            except Exception as variant_error:
                print(f"Skipping variant {i}: {variant_error}")
                continue

        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        driver.quit()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)