import React, { useRef, useState } from 'react';
import { specialistsData } from '../data/dentalData';
import { ShieldCheck, GraduationCap, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export function SpecialistsSection({ onOpenBooking }) {
  const carouselRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    if (clientWidth === 0) return;
    const index = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveCardIndex(Math.min(Math.max(index, 0), specialistsData.length - 1));
  };

  const scrollToCard = (index) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section id="especialistas" className="py-16 lg:py-24 bg-white border-b border-nova-slate-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nova-navy-50 text-nova-teal text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-nova-cyan" />
            Equipo Médico Titulado & Certificado
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-nova-navy tracking-tight">
            Conoce a tus Especialistas
          </h2>
          <p className="text-sm sm:text-base text-nova-slate max-w-2xl mx-auto">
            La confianza médica se deposita en personas con nombre, rostro y formación de vanguardia. Te presentamos al equipo que cuidará y transformará tu sonrisa.
          </p>
        </div>

        {/* Contenedor Adaptativo: Carrusel Táctil en Móvil / Cuadrícula de 3 en Escritorio */}
        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar px-1 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0"
        >
          {specialistsData.map((doc, idx) => (
            <div
              key={idx}
              className="w-[85vw] max-w-[340px] flex-shrink-0 snap-center md:w-auto md:max-w-none bg-nova-ice rounded-3xl overflow-hidden border border-nova-slate-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
            >
              {/* Fotografía Profesional Cálida */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                <img
                  src={doc.image}
                  alt={doc.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nova-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-nova-cyan block">
                    {doc.experience}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white drop-shadow-sm">
                    {doc.name}
                  </h3>
                </div>
              </div>

              {/* Contenido Clínico & Cédulas */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3 text-left">
                  <div>
                    <span className="text-xs font-bold text-nova-teal block">
                      {doc.role}
                    </span>
                    <span className="text-[11px] font-mono text-nova-slate font-medium block mt-0.5">
                      {doc.license}
                    </span>
                  </div>

                  {/* Posgrado */}
                  <div className="p-3 rounded-xl bg-white border border-nova-slate-border/80 flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-nova-gold flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-nova-slate-dark leading-relaxed font-medium">
                      {doc.education}
                    </p>
                  </div>

                  {/* Filosofía */}
                  <p className="text-xs text-nova-slate leading-relaxed">
                    {doc.bio}
                  </p>
                </div>

                {/* Etiquetas de Especialidad */}
                <div className="pt-3 border-t border-nova-slate-border/70">
                  <div className="flex flex-wrap gap-1.5">
                    {doc.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white border border-nova-slate-border text-nova-navy"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de Puntos para Móvil */}
        <div className="flex md:hidden flex-col items-center gap-2 mt-2">
          <p className="text-[11px] text-nova-slate">
            ⮜ Desliza para conocer al equipo ⮞
          </p>
          <div className="flex items-center gap-2">
            {specialistsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                aria-label={`Ver especialista ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  activeCardIndex === idx
                    ? 'w-6 bg-nova-navy'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Llamado a la acción con los especialistas */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-nova-cyan hover:bg-nova-cyan-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-cyan-glow transition-all active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>Consultar Disponibilidad con un Especialista</span>
          </button>
        </div>
      </div>
    </section>
  );
}
