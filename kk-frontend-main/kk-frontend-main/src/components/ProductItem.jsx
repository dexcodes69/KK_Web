import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProductItem = ({ id, image, name, price, oldPrice, category, currency = '₹' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useContext(ShopContext);

  // Calculate discount percentage
  const discount = (oldPrice > price) ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = 'SINGLE'; 
    addToCart(id, defaultSize, 1);
    toast.success('Added to cart!', { position: 'bottom-right' });
  };

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    toast.success(!isWishlisted ? 'Added to wishlist!' : 'Removed from wishlist', { position: 'bottom-right' });
  };

  return (
    <Link 
      to={`/product/${id}`} 
      className='group relative block text-gray-700 no-underline transition-all duration-300 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transform'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className='relative overflow-hidden bg-gray-50 aspect-square shadow-inner'>
        <img 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`} 
          src={Array.isArray(image) ? image[0] : image} 
          alt={name} 
        />
        
        {/* New Discount Badge */}
        {discount > 0 && (
          <div className='absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10'>
            {discount}% OFF
          </div>
        )}

        <button 
          onClick={toggleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full bg-white shadow-lg transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {isWishlisted ? <FaHeart className='text-red-500' /> : <FaRegHeart className='text-gray-600' />}
        </button>

        <div className={`absolute bottom-0 left-0 right-0 bg-black/80 text-white py-2 px-4 transition-all duration-300 transform ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button onClick={handleAddToCart} className='w-full flex items-center justify-center gap-2 text-sm font-medium py-2 hover:bg-white hover:text-black transition-all rounded-md'>
            <FaShoppingCart /> Quick Add
          </button>
        </div>
      </div>

      <div className='p-5'>
        {category && <span className='text-[10px] text-gray-400 uppercase tracking-widest mb-1 block'>{category}</span>}
        <h3 className='font-medium text-gray-900 mb-1 line-clamp-1'>{name}</h3>
        
        <div className='flex items-center gap-2'>
          <p className='text-base font-bold text-stone-900'>{currency}{price}</p>
          {/* New Crossed Price */}
          {oldPrice > price && (
            <p className='text-sm text-gray-400 line-through'>{currency}{oldPrice}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;