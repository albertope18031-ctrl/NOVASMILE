import React, { useState } from 'react';
import { comparatorCategories } from '../data/dentalData';
import { Sparkles, Check, CheckCircle2, ArrowRight } from 'lucide-react';

export function TreatmentComparator({ onSelectTreatmentForBooking }) {
  const [activeCategory, setActiveCategory] = useState(comparatorCategories[0].id);

  const selectedCategory = comparatorCategories.find((c) => c.id === activeCategory);

  return (
    <section id="comparador" className="py-16 lg:py-24 bg-nova-ice border-b border-nova-slate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-nova-slate-border text-nova-navy text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-nova-cyan" />
            Transparencia & Opciones Clínicas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nova-navy tracking-tight">
            Comparador de Tratamientos
          </h2>
          <p className="text-sm sm:text-base text-nova-slate">
            Entiende de forma clara las ventajas, durabilidad y características de cada procedimiento para tomar la mejor decisión con tu especialista.
          </p>
        </div>

        {/* Pestañas de Selección de Categoría */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-nova-slate-border shadow-sm">
            {comparatorCategories.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-nova-navy text-white shadow-sm'
                      : 'text-nova-slate hover:text-nova-navy'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Subtítulo dinámico de la comparativa */}
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-nova-navy">{selectedCategory.title}</h3>
          <p className="text-xs sm:text-sm text-nova-slate mt-1">{selectedCategory.subtitle}</p>
        </div>

        {/* Tarjetas Comparativas Lado a Lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Opción A (Opción recomendada/destacada con acento Cyan) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-nova-cyan shadow-card relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-nova-gold-light text-nova-gold-dark border border-nova-gold/30">
                    {selectedCategory.optionA.badge}
                  </span>
                  <h4 className="text-xl font-extrabold text-nova-navy mt-2.5">
                    {selectedCategory.optionA.name}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-nova-cyan text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
              </div>

              {/* Lista de Características */}
              <div className="space-y-3 pt-2">
                {selectedCategory.optionA.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-nova-ice border border-nova-slate-border/50 text-xs">
                    <span className="text-nova-slate block font-medium">{feat.label}:</span>
                    <strong className="text-nova-navy font-semibold text-[13px] block mt-0.5">{feat.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Botón de Selección */}
            <div className="pt-6 mt-6 border-t border-nova-slate-border">
              <button
                onClick={() => onSelectTreatmentForBooking(selectedCategory.optionA.name)}
                className="w-full py-3.5 px-4 bg-nova-cyan hover:bg-nova-cyan-hover text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-cyan-glow flex items-center justify-center gap-2"
              >
                <span>Cotizar {selectedCategory.optionA.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Opción B (Opción alternativa sobria) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-nova-slate-border shadow-card flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-nova-slate-dark">
                    {selectedCategory.optionB.badge}
                  </span>
                  <h4 className="text-xl font-extrabold text-nova-navy mt-2.5">
                    {selectedCategory.optionB.name}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 text-nova-slate flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              {/* Lista de Características */}
              <div className="space-y-3 pt-2">
                {selectedCategory.optionB.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-nova-slate-border/40 text-xs">
                    <span className="text-nova-slate block font-medium">{feat.label}:</span>
                    <strong className="text-nova-navy font-semibold text-[13px] block mt-0.5">{feat.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Botón de Selección */}
            <div className="pt-6 mt-6 border-t border-nova-slate-border">
              <button
                onClick={() => onSelectTreatmentForBooking(selectedCategory.optionB.name)}
                className="w-full py-3.5 px-4 bg-nova-navy hover:bg-nova-navy-800 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Consultar {selectedCategory.optionB.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
