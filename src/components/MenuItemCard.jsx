import React from 'react';
import { Plus, Check, Sparkles } from 'lucide-react';

export const MenuItemCard = ({ item, cartItemCount, onSelectProduct, currency = "$" }) => {
  const hasOptions = item.optionGroups && item.optionGroups.length > 0;

  return (
    <article
      onClick={() => onSelectProduct(item)}
      className="group relative bg-white rounded-2xl p-3 sm:p-4 border border-bistro-200/70 hover:border-bistro-300 shadow-subtle transition-all duration-200 cursor-pointer active:scale-[0.99] flex gap-3.5 sm:gap-4 overflow-hidden"
    >
      {/* Contenido textual del platillo */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Insignias de Calidad / Dietarias */}
          {item.badge && (
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-culinary-gold/15 text-bistro-800 text-[10px] font-bold tracking-wide uppercase mb-1.5 border border-culinary-gold/30">
              <Sparkles className="w-2.5 h-2.5 text-culinary-gold fill-culinary-gold" />
              <span>{item.badge}</span>
            </div>
          )}

          <h3 className="font-serif text-base sm:text-lg font-semibold text-bistro-900 group-hover:text-bistro-700 leading-snug">
            {item.name}
          </h3>

          <p className="text-xs text-bistro-600 line-clamp-2 mt-1 leading-relaxed font-sans">
            {item.description}
          </p>
        </div>

        {/* Precio y Botón de Acción Táctil */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-bistro-100">
          <div className="flex items-baseline gap-0.5">
            <span className="text-xs font-semibold text-bistro-700">{currency}</span>
            <span className="font-serif text-lg font-bold text-bistro-950">
              {item.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Si ya está en la orden, mostrar badge */}
            {cartItemCount > 0 && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <Check className="w-3 h-3" />
                <span>{cartItemCount}</span>
              </span>
            )}

            <button
              type="button"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                hasOptions
                  ? 'bg-bistro-100 group-hover:bg-bistro-900 text-bistro-800 group-hover:text-bistro-50'
                  : 'bg-bistro-900 text-bistro-50 hover:bg-bistro-800 shadow-2xs'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{hasOptions ? 'Personalizar' : 'Añadir'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fotografía Gastronómica */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-bistro-100 border border-bistro-100">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>
    </article>
  );
};
