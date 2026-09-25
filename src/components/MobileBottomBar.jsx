import React from 'react';
import { Calendar, AlertCircle, Phone } from 'lucide-react';
import { clinicInfo } from '../data/dentalData';

export function MobileBottomBar({ onOpenBooking, onOpenEmergency }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-nova-slate-border px-3 py-2.5 shadow-modal">
      <div className="max-w-lg mx-auto flex items-center gap-2">
        {/* Botón Urgencia o Consulta Rápida */}
        <button
          type="button"
          onClick={onOpenEmergency}
          className="px-3 py-2.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 flex flex-col items-center justify-center flex-shrink-0 transition-colors"
          aria-label="Atención de urgencia dental"
        >
          <AlertCircle className="w-4 h-4 text-red-600" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Urgencias</span>
        </button>

        {/* Botón Principal: Agendar Valoración 3D */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 py-3 px-4 bg-nova-cyan hover:bg-nova-cyan-hover active:scale-[0.98] text-white rounded-xl shadow-md font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Agendar Valoración 3D</span>
        </button>
      </div>
    </div>
  );
}
