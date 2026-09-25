import React, { useState, useRef, useEffect } from 'react';
import { beforeAfterCases } from '../data/dentalData';
import { Sparkles, Calendar, ShieldCheck, Clock, ArrowRight, ChevronLeft, ChevronRight, Check, Columns, SlidersHorizontal } from 'lucide-react';

export function SmileTransformationSlider({ onSelectCaseForBooking }) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'sideBySide'
  const containerRef = useRef(null);

  const activeCase = beforeAfterCases[activeCaseIndex];

  // Measure exact container width for pixel-perfect overflow clipping
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();

    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(updateWidth);
      ro.observe(containerRef.current);
    }
    window.addEventListener('resize', updateWidth);

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, [viewMode, activeCaseIndex]);

  const updatePositionFromClientX = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(Math.round(percentage));
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}
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
            La prueba visual de nuestra odontología conservadora de alta precisión. Compara el antes y después de pacientes atendidos en nuestras instalaciones.
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
          <div className="lg:col-span-7 flex flex-col items-center w-full">
            {/* Barra de Control de Modo (Deslizador vs Lado a Lado) */}
            <div className="flex items-center justify-between w-full mb-3 px-1">
              <span className="text-[11px] font-bold text-nova-slate uppercase tracking-wider">
                Comparativa Visual:
              </span>
              <div className="inline-flex p-1 rounded-xl bg-nova-ice border border-nova-slate-border shadow-xs">
                <button
                  onClick={() => setViewMode('slider')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === 'slider'
                      ? 'bg-nova-navy text-white shadow-xs'
                      : 'text-nova-slate hover:text-nova-navy'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-nova-cyan" />
                  <span>Deslizador</span>
                </button>
                <button
                  onClick={() => setViewMode('sideBySide')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === 'sideBySide'
                      ? 'bg-nova-navy text-white shadow-xs'
                      : 'text-nova-slate hover:text-nova-navy'
                  }`}
                >
                  <Columns className="w-3.5 h-3.5" />
                  <span>Lado a Lado</span>
                </button>
              </div>
            </div>

            {/* VISTA 1: DESLIZADOR INTERACTIVO CON CLIPPING DE ANCHO ROBUSTO */}
            {viewMode === 'slider' ? (
              <div className="w-full">
                <div
                  ref={containerRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner select-none border border-nova-slate-border cursor-ew-resize touch-none"
                >
                  {/* Imagen DESPUÉS (Base completa inferior) */}
                  <img
                    src={activeCase.afterImage}
                    alt={`Resultado Después - ${activeCase.title}`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                    loading="lazy"
                  />

                  {/* Badge DESPUÉS (Fijo en esquina superior derecha, tamaño compacto anti-colisión) */}
                  <div className="absolute top-3 right-3 bg-nova-navy/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider z-20 border border-white/20 flex items-center gap-1.5 shadow-sm pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-nova-cyan animate-pulse" />
                    Después
                  </div>

                  {/* Imagen ANTES (Contenedor con ancho dinámico por overflow: hidden - 100% compatible con móviles) */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden z-10 pointer-events-none select-none border-r-2 border-white shadow-lg"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={activeCase.beforeImage}
                      alt={`Estado Inicial Antes - ${activeCase.title}`}
                      className="absolute top-0 left-0 h-full object-cover filter brightness-95 pointer-events-none select-none"
                      style={{
                        width: containerWidth > 0 ? `${containerWidth}px` : '100%',
                        maxWidth: 'none'
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Badge ANTES (Fijo en esquina superior izquierda, tamaño compacto anti-colisión) */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider z-20 border border-white/20 shadow-sm pointer-events-none">
                    Antes
                  </div>

                  {/* Tirador Divisorio Deslizable */}
                  <div
                    className="absolute top-0 bottom-0 z-30 pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="w-0.5 h-full bg-white shadow-2xl relative -translate-x-1/2">
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-nova-navy shadow-modal flex items-center justify-center border-2 border-nova-cyan">
                        <div className="flex items-center text-nova-cyan text-xs font-black">
                          <ChevronLeft className="w-3.5 h-3.5 -mr-1" />
                          <ChevronRight className="w-3.5 h-3.5 -ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Controles de Salto Rápido y Guía Táctil */}
                <div className="flex flex-wrap items-center justify-between gap-2 mt-3 w-full px-1">
                  <p className="text-[11px] sm:text-xs text-nova-slate flex items-center gap-1">
                    <span>⮜ Arrastra sobre la foto para comparar ⮞</span>
                  </p>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSliderPosition(100)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all border ${
                        sliderPosition >= 95
                          ? 'bg-nova-navy text-white border-nova-navy shadow-xs'
                          : 'bg-white hover:bg-nova-ice text-nova-slate border-nova-slate-border'
                      }`}
                    >
                      Solo Antes
                    </button>
                    <button
                      type="button"
                      onClick={() => setSliderPosition(50)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all border ${
                        sliderPosition > 40 && sliderPosition < 60
                          ? 'bg-nova-navy text-white border-nova-navy shadow-xs'
                          : 'bg-white hover:bg-nova-ice text-nova-slate border-nova-slate-border'
                      }`}
                    >
                      50 / 50
                    </button>
                    <button
                      type="button"
                      onClick={() => setSliderPosition(0)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all border ${
                        sliderPosition <= 5
                          ? 'bg-nova-navy text-white border-nova-navy shadow-xs'
                          : 'bg-white hover:bg-nova-ice text-nova-slate border-nova-slate-border'
                      }`}
                    >
                      Solo Después
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* VISTA 2: COMPARATIVA LADO A LADO (Sin superposiciones, fotos completas) */
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Fotografía Antes */}
                <div className="space-y-2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-nova-slate-border shadow-sm">
                    <img
                      src={activeCase.beforeImage}
                      alt={`Antes - ${activeCase.title}`}
                      className="w-full h-full object-cover filter brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
                      Antes
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-nova-ice border border-nova-slate-border text-center">
                    <span className="text-[10px] uppercase font-bold text-nova-slate block">Situación Inicial</span>
                    <p className="text-xs text-nova-slate-dark font-medium mt-0.5 line-clamp-2">{activeCase.concern}</p>
                  </div>
                </div>

                {/* Fotografía Después */}
                <div className="space-y-2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-nova-cyan/50 shadow-sm">
                    <img
                      src={activeCase.afterImage}
                      alt={`Después - ${activeCase.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-nova-navy/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20 flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-nova-cyan animate-pulse" />
                      Resultado Final
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-nova-cyan/30 text-center shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-nova-teal block">Resultado Alcanzado</span>
                    <p className="text-xs text-nova-navy font-semibold mt-0.5 line-clamp-2">{activeCase.highlight}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Columna Derecha: Ficha Clínica del Caso & Conversión */}
          <div className="lg:col-span-5 space-y-6 text-left w-full">
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
