import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Collection = () => {
  const { products, search, showSearch, currency } = useContext(ShopContext);
  const [selectedTC, setSelectedTC] = useState('');
  const [selectedComponent, setSelectedComponent] = useState('Complete Bed Set');
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (selectedTC) {
      if (selectedTC === 'Rashi') {
        productsCopy = productsCopy.filter(item => item.category === 'Rashi');
      } else {
        productsCopy = productsCopy.filter(item => !item.threadCounts || item.threadCounts[selectedTC] === true);
      }
      if (selectedComponent) {
        productsCopy = productsCopy.filter(item => item.subCategory === selectedComponent);
      }
    }
    setFilterProducts(productsCopy);
    window.scrollTo(0, 0);
  }, [selectedTC, selectedComponent, products, search, showSearch]);

  const categories = [
    { id: '300TC', title: '300 TC', desc: 'Crisp. Breathable. Timeless.', image: 'src/assets/luxury300TC.png' },
    { id: '500TC', title: '500 TC', desc: 'Silky. Lustrous. Divine.', image: 'src/assets/premium500TC.png' },
    { id: 'Rashi', title: 'RASHI', desc: 'Soulful. Harmonious. Cosmic.', image: 'src/assets/zodiacRashi.png' }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <AnimatePresence mode="wait">
        {!selectedTC ? (
          <motion.div key="funnel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center py-20">
            <h1 className="text-6xl font-serif text-stone-800 mb-16">Choose Your <span className="italic font-light">Legacy</span></h1>
            <div className="flex flex-col md:flex-row w-full max-w-7xl px-6 gap-8">
              {categories.map((cat) => (
                <div key={cat.id} onClick={() => setSelectedTC(cat.id)} className="relative flex-1 group cursor-pointer h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110" style={{ backgroundImage: `url(${cat.image})` }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-10 bg-gradient-to-t from-white/90">
                    <h2 className="text-xl font-bold uppercase mb-2 tracking-widest">{cat.title}</h2>
                    <p className="text-xs text-stone-500 mb-6">{cat.desc}</p>
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase py-3 px-8 bg-stone-900 text-white rounded-full transition-all group-hover:bg-black">Explore <ArrowRight size={14} /></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-6 py-20 bg-white">
            <button onClick={() => setSelectedTC('')} className="text-[10px] font-bold uppercase mb-12 flex items-center gap-2 hover:text-stone-500 transition-colors">← Change Collection</button>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
              <h2 className="text-6xl font-serif italic tracking-tight">{selectedTC} Edit</h2>
              <div className="flex flex-wrap gap-4">
                {['Complete Bed Set', 'Fitted Sheet', 'Flat Sheet', 'Duvet Cover'].map((item) => (
                  <button key={item} onClick={() => setSelectedComponent(item)} className={`px-10 py-5 text-sm font-bold rounded-full border-2 transition-all duration-300 ${selectedComponent === item ? 'bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-xl scale-105' : 'bg-white text-stone-400 border-stone-100 hover:border-stone-400'}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
              {filterProducts.map((item, index) => {
                const tcKey = selectedTC === 'Rashi' ? 'Rashi' : selectedTC;
                const matrixObj = item.priceMatrix?.[tcKey]?.[selectedComponent]?.SINGLE;
                const currentPrice = (matrixObj?.sale && Number(matrixObj.sale) > 0) ? Number(matrixObj.sale) : item.price;
                const currentMRP = (matrixObj?.original && Number(matrixObj.original) > 0) ? Number(matrixObj.original) : (item.oldPrice || item.price);
                const discount = (currentMRP > currentPrice) ? Math.round(((currentMRP - currentPrice) / currentMRP) * 100) : 0;
                return (
                  <Link key={index} to={`/product/${item._id}`} className="group">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-50 mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                      <img src={item.images?.[0]} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt={item.name} />
                      {discount > 0 && <div className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-black px-3 py-1.5 rounded-lg shadow-lg">-{discount}%</div>}
                    </div>
                    <h3 className="text-base font-bold text-stone-800 truncate mb-2 leading-tight">{item.name}</h3>
                    <div className="flex items-center gap-3">
                      <p className="text-base font-black text-stone-900">{currency}{currentPrice.toLocaleString()}</p>
                      {currentMRP > currentPrice && <p className="text-sm text-stone-300 line-through font-light">{currency}{currentMRP.toLocaleString()}</p>}
                    </div>
                  </Link>
                );
              })}
            </div>
            {filterProducts.length === 0 && <div className="text-center py-32 text-stone-400 font-serif italic text-2xl">No variants found in this selection.</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Collection;