import React, { useState, useEffect } from 'react';
import { specialtiesData } from '../data/dentalData';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { X, Calendar, Clock, User, Check, Send, Sparkles } from 'lucide-react';

export function BookingModal({ isOpen, onClose, defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    service: defaultService || specialtiesData[0].title,
    date: '',
    time: '10:30 hrs'
  });

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

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
      type: 'booking',
      data: {
        name: formData.name.trim() || 'Paciente',
        service: formData.service,
        date: formData.date || 'Lo antes posible',
        time: formData.time
      }
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-nova-navy/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-modal border border-nova-slate-border relative overflow-hidden animate-in zoom-in-95 duration-200"
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
        <div className="space-y-1.5 mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-nova-cyan uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            Agenda Oficial NovaSmile
          </div>
          <h3 className="font-serif text-2xl font-bold text-nova-navy">Agendar Cita en Consultorio</h3>
          <p className="text-xs text-nova-slate">
            Elige tu especialidad y horario preferido para coordinar tu cita en nuestro consultorio.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-nova-navy uppercase tracking-wider">
              Nombre Completo *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-nova-slate absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="Ej. Roberto Gómez"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-nova-slate-border bg-nova-ice text-sm text-nova-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-cyan transition-all"
              />
            </div>
          </div>

          {/* Servicio */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-nova-navy uppercase tracking-wider">
              Servicio o Especialidad de Interés
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-nova-slate-border bg-nova-ice text-sm text-nova-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-cyan transition-all"
            >
              <option value="Valoración Inicial Completa">Valoración Inicial Completa (Diagnóstico 3D)</option>
              {specialtiesData.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Alineadores Transparentes">Ortodoncia: Alineadores Invisibles</option>
              <option value="Carillas de Porcelana">Estética: Carillas de Porcelana</option>
              <option value="Implante Dental Titanio">Rehabilitación: Implante Dental</option>
              <option value="Limpieza Dental Profilaxis">Prevención: Limpieza Ultrasónica Air-Flow</option>
            </select>
          </div>

          {/* Fecha sugerida y Horario en 2 columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-nova-navy uppercase tracking-wider">
                Fecha Deseada
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3.5 py-3 rounded-xl border border-nova-slate-border bg-nova-ice text-sm text-nova-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-cyan transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-nova-navy uppercase tracking-wider">
                Horario Sugerido
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-nova-slate absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full pl-9 pr-3 py-3 rounded-xl border border-nova-slate-border bg-nova-ice text-sm text-nova-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-cyan transition-all"
                >
                  <option value="09:30 hrs (Turno Matutino)">09:30 hrs (Matutino)</option>
                  <option value="10:30 hrs (Turno Matutino)">10:30 hrs (Matutino)</option>
                  <option value="11:30 hrs (Turno Matutino)">11:30 hrs (Matutino)</option>
                  <option value="12:30 hrs (Turno Mediodía)">12:30 hrs (Mediodía)</option>
                  <option value="15:30 hrs (Turno Vespertino)">15:30 hrs (Vespertino)</option>
                  <option value="16:30 hrs (Turno Vespertino)">16:30 hrs (Vespertino)</option>
                  <option value="17:30 hrs (Turno Vespertino)">17:30 hrs (Vespertino)</option>
                  <option value="18:30 hrs (Turno Vespertino)">18:30 hrs (Vespertino)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-5 bg-nova-whatsapp hover:bg-nova-whatsapp-hover text-white text-sm font-bold rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Confirmar Solicitud en WhatsApp</span>
            </button>
            <p className="text-[11px] text-nova-slate text-center mt-2.5">
              Tu mensaje se enviará ya redactado al equipo de recepción de NovaSmile para confirmar tu espacio.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
