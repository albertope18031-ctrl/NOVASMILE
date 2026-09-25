import React, { useState, useEffect } from 'react';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { X, AlertCircle, PhoneCall, Send, ShieldAlert } from 'lucide-react';

export function EmergencyModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [symptom, setSymptom] = useState('Dolor agudo punzante');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = createWhatsAppUrl({
      type: 'urgent',
      data: {
        name: name.trim() || 'Paciente con Urgencia',
        symptom: symptom
      }
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-nova-navy/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-modal border-2 border-red-200 relative overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-nova-slate hover:text-nova-navy hover:bg-slate-100 transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Encabezado */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-red-600" />
            Canal de Urgencia Prioritaria
          </div>
          <h3 className="text-2xl font-extrabold text-nova-navy">¿Presentas dolor o molestia dental?</h3>
          <p className="text-xs text-nova-slate">
            Nuestro equipo médico asigna prioridad inmediata a casos de dolor agudo, inflamación o fracturas dentales.
          </p>
        </div>

        {/* Formulario rápido */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-nova-navy uppercase tracking-wider">
              Tu Nombre *
            </label>
            <input
              type="text"
              required
              placeholder="Escribe tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-nova-slate-border bg-nova-ice text-sm text-nova-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-nova-navy uppercase tracking-wider">
              ¿Cuál es la molestia principal?
            </label>
            <select
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-nova-slate-border bg-nova-ice text-sm text-nova-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
            >
              <option value="Dolor agudo punzante al masticar">Dolor agudo punzante al masticar</option>
              <option value="Inflamación o flemón en encía/mejilla">Inflamación o flemón en encía/mejilla</option>
              <option value="Diente roto o corona desalojada">Diente roto o corona desalojada</option>
              <option value="Sangrado abundante o golpe reciente">Sangrado abundante o golpe reciente</option>
              <option value="Sensibilidad extrema e insoportable">Sensibilidad extrema e insoportable</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Solicitar Atención Urgente en WhatsApp</span>
            </button>
            <p className="text-[11px] text-nova-slate text-center mt-2.5">
              Se despachará un mensaje con etiqueta [URGENCIA DENTAL] para atención en guardia.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
