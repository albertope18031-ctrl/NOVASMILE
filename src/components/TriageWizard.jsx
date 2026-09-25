import React, { useState } from 'react';
import { triageSteps } from '../data/dentalData';
import { createWhatsAppUrl } from '../utils/whatsapp';
import {
  Sparkles,
  Smile,
  ShieldCheck,
  ScanFace,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Check,
  Send,
  User,
  Clock,
  CheckCircle
} from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Smile: Smile,
  ShieldCheck: ShieldCheck,
  ScanFace: ScanFace,
  AlertCircle: AlertCircle,
};

export function TriageWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: '',
    condition: '',
    urgency: '',
    name: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  const currentStepData = triageSteps.find((s) => s.step === currentStep);
  const totalSteps = triageSteps.length;
  const progressPercent = (currentStep / totalSteps) * 100;

  const handleSelectOption = (fieldId, value) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
    setErrorMsg('');
    // Auto-avance suave en pasos 1, 2 y 3 para máxima fluidez móvil
    if (currentStep < totalSteps) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 180);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setErrorMsg('');
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentStep === 1 && !formData.treatment) {
      setErrorMsg('Por favor selecciona un objetivo de tratamiento para continuar.');
      return;
    }
    if (currentStep === 2 && !formData.condition) {
      setErrorMsg('Por favor selecciona tu condición actual percibida.');
      return;
    }
    if (currentStep === 3 && !formData.urgency) {
      setErrorMsg('Por favor indícanos con qué urgencia deseas iniciar.');
      return;
    }
    setErrorMsg('');
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmitToWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Por favor ingresa tu nombre completo para personalizar tu valoración.');
      return;
    }

    const whatsappUrl = createWhatsAppUrl({
      type: 'triage',
      data: {
        name: formData.name.trim(),
        treatment: formData.treatment || 'General / Por definir',
        condition: formData.condition || 'Valoración preventiva',
        urgency: formData.urgency || 'Por coordinar'
      }
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="diagnostico" className="py-16 lg:py-24 bg-white border-b border-nova-slate-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado del Módulo */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nova-cyan-light text-nova-cyan-dark text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Triage Digital Interactivo
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-nova-navy tracking-tight">
            Diagnóstico & Cotización en Línea
          </h2>
          <p className="text-sm sm:text-base text-nova-slate">
            Encuentra el tratamiento ideal y recibe una orientación médica preliminar directamente en tu WhatsApp en menos de 2 minutos.
          </p>
        </div>

        {/* Contenedor Principal del Wizard */}
        <div className="bg-nova-ice rounded-3xl p-6 sm:p-10 border border-nova-slate-border shadow-card relative">
          {/* Barra de Progreso */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-semibold text-nova-navy mb-2">
              <span className="flex items-center gap-1">
                Paso {currentStep} de {totalSteps}: <span className="text-nova-slate font-normal">{currentStepData?.title}</span>
              </span>
              <span className="text-nova-cyan font-bold">{Math.round(progressPercent)}% completado</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-nova-teal to-nova-cyan transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Mensaje de Error si falta selección */}
          {errorMsg && (
            <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Paso 1: Selección de Tratamiento */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <p className="text-xs font-bold text-nova-slate uppercase tracking-wider mb-2">
                {currentStepData.subtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentStepData.options.map((option) => {
                  const IconComp = iconMap[option.icon] || Sparkles;
                  const isSelected = formData.treatment === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption('treatment', option.id)}
                      className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3.5 relative active:scale-[0.98] ${
                        isSelected
                          ? 'bg-white border-nova-cyan ring-2 ring-nova-cyan/20 shadow-sm'
                          : 'bg-white hover:bg-slate-50 border-nova-slate-border hover:border-nova-cyan/40'
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-xl flex-shrink-0 ${
                          isSelected ? 'bg-nova-cyan text-white' : 'bg-nova-ice text-nova-navy'
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 pr-6">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-nova-navy">{option.title}</h4>
                        </div>
                        <p className="text-xs text-nova-slate leading-relaxed">{option.desc}</p>
                      </div>
                      {isSelected && (
                        <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-nova-cyan text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Paso 2: Condición Actual */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <p className="text-xs font-bold text-nova-slate uppercase tracking-wider mb-2">
                {currentStepData.subtitle}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {currentStepData.options.map((option) => {
                  const isSelected = formData.condition === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption('condition', option.id)}
                      className={`p-4 rounded-2xl text-left border transition-all flex items-start justify-between gap-4 active:scale-[0.98] ${
                        isSelected
                          ? 'bg-white border-nova-cyan ring-2 ring-nova-cyan/20 shadow-sm'
                          : 'bg-white hover:bg-slate-50 border-nova-slate-border hover:border-nova-cyan/40'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-bold text-nova-navy">{option.title}</h4>
                        <p className="text-xs text-nova-slate">{option.desc}</p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected
                            ? 'border-nova-cyan bg-nova-cyan text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Paso 3: Urgencia */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <p className="text-xs font-bold text-nova-slate uppercase tracking-wider mb-2">
                {currentStepData.subtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentStepData.options.map((option) => {
                  const isSelected = formData.urgency === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption('urgency', option.id)}
                      className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between gap-3 active:scale-[0.98] ${
                        isSelected
                          ? 'bg-white border-nova-cyan ring-2 ring-nova-cyan/20 shadow-sm'
                          : 'bg-white hover:bg-slate-50 border-nova-slate-border hover:border-nova-cyan/40'
                      }`}
                    >
                      <span className="inline-block self-start text-[10px] font-bold px-2 py-0.5 rounded bg-nova-navy-50 text-nova-navy">
                        {option.badge}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-nova-navy">{option.title}</h4>
                        <p className="text-xs text-nova-slate mt-1">{option.desc}</p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center self-end ${
                          isSelected
                            ? 'border-nova-cyan bg-nova-cyan text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Paso 4: Resumen & Despacho a WhatsApp */}
          {currentStep === 4 && (
            <form onSubmit={handleSubmitToWhatsApp} className="space-y-6">
              {/* Tarjeta de Resumen Preliminar */}
              <div className="p-4 rounded-2xl bg-white border border-nova-slate-border space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-nova-cyan uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-nova-cyan" />
                  <span>Resumen de tu Triage</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-nova-ice">
                    <span className="text-nova-slate block font-medium">Interés:</span>
                    <strong className="text-nova-navy">{formData.treatment || 'No especificado'}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-nova-ice">
                    <span className="text-nova-slate block font-medium">Condición:</span>
                    <strong className="text-nova-navy truncate block">{formData.condition || 'No especificado'}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-nova-ice">
                    <span className="text-nova-slate block font-medium">Urgencia:</span>
                    <strong className="text-nova-navy">{formData.urgency || 'No especificado'}</strong>
                  </div>
                </div>
              </div>

              {/* Campo para el Nombre */}
              <div className="space-y-2">
                <label htmlFor="triage-name" className="block text-xs font-bold text-nova-navy uppercase tracking-wider">
                  ¿A qué nombre preparamos tu valoración?
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-nova-slate absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="triage-name"
                    type="text"
                    required
                    placeholder="Escribe tu nombre y apellido"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-nova-slate-border bg-white text-sm text-nova-navy focus:outline-none focus:ring-2 focus:ring-nova-cyan focus:border-nova-cyan transition-all"
                  />
                </div>
                <p className="text-[11px] text-nova-slate">
                  Tus datos se transmiten directamente al equipo de especialistas de NovaSmile mediante WhatsApp oficial.
                </p>
              </div>

              {/* Botón Verde Conversión de Envío a WhatsApp */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-nova-whatsapp hover:bg-nova-whatsapp-hover text-white text-base font-bold rounded-2xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2.5"
              >
                <Send className="w-5 h-5" />
                <span>Recibir Mi Diagnóstico y Opciones en WhatsApp</span>
              </button>
            </form>
          )}

          {/* Botones de Navegación Inferior */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-nova-slate-border/80">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 text-xs font-bold text-nova-slate hover:text-nova-navy transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Atrás</span>
              </button>
            ) : (
              <span className="text-xs text-nova-slate font-medium">Paso inicial</span>
            )}

            {currentStep < totalSteps && (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 bg-nova-navy hover:bg-nova-navy-800 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
