import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-primary relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/50 -z-0 skew-x-12 transform origin-top-right translate-x-32"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Editorial Image Composition */}
          <div className="w-full lg:w-1/2 relative h-[600px]">
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-4/5 h-4/5 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop" 
                alt="Bakery Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
              />
            </div>
            {/* Overlay Image */}
            <div className="absolute bottom-0 right-8 w-3/5 h-3/5 overflow-hidden shadow-2xl border-8 border-primary">
              <img 
                src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2670&auto=format&fit=crop" 
                alt="Pastry Chef" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
              />
            </div>
            {/* Decorative Gold Box */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent-gold/40 -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 pl-0 lg:pl-10">
            <h2 className="font-display text-5xl md:text-6xl text-text-main leading-none">
              <span className="block text-2xl font-sans font-light tracking-[0.3em] uppercase text-accent-rose mb-4">Notre Histoire</span>
              Un Lieu de <br/>
              <span className="italic text-accent-gold">Délice & Poésie</span>
            </h2>
            
            <div className="space-y-6 text-text-light font-light leading-loose text-lg">
              <p>
                Nestled in the vibrant heart of <span className="text-text-main font-medium">Houmet Souk</span>, Pâte & Fondant is a sanctuary where time slows down. We believe that pastry is not just food, but an emotion—a delicate balance of crunch and cream, tradition and innovation.
              </p>
              <p>
                Our chefs blend the finest local Tunisian ingredients with French culinary precision. Whether it's the morning aroma of fresh butter croissants or the rich indulgence of our signature fondant, every bite is a love letter to the art of baking.
              </p>
            </div>

            <div className="pt-8">
               <div className="inline-flex items-center gap-4 px-8 py-4 bg-white shadow-lg border border-gray-100 rounded-full">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                 </span>
                 <div>
                   <p className="font-display text-xl italic text-text-main">Actuellement ouvert</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
