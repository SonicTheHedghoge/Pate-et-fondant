import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out px-6 md:px-12
        ${isScrolled 
          ? 'py-4 glass-panel shadow-sm text-text-main' 
          : 'py-8 bg-transparent text-white'
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left: Menu Links */}
        <div className="hidden md:flex space-x-8 text-xs tracking-[0.2em] font-medium uppercase">
          <a href="#about" className="hover:text-accent-rose transition-colors duration-300">Histoire</a>
          <a href="#menu" className="hover:text-accent-rose transition-colors duration-300">La Carte</a>
        </div>

        {/* Center: Brand */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center group cursor-pointer">
          <a href="#" className="block">
            <h1 className={`font-display italic text-3xl md:text-4xl transition-colors duration-500 ${isScrolled ? 'text-text-main' : 'text-white'}`}>
              Pâte <span className="text-accent-gold">&</span> Fondant
            </h1>
            <span className={`block text-[10px] tracking-[0.4em] uppercase mt-1 transition-colors duration-500 group-hover:tracking-[0.6em] ${isScrolled ? 'text-accent-rose' : 'text-white/80'}`}>
              Djerba
            </span>
          </a>
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center space-x-8">
           <a href="#contact" className="text-xs tracking-[0.2em] font-medium uppercase hover:text-accent-rose transition-colors duration-300">
             Contact
           </a>
           <a 
            href={`tel:${CONTACT_INFO.phone}`}
            className={`border px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-accent-gold hover:border-accent-gold hover:text-white
              ${isScrolled ? 'border-text-main text-text-main' : 'border-white text-white'}`}
           >
             Réserver
           </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 transition-colors ${isMobileMenuOpen ? 'text-text-main' : (isScrolled ? 'text-text-main' : 'text-white')}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      <div className={`fixed inset-0 bg-[#FDFAF7] z-40 flex flex-col items-center justify-center transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col space-y-8 text-center">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-4xl text-text-main hover:text-accent-rose italic">Histoire</a>
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-4xl text-text-main hover:text-accent-rose italic">La Carte</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-4xl text-text-main hover:text-accent-rose italic">Avis</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-4xl text-text-main hover:text-accent-rose italic">Contact</a>
        </div>
        <div className="absolute bottom-12 text-text-light text-sm tracking-widest flex flex-col items-center gap-4">
           <span>{CONTACT_INFO.phone}</span>
           <Instagram size={20} className="text-accent-rose" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
