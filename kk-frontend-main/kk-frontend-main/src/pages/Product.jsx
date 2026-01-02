import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaArrowLeft, FaMinus, FaPlus, FaGem, FaWind, FaLeaf, FaHandSparkles, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { toast } from 'react-toastify';

const Product = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  
  const [productData, setProductData] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [size, setSize] = useState('SINGLE'); 
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedTC, setSelectedTC] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Standardized heritage text blocks for the high-end symmetric layout
  const heritageBlocks = [
    {
      title: "ZIPPER CLOSURE & CORNER TIES",
      content: "Protect your single size comforter and secure your bedding in place by fastening the coverlet onto your comforter with 7 internal ties, and finishing with the double zippered closure. Say goodbye to wrestling with duvet clips and buttons! Also, the super-cozy pillow coves feature an envelope closure to prevent your inserts from slipping out of the pillow covers."
    },
    {
      title: "ENJOY BREATHABILITY",
      content: "Say hello to all-season, temperature-regulating linen that helps wick away moisture so you wake up refreshed each morning, thanks to pure cotton construction. 400 Thread Count 100% cotton material has one of the highest levels of thermal conductivity, transferring heat from your body outward to the natural fibers of the fabric, resulting in bedding that looks good and feels good."
    },
    {
      title: "VIBRANT CHOICES",
      content: "Pick from a colorful selection of non-fading luxury bedspreads, to find a soft and fuzzy comforter cover that matches the decor aesthetic of your master suite, guest room, kids bunk beds, or vacation house. Each fabric batch is tested for colorfastness and shrinkage to make sure your Knight Kavalier bed sets don’t pill or fade over time."
    },
    {
      title: "DURABLE & EASY CARE",
      content: "Our single size duvet covers are crafted using high-strength stitching and are machine washable. Wash in cold water, tumble dry low, and iron on low to keep wrinkles at bay To keep your cotton bedsheets and coverlets looking crisp for longer, avoid using a fabric softener, use a short dry cycle and pull out your twin size bedding set promptly from the dryer."
    }
  ];

  useEffect(() => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setCurrentImage(0); 
      
      // Determine material context - matching Category "Celestial Rashi" exactly
      // Use 'Rashi' as the key for Celestial products to ensure correct matrix lookup
      if (product.category === 'Celestial Rashi' || product.category === 'Rashi') {
        setSelectedTC('Rashi');
      } else if (product.threadCounts?.['500TC']) {
        setSelectedTC('500TC');
      } else {
        setSelectedTC('300TC');
      }

      if (product.colors && product.colors.length > 0) setSelectedColor(product.colors[0]);

      const suggested = products
        .filter((item) => item._id !== productId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 6);
      
      setRelatedProducts(suggested);
      window.scrollTo(0, 0);
    }
  }, [productId, products]);

  const getPrices = () => {
    if (!productData) return { sale: 0, original: 0 };
    const sub = productData.subCategory;
    
    // Logic Fix: Ensure Rashi products use the 'Rashi' matrix key for discounted prices
    const tcKey = (productData.category === 'Celestial Rashi' || productData.category === 'Rashi') 
      ? 'Rashi' 
      : selectedTC;

    const matrixData = productData.priceMatrix?.[tcKey]?.[sub]?.[size];
    
    return {
      sale: (matrixData?.sale && Number(matrixData.sale) > 0) ? Number(matrixData.sale) : productData.price,
      original: (matrixData?.original && Number(matrixData.original) > 0) ? Number(matrixData.original) : (productData.oldPrice || productData.price)
    };
  };

  const { sale: displayPrice, original: displayMRP } = getPrices();
  const discount = (displayMRP > displayPrice) ? Math.round(((displayMRP - displayPrice) / displayMRP) * 100) : 0;

  if (!productData) return <div className='p-20 text-center font-serif italic text-stone-400'>Unfolding Heritage...</div>;

  return (
    <div className='bg-white min-h-screen'>
      <style>{`
        .heritage-block {
          background: #fffaf0; 
          padding: 1.8rem;
          border-radius: 12px;
          border-left: 5px solid #d97706; 
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }
        .heritage-block:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          background: #fff7ed;
          border-left-color: #92400e;
        }
        .heritage-block h4 {
          color: #92400e;
          margin-bottom: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.9rem;
          font-weight: 800;
        }
        .heritage-block p {
          color: #57534e;
          line-height: 1.8;
          font-size: 0.95rem;
          text-align: justify;
        }
        .reveal-container {
          overflow: hidden;
          transition: max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
        }
      `}</style>

      <div className='container mx-auto px-6 py-12'>
        <button onClick={() => navigate(-1)} className='flex items-center text-stone-400 hover:text-black mb-10 uppercase text-[10px] font-black tracking-[0.4em]'><FaArrowLeft className='mr-2' /> Return</button>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          {/* Gallery View */}
          <div className='space-y-6'>
            <div className='relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 shadow-sm'>
              <img src={productData.images[currentImage]} alt={productData.name} className='w-full h-full object-cover' />
              {discount > 0 && <div className='absolute top-6 left-6 bg-red-600 text-white text-[11px] font-black px-3 py-1.5 rounded shadow-lg'>-{discount}%</div>}
            </div>
            <div className='flex gap-3 overflow-x-auto pb-4 scrollbar-hide'>
              {(productData.images || []).map((img, i) => (
                <img key={i} onClick={() => setCurrentImage(i)} src={img} className={`w-24 h-24 object-cover cursor-pointer rounded-lg border-2 transition-all ${currentImage === i ? 'border-stone-900 scale-105' : 'border-transparent opacity-40'}`} />
              ))}
            </div>
          </div>

          {/* Product Details & Selection */}
          <div className='flex flex-col'>
            <div className='mb-8 border-b border-stone-100 pb-8'>
              {/* Dynamic Header: Removes "RASHI / 500TC" and shows "Zodiac Sign : [Alignment]" */}
              <span className='text-[10px] uppercase font-black tracking-[0.5em] text-stone-400 block mb-2'>
                {productData.category === 'Celestial Rashi' || productData.category === 'Rashi'
                  ? `Zodiac Sign : ${productData.rashi}` 
                  : `${productData.category} : ${selectedTC}`}
              </span>
              
              <h1 className='text-3xl font-serif text-stone-900 mb-4'>{productData.name}</h1>
              
              <div className='flex items-baseline gap-4'>
                  <p className='text-3xl font-light text-stone-900'>{currency}{displayPrice.toLocaleString()}</p>
                  {displayMRP > displayPrice && <p className='text-lg text-stone-300 line-through font-light'>{currency}{displayMRP.toLocaleString()}</p>}
              </div>
            </div>

            <div className='mb-10'>
              <p className='text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4'>Dimension: <span className='text-stone-900 font-black'>{size}</span></p>
              <div className='grid grid-cols-4 gap-2'>
                {['SINGLE', 'DOUBLE', 'QUEEN', 'KING'].map(s => (
                  <button key={s} onClick={() => setSize(s)} className={`py-3 text-[10px] font-bold border transition-all ${size === s ? 'bg-stone-900 border-stone-900 text-white shadow-md' : 'bg-white text-stone-400 border-stone-100 hover:border-stone-400'}`}>{s}</button>
                ))}
              </div>
            </div>

            <button onClick={() => { addToCart(productData._id, `${selectedTC}-${size}-${selectedColor}`, quantity); toast.success("Added to Bag"); }} className='bg-stone-900 text-white font-bold uppercase text-[11px] py-5 tracking-[0.3em] shadow-xl hover:bg-black transition-all mb-12'>Add to bag</button>

            <div className='grid grid-cols-4 gap-4 py-8 border-y border-stone-50 text-center'>
                <div className='flex flex-col items-center gap-2'><FaWind className='text-stone-300' size={18} /><span className='text-[8px] uppercase font-bold tracking-widest'>Breathable</span></div>
                <div className='flex flex-col items-center gap-2'><FaLeaf className='text-stone-300' size={18} /><span className='text-[8px] uppercase font-bold tracking-widest'>Organic</span></div>
                <div className='flex flex-col items-center gap-2'><FaGem className='text-stone-300' size={18} /><span className='text-[8px] uppercase font-bold tracking-widest'>Premium</span></div>
                <div className='flex flex-col items-center gap-2'><FaHandSparkles className='text-stone-300' size={18} /><span className='text-[8px] uppercase font-bold tracking-widest'>Artisan</span></div>
            </div>
          </div>
        </div>

        {/* Symmetric Heritage Section with Split Reveal Toggle */}
        <div className='mt-24 pt-16 border-t border-stone-100'>
          <div className='flex justify-center gap-16 border-b border-stone-50 mb-12'>
            <button onClick={() => setActiveTab('description')} className={`pb-4 text-[12px] font-black uppercase tracking-[0.3em] transition-all ${activeTab === 'description' ? 'text-stone-900 border-b-2 border-stone-900' : 'text-stone-300 hover:text-stone-500'}`}>The Heritage</button>
            <button onClick={() => setActiveTab('specs')} className={`pb-4 text-[12px] font-black uppercase tracking-[0.3em] transition-all ${activeTab === 'specs' ? 'text-stone-900 border-b-2 border-stone-900' : 'text-stone-300 hover:text-stone-500'}`}>Care & Specs</button>
          </div>
          
          <div className='py-4'>
            {activeTab === 'description' ? (
              <div className='flex flex-col items-center w-full'>
                {/* Upper Pair (Visible) */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-10'>
                  <div className='heritage-block'>
                    <h4>{heritageBlocks[0].title}</h4>
                    <p>{heritageBlocks[0].content}</p>
                  </div>
                  <div className='heritage-block'>
                    <h4>{heritageBlocks[1].title}</h4>
                    <p>{heritageBlocks[1].content}</p>
                  </div>
                </div>

                {/* Symmetric Show More Toggle Button */}
                <div className='z-10 flex justify-center w-full -my-4 relative'>
                  <button 
                    onClick={() => setShowFullDescription(!showFullDescription)} 
                    className='flex items-center gap-3 bg-stone-50 text-stone-900 px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest border border-stone-200 hover:bg-stone-900 hover:text-white transition-all shadow-md cursor-pointer'
                  >
                    {showFullDescription ? (<>CONCEAL HERITAGE <FaChevronUp /></>) : (<>REVEAL HERITAGE <FaChevronDown /></>)}
                  </button>
                </div>

                {/* Lower Pair (Conditionally Revealed) */}
                <div className={`reveal-container grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-10 ${showFullDescription ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className='heritage-block'>
                    <h4>{heritageBlocks[2].title}</h4>
                    <p>{heritageBlocks[2].content}</p>
                  </div>
                  <div className='heritage-block'>
                    <h4>{heritageBlocks[3].title}</h4>
                    <p>{heritageBlocks[3].content}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className='max-w-2xl mx-auto'>
                <ul className='space-y-6 uppercase text-[11px] font-black tracking-[0.2em]'>
                  <li className='flex justify-between border-b border-stone-50 pb-4'><span>Thread Count</span> <span className='text-stone-900'>{selectedTC} Cotton</span></li>
                  <li className='flex justify-between border-b border-stone-50 pb-4'><span>Product Class</span> <span className='text-stone-900'>{productData.subCategory}</span></li>
                  <li className='flex justify-between border-b border-stone-50 pb-4'><span>Alignment</span> <span className='text-stone-900'>{productData.rashi || "Standard"}</span></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Curated Pairing Suggestions */}
        {relatedProducts.length > 0 && (
          <div className='mt-32 pt-16 border-t border-stone-100'>
            <div className='flex flex-col items-center mb-12 text-center'>
              <p className='text-[10px] uppercase font-black tracking-[0.5em] text-stone-300 mb-3'>Explore More Heritage</p>
              <h2 className='text-3xl font-serif italic text-stone-800'>Curated Pairings</h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
              {relatedProducts.map((item, index) => (
                <Link key={index} to={`/product/${item._id}`} onClick={() => window.scrollTo(0,0)} className="group block text-center">
                  <div className='relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-50 mb-4 transition-all duration-500 group-hover:shadow-lg'>
                    <img src={item.images[0]} className='w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110' alt={item.name} />
                  </div>
                  <h3 className='text-[10px] font-bold text-stone-800 truncate mb-1 leading-tight px-1'>{item.name}</h3>
                  <p className='text-[11px] font-black text-stone-900'>{currency}{item.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;