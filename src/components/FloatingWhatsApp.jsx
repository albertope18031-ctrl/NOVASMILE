import React from 'react';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappUrl = createWhatsAppUrl({ type: 'general' });

  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip sutil en escritorio */}
      <div className="hidden md:block bg-white text-nova-navy text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-card border border-nova-slate-border/80 animate-in fade-in slide-in-from-right-4 duration-300">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-nova-whatsapp animate-ping" />
          ¿Dudas? Chatea con un especialista
        </span>
      </div>

      {/* Botón Flotante Oficial WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp con NovaSmile"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-nova-whatsapp hover:bg-nova-whatsapp-hover text-white shadow-card-hover hover:scale-105 active:scale-95 transition-all flex items-center justify-center relative group"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
        {/* Badge indicador online */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 bg-nova-whatsapp rounded-full" />
        </span>
      </a>
    </aside>
  );
}
