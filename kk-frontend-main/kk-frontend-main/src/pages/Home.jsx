import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// In Home.jsx, adjust the import line:
import { ArrowRight, Star, ArrowUpRight, Play, CheckCircle2, Trophy, Crown, Sparkles, StarHalf, Layers, Palette, Truck } from 'lucide-react' // Added Palette and Truck
import Grey2Jpg from "../assets/grey2.jpg";
// Existing Components
import BestSeller from '../components/BestSeller'
import NewsletterBox from '../components/NewsletterBox'

const reviews = [
  { name: "Priya Sharma", rating: 5, text: "Finally found sheets that actually fit my deep mattress. The cotton feels incredible." },
  { name: "Rahul Verma", rating: 4, text: "Quality is top-notch, exactly like a hotel. Shipping took a day longer than expected though." },
  { name: "Ananya K.", rating: 5, text: "The Bed Builder is a game changer. I mixed the grey sheets with navy pillows and it looks stunning." },
  { name: "Vikram Singh", rating: 4.5, text: "Bit expensive, but honestly worth it for the sleep quality. Very breathable fabric." },
  { name: "Sneha D.", rating: 5, text: "Was skeptical about buying bedding online, but the 'Color Therapy' guide really helped. Loved it." },
  { name: "Arjun Mehta", rating: 5, text: "Packaging was premium. Feels like a luxury gift to myself." },
  { name: "Meera R.", rating: 4, text: "Softest linen I've tried in India. Would love more bright color options." },
]

const Home = () => {
  const [activeQuizOption, setActiveQuizOption] = useState(null);

  return (
    <div className="font-sans text-gray-900 bg-white overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 bg-gray-900">
           <img 
             src="Hero section bed.png" 
             alt="Luxury Bedding" 
             className="w-full h-full object-cover opacity-80 animate-slow-zoom"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 pb-12">
          <div className="animate-fade-in-up max-w-5xl flex flex-col items-center">
            
            <span className="inline-flex items-center gap-2 px-5 py-2 mb-6 border border-white/30 rounded-full text-white/90 text-sm tracking-[0.2em] uppercase backdrop-blur-md">
              <Crown size={14} className="text-yellow-400" /> New Collection 2025
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-[0.95] mb-8 drop-shadow-2xl">
              Sleep Like <br/> <span className="italic font-light opacity-90 text-purple-200">Royalty.</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
              Engineered with organic cotton and ethically sourced linen for the deepest sleep of your life.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              <Link to="/collection" className="group relative px-12 py-5 bg-white text-black font-bold rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.7)] transition-all transform hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-3 text-lg tracking-wide uppercase">
                  Shop Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </span>
                <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* --- 2. INFINITE SCROLL STRIP --- */}
      <div className="bg-black text-white py-6 overflow-hidden border-y border-white/10 z-20 relative">
        <div className="inline-flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
             <span key={i} className="mx-8 text-sm md:text-base font-bold tracking-[0.2em] uppercase flex items-center gap-4 text-white/80">
               <Star size={16} className="text-yellow-500 fill-yellow-500" /> Hotel Grade Cotton 
               <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> 
               Free Express Shipping 
               <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> 
             </span>
          ))}
        </div>
      </div>


     

    
      {/* --- 3. BENTO GRID (UPDATED LINKS) --- */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-4 flex items-center justify-center gap-2">
             <Sparkles size={16}/> Premium Essentials
           </h3>
           <h2 className="text-5xl md:text-6xl font-serif leading-tight text-black">
             The Luxury Collection
           </h2>
        </div>

        {/* --- 2x2 GRID STRUCTURE --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 h-auto md:h-[100vh]">
          
          {/* TOP LEFT: Complete Sets */}
          <Link to="/collection?category=complete-sets" className="group md:col-span-6 relative overflow-hidden rounded-[2rem] bg-gray-100 h-[45vh] md:h-full cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
            <img src= {Grey2Jpg}
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Luxury Sets" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            
            <div className="absolute bottom-10 left-10 text-white z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase mb-4 inline-block border border-white/20">Most Popular</span>
               <h3 className="text-4xl md:text-6xl font-serif mb-2">Complete Sets</h3>
               <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md text-lg">Curated perfection. Everything you need for the perfect night's sleep.</p>
            </div>
            
            <div className="absolute top-10 right-10 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform rotate-45 group-hover:rotate-0">
               <ArrowUpRight size={24}/>
            </div>
          </Link>

          {/* TOP RIGHT: Fitted Sheets */}
          <Link to="/collection?category=fitted-sheets" className="group md:col-span-6 relative overflow-hidden rounded-[2rem] bg-gray-100 h-[45vh] md:h-full shadow-sm hover:shadow-xl transition-all duration-500">
             <img src="download.png" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" alt="Sheets" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
             <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-4xl md:text-6xl font-serif mb-2" >Fitted Sheets</h3>
                <p className="text-white/80 text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Deep pockets. Perfect grip.</p>
             </div>
             <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <Layers size={18}/>
             </div>
             
          </Link>

          {/* BOTTOM LEFT: Crisp Flat Sheets */}
          <Link to="/collection?category=flat-sheets" className="group md:col-span-6 relative overflow-hidden rounded-[2rem] bg-gray-100 h-[45vh] md:h-full shadow-sm hover:shadow-xl transition-all duration-500">
             <img src="download (1).png" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-1" alt="Flat Sheets" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
             <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-4xl md:text-6xl font-serif mb-2">Crisp Flat Sheets</h3>
                <p className="text-white/80 text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">The hotel tuck feeling.</p>
             </div>
             <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <Layers size={18}/>
             </div>
          </Link>
          
          {/* BOTTOM RIGHT: Duvet Covers (NEW) */}
          <Link to="/collection?category=duvet-covers" className="group md:col-span-6 relative overflow-hidden rounded-[2rem] bg-gray-900 h-[45vh] md:h-full shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
                 src="download3.png" // Using the generic placeholder image
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
                 alt="Duvet Cover" 
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
             <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-4xl md:text-6xl font-serif mb-2">Duvet Covers</h3>
                <p className="text-white/80 text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Fluffy comfort, tailored fit.</p>
             </div>
             <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <Layers size={18}/>
             </div>
          </Link>
        </div>
      </section>

      {/* --- 4. THE BED BUILDER (MOBILE STACKING FIX) --- */}
      <section className="py-28 bg-[#F5F5F7] text-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* FIX: flex-col-reverse on mobile for Video -> Text stacking */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col-reverse lg:flex-row items-center gap-16 border border-gray-100">
            
            {/* Left Content (2. Text/Button on Mobile) */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest mb-2">
                <Trophy size={14} className="text-yellow-400"/> Interactive Studio
              </div>
              <h2 className="text-4xl md:text-6xl font-serif leading-[1.1]">
                Design Your <br/>
                <span className="text-gray-500 italic">Sanctuary.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Stop guessing how colors will look together. Use our 3D Studio to mix textures, swap shades, and visualize your perfect setup instantly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link to="/bed-builder" className="px-10 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg transform hover:-translate-y-1 text-center">
                  Start Designing
                </Link>
                {/* REMOVED THE SECOND BUTTON */}
              </div>
            </div>
            
            {/* Right Side: Video Placeholder (1. Video on Mobile) */}
            {/* FIX: Aspect-square for mobile sizing and larger rounding */}
            <div className="lg:w-1/2 relative w-full aspect-square md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-900 mx-auto mb-10 lg:mb-0">
               <video 
                 className="w-full h-full object-cover" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 poster="Bed Builder.mp4"
               >
                 <source src="/Bed Builder.mp4" type="video/mp4" /> 
                 Your browser does not support the video tag.
               </video>
               
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg border border-white/50">
                 <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Live Preview</p>
                 <p className="font-serif text-lg text-black">Your Custom Mix</p>
               </div>
            </div>

          </div>
        </div>
      </section>

    


      {/* --- 6. BEST SELLERS (Shifted from 5) --- */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif">The Favorites</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Chosen by 10,000+ Dreamers</p>
          </div>
          
          <BestSeller />
          
          <div className="flex justify-center mt-16">
              <Link to="/collection" className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-white transition-all duration-200 bg-gray-900 font-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-black hover:scale-105">
                View All Products <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
          </div>
      </section>
  {/* --- 5. COLOR THERAPY SECTION (NEW) --- */}
     <section className="py-24 bg-white text-gray-900">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* BACKGROUND/COLOR CHANGE HERE */}
          <div className="bg-[#F4F1EA] p-8 md:p-16 rounded-[2.5rem] shadow-xl flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600 text-white text-xs font-bold uppercase tracking-widest mb-2">
                <Palette size={14}/> Wellness Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Find Your Perfect <br/>
                <span className="text-purple-700 italic">Sleep Hue.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Colors deeply impact mood and rest. Explore our Color Therapy guide to select shades proven to enhance relaxation and promote deeper, healthier sleep.
              </p>
              
              <div className="pt-4">
                <Link to="/color-therapy" className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-black font-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-gray-800 hover:scale-105">
                  Explore Color Therapy <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Side: Visual Placeholder */}
            <div className="lg:w-1/2 relative w-full aspect-square max-w-md rounded-3xl overflow-hidden">
               <img 
                  src="astro.png" // Use the generated image or a new asset
                  alt="Color palette guide for bedding" 
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
          </div>
        </div>
      </section>
      {/* --- 7. REALISTIC REVIEWS (Shifted from 6) --- */}
      <section className="py-20 bg-[#F9F9F9] border-t border-gray-100 overflow-hidden">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-serif">Real Stories</h2>
            <div className="flex items-center justify-center gap-1 mt-2">
               <Star size={20} className="fill-black text-black"/>
               <Star size={20} className="fill-black text-black"/>
               <Star size={20} className="fill-black text-black"/>
               <Star size={20} className="fill-black text-black"/>
               <StarHalf size={20} className="fill-black text-black"/>
               <span className="text-sm font-bold ml-2">(4.8/5)</span>
            </div>
         </div>

         <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F9F9F9] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F9F9F9] to-transparent z-10"></div>

            <div className="flex animate-marquee-slow gap-6 w-max pl-6">
               {[...reviews, ...reviews].map((review, i) => (
                  <div key={i} className="w-[350px] md:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex-shrink-0">
                     <div className="flex gap-1 mb-4 text-yellow-500">
                        {[...Array(Math.floor(review.rating))].map((_, starI) => (
                           <Star key={starI} size={16} className="fill-current"/>
                        ))}
                        {review.rating % 1 !== 0 && <StarHalf size={16} className="fill-current"/>}
                     </div>
                     <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{review.text}"</p>
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                           {review.name.charAt(0)}
                        </div>
                        <div>
                           <p className="font-bold text-sm">{review.name}</p>
                           <p className="text-xs text-gray-400 flex items-center gap-1"><CheckCircle2 size={10}/> Verified Buyer</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 8. NEWSLETTER (Shifted from 7) --- */}
      <div className="bg-white pt-10">
        <NewsletterBox />
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 60s linear infinite;
        }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  )
}

export default Home