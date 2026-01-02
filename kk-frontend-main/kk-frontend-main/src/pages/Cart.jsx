import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, getCartAmount, getMatrixPrice } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          const productData = products.find((p) => p._id === items);
          
          if (productData) {
            // UPDATED: Dynamically fetch the price based on the selected variant (TC-Size)
            const currentVariantPrice = getMatrixPrice(productData, item);
            
            tempData.push({
              _id: items,
              variantId: item, // e.g. "300TC-KING"
              quantity: cartItems[items][item],
              name: productData.name,
              price: currentVariantPrice,
              image: productData.images[0],
              rashi: productData.rashi // Added for celestial visibility
            });
          }
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products])

  return (
    <div className="bg-white min-h-[80vh] pt-10 pb-20 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-stone-900 mb-2 italic">Your Selection</h1>
          <p className="text-stone-400 text-[10px] tracking-[0.3em] uppercase font-bold">
            Knight Kavilier Atelier — {cartData.length} Items
          </p>
        </div>

        {cartData.length === 0 ? (
          <div className="text-center py-20 bg-stone-50 rounded-2xl border border-stone-100">
             <ShoppingBag size={32} className="text-stone-300 mx-auto mb-6" />
             <h2 className="text-xl font-serif text-stone-900 mb-2">Your bag is empty</h2>
             <Link to="/collection" className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-3 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-all">
               Return to Collection <ArrowRight size={14}/>
             </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            <div className="w-full lg:w-2/3 space-y-4">
              {cartData.map((item, index) => {
                  const [tc, size] = item.variantId.split('-');

                  return (
                      <div key={index} className="flex gap-6 p-6 bg-white border border-stone-100 rounded-xl shadow-sm hover:shadow-md transition-all relative group">
                        <div className="w-24 h-32 bg-stone-50 rounded-lg overflow-hidden shrink-0 border border-stone-50">
                          <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-lg font-serif text-stone-900 leading-tight mb-1">{item.name}</h3>
                                {item.rashi && (
                                  <p className="text-[8px] font-black text-stone-400 uppercase tracking-widest mb-2">Zodiac: {item.rashi}</p>
                                )}
                              </div>
                              <p className="text-lg font-light text-stone-900">{currency}{item.price.toLocaleString()}</p>
                            </div>
                            
                            <div className="flex items-center gap-2 mt-1">
                               <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{tc}</span>
                               <span className="text-stone-200">|</span>
                               <span className="text-[10px] font-bold text-stone-900 uppercase tracking-widest">{size}</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-end mt-4">
                             <div className="flex items-center border border-stone-200 rounded">
                                <button 
                                  onClick={() => updateQuantity(item._id, item.variantId, item.quantity - 1)}
                                  className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-black"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus size={12}/>
                                </button>
                                <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item._id, item.variantId, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-black"
                                >
                                  <Plus size={12}/>
                                </button>
                             </div>
                             
                             <button 
                               onClick={() => updateQuantity(item._id, item.variantId, 0)}
                               className="text-stone-300 hover:text-red-500 transition-colors p-2"
                             >
                               <Trash2 size={16}/>
                             </button>
                          </div>
                        </div>
                      </div>
                  )
              })}
            </div>

            <div className="w-full lg:w-1/3 sticky top-24">
              <div className="bg-stone-900 p-8 rounded-2xl text-white shadow-2xl">
                <h2 className="text-xl font-serif mb-8 italic">Atelier Summary</h2>
                
                <div className="space-y-4 text-xs font-bold uppercase tracking-widest text-stone-400">
                   <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-white">{currency}{getCartAmount().toLocaleString()}.00</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-emerald-400">Complimentary</span>
                   </div>
                   <div className="border-t border-stone-800 pt-6 flex justify-between text-lg font-serif text-white italic lowercase">
                      <span className="tracking-normal">Total</span>
                      <span className="tracking-tight">{currency}{getCartAmount().toLocaleString()}.00</span>
                   </div>
                </div>
                
                <button 
                  onClick={() => navigate('/place-order')} 
                  className="w-full bg-white text-stone-900 mt-10 py-4 rounded font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-stone-100 transition-all flex justify-center items-center gap-2"
                >
                  Proceed to Checkout <ArrowRight size={14}/>
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Cart;