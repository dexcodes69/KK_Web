// Create a new file: src/components/IconWithLabel.jsx (or similar path)

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Note: This component is generic and handles any icon/link combination.

const IconWithLabel = ({ icon: IconComponent, label, to, onClick, count = null }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Determine the base element (Link or div/img)
    const BaseElement = to ? Link : 'div';
    
    // Function to handle the click and prevent default link behavior if a custom onClick is provided
    const handleClick = (e) => {
        if (onClick) {
            // Only prevent link navigation if a custom action is provided
            if (to && onClick) {
                e.preventDefault(); 
            }
            onClick();
        }
    };

    return (
        <BaseElement
            to={to || '#'}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative cursor-pointer flex items-center h-5" // h-5 matches icon size
            // This container holds the icon and the tooltip (label)
        >
            {/* 1. Icon Component (e.g., Truck, Profile, Cart) */}
            <div className="relative">
                {/* The icon itself gets the primary hover effect */}
                <IconComponent 
                    className={`
                        w-5 min-w-5 text-gray-700 transition-transform duration-300 ease-out 
                        ${isHovered ? 'scale-110 text-black' : 'scale-100'}
                    `} 
                    style={{ 
                        // If the icon is an image (like search/profile), use its source
                        backgroundImage: IconComponent.src ? `url(${IconComponent.src})` : 'none',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                />
                
                {/* Cart Count Badge (Only visible if count is passed) */}
                {count !== null && (
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{count}</p>
                )}
            </div>

            {/* 2. Text Label (Tooltip with Zoom/Opacity Animation) */}
            <div
                className={`
                    absolute top-full mt-3 px-3 py-1 bg-black text-white rounded-md shadow-xl whitespace-nowrap 
                    transform origin-top-left pointer-events-none transition-all duration-300 ease-out
                `}
                style={{
                    // Position the tooltip centered below the icon
                    left: '50%',
                    transform: `translate(-50%, ${isHovered ? '0' : '5px'}) scale(${isHovered ? '1' : '0.8'})`,
                    opacity: isHovered ? '1' : '0',
                    zIndex: 9999, // Ensure it's on top of everything
                }}
            >
                <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
            </div>
        </BaseElement>
    );
};

export default IconWithLabel;