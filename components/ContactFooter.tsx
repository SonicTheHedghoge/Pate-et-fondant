import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Instagram, Facebook } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-text-main text-white pt-24 pb-12 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Brand */}
          <div className="max-w-sm">
            <h2 className="font-display italic text-5xl mb-6">
              Pâte <span className="text-accent-gold">&</span> Fondant
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8">
              Experience the harmony of French technique and Djerbian heritage. A culinary destination for the refined palate.
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-text-main transition-all duration-300 group">
                  <Instagram size={20} className="group-hover:scale-110 transition-transform"/>
              </a>
              <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-text-main transition-all duration-300 group">
                  <Facebook size={20} className="group-hover:scale-110 transition-transform"/>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
             <div className="space-y-4">
               <h4 className="text-xs tracking-[0.2em] uppercase text-accent-gold font-bold">Contact Us</h4>
               <p className="font-display text-2xl hover:text-accent-rose transition-colors cursor-pointer">{CONTACT_INFO.phone}</p>
               <p className="font-sans font-light text-white/70 hover:text-white transition-colors cursor-pointer">{CONTACT_INFO.email}</p>
             </div>
             
             <div className="space-y-4">
               <h4 className="text-xs tracking-[0.2em] uppercase text-accent-gold font-bold">Visit Us</h4>
               <p className="font-sans font-light text-white/70 max-w-xs leading-relaxed">
                 {CONTACT_INFO.address}
               </p>
               <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors">
                 Open Map <MapPin size={12} />
               </a>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 tracking-widest font-light">
          <p>© {new Date().getFullYear()} Pâte & Fondant. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Made with Elegance in Djerba.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;