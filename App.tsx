import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuGrid from './components/MenuGrid';
import ContactFooter from './components/ContactFooter';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFAF7] selection:bg-accent-rose selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <MenuGrid />
      
      {/* Testimonials Section (Inline for visual flow) */}
      <div id="testimonials" className="py-32 bg-secondary relative">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <span className="text-6xl text-accent-gold font-display opacity-30">"</span>
           <h3 className="text-3xl md:text-5xl font-display leading-tight text-text-main mb-8 -mt-8">
             Absolutely the best pastry experience in Djerba. The atmosphere is calm and the staff is wonderful.
           </h3>
           <div className="flex flex-col items-center gap-2">
             <div className="w-12 h-1 bg-accent-rose/50 mb-2"></div>
             <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-text-light">Sarra Ben Ali</p>
             <p className="font-display italic text-text-light/70">Loyal Customer</p>
           </div>
        </div>
      </div>

      <ContactFooter />
      <ChatWidget />
    </div>
  );
};

export default App;
