import React from 'react';
import { specialtiesData } from '../data/dentalData';
import { Sparkles, Smile, ShieldCheck, ScanFace, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Smile: Smile,
  ShieldCheck: ShieldCheck,
  ScanFace: ScanFace,
};

export function ServicesSection({ onSelectService }) {
  return (
    <section id="especialidades" className="py-16 lg:py-24 bg-white border-b border-nova-slate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nova-navy-50 text-nova-teal text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-nova-cyan" />
            Catálogo Clínico Integral
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nova-navy tracking-tight">
            Especialidades Odontológicas de Alta Precisión
          </h2>
          <p className="text-sm sm:text-base text-nova-slate">
            Protocolos mínimamente invasivos orientados a la salud funcional y la armonía estética, respaldados por tecnología digital 3D.
          </p>
        </div>

        {/* Grid de Especialidades (2x2 elegante) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialtiesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <div
                key={service.id}
                className="bg-nova-ice rounded-3xl p-7 sm:p-8 border border-nova-slate-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Cabecera de la tarjeta con número y título */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-nova-slate-border flex items-center justify-center text-nova-cyan shadow-sm group-hover:bg-nova-cyan group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-nova-slate tracking-widest uppercase">
                          Especialidad {service.number}
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-nova-navy">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Promesa de valor */}
                  <p className="text-sm text-nova-slate-dark font-medium leading-relaxed">
                    {service.promise}
                  </p>

                  {/* Lista de tratamientos clave */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold text-nova-navy uppercase tracking-wider">
                      Tratamientos incluidos:
                    </p>
                    <div className="space-y-2.5">
                      {service.treatments.map((t, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-nova-slate-border/60">
                          <div className="flex items-center gap-2 text-xs font-bold text-nova-navy">
                            <CheckCircle2 className="w-3.5 h-3.5 text-nova-cyan flex-shrink-0" />
                            <span>{t.name}</span>
                          </div>
                          <p className="text-xs text-nova-slate mt-1 pl-5">{t.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Micro-copy persuasivo de conversión */}
                  <div className="p-3.5 rounded-xl bg-nova-cyan-light/60 border border-nova-cyan/20 text-xs text-nova-cyan-dark font-medium italic">
                    {service.microCopy}
                  </div>
                </div>

                {/* Botón de acción */}
                <div className="pt-6 mt-6 border-t border-nova-slate-border flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-nova-slate">
                    {service.highlight}
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-nova-cyan text-nova-navy hover:text-white text-xs font-bold rounded-xl border border-nova-slate-border hover:border-nova-cyan shadow-sm transition-all"
                  >
                    <span>Agendar esta área</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
