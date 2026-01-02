import React from 'react';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import { Check, ShieldCheck, Truck, Headset, ArrowRight, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      
      {/* --- 1. CINEMATIC HERO --- */}
      <div className="relative h-[75vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/about-hero.png"
            alt="Luxury Bedding" 
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <span className="text-xs font-bold tracking-[0.3em] text-white/80 uppercase mb-4 border border-white/20 px-4 py-1 rounded-full backdrop-blur-md">Since 2009</span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 drop-shadow-lg">Our Story</h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed">
            Crafting comfort and luxury for your most restful nights.
          </p>
        </div>
      </div>

      {/* --- 2. THE JOURNEY (Editorial Layout) --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: The Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              A Quest for <br/> <span className="italic text-gray-500">Perfect Sleep.</span>
            </h2>
            <div className="h-1 w-20 bg-black"></div>
            
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Founded in 2009, Knight Kavalier was established with a singular mission: to revolutionize the 
                sleep experience by combining unparalleled comfort and luxury. Disappointed by the absence of 
                bedding that offered both exceptional quality and aesthetic elegance at an affordable price, our 
                founders embarked on a quest to create sheets that would transform every bedroom into a 
                sanctuary of tranquility.
              </p>
              <p>
                Knight Kavalier is a premium bedding brand that specializes in providing high-quality, luxurious 
                bedsheets designed to elevate the sleep experience. We focus on producing breathable, soft, and 
                long-lasting bedding that combines luxury and style at an affordable price.
              </p>
            </div>
          </div>

          {/* Right: The Philosophy Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gray-100 rounded-3xl -z-10 rotate-3 transition-transform group-hover:rotate-0"></div>
            <div className="bg-black text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                <Star className="fill-white text-white" size={20}/> Our Philosophy
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                We believe that quality sleep is the foundation of a well-lived life. That's why we've dedicated ourselves to 
                creating bedding that doesn't just look beautiful but feels incredible night after night. Each product is 
                meticulously designed with both aesthetics and comfort in mind.
              </p>

              <ul className="space-y-4 border-t border-white/20 pt-6">
                {[
                  "100% premium cotton with satin finish",
                  "400-thread count for ultimate softness",
                  "Eco-friendly and sustainable production"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-white/90">
                    <Check size={16} className="text-green-400 mt-0.5 shrink-0"/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. WHY CHOOSE US (Minimal Grid) --- */}
      <div className="bg-[#F9F9F9] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">The Kavalier Standard</span>
            <h2 className="text-4xl font-serif mt-3">Why Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gray-50 text-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We meticulously select and vet each product to ensure it meets our stringent quality standards.
                Every piece is crafted with attention to detail and built to last.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gray-50 text-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Hassle-Free Experience</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                With our user-friendly interface and streamlined ordering process, shopping for luxury bedding 
                has never been easier. Fast shipping and easy returns included.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gray-50 text-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                <Headset size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our knowledgeable customer service team is here to help with any questions or concerns. 
                Your satisfaction is our top priority, every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- 4. MISSION STATEMENT (High Contrast) --- */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto relative">
          <div className="bg-black text-white rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative shadow-2xl">
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">Our Mission</h2>
              <div className="w-16 h-1 bg-white mx-auto"></div>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                To transform the ordinary sleep experience into a luxurious and comfortable haven by offering premium, 
                high-quality bedding that seamlessly blends elegance, durability, and affordability. We're committed to 
                helping you create a personal sanctuary where rest and relaxation come naturally.
              </p>
              
              <div className="pt-8">
                <button className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors inline-flex items-center gap-2 group">
                  Shop Our Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16">
        <NewsletterBox />
      </div>
    </div>
  )
}

export default About