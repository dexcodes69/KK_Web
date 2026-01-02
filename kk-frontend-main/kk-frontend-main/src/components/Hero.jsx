import React from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../assets/video.mp4';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopNow = () => {
    navigate('/collection');
  };

  return (
    <div className='relative w-full overflow-hidden'>
    

      {/* Video Section */}
      <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute top-0 left-0 w-full h-full object-cover'
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='absolute inset-0 bg-black bg-opacity-30'></div>
      </div>
      
      {/* Bottom Left - Our Bestsellers */}
      <div className='absolute bottom-8 left-8 z-10'>
        <div 
          className='flex items-center gap-2 cursor-pointer group'
          onClick={() => scrollToSection('bestsellers')}
        >
          <p className='w-8 md:w-11 h-[1px] bg-white group-hover:w-12 transition-all duration-300'></p>
          <p className='font-medium text-sm md:text-base text-white group-hover:scale-105 transform transition-transform duration-300'>
            OUR BESTSELLERS
          </p>
        </div>
      </div>

      {/* Center - Title */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4'>
        <h1 
          className='prata-regular text-4xl sm:text-5xl lg:text-7xl leading-tight cursor-pointer text-white'
          onClick={() => scrollToSection('latest-arrivals')}
        >
          Latest Arrivals
        </h1>
      </div>

      {/* Bottom Right - Shop Now */}
      <div className='absolute bottom-8 right-8 z-10'>
        <div 
          className='flex items-center gap-2 cursor-pointer group'
          onClick={handleShopNow}
        >
          <p className='font-semibold text-sm md:text-base uppercase tracking-wider text-white group-hover:scale-110 transform transition-transform duration-300'>
            SHOP NOW
          </p>
          <p className='w-8 md:w-11 h-[1px] bg-white group-hover:w-12 transition-all duration-300'></p>
        </div>
      </div>
    </div>
  )
}

export default Hero
