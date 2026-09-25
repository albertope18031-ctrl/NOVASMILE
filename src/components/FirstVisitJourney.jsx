import React from 'react';
import { firstVisitJourneySteps } from '../data/dentalData';
import { Calendar, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Clock } from 'lucide-react';

export function FirstVisitJourney({ onOpenBooking }) {
  return (
    <section id="primera-cita" className="py-16 lg:py-24 bg-nova-ice border-b border-nova-slate-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-nova-slate-border text-nova-teal text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-nova-cyan" />
            El Viaje del Paciente
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-nova-navy tracking-tight">
            ¿Cómo es tu Primera Consulta?
          </h2>
          <p className="text-sm sm:text-base text-nova-slate max-w-2xl mx-auto">
            Desmitificamos la experiencia odontológica. Sin sorpresas, sin dolor y con claridad absoluta en 3 sencillas etapas.
          </p>
        </div>

        {/* Flujo Horizontal en 3 Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {firstVisitJourneySteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-nova-slate-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6 relative group"
            >
              {/* Encabezado de la tarjeta con número y duración */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl font-black text-nova-gold">
                    {step.step}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-nova-navy-50 text-nova-teal text-xs font-bold">
                    <Clock className="w-3 h-3 text-nova-cyan" />
                    {step.time}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-nova-navy leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm text-nova-slate leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Detalle de tranquilidad */}
              <div className="pt-4 border-t border-nova-slate-border/70 flex items-start gap-2 text-xs font-semibold text-nova-teal">
                <CheckCircle2 className="w-4 h-4 text-nova-cyan flex-shrink-0 mt-0.5" />
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de Acción Centrado */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-nova-navy hover:bg-nova-teal text-white text-sm sm:text-base font-bold rounded-xl shadow-md transition-all active:scale-[0.98] group"
          >
            <Calendar className="w-4 h-4 text-nova-cyan" />
            <span>Agendar Mi Cita de Diagnóstico 3D</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-nova-slate mt-3">
            Incluye escaneo intraoral 3D de cortesía y proyección digital.
          </p>
        </div>
      </div>
    </section>
  );
}
