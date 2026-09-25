import React from 'react';
import { specialistsData } from '../data/dentalData';
import { Award, ShieldCheck, GraduationCap, Calendar, Sparkles } from 'lucide-react';

export function SpecialistsSection({ onOpenBooking }) {
  return (
    <section id="especialistas" className="py-16 lg:py-24 bg-white border-b border-nova-slate-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
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

        {/* Grid de Especialistas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialistsData.map((doc, idx) => (
            <div
              key={idx}
              className="bg-nova-ice rounded-3xl overflow-hidden border border-nova-slate-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
            >
              {/* Fotografía Profesional Cálida */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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

        {/* Llamado a la acción con los especialistas */}
        <div className="mt-12 text-center">
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
