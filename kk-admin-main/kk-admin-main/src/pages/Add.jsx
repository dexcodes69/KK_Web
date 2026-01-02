import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl, scraperUrl } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Add = ({ token }) => {
    const [images, setImages] = useState(Array(12).fill(false));
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(""); 
    const [oldPrice, setOldPrice] = useState(""); 
    const [category, setCategory] = useState("Bedding");
    const [subCategory, setSubCategory] = useState("Complete Bed Set");
    const [rashi, setRashi] = useState("");
    const [bestseller, setBestseller] = useState(false);
    const [tc, setTc] = useState("300TC");
    
    const [matrixPrices, setMatrixPrices] = useState({
        SINGLE: { sale: 0, original: 0 },
        DOUBLE: { sale: 0, original: 0 },
        QUEEN: { sale: 0, original: 0 },
        KING: { sale: 0, original: 0 }
    });

    const [amazonUrl, setAmazonUrl] = useState("");
    const [loadingScrape, setLoadingScrape] = useState(false);

    const onMatrixChange = (size, field, value) => {
        setMatrixPrices(prev => ({ ...prev, [size]: { ...prev[size], [field]: Number(value) } }));
    };

    const handleAmazonImport = async (e) => {
        if(e) e.preventDefault();
        setLoadingScrape(true);
        try {
            const res = await axios.post(`${scraperUrl}/api/product/scrape-amazon`, { url: amazonUrl }, { headers: { token } });
            if (res.data.success) {
                const product = res.data.data;
                const firstVariant = product.variants[0]; 
                setName(product.name);
                setDescription(product.description);
                
                if (firstVariant) {
                    setMatrixPrices(firstVariant.matrixPrices);
                    setPrice(firstVariant.matrixPrices.SINGLE.sale);
                    setOldPrice(firstVariant.matrixPrices.SINGLE.original);
                    const newImgs = Array(12).fill(false);
                    firstVariant.imageUrls.forEach((url, i) => { if (i < 12) newImgs[i] = url; });
                    setImages(newImgs);
                }
                toast.success("Product Details Imported!");
            }
        } catch (err) {
            toast.error("Scraper failed.");
        } finally { setLoadingScrape(false); }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Publishing...");
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("subCategory", subCategory);
            formData.append("rashi", category === "Rashi" ? rashi : ""); 
            
            const finalTC = category === "Bedding" 
                ? { '300TC': tc === '300TC', '500TC': tc === '500TC' } 
                : { '300TC': false, '500TC': false };
            formData.append("threadCounts", JSON.stringify(finalTC));
            
            const matrixKey = category === "Rashi" ? "Rashi" : tc;
            formData.append("priceMatrix", JSON.stringify({ [matrixKey]: { [subCategory]: matrixPrices } }));

            images.forEach((img, i) => {
                if (img) {
                    if (typeof img === 'string') formData.append(`imageUrl${i + 1}`, img);
                    else formData.append(`image${i + 1}`, img);
                }
            });

            const response = await axios.post(`${backendUrl}/api/product/add`, formData, { headers: { token } });
            if (response.data.success) {
                toast.update(toastId, { render: "Published", type: "success", isLoading: false, autoClose: 3000 });
                setImages(Array(12).fill(false)); setName(""); setRashi("");
            }
        } catch (error) { toast.error(error.message); }
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-4 p-8 bg-white'>
            <p className='text-2xl font-serif italic mb-4'>Inventory Management</p>
            
            <div className='w-full max-w-2xl bg-stone-50 p-6 rounded border mb-6'>
                <p className='text-[10px] font-bold uppercase mb-2'>Amazon Scraper</p>
                <div className='flex gap-2'>
                    <input type="text" placeholder="URL..." value={amazonUrl} onChange={(e) => setAmazonUrl(e.target.value)} className='flex-1 px-4 py-2 border outline-none' />
                    <button type="button" onClick={handleAmazonImport} className='bg-stone-900 text-white px-6 py-2 text-[10px] font-bold uppercase hover:bg-black transition-all'>
                        {loadingScrape ? "SCRAPING..." : "AUTO-FILL"}
                    </button>
                </div>
            </div>

            <div className='flex flex-wrap gap-3 mb-4'>
                {images.map((img, index) => (
                    <label key={index} className="group relative">
                        <img className='w-20 h-24 object-cover border-2 border-dashed rounded shadow-sm' src={!img ? assets.upload_area : (typeof img === 'string' ? img : URL.createObjectURL(img))} alt="" />
                        <input onChange={(e) => { const newImgs = [...images]; newImgs[index] = e.target.files[0]; setImages(newImgs); }} type="file" hidden />
                    </label>
                ))}
            </div>

            <div className='w-full max-w-2xl grid grid-cols-2 gap-4'>
                <div className='col-span-2'>
                    <p className='mb-2 text-[10px] font-bold uppercase'>Product Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} className='w-full px-4 py-2 border outline-none' type="text" required />
                </div>
                <div>
                    <p className='mb-2 text-[10px] font-bold uppercase'>Category</p>
                    <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-4 py-2 border outline-none'>
                        <option value="Bedding">Luxury Bedding</option>
                        <option value="Rashi">Celestial Rashi</option>
                    </select>
                </div>
                <div>
                    <p className='mb-2 text-[10px] font-bold uppercase'>Sub-Category</p>
                    <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full px-4 py-2 border outline-none'>
                        <option value="Complete Bed Set">Complete Bed Set</option>
                        <option value="Fitted Sheet">Fitted Sheet</option>
                        <option value="Flat Sheet">Flat Sheet</option>
                        <option value="Duvet Cover">Duvet Cover</option>
                    </select>
                </div>

                {category === "Rashi" && (
                    <div className='col-span-2'>
                        <p className='mb-2 text-[10px] font-bold uppercase'>Rashi Alignment</p>
                        <select value={rashi} onChange={(e) => setRashi(e.target.value)} className='w-full px-4 py-2 border outline-none' required>
                            <option value="">Select Rashi</option>
                            <option value="Aries">Aries</option><option value="Taurus">Taurus</option>
                            <option value="Gemini">Gemini</option><option value="Cancer">Cancer</option>
                            <option value="Leo">Leo</option><option value="Virgo">Virgo</option>
                            <option value="Libra">Libra</option><option value="Scorpio">Scorpio</option>
                            <option value="Sagittarius">Sagittarius</option><option value="Capricorn">Capricorn</option>
                            <option value="Aquarius">Aquarius</option><option value="Pisces">Pisces</option>
                        </select>
                    </div>
                )}

                {category === "Bedding" && (
                    <div className='col-span-2'>
                        <p className='mb-2 text-[10px] font-bold uppercase text-stone-400'>Thread Count</p>
                        <select value={tc} onChange={(e) => setTc(e.target.value)} className='w-full px-4 py-2 border outline-none bg-white font-bold text-xs' required>
                            <option value="300TC">300 Thread Count</option>
                            <option value="500TC">500 Thread Count</option>
                        </select>
                    </div>
                )}

                <div className='col-span-2'>
                    <p className='mb-2 text-[10px] font-bold uppercase'>Description</p>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full px-4 py-2 border h-32 outline-none' required />
                </div>
            </div>

            <div className='bg-stone-50 p-6 rounded border w-full max-w-2xl mt-4'>
                <p className='mb-4 text-[10px] font-bold uppercase'>Size Matrix (Sale / MRP)</p>
                <div className='grid grid-cols-4 gap-4'>
                    {Object.keys(matrixPrices).map(size => (
                        <div key={size} className='space-y-2 bg-white p-3 border rounded shadow-sm'>
                            <p className='font-bold text-[10px]'>{size}</p>
                            <input type="number" placeholder="Sale" value={matrixPrices[size].sale} onChange={(e)=>onMatrixChange(size, 'sale', e.target.value)} className='w-full p-1 border text-xs' />
                            <input type="number" placeholder="MRP" value={matrixPrices[size].original} onChange={(e)=>onMatrixChange(size, 'original', e.target.value)} className='w-full p-1 border text-xs' />
                        </div>
                    ))}
                </div>
            </div>

            <button type="submit" className='mt-6 bg-stone-900 text-white px-12 py-4 font-bold text-[10px] uppercase hover:bg-black transition-all'>Publish Atelier Entry</button>
        </form>
    )
}
export default Add;