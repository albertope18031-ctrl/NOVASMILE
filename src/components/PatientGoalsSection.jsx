import React, { useState } from 'react';
import { patientGoalsData } from '../data/dentalData';
import { Sparkles, Smile, ShieldCheck, AlertCircle, ArrowRight, CheckCircle2, HeartPulse, Clock } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Smile: Smile,
  ShieldCheck: ShieldCheck,
  AlertCircle: AlertCircle,
};

export function PatientGoalsSection({ onSelectGoalForBooking }) {
  const [activeGoalId, setActiveGoalId] = useState(patientGoalsData[0].id);

  const activeGoal = patientGoalsData.find((g) => g.id === activeGoalId) || patientGoalsData[0];
  const IconComp = iconMap[activeGoal.icon] || Sparkles;

  return (
    <section id="objetivos" className="py-16 lg:py-24 bg-white border-b border-nova-slate-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Editorial */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nova-navy-50 text-nova-teal text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-nova-cyan" />
            Odontología Centrada en Ti
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-nova-navy tracking-tight">
            ¿Cuál es tu Objetivo Principal?
          </h2>
          <p className="text-sm sm:text-base text-nova-slate max-w-2xl mx-auto">
            Eliminamos los términos médicos complicados. Elige lo que deseas mejorar en tu sonrisa y conoce el camino más predecible, cómodo y libre de dolor.
          </p>
        </div>

        {/* Pestañas de Objetivos del Paciente (Responsive, centradas y sin recortes) */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto px-2">
            {patientGoalsData.map((goal) => {
              const isActive = goal.id === activeGoalId;
              const TabIcon = iconMap[goal.icon] || Sparkles;

              return (
                <button
                  key={goal.id}
                  onClick={() => setActiveGoalId(goal.id)}
                  className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-nova-navy text-white border-nova-navy shadow-md ring-2 ring-nova-cyan/20 scale-[1.02]'
                      : 'bg-white hover:bg-nova-ice text-nova-slate hover:text-nova-navy border-nova-slate-border shadow-xs'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? 'text-nova-cyan' : 'text-nova-teal'}`} />
                  <span>{goal.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel Interactivo del Objetivo Seleccionado */}
        <div className="max-w-5xl mx-auto bg-nova-ice rounded-3xl p-6 sm:p-10 border border-nova-slate-border shadow-card relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Columna Principal: Solución y Explicación */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-nova-slate-border text-nova-teal text-xs font-bold uppercase tracking-wider shadow-sm">
                  <IconComp className="w-3.5 h-3.5 text-nova-cyan" />
                  {activeGoal.badge}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-nova-navy leading-snug">
                  {activeGoal.title}
                </h3>
              </div>

              {/* Empatía: Lo que sientes hoy */}
              <div className="p-4 rounded-2xl bg-white border border-nova-slate-border/80">
                <span className="text-[11px] font-bold text-nova-slate uppercase tracking-wider block mb-1">
                  Lo que experimentas hoy:
                </span>
                <p className="text-sm text-nova-slate-dark italic leading-relaxed">
                  "{activeGoal.whatYouFeel}"
                </p>
              </div>

              {/* Solución Médica Explicada Fácil */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-nova-teal uppercase tracking-wider block">
                  Cómo lo resolvemos en NovaSmile:
                </span>
                <p className="text-sm text-nova-slate leading-relaxed">
                  {activeGoal.solution}
                </p>
              </div>

              {/* Lista de Beneficios Concretos */}
              <div className="space-y-2.5 pt-2">
                {activeGoal.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-nova-navy font-medium">
                    <CheckCircle2 className="w-4 h-4 text-nova-cyan flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Lateral: Confort, Tiempos & Botón de Acción */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-nova-slate-border shadow-sm space-y-5 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <h4 className="font-serif text-base font-bold text-nova-navy pb-3 border-b border-nova-slate-border">
                  Garantía de Experiencia NovaSmile
                </h4>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-nova-ice border border-nova-slate-border/60">
                    <HeartPulse className="w-5 h-5 text-nova-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-nova-slate block">
                        Nivel de Confort:
                      </span>
                      <strong className="text-nova-navy text-xs">{activeGoal.comfort}</strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-nova-ice border border-nova-slate-border/60">
                    <Clock className="w-5 h-5 text-nova-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-nova-slate block">
                        Duración Estimada:
                      </span>
                      <strong className="text-nova-navy text-xs">{activeGoal.timeEstimate}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA del Objetivo */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectGoalForBooking(activeGoal.title)}
                  className="w-full py-4 px-5 bg-nova-cyan hover:bg-nova-cyan-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-cyan-glow transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                  <span>{activeGoal.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[11px] text-nova-slate text-center mt-2.5">
                  Valoración visual 3D con presupuesto sin compromiso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
