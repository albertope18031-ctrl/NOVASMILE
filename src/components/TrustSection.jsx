import React from 'react';
import { trustPoints, clinicInfo } from '../data/dentalData';
import { Cpu, ReceiptText, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';

const iconMap = {
  Cpu: Cpu,
  ReceiptText: ReceiptText,
  HeartHandshake: HeartHandshake,
};

export function TrustSection({ onOpenBooking }) {
  return (
    <section id="confianza" className="py-16 lg:py-24 bg-gradient-to-b from-white to-nova-ice border-b border-nova-slate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nova-cyan-light text-nova-cyan-dark text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Compromiso Clínico NovaSmile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nova-navy tracking-tight">
            Por Qué Nuestros Pacientes Confían en Nosotros
          </h2>
          <p className="text-sm sm:text-base text-nova-slate">
            Hemos rediseñado la experiencia odontológica para que acudir al dentista sea un proceso predecible, cómodo y libre de estrés.
          </p>
        </div>

        {/* 3 Pilares de Confianza */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point, idx) => {
            const IconComponent = iconMap[point.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-nova-slate-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-nova-navy-50 border border-nova-navy-100 flex items-center justify-center text-nova-navy">
                    <IconComponent className="w-7 h-7 text-nova-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-nova-navy">{point.title}</h3>
                  <p className="text-sm text-nova-slate leading-relaxed">{point.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-nova-cyan flex items-center gap-1">
                    Garantía de calidad médica ✓
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout de Contacto Directo */}
        <div className="mt-16 bg-nova-navy rounded-3xl p-8 sm:p-12 text-white shadow-card flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              ¿Listo para iniciar tu plan de salud dental?
            </h3>
            <p className="text-sm sm:text-base text-nova-slate-light max-w-xl">
              Agenda tu consulta de valoración en nuestras instalaciones en {clinicInfo.location}. Despejamos todas tus dudas en tu primera visita.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-nova-cyan hover:bg-nova-cyan-hover text-white text-sm sm:text-base font-bold rounded-xl shadow-md hover:shadow-cyan-glow transition-all active:scale-95 flex-shrink-0 flex items-center gap-2"
          >
            <span>Agendar Cita en Consultorio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
