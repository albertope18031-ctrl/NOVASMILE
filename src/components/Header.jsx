import React, { useState } from 'react';
import { Wifi, Clock, MapPin, ChevronDown, Check, Sparkles } from 'lucide-react';

export const Header = ({ restaurant, tableNumber, onOpenTableModal }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [copiedWifi, setCopiedWifi] = useState(false);

  const copyWifi = () => {
    navigator.clipboard.writeText(restaurant.wifiPass);
    setCopiedWifi(true);
    setTimeout(() => setCopiedWifi(false), 2000);
  };

  return (
    <header className="relative bg-bistro-900 text-bistro-50 pb-6 pt-5 px-4 shadow-md overflow-hidden">
      {/* Luz ambiental sutil gastronómica de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bistro-800/80 via-bistro-900 to-bistro-950 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-culinary-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Barra superior de estado & Mesa */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Servicio Activo</span>
          </div>

          <button
            onClick={onOpenTableModal}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bistro-800/90 hover:bg-bistro-700/90 border border-bistro-700 text-bistro-100 text-xs font-medium transition-all active:scale-95 shadow-sm"
          >
            <span className="text-bistro-400">Ubicación:</span>
            <span className="font-bold text-culinary-gold">
              {tableNumber ? `Mesa #${tableNumber}` : "Elegir Mesa"}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-bistro-400 group-hover:text-bistro-200 transition-transform" />
          </button>
        </div>

        {/* Título de Marca con Estética Editorial */}
        <div className="text-center my-3">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-bistro-50 uppercase">
            {restaurant.name}
          </h1>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-bistro-300 mt-1 font-medium">
            {restaurant.subtitle}
          </p>
        </div>

        {/* Botón rápido para Ver Horario / WiFi */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-[11px] text-bistro-400 hover:text-bistro-200 flex items-center gap-1.5 bg-bistro-800/50 hover:bg-bistro-800 px-3 py-1 rounded-full border border-bistro-700/50 transition-colors"
          >
            <Clock className="w-3 h-3 text-culinary-gold" />
            <span>{restaurant.schedule}</span>
            <span className="text-bistro-600">•</span>
            <Wifi className="w-3 h-3 text-culinary-gold" />
            <span>WiFi Clientes</span>
          </button>
        </div>

        {/* Desplegable de Información y Clave WiFi */}
        {showInfo && (
          <div className="mt-3 p-3.5 rounded-xl bg-bistro-950/90 border border-bistro-800 text-xs text-bistro-300 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-bistro-800/80">
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-culinary-gold" />
                <div>
                  <div className="text-bistro-200 font-medium">Red: {restaurant.wifiName}</div>
                  <div className="text-[11px] text-bistro-400 font-mono">Clave: {restaurant.wifiPass}</div>
                </div>
              </div>
              <button
                onClick={copyWifi}
                className="px-2.5 py-1 rounded bg-bistro-800 hover:bg-bistro-700 text-bistro-200 text-[11px] font-medium transition-colors flex items-center gap-1"
              >
                {copiedWifi ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Copiada</span>
                  </>
                ) : (
                  <span>Copiar clave</span>
                )}
              </button>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-bistro-400">
              <MapPin className="w-3.5 h-3.5 text-culinary-gold shrink-0" />
              <span>{restaurant.address}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
