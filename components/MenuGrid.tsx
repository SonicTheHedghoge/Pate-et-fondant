import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const MenuGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pastry' | 'savory' | 'drink'>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 bg-[#FDFAF7]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl text-text-main mb-8">
            La <span className="italic text-accent-rose">Carte</span>
          </h2>
          
          <div className="flex justify-center flex-wrap gap-8">
            {['all', 'pastry', 'savory', 'drink'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`text-xs tracking-[0.2em] uppercase pb-2 transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'text-accent-gold border-b border-accent-gold' 
                    : 'text-text-light hover:text-text-main'
                }`}
              >
                {cat === 'all' ? 'Tout' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="group cursor-pointer">
    {/* Image container */}
    <div className="relative h-80 w-full overflow-hidden mb-6 bg-secondary">
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
      />
      <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 text-text-main font-display italic text-lg shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        {item.price}
      </div>
    </div>

    {/* Text */}
    <div className="text-center px-4">
      <h3 className="font-display text-2xl text-text-main mb-2 group-hover:text-accent-rose transition-colors duration-300">
        {item.name}
      </h3>
      <p className="font-sans font-light text-sm text-text-light leading-relaxed max-w-xs mx-auto">
        {item.description}
      </p>
    </div>
  </div>
);

export default MenuGrid;
