import React, { useRef, useState } from 'react';
import { anxietyFreeFeatures } from '../data/dentalData';
import { Camera, Syringe, Coffee, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

const iconMap = {
  Camera: Camera,
  Syringe: Syringe,
  Coffee: Coffee,
};

export function AnxietyFreeSection({ onOpenBooking }) {
  const carouselRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    if (clientWidth === 0) return;
    const index = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveCardIndex(Math.min(Math.max(index, 0), anxietyFreeFeatures.length - 1));
  };

  const scrollToCard = (index) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section id="confort-3d" className="py-16 lg:py-24 bg-white border-b border-nova-slate-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nova-cyan-light text-nova-teal text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-nova-cyan" />
            Venciendo la Odontofobia
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-nova-navy tracking-tight">
            Protocolo Cero Dolor & Cero Ansiedad
          </h2>
          <p className="text-sm sm:text-base text-nova-slate max-w-2xl mx-auto">
            El mayor freno para cuidar tu sonrisa es el temor al dolor y las malas experiencias pasadas. Hemos redefinido cada etapa para que tu visita sea predecible, cómoda y relajante.
          </p>
        </div>

        {/* 3 Pilares Tecnológicos Anti-Miedo: Carrusel en Móvil / Cuadrícula en Escritorio */}
        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar px-1 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0"
        >
          {anxietyFreeFeatures.map((feat, idx) => {
            const IconComp = iconMap[feat.icon] || Camera;
            return (
              <div
                key={idx}
                className="w-[85vw] max-w-[340px] flex-shrink-0 snap-center md:w-auto md:max-w-none bg-nova-ice rounded-3xl p-6 sm:p-8 border border-nova-slate-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-nova-slate-border flex items-center justify-center text-nova-cyan shadow-sm group-hover:bg-nova-cyan group-hover:text-white transition-colors">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-nova-slate-border text-nova-teal shadow-xs">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-nova-navy">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-nova-slate leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-nova-slate-border/70 flex items-center gap-2 text-xs font-semibold text-nova-teal">
                  <CheckCircle2 className="w-4 h-4 text-nova-cyan flex-shrink-0" />
                  <span>{feat.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicadores de Puntos para Móvil */}
        <div className="flex md:hidden flex-col items-center gap-2 mt-2">
          <p className="text-[11px] text-nova-slate">
            ⮜ Desliza para ver la tecnología 3D ⮞
          </p>
          <div className="flex items-center gap-2">
            {anxietyFreeFeatures.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                aria-label={`Ver tecnología ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  activeCardIndex === idx
                    ? 'w-6 bg-nova-navy'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Comparativa Directa: Odontología Tradicional vs Protocolo NovaSmile */}
        <div className="mt-12 sm:mt-16 bg-nova-navy rounded-3xl p-6 sm:p-12 text-white shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-nova-mint-soft text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-nova-cyan" />
                Estándar Internacional
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                ¿Hace cuánto no vas al dentista por miedo?
              </h3>
              <p className="text-sm sm:text-base text-nova-slate-light leading-relaxed max-w-2xl">
                En tu primera cita no realizamos procedimientos invasivos. Tu primera visita es una conversación pausada frente a una pantalla donde exploramos tu boca con luz óptica, sin agujas y sin dolor.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 px-6 bg-nova-cyan hover:bg-nova-cyan-hover text-white text-sm sm:text-base font-bold rounded-xl shadow-md hover:shadow-cyan-glow transition-all active:scale-[0.98] text-center"
              >
                Agendar Mi Valoración Sin Miedo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
