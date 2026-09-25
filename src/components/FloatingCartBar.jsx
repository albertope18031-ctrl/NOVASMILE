import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const FloatingCartBar = ({ totalCount, totalPrice, onOpenCart, currency = "$" }) => {
  if (totalCount === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-xl mx-auto z-40 pb-safe animate-bounceSubtle">
      <button
        onClick={onOpenCart}
        className="w-full bg-bistro-900 hover:bg-bistro-950 text-bistro-50 px-4 py-3.5 rounded-2xl shadow-float flex items-center justify-between border border-bistro-700/60 active:scale-[0.98] transition-all"
      >
        {/* Izquierda: Badge de ítems y texto */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-culinary-gold text-bistro-950 font-bold text-xs">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-culinary-amber text-white text-[10px] flex items-center justify-center font-mono font-bold shadow-xs">
              {totalCount}
            </span>
          </div>

          <div className="text-left">
            <div className="text-[11px] uppercase tracking-wider text-bistro-300 font-medium">
              Tu Selección
            </div>
            <div className="text-xs font-semibold text-bistro-100">
              {totalCount} {totalCount === 1 ? 'platillo' : 'platillos'} listos
            </div>
          </div>
        </div>

        {/* Derecha: Total y Botón de flecha */}
        <div className="flex items-center gap-2.5">
          <span className="font-mono font-bold text-base text-culinary-gold">
            {currency}{totalPrice.toFixed(2)}
          </span>
          <div className="flex items-center gap-1 text-xs font-bold text-bistro-200 bg-bistro-800/80 px-2.5 py-1.5 rounded-xl border border-bistro-700">
            <span>Ver Pedido</span>
            <ArrowRight className="w-3.5 h-3.5 text-culinary-gold" />
          </div>
        </div>
      </button>
    </div>
  );
};
