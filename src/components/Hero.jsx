import React from 'react';
import { heroData } from '../data/dentalData';
import { Sparkles, Calendar, ShieldCheck, CheckCircle2, ArrowRight, Activity, Smile } from 'lucide-react';

export function Hero({ onOpenBooking, onScrollToTriage, onOpenEmergency }) {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-nova-navy leading-[1.12]">
              La ciencia de tu salud bucal.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nova-teal to-nova-cyan">
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
                onClick={onScrollToTriage}
                className="px-7 py-4 bg-nova-cyan hover:bg-nova-cyan-hover text-white text-base font-bold rounded-xl shadow-md hover:shadow-cyan-glow transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 group"
              >
                <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>{heroData.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBooking}
                className="px-7 py-4 bg-white hover:bg-nova-navy-50 text-nova-navy border-2 border-nova-navy text-base font-semibold rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5 text-nova-navy" />
                <span>{heroData.ctaSecondary}</span>
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

          {/* Columna Visual / Tarjeta de Autoridad Médica & Métricas */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-nova-slate-border shadow-card hover:shadow-card-hover transition-all">
              {/* Encabezado de la Tarjeta Clínica */}
              <div className="flex items-center justify-between pb-6 border-b border-nova-slate-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-nova-cyan-light flex items-center justify-center text-nova-cyan">
                    <Smile className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-nova-navy">Estándar NovaSmile™</h2>
                    <p className="text-xs text-nova-slate">Clínica Odontológica & Estética</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-nova-gold bg-nova-gold/10 border border-nova-gold/20 px-2.5 py-1 rounded-full shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-nova-gold" />
                  Certificación 3D
                </span>
              </div>

              {/* Métricas Reales de Impacto */}
              <div className="py-6 space-y-4">
                {heroData.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between p-3.5 rounded-xl bg-nova-ice border border-nova-slate-border/60"
                  >
                    <div>
                      <p className="text-2xl font-black text-nova-navy tracking-tight">{metric.value}</p>
                      <p className="text-xs font-semibold text-nova-navy-700">{metric.label}</p>
                    </div>
                    <span className="text-[11px] text-nova-slate font-medium text-right max-w-[140px]">
                      {metric.detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Botón Integrado de Prueba Rápida de Diagnóstico */}
              <div className="pt-2">
                <button
                  onClick={onScrollToTriage}
                  className="w-full py-3.5 px-4 bg-nova-navy hover:bg-nova-navy-800 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Activity className="w-4 h-4 text-nova-cyan" />
                  <span>Realizar Diagnóstico Dental Gratuito (2 min)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
