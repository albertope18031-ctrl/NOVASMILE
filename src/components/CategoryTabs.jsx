import React, { useRef, useEffect } from 'react';
import { UtensilsCrossed, Flame, Sandwich, Cake, Wine, Search } from 'lucide-react';

const iconMap = {
  UtensilsCrossed,
  Flame,
  Sandwich,
  Cake,
  Wine
};

export const CategoryTabs = ({ categories, activeCategory, onSelectCategory, searchQuery, onSearchChange }) => {
  const scrollRef = useRef(null);

  // Centrar el tab activo al cambiar
  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = scrollRef.current.querySelector(`[data-category="${activeCategory}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeCategory]);

  return (
    <nav className="sticky top-0 z-30 bg-bistro-50/95 backdrop-blur-md border-b border-bistro-200/80 shadow-xs transition-shadow">
      <div className="max-w-2xl mx-auto px-4 pt-3 pb-2.5">
        
        {/* Buscador Rápido de Platillos */}
        <div className="relative mb-2.5">
          <Search className="w-4 h-4 text-bistro-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por platillo o ingrediente (ej. trufa, wagyu, vino)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-bistro-100/80 focus:bg-white border border-bistro-200 focus:border-bistro-400 rounded-xl text-xs text-bistro-900 placeholder:text-bistro-400 focus:outline-none focus:ring-1 focus:ring-bistro-400 transition-all shadow-2xs"
          />
        </div>

        {/* Scroll Horizontal de Categorías (Thumb Friendly) */}
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 scroll-smooth"
        >
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || UtensilsCrossed;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                data-category={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all active:scale-95 ${
                  isActive
                    ? 'bg-bistro-900 text-bistro-50 shadow-sm shadow-bistro-950/20'
                    : 'bg-white text-bistro-700 hover:bg-bistro-100/70 border border-bistro-200/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-culinary-gold' : 'text-bistro-500'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
