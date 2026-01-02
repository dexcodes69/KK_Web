import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, Thermometer, Star, ArrowRight, ArrowLeft, Sparkles, Check, RotateCcw, Mail, Activity } from 'lucide-react';

const ColorTherapy = () => {
  const [step, setStep] = useState('intro');
  const [selectedSign, setSelectedSign] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    preference: '',
    bedtime: '',
    wakeTime: '',
    important: '',
  });

  const navigate = useNavigate();

  const zodiacSigns = [
    { name: 'Aries', date: 'Mar 21 - Apr 19', icon: '♈' },
    { name: 'Taurus', date: 'Apr 20 - May 20', icon: '♉' },
    { name: 'Gemini', date: 'May 21 - Jun 20', icon: '♊' },
    { name: 'Cancer', date: 'Jun 21 - Jul 22', icon: '♋' },
    { name: 'Leo', date: 'Jul 23 - Aug 22', icon: '♌' },
    { name: 'Virgo', date: 'Aug 23 - Sep 22', icon: '♍' },
    { name: 'Libra', date: 'Sep 23 - Oct 22', icon: '♎' },
    { name: 'Scorpio', date: 'Oct 23 - Nov 21', icon: '♏' },
    { name: 'Sagittarius', date: 'Nov 22 - Dec 21', icon: '♐' },
    { name: 'Capricorn', date: 'Dec 22 - Jan 19', icon: '♑' },
    { name: 'Aquarius', date: 'Jan 20 - Feb 18', icon: '♒' },
    { name: 'Pisces', date: 'Feb 19 - Mar 20', icon: '♓' },
  ];

  const handleSignSelect = (sign) => {
    setSelectedSign(sign);
    setStep('form');
    window.scrollTo(0,0);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('results');
    window.scrollTo(0,0);
  };

  // --- 1. INTRO SCREEN (FULL SCREEN HERO) ---
  const renderIntro = () => (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-[#FDFBF7] to-[#F4F1EA] relative overflow-hidden">
      
      {/* Abstract Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-300/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="relative z-10 max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-900/10 bg-white/50 backdrop-blur text-xs font-bold uppercase tracking-widest text-gray-600">
          <Sparkles size={12}/> Wellness Journey
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif text-gray-900 leading-[0.9]">
          Discover Your <br/> <span className="italic text-purple-900/80">Sleep Aura.</span>
        </h1>
        
        <p className="text-gray-500 text-xl leading-relaxed max-w-lg mx-auto font-light">
          Let the stars decide your comfort. Find the hue that harmonizes your circadian rhythm in 30 seconds.
        </p>
        
        <button
          onClick={() => setStep('selection')}
          className="mt-8 bg-black text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-3 mx-auto"
        >
          Begin Therapy <ArrowRight size={18}/>
        </button>
      </div>
    </div>
  );

  // --- 2. ZODIAC SELECTION ---
  const renderSelection = () => (
    <div className="min-h-screen w-full bg-[#FDFBF7] flex flex-col justify-center items-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col items-center mb-16">
          <button onClick={() => setStep('intro')} className="mb-6 flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-black uppercase tracking-widest transition-colors">
            <ArrowLeft size={14}/> Go Back
          </button>
          <h2 className="text-4xl md:text-5xl font-serif text-center">Align With Your Sign</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {zodiacSigns.map((sign) => (
            <button
              key={sign.name}
              onClick={() => handleSignSelect(sign.name)}
              className="group aspect-square bg-white border border-gray-100 rounded-2xl hover:border-purple-200 hover:shadow-xl transition-all flex flex-col items-center justify-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-4xl relative z-10 group-hover:scale-110 transition-transform">{sign.icon}</span>
              <span className="text-sm font-bold text-gray-900 uppercase tracking-wide relative z-10">{sign.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // --- 3. THE FORM (Clean & Centered) ---
  const renderForm = () => (
    <div className="min-h-screen w-full bg-[#FDFBF7] flex justify-center items-center px-4 py-12">
      <div className="w-full max-w-xl">
        
        {/* Progress Header */}
        <div className="flex items-center justify-between mb-8">
           <button onClick={() => setStep('selection')} className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-black uppercase tracking-widest transition-colors">
             <ArrowLeft size={14}/> Change Sign
           </button>
           <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">
             {selectedSign}
           </span>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-serif mb-2">Calibrate Your Sleep</h2>
             <p className="text-gray-500 text-sm">Help us fine-tune your color profile.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Question 1: Temp */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-900 uppercase tracking-widest flex items-center justify-center gap-2">
                <Thermometer size={14} className="text-gray-400"/> Body Temperature
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Hot Sleeper', 'Cold Sleeper', 'Balanced'].map((opt) => (
                   <button 
                     type="button"
                     key={opt}
                     onClick={() => setFormData({...formData, preference: opt})}
                     className={`py-4 px-2 rounded-xl border text-sm font-bold transition-all ${formData.preference === opt ? 'border-black bg-black text-white' : 'border-gray-200 text-gray-600 hover:border-gray-400'}`}
                   >
                     {opt}
                   </button>
                ))}
              </div>
            </div>

            {/* Question 2: Times */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block text-center">Bedtime</label>
                <input type="time" required className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-center font-bold focus:ring-2 focus:ring-black outline-none" onChange={handleChange} name="bedtime"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block text-center">Wake Up</label>
                <input type="time" required className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-center font-bold focus:ring-2 focus:ring-black outline-none" onChange={handleChange} name="wakeTime"/>
              </div>
            </div>

            {/* Question 3: Goal */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-900 uppercase tracking-widest flex items-center justify-center gap-2">
                <Activity size={14} className="text-gray-400"/> Main Goal
              </label>
              <select name="important" required onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-black outline-none text-center cursor-pointer">
                <option value="">Select Priority...</option>
                <option value="deep">Deep Restoration</option>
                <option value="fast">Fall Asleep Faster</option>
                <option value="anxiety">Reduce Stress</option>
              </select>
            </div>

            {/* Email */}
            <div className="pt-4">
               <input
                  type="email"
                  name="email"
                  placeholder="Enter your email for results"
                  required
                  className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-200 text-center font-medium focus:border-black outline-none placeholder:text-gray-300 transition-colors"
                  onChange={handleChange}
                />
            </div>

            <button type="submit" className="w-full bg-black text-white py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl mt-4">
              Reveal My Colors
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // --- 4. RESULTS ---
  const renderResults = () => (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center px-4 bg-white">
      <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 animate-[bounce_1s_infinite]">
        <Check size={40} strokeWidth={3} />
      </div>
      <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">It's a Match.</h2>
      <p className="text-gray-500 text-lg max-w-md mx-auto mb-12 leading-relaxed">
        Your personalized <strong>Chromatherapy Profile</strong> for {selectedSign} has been generated and sent to <span className="text-black font-bold border-b border-black">{formData.email}</span>.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-5">
        <button onClick={() => navigate('/collection')} className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-xl">
          Shop Recommended
        </button>
        <button onClick={() => setStep('intro')} className="px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs border border-gray-200 hover:border-black transition-all">
          Start Over
        </button>
      </div>
    </div>
  );

  return (
    // JAILBREAK STYLE: Forces full screen width regardless of App.jsx padding
    <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }} className="font-sans text-gray-900 bg-white overflow-x-hidden">
      {step === 'intro' && renderIntro()}
      {step === 'selection' && renderSelection()}
      {step === 'form' && renderForm()}
      {step === 'results' && renderResults()}
    </div>
  );
};

export default ColorTherapy;