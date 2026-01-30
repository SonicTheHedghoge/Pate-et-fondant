import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2652&auto=format&fit=crop" 
          alt="Artisanal Croissants"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#FDFAF7]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="inline-block py-1 px-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white text-[10px] md:text-xs tracking-[0.3em] uppercase">
            Houmet Souk, Djerba
          </span>
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-6 text-shadow-sm animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <span className="block font-light">L'Art de</span>
          <span className="block italic text-accent-gold/90 font-normal mt-[-0.2em]">Pâtisserie</span>
        </h1>

        <p className="text-white/90 font-sans font-light text-sm md:text-lg max-w-lg mx-auto leading-relaxed mb-10 tracking-wide animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Where the delicate precision of French baking meets the warm, golden soul of Tunisia. An escape for the senses.
        </p>

        <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a 
                href="#menu" 
                className="inline-block bg-white text-text-main px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-accent-rose hover:text-white transition-all duration-500 shadow-xl"
            >
                Découvrir
            </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce duration-[2000ms] text-white/70">
        <ArrowDown size={20} strokeWidth={1} />
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(1.1); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
