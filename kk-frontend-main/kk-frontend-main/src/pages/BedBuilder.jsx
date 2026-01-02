"use client"

import { useState, useContext } from "react"
import { Check } from "lucide-react"
import { ShopContext } from "../context/ShopContext"
import { Button } from "../components/button"

// --- CONFIGURATION ---
const baseProducts = [
  { id: "fitted-sheet", name: "Fitted Sheet", price: 45.00, desc: "Snug fit with elastic corners." },
  { id: "flat-sheet", name: "Flat Sheet", price: 49.99, desc: "Top sheet with premium hem." },
  { id: "duvet-cover", name: "Duvet Cover", price: 89.99, desc: "Thick, ultra-soft cover." }
]

const pillowAddon = { id: "pillowcases", name: "Pillowcases", price: 29.99 }

const fabrics = [
  { id: "eden-cotton", name: "Eden Cotton", desc: "Crisp & Cool" },
  { id: "eve-linen", name: "Eve Linen", desc: "Airy & Textured" },
  { id: "leo-cotton", name: "Leo Washed", desc: "Buttery Soft" },
  { id: "jude-cotton", name: "Jude Organic", desc: "Chemical Free" },
]

const sizes = [
  { id: "single", name: "Single", multiplier: 1.0 },
  { id: "double", name: "Double", multiplier: 1.2 },
  { id: "queen", name: "Queen", multiplier: 1.3 },
  { id: "king", name: "King", multiplier: 1.5 },
]

const colors = [
  { id: "white", name: "White", hex: "#F5F5F5" },
  { id: "black", name: "Black", hex: "#222222" },
  { id: "burgundy", name: "Burgundy", hex: "#630018" },
  { id: "grey", name: "Grey", hex: "#808080" },
  { id: "navy", name: "Navy", hex: "#1e293b" },
  { id: "royal", name: "Royal", hex: "#1e40af" },
  { id: "silver", name: "Silver", hex: "#e5e7eb" },
  { id: "sky", name: "Sky", hex: "#bae6fd" },
  { id: "taupe", name: "Taupe", hex: "#78716c" },
]

// --- IMAGES ---
const PILLOW_IMAGE_URL = "/pillow-transparent.png"
const DUVET_IMAGE_URL = "/duvet-cover-transparent.png" 
const SHEET_IMAGE_URL = "https://cdn.shopify.com/s/files/1/1463/0170/files/fitted-sheet-top-bed-blank_1288x1288.jpg?v=66"
const PILLOW_FALLBACK = "https://www.pngmart.com/files/7/White-Pillow-Transparent-Images-PNG.png"

const sizeStyles = {
  "single": { width: "50%" }, 
  "double": { width: "65%" },
  "queen":  { width: "85%" },
  "king":   { width: "100%" } 
}

export default function BedBuilder() {
  const { currency } = useContext(ShopContext)
  
  const [selectedProduct, setSelectedProduct] = useState("fitted-sheet")
  const [size, setSize] = useState("queen")
  const [fabric, setFabric] = useState("eden-cotton")
  const [color, setColor] = useState("burgundy")
  const [includePillow, setIncludePillow] = useState(false)
  const [pillowColor, setPillowColor] = useState("burgundy")

  // --- DYNAMIC SCALING FOR DUVET WIDTH ---
  const sizeScales = {
    "single": 1.0,
    "double": 1.2,
    "queen": 1.75, 
    "king": 2.0,  
  };
  const dynamicScaleX = sizeScales[size] || 1.0;


  // --- SAFE CALCULATIONS ---
  const getProductPrice = () => {
    const product = baseProducts.find(p => p.id === selectedProduct) || baseProducts[0];
    const sizeObj = sizes.find(s => s.id === size) || sizes[0];
    return product.price * sizeObj.multiplier;
  }

  const totalPrice = getProductPrice() + (includePillow ? pillowAddon.price : 0)

  const activeColorHex = colors.find(c => c.id === color)?.hex || "#630018";
  const activePillowHex = colors.find(c => c.id === pillowColor)?.hex || "#630018";
  const activeSizeName = sizes.find(s => s.id === size)?.name || "Queen";
  const activeFabricName = fabrics.find(f => f.id === fabric)?.name || "Cotton";

  // --- PILLOW COMPONENT ---
  const Pillow = ({ colorHex, rotate = 0, zIndex = 30 }) => (
    <div 
      className="relative w-[42%] aspect-[4/3] transition-all duration-500"
      style={{ transform: `rotate(${rotate}deg)`, zIndex }}
    >
      <img 
        src={PILLOW_IMAGE_URL} 
        onError={(e) => e.currentTarget.src = PILLOW_FALLBACK}
        alt="Pillow"
        className="w-full h-full object-contain drop-shadow-2xl"
        style={{ filter: 'grayscale(100%) brightness(1.1)' }} 
      />
      <div 
        className="absolute inset-0 mix-blend-multiply z-10"
        style={{ 
          backgroundColor: colorHex,
          maskImage: `url(${PILLOW_IMAGE_URL})`,
          WebkitMaskImage: `url(${PILLOW_IMAGE_URL})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center'
        }}
      ></div>
    </div>
  )

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] lg:h-screen bg-white font-sans text-gray-900 overflow-hidden">
      
      {/* --- TOP: VISUALS (Mobile height reduced) --- */}
      <div className="w-full lg:w-2/3 h-[45vh] lg:h-full bg-[#f0f0f2] relative flex items-center justify-center p-4 lg:p-8 shrink-0 z-10">
        
        {/* BED CONTAINER (More rounded corners) */}
        <div 
          className="relative transition-all duration-500 ease-out shadow-2xl rounded-[2rem] bg-white overflow-hidden"
          style={{ 
            height: '80%', 
            width: sizeStyles[size]?.width || "85%", 
            minWidth: '180px' 
          }}
        >
          {/* 1. BASE LAYER (SHEET) */}
          <div className="absolute inset-0 z-0">
             <img src={SHEET_IMAGE_URL} alt="Bed Base" className="w-full h-full object-fill" />
             
             {/* BASE COLOR OVERLAY - Always Active */}
             <div 
               className="absolute inset-0 mix-blend-multiply opacity-80 transition-colors duration-500"
               style={{ backgroundColor: activeColorHex }} 
             ></div>
          </div>

          {/* 2. OVERLAY LAYER (DUVET) */}
          {selectedProduct === 'duvet-cover' && (
             <div className="absolute top-[20%] -left-[35%] w-[170%] h-[100%] z-20 animate-in fade-in zoom-in duration-300">
                <img 
                  src={DUVET_IMAGE_URL} 
                  alt="Duvet" 
                  className="w-full h-full object-contain drop-shadow-xl translate-y-0"
                  style={{ 
                    filter: 'grayscale(100%) brightness(1.05)',
                    transform: `scale(1.1) scaleX(${dynamicScaleX})`, 
                    transition: 'transform 0.5s ease-out'
                  }}
                />
                
                {/* DUVET COLOR MASK */}
                <div 
                  className="absolute inset-0 mix-blend-multiply opacity-90 transition-colors duration-500"
                  style={{ 
                    backgroundColor: activeColorHex,
                    maskImage: `url(${DUVET_IMAGE_URL})`,
                    WebkitMaskImage: `url(${DUVET_IMAGE_URL})`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                    transform: `scale(1.1) scaleX(${dynamicScaleX})` 
                  }}
                ></div>
             </div>
          )}

          {/* VISUAL HACK: Flat Sheet Fold (Hidden if Duvet selected) */}
          {selectedProduct === 'flat-sheet' && (
            <div className="absolute top-[20%] left-0 w-full h-[15%] z-10 pointer-events-none">
               <div className="w-full h-full bg-black/10 mix-blend-multiply shadow-sm border-b border-black/5"></div>
               <div className="absolute bottom-0 w-full h-[1px] bg-white/30"></div>
            </div>
          )}
          
          {/* 3. PILLOWS (Always on Top) */}
          {includePillow && (
            <div className="absolute top-[4%] left-0 w-full flex justify-center items-end -space-x-16 z-30 px-4 pointer-events-none">
              <Pillow colorHex={activePillowHex} rotate={-2} zIndex={30}/>
              {size !== 'single' && (
                 <Pillow colorHex={activePillowHex} rotate={2} zIndex={20}/>
              )}
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="absolute bottom-2 left-0 right-0 text-center opacity-60 text-[10px] tracking-[0.2em] uppercase font-bold text-gray-500">
          {activeSizeName} • {activeFabricName}
        </div>
      </div>

      {/* --- BOTTOM: CONTROLS --- */}
      <div className="w-full lg:w-1/3 h-[45%] lg:h-full bg-white z-20 relative flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.08)] rounded-t-3xl lg:rounded-none -mt-6 lg:mt-0">
        
        {/* Header */}
        <div className="p-4 pb-2 shrink-0 text-center lg:text-left bg-white rounded-t-3xl sticky top-0 z-10">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-2 lg:hidden"></div>
          <h1 className="text-lg font-bold tracking-tight">Customize Your Set</h1>
        </div>

        {/* Controls */}
        <div className="flex-1 overflow-y-auto px-5 py-2 space-y-6 custom-scrollbar pb-24">
          
          {/* 1. Size */}
          <section>
            <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Select Size</h2>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {sizes.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSize(s.id)}
                  className={`flex-shrink-0 px-5 py-3 text-xs font-bold rounded-lg border-2 transition-all ${
                    size === s.id
                    ? "border-black bg-black text-white"
                    : "border-gray-100 bg-white text-gray-600"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </section>

          {/* 2. Color */}
          <section>
            <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
               {selectedProduct === 'duvet-cover' ? 'Set Color' : 'Sheet Color'}
            </h2>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 pl-1">
              {colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  className={`w-10 h-10 rounded-full shadow-sm relative transition-transform active:scale-95 shrink-0 ${
                    color === c.id ? "ring-[3px] ring-offset-2 ring-black scale-110" : "border border-gray-200"
                  }`}
                  style={{ backgroundColor: c.hex }}
                >
                  {c.id === "white" && <div className="absolute inset-0 border border-gray-200 rounded-full"></div>}
                </button>
              ))}
            </div>
          </section>
          
           {/* 3. Type & Fabric */}
           <section className="grid grid-cols-2 gap-3">
              <div>
                 <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Type</h2>
                 <div className="space-y-2">
                    {baseProducts.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProduct(p.id)}
                        className={`w-full p-2 rounded-lg text-xs font-bold border-2 transition-all text-left ${
                          selectedProduct === p.id ? "border-black bg-gray-50" : "border-gray-100"
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                 </div>
              </div>
              
              {/* Fabric Select */}
              <div>
                 <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Fabric</h2>
                 <div className="space-y-2">
                    {fabrics.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFabric(f.id)}
                        className={`w-full p-2 rounded-lg border-2 transition-all text-left group ${
                          fabric === f.id ? "border-black bg-gray-50" : "border-gray-100"
                        }`}
                      >
                        <div className="text-xs font-bold text-gray-900">{f.name}</div>
                        <div className="text-[9px] text-gray-500 font-medium">{f.desc}</div>
                      </button>
                    ))}
                 </div>
              </div>
          </section>

          {/* 4. Pillows */}
          <section className="pt-2">
            <div 
               onClick={() => setIncludePillow(!includePillow)}
               className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${includePillow ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
            >
               <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded flex items-center justify-center border ${includePillow ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-400 bg-white'}`}>
                     {includePillow && <Check size={14} />}
                  </div>
                  <div>
                     <p className="font-bold text-xs text-gray-900">Add 2x Pillowcases</p>
                     <p className="text-[10px] text-gray-500">Match Set Color • +{currency}{pillowAddon.price}</p>
                  </div>
               </div>
            </div>
            
            {/* Pillow Color Logic */}
            {includePillow && (
               <div className="mt-3 pl-1 animate-in fade-in">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Pillow Color</p>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                  {colors.map((c) => (
                     <button
                        key={c.id}
                        onClick={() => setPillowColor(c.id)}
                        className={`w-6 h-6 rounded-full border border-gray-200 shrink-0 ${pillowColor === c.id ? "ring-1 ring-offset-1 ring-black" : ""}`}
                        style={{ backgroundColor: c.hex }}
                     />
                  ))}
                  </div>
               </div>
            )}
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-white absolute bottom-0 left-0 w-full z-30 flex gap-4 items-center shadow-[0_-5px_10px_rgba(0,0,0,0.03)]">
          <div className="flex-1">
             <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Total</p>
             <p className="text-2xl font-black leading-none">{currency}{totalPrice.toFixed(2)}</p>
          </div>
          <Button className="flex-1 py-3 bg-black text-white hover:bg-gray-800 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg">
             Add to Cart
          </Button>
        </div>

      </div>
      <style>{`
         .no-scrollbar::-webkit-scrollbar { display: none; }
         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}