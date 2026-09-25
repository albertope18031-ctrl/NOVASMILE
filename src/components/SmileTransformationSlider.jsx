import React, { useState, useRef } from 'react';
import { beforeAfterCases } from '../data/dentalData';
import { Sparkles, Calendar, ShieldCheck, Clock, ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export function SmileTransformationSlider({ onSelectCaseForBooking }) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const activeCase = beforeAfterCases[activeCaseIndex];

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="transformaciones" className="py-16 lg:py-24 bg-nova-ice border-b border-nova-slate-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Editorial */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-nova-slate-border text-nova-navy text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-nova-cyan" />
            Evidencia Clínica Real
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-nova-navy tracking-tight">
            Transformaciones Reales de Sonrisa
          </h2>
          <p className="text-sm sm:text-base text-nova-slate max-w-2xl mx-auto">
            La prueba visual de nuestra odontología conservadora de alta precisión. Desliza para comparar el antes y después de pacientes atendidos en nuestras instalaciones.
          </p>
        </div>

        {/* Selector de Casos Clínicos */}
        <div className="flex justify-center mb-8 overflow-x-auto no-scrollbar pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-nova-slate-border shadow-sm gap-1.5">
            {beforeAfterCases.map((c, idx) => {
              const isActive = idx === activeCaseIndex;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCaseIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-nova-navy text-white shadow-sm'
                      : 'text-nova-slate hover:text-nova-navy hover:bg-nova-ice'
                  }`}
                >
                  <span>{c.title}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-nova-cyan" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tarjeta Principal del Slider & Ficha Técnica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-nova-slate-border shadow-card">
          {/* Columna Izquierda: Visualizador Interactivo Antes / Después */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner select-none border border-nova-slate-border"
            >
              {/* Imagen DESPUÉS (Base completa) */}
              <img
                src={activeCase.afterImage}
                alt={`Resultado Después - ${activeCase.title}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-nova-navy/85 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20 border border-white/20 flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-nova-cyan animate-pulse" />
                Después (Resultado Final)
              </div>

              {/* Imagen ANTES (Recortada dinámicamente según sliderPosition) */}
              <div
                className="absolute inset-0 overflow-hidden z-10"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt={`Estado Inicial Antes - ${activeCase.title}`}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-sm">
                  Antes (Estado Inicial)
                </div>
              </div>

              {/* Barra Divisoria Deslizable */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-0.5 h-full bg-white shadow-2xl relative -translate-x-1/2">
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-nova-navy shadow-modal flex items-center justify-center border-2 border-nova-cyan">
                    <div className="flex items-center text-nova-cyan text-xs font-black">
                      <ChevronLeft className="w-4 h-4 -mr-1" />
                      <ChevronRight className="w-4 h-4 -ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Range Invisible para Control Táctil y Ratón */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                aria-label="Deslizador de comparación antes y después"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
              />
            </div>

            {/* Microindicador de arrastre */}
            <p className="text-xs text-nova-slate mt-3 flex items-center gap-1.5">
              <span>⮜ Desliza horizontalmente para comparar la transformación ⮞</span>
            </p>
          </div>

          {/* Columna Derecha: Ficha Clínica del Caso & Conversión */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-nova-gold-light text-nova-gold-dark border border-nova-gold/30">
                  {activeCase.tag}
                </span>
                <span className="text-xs font-semibold text-nova-slate">
                  {activeCase.category}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-nova-navy leading-snug">
                {activeCase.title}
              </h3>
              <p className="text-xs font-medium text-nova-slate">
                Paciente: <strong className="text-nova-navy">{activeCase.patient}</strong>
              </p>
            </div>

            {/* Diagnóstico vs Solución */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-nova-ice border border-nova-slate-border">
                <span className="text-nova-slate block font-semibold uppercase tracking-wider text-[10px]">
                  Situación Inicial del Paciente:
                </span>
                <p className="text-nova-navy mt-1 font-medium">{activeCase.concern}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-nova-cyan/30 shadow-sm">
                <span className="text-nova-teal block font-semibold uppercase tracking-wider text-[10px]">
                  Tratamiento Clínico Realizado:
                </span>
                <p className="text-nova-navy mt-1 font-medium">{activeCase.solution}</p>
              </div>
            </div>

            {/* Tiempos y Médico Responsable */}
            <div className="grid grid-cols-2 gap-3 pt-1 border-t border-nova-slate-border/70 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-nova-cyan flex-shrink-0" />
                <div>
                  <span className="text-nova-slate block text-[10px]">Tiempo Total:</span>
                  <strong className="text-nova-navy">{activeCase.duration}</strong>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-nova-gold flex-shrink-0" />
                <div>
                  <span className="text-nova-slate block text-[10px]">Especialista:</span>
                  <strong className="text-nova-navy truncate block">{activeCase.doctor}</strong>
                </div>
              </div>
            </div>

            {/* Frase Destacada de Garantía */}
            <div className="p-3 rounded-xl bg-nova-cyan-light text-nova-teal text-xs font-medium flex items-center gap-2">
              <Check className="w-4 h-4 text-nova-cyan flex-shrink-0" />
              <span>{activeCase.highlight}</span>
            </div>

            {/* Botón de Acción Directo */}
            <button
              onClick={() => onSelectCaseForBooking(activeCase.title)}
              className="w-full py-4 px-6 bg-nova-cyan hover:bg-nova-cyan-hover text-white text-sm font-bold rounded-xl shadow-md hover:shadow-cyan-glow transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4" />
              <span>Quiero un Resultado Similar para Mi Sonrisa</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
