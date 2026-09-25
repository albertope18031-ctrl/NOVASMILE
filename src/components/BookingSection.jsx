import React, { useState } from 'react';
import { bookingMotives, clinicInfo } from '../data/dentalData';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { Calendar, User, Clock, Send, ShieldCheck, Sparkles, CheckCircle2, Phone } from 'lucide-react';

export function BookingSection() {
  const [selectedMotive, setSelectedMotive] = useState(bookingMotives[0].label);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:30 hrs (Turno Matutino)');

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = createWhatsAppUrl({
      type: 'booking',
      data: {
        name: name.trim() || 'Paciente',
        service: selectedMotive,
        date: date || 'Lo antes posible',
        time: time
      }
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendar" className="py-16 lg:py-24 bg-nova-ice border-b border-nova-slate-border scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-nova-slate-border text-nova-teal text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-nova-cyan" />
            Agenda en Línea Oficial
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-nova-navy tracking-tight">
            Reserva tu Valoración 3D
          </h2>
          <p className="text-sm sm:text-base text-nova-slate">
            Selecciona el motivo principal de tu visita y el horario de tu preferencia para coordinar tu cita personalizada con nuestro equipo médico.
          </p>
        </div>

        {/* Tarjeta de Formulario con Selección de Motivo */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-nova-slate-border shadow-card text-left space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. Selector de Motivo */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-nova-navy uppercase tracking-wider">
                1. ¿Cuál es el motivo principal de tu valoración?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {bookingMotives.map((motive) => {
                  const isSelected = selectedMotive === motive.label;
                  return (
                    <button
                      key={motive.id}
                      type="button"
                      onClick={() => setSelectedMotive(motive.label)}
                      className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-nova-navy text-white border-nova-navy shadow-sm ring-2 ring-nova-cyan/20'
                          : 'bg-nova-ice hover:bg-white text-nova-navy border-nova-slate-border'
                      }`}
                    >
                      <span>{motive.label}</span>
                      <span
                        className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-nova-slate-dark'
                        }`}
                      >
                        {motive.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Datos del Paciente */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="space-y-1.5 sm:col-span-1">
                <label className="block text-xs font-bold text-nova-navy uppercase tracking-wider">
                  Tu Nombre y Apellido *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-nova-slate absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Martínez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-nova-slate-border bg-nova-ice text-sm text-nova-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-cyan transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:col-span-1">
                <label className="block text-xs font-bold text-nova-navy uppercase tracking-wider">
                  Fecha Preferida
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl border border-nova-slate-border bg-nova-ice text-sm text-nova-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-cyan transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:col-span-1">
                <label className="block text-xs font-bold text-nova-navy uppercase tracking-wider">
                  Horario Sugerido
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-nova-slate absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
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

            {/* Garantías Rápidas */}
            <div className="p-4 rounded-2xl bg-nova-ice border border-nova-slate-border/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2 text-nova-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-nova-cyan flex-shrink-0" />
                <span>Escaneo 3D incluido en cita</span>
              </div>
              <div className="flex items-center gap-2 text-nova-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-nova-cyan flex-shrink-0" />
                <span>Presupuesto por escrito</span>
              </div>
              <div className="flex items-center gap-2 text-nova-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-nova-cyan flex-shrink-0" />
                <span>Protocolo cero dolor</span>
              </div>
            </div>

            {/* Botón de Envío Directo */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-nova-whatsapp hover:bg-nova-whatsapp-hover text-white text-base font-bold rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2.5"
              >
                <Send className="w-5 h-5" />
                <span>Solicitar Cita de Valoración 3D en WhatsApp</span>
              </button>
              <p className="text-xs text-nova-slate text-center mt-2.5">
                Se enviará tu solicitud estructurada al WhatsApp oficial de {clinicInfo.fullName}. Respuesta en menos de 15 minutos en horario clínico.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
