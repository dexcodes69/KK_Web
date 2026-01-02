import React from 'react';

export function VideoSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Experience the Comfort
        </h2>
        <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://drive.google.com/file/d/1G_AI-goN3e6lN4_zGaHMXqej5Hb2py4C/preview"
            allow="autoplay"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
