import React, { useState } from 'react';

interface Props {
  sign: string;
  onSubmit: (data: any) => void;
}

export function QuizForm({ sign, onSubmit }: Props) {
  const [formData, setFormData] = useState({
    email: '',
    preference: '',
    bedtime: '',
    wakeTime: '',
    important: '',
    gender: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex gap-6 mb-8">
        {(() => {
          const signImages: Record<string, string> = {
            aries: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200',
            taurus: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=200',
            gemini: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200',
            cancer: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=200',
            leo: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=200',
            virgo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200',
            libra: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=200',
            scorpio: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=200',
            sagittarius: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200',
            capricorn: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200',
            aquarius: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200',
            pisces: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200',
          };
          const imgUrl = signImages[sign.toLowerCase()] || signImages['aries'];
          return (
            <img
              src={imgUrl}
              alt={sign}
              className="w-32 h-32 object-cover rounded-lg bg-gray-100"
            />
          );
        })()}

        <div>
          <h2 className="text-2xl font-bold mb-2">
            Tell us where to email your results, {sign}!
          </h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="preference" className="block text-sm font-medium text-gray-700 mb-1">
            Do you prefer a warm or cold sleeping environment?
          </label>
          <select
            id="preference"
            name="preference"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            value={formData.preference}
            onChange={handleChange}
          >
            <option value="">Select preference</option>
            <option value="warm">Warm</option>
            <option value="cold">Cold</option>
          </select>
        </div>

        <div>
          <label htmlFor="bedtime" className="block text-sm font-medium text-gray-700 mb-1">
            In general, what time do you go to bed?
          </label>
          <input
            type="time"
            id="bedtime"
            name="bedtime"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            value={formData.bedtime}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="wakeTime" className="block text-sm font-medium text-gray-700 mb-1">
            In general, what time do you wake up?
          </label>
          <input
            type="time"
            id="wakeTime"
            name="wakeTime"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            value={formData.wakeTime}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="important" className="block text-sm font-medium text-gray-700 mb-1">
            What's important to you when picking sheets?
          </label>
          <textarea
            id="important"
            name="important"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            rows={4}
            value={formData.important}
            onChange={handleChange}
            placeholder="Price, comfort, looks, better sleep, etc"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Get My Results
        </button>
      </form>
    </div>
  );
}