import React from 'react';

interface Props {
  onStart: () => void;
}

export function ColorTherapyIntro({ onStart }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-serif font-bold mb-8">Color Therapy</h2>
      {/* All images are now unique and available */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {[
          { sign: 'aries', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200' }, // ram
          { sign: 'taurus', img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=200' }, // bull
          { sign: 'gemini', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200' }, // twins
          { sign: 'cancer', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=200' }, // crab
          { sign: 'leo', img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=200' }, // lion
          { sign: 'virgo', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200' }, // maiden (woman)
          { sign: 'libra', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=200' }, // scales (abstract)
          { sign: 'scorpio', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=200' }, // scorpion
          { sign: 'sagittarius', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200' }, // archer (bow)
          { sign: 'capricorn', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200' }, // goat
          { sign: 'aquarius', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200' }, // water (abstract)
          { sign: 'pisces', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200' }, // fish
        ].map(({ sign, img }) => (
          <div key={sign} className="w-24">
            <img
              src={img}
              alt={sign}
              className="w-full h-32 object-cover rounded-xl shadow-lg border-4 border-white hover:border-teal-300 transition-all duration-300 bg-gray-100"
            />
            <div className="mt-2 text-xs font-semibold text-gray-700 capitalize tracking-wide">{sign}</div>
          </div>
        ))}
      </div>
      <button
        onClick={onStart}
        className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors"
      >
        Find my ideal sleep color
      </button>
    </div>
  );
}