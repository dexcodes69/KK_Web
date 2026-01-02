import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import newLogo from '../assets/new.png'
import { Link, NavLink } from 'react-router-dom'
import { X, Truck } from 'lucide-react' 
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    // RESTORED: setShowSearch is extracted from ShopContext to toggle search visibility
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    // --- Utility Icon Component ---
    const IconWithHoverLabel = ({ icon: IconComponent, label, to, onClick, count = null, isImage = false }) => (
        <Link 
            to={to || '#'} 
            onClick={onClick}
            className="group relative cursor-pointer flex items-center h-5"
        >
            <div className="relative">
                {isImage ? (
                    <img src={IconComponent} className='w-5 transition-transform duration-200 group-hover:scale-110' alt={label} />
                ) : (
                    <IconComponent className='w-5 min-w-5 text-gray-700 transition-transform duration-200 group-hover:scale-110 group-hover:text-black' />
                )}
                
                {/* Cart Count Badge */}
                {count !== null && count > 0 && (
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{count}</p>
                )}
            </div>

            {/* Text Label (Tooltip) */}
            <span 
                className="absolute top-full mt-2 px-2 py-0.5 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 left-1/2 pointer-events-none whitespace-nowrap"
                style={{ zIndex: 9999 }}
            >
                {label}
            </span>
        </Link>
    );


    return (
        <div className='fixed top-0 left-0 right-0 bg-white z-[1000] shadow-sm'>
            <div className='max-w-[2000px] mx-auto px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
                <div className='flex items-center justify-between py-4 font-medium'>
                    <Link to='/' className='flex items-center'>
                        <img src={newLogo} alt="Logo" className='h-10 w-auto' />
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <ul className='hidden sm:flex gap-6 text-sm text-gray-700'>
                        {['HOME', 'COLLECTION', 'BED-BUILDER', 'COLOR THERAPY', 'BLOG', 'ABOUT', 'CONTACT'].map((item) => (
                            <NavLink 
                                key={item}
                                to={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                                className={({ isActive }) => `relative py-2 px-1 transition-all duration-300 ${isActive ? 'text-black font-medium' : 'hover:text-black'}`}
                            >
                                <span className='relative'>{item}</span>
                            </NavLink>
                        ))}
                    </ul>
           
                    {/* UTILITY ICONS BAR */}
                    <div className='flex items-center gap-6'>

                        {/* RESTORED: Search Icon triggers search mode and navigates to the collection page */}
                        <IconWithHoverLabel
                            icon={assets.search_icon}
                            label="Search"
                            onClick={() => { setShowSearch(true); navigate('/collection') }}
                            isImage={true}
                        />
                        
                        {/* Track Shipment Icon */}
                        <IconWithHoverLabel
                            icon={Truck}
                            label="Track Shipment"
                            to="/track-order"
                        />

                        {/* Cart Icon */}
                        <IconWithHoverLabel
                            icon={assets.cart_icon}
                            label="View Cart"
                            count={getCartCount()}
                            to="/cart"
                            isImage={true}
                        />
                        
                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setVisible(!visible)} 
                            className='w-5 cursor-pointer sm:hidden focus:outline-none'
                        >
                            {visible ? <X className="w-5 h-5" /> : <img src={assets.menu_icon} className='w-5' alt="Menu" />}
                        </button>
                    </div>

                    {/* Dropdown menu for mobile */}
                    {visible && (
                        <div className='absolute top-full right-4 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-[1001] border border-gray-200'>
                            {['HOME', 'COLLECTION', 'BED-BUILDER', 'COLOR THERAPY', 'BLOG', 'ABOUT', 'CONTACT'].map((item) => (
                                <NavLink 
                                    key={item}
                                    to={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                    onClick={() => setVisible(false)}
                                >
                                    {item}
                                </NavLink>
                            ))}
                            <NavLink 
                                to='/track-order' 
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t mt-1 pt-2 font-bold'
                                onClick={() => setVisible(false)}
                            >
                                TRACK ORDER
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;