import React from 'react';
import { heroData } from '../data/dentalData';
import { Sparkles, Calendar, ShieldCheck, CheckCircle2, ArrowRight, Activity, Smile } from 'lucide-react';

export function Hero({ onOpenBooking, onScrollToTransformations, onOpenEmergency }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-nova-ice to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-nova-slate-border">
      {/* Elementos decorativos sutiles de fondo (sin aspecto de IA) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-nova-cyan/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-nova-navy/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna de Texto & Propuesta de Valor */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Badge de Confianza */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nova-navy-50 border border-nova-navy-200 text-nova-navy text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-nova-cyan animate-pulse" />
              {heroData.badge}
            </div>

            {/* Titular Principal Oficial */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-nova-navy leading-[1.15]">
              La ciencia de tu salud bucal.{' '}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-nova-teal to-nova-cyan">
                El arte de tu mejor sonrisa.
              </span>
            </h1>

            {/* Subtitular Persuasivo Anti-Odontofobia */}
            <p className="text-lg sm:text-xl text-nova-slate leading-relaxed font-normal max-w-2xl">
              {heroData.subtitle}
            </p>

            {/* Botones de Acción (CTA) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onScrollToTransformations}
                className="px-7 py-4 bg-nova-cyan hover:bg-nova-cyan-hover text-white text-base font-bold rounded-xl shadow-md hover:shadow-cyan-glow transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 group"
              >
                <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Ver Transformaciones Reales</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBooking}
                className="px-7 py-4 bg-white hover:bg-nova-navy-50 text-nova-navy border-2 border-nova-navy text-base font-semibold rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5 text-nova-navy" />
                <span>Valoración 3D en Consultorio</span>
              </button>
            </div>

            {/* Alerta de Urgencia Rápida */}
            <div className="pt-2 flex items-center gap-2 text-xs text-nova-slate">
              <span>{heroData.urgencyText}</span>
              <button
                onClick={onOpenEmergency}
                className="font-bold text-red-600 hover:text-red-700 underline flex items-center gap-1"
              >
                {heroData.urgencyLinkText} →
              </button>
            </div>

            {/* Checklist de Garantías Rápidas */}
            <div className="pt-4 border-t border-nova-slate-border/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs text-nova-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-nova-cyan flex-shrink-0" />
                <span>Sin dolor ni anestesias toscas</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-nova-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-nova-cyan flex-shrink-0" />
                <span>Escaneo 3D libre de pastas</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-nova-navy font-medium">
                <CheckCircle2 className="w-4 h-4 text-nova-cyan flex-shrink-0" />
                <span>Cotización previa 100% clara</span>
              </div>
            </div>
          </div>

          {/* Columna Visual / Fotografía Editorial Humana & Tarjetas Flotantes */}
          <div className="lg:col-span-5 relative">
            {/* Contenedor de Fotografía Estética */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-nova-ice">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
                alt="Sonrisa estética y natural NovaSmile"
                className="w-full h-full object-cover object-center filter brightness-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nova-navy/70 via-transparent to-transparent" />

              {/* Badge Flotante Superior: Odontología Sin Dolor */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-card border border-nova-slate-border flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-nova-cyan animate-pulse" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-nova-slate block">
                    Protocolo NovaSmile
                  </span>
                  <strong className="text-xs font-bold text-nova-navy">
                    Sonrisas Libres de Dolor
                  </strong>
                </div>
              </div>

              {/* Badge Flotante Inferior Derecho: Certificación 3D */}
              <div className="absolute bottom-6 right-4 left-4 sm:left-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-card border border-nova-slate-border space-y-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-nova-gold font-bold text-xs">
                    <ShieldCheck className="w-4 h-4 text-nova-gold" />
                    <span>Estándar Clínico 3D</span>
                  </div>
                  <span className="text-[11px] font-bold text-nova-teal bg-nova-navy-50 px-2 py-0.5 rounded">
                    99.4% Sin Dolor
                  </span>
                </div>
                <p className="text-[11px] text-nova-slate leading-snug">
                  Escaneo intraoral sin pastas de yeso ni náuseas.
                </p>
              </div>
            </div>

            {/* Micro-métrica flotante adicional */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-nova-navy text-white p-4 rounded-2xl shadow-xl border border-nova-navy-800 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-nova-cyan/20 flex items-center justify-center text-nova-cyan">
                <Smile className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-black tracking-tight">+3,800</p>
                <p className="text-[10px] uppercase tracking-wider text-nova-slate-light font-semibold">
                  Sonrisas Transformadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
