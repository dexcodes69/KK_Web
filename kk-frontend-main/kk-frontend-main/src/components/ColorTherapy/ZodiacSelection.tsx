import React from 'react';

interface Props {
  onSelect: (sign: string) => void;
}

const zodiacSigns = [
  { name: 'Aries', date: 'Mar 21 - Apr 19', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200' }, // ram
  { name: 'Taurus', date: 'Apr 20 - May 20', img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=200' }, // bull
  { name: 'Gemini', date: 'May 21 - June 20', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200' }, // twins
  { name: 'Cancer', date: 'June 21 - July 22', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=200' }, // crab
  { name: 'Leo', date: 'July 23 - Aug 22', img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=200' }, // lion
  { name: 'Virgo', date: 'Aug 23 - Sep 22', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200' }, // maiden (woman)
  { name: 'Libra', date: 'Sep 23 - Oct 23', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=200' }, // scales (abstract)
  { name: 'Scorpio', date: 'Oct 24 - Nov 21', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=200' }, // scorpion
  { name: 'Sagittarius', date: 'Nov 22 - Dec 21', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200' }, // archer (bow)
  { name: 'Capricorn', date: 'Dec 22 - Jan 19', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200' }, // goat
  { name: 'Aquarius', date: 'Jan 20 - Feb 18', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200' }, // water (abstract)
  { name: 'Pisces', date: 'Feb 19 - Mar 20', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200' }, // fish
];

export function ZodiacSelection({ onSelect }: Props) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-6">
        Take our color therapy quiz and
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Find out your ideal sleep colors.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {zodiacSigns.map((sign) => (
          <button
            key={sign.name}
            onClick={() => onSelect(sign.name)}
            className="group p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={sign.img}
              alt={sign.name}
              className="w-full aspect-square object-cover rounded-xl mb-4 border-4 border-white group-hover:border-teal-400 shadow-lg group-hover:scale-105 transition-all duration-300 bg-gray-100"
            />
            <h3 className="font-medium text-lg">{sign.name}</h3>
            <p className="text-sm text-gray-600">{sign.date}</p>
          </button>
        ))}
      </div>
    </div>
  );
}