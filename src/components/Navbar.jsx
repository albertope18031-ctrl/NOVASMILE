import React, { useState } from 'react';
import { clinicInfo } from '../data/dentalData';
import { Phone, Calendar, AlertCircle, Menu, X, Sparkles, Clock, MapPin } from 'lucide-react';

export function Navbar({ onOpenBooking, onOpenEmergency, onScrollToTriage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner de Atención Rápida */}
      <div className="bg-nova-navy text-nova-ice text-xs py-2 px-4 border-b border-nova-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-nova-slate-light">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-nova-cyan" />
              {clinicInfo.location}
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-nova-cyan" />
              {clinicInfo.hours.weekdays}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenEmergency}
              className="text-nova-gold hover:text-nova-gold-light font-medium flex items-center gap-1 transition-colors"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>¿Molestia activa o dolor agudo? Atención prioritaria</span>
            </button>
            <a
              href={`https://wa.me/${clinicInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 font-semibold text-nova-whatsapp hover:underline"
            >
              <Phone className="w-3 h-3" />
              {clinicInfo.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-nova-slate-border shadow-card transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Oficial NovaSmile */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo-novasmile.jpg"
              alt="NovaSmile Clínica Odontológica"
              className="h-12 w-auto object-contain rounded-md transition-transform group-hover:scale-[1.02]"
              onError={(e) => {
                // Fallback elegante en caso de ruta relativa
                e.target.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-nova-navy group-hover:text-nova-cyan transition-colors">
                NOVA<span className="font-light text-nova-cyan">SMILE</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-nova-slate">
                Odontología & Estética Dental
              </span>
            </div>
          </a>

          {/* Enlaces de Navegación (Escritorio - Header Boutique) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-nova-navy">
            <a href="#transformaciones" className="hover:text-nova-cyan transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-nova-cyan" />
              Antes y Después
            </a>
            <a href="#objetivos" className="hover:text-nova-cyan transition-colors">
              Por tu Objetivo
            </a>
            <a href="#comparador" className="hover:text-nova-cyan transition-colors">
              Comparador
            </a>
            <a href="#confort-3d" className="hover:text-nova-cyan transition-colors">
              Cero Dolor 3D
            </a>
            <a href="#primera-cita" className="hover:text-nova-cyan transition-colors">
              Primera Cita
            </a>
            <a href="#especialistas" className="hover:text-nova-cyan transition-colors">
              Especialistas
            </a>
          </nav>

          {/* Acciones (CTA Boutique) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEmergency}
              className="px-3 py-2 text-xs font-semibold text-nova-navy hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-lg border border-red-200 transition-colors flex items-center gap-1.5"
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-500" />
              <span>Urgencias</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 sm:px-5 py-2.5 bg-nova-cyan hover:bg-nova-cyan-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm hover:shadow-cyan-glow transition-all active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Valoración 3D</span>
            </button>
          </div>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-nova-navy hover:text-nova-cyan rounded-lg transition-colors"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-nova-slate-border px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <a
              href="#transformaciones"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-nova-navy hover:bg-nova-ice rounded-lg"
            >
              Antes y Después (Casos Clínicos)
            </a>
            <a
              href="#objetivos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-nova-navy hover:bg-nova-ice rounded-lg"
            >
              Tratamientos por tu Objetivo
            </a>
            <a
              href="#comparador"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-nova-navy hover:bg-nova-ice rounded-lg"
            >
              Comparador de Estilo de Vida
            </a>
            <a
              href="#confort-3d"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-nova-navy hover:bg-nova-ice rounded-lg"
            >
              Tecnología Cero Dolor & Cero Ansiedad
            </a>
            <a
              href="#primera-cita"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-nova-navy hover:bg-nova-ice rounded-lg"
            >
              Cómo es tu Primera Consulta
            </a>
            <a
              href="#especialistas"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-nova-navy hover:bg-nova-ice rounded-lg"
            >
              Conoce a tus Especialistas
            </a>

            <div className="pt-3 border-t border-nova-slate-border flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-nova-cyan text-white text-center font-bold text-sm rounded-xl shadow-sm"
              >
                Reservar Valoración 3D
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-red-700 bg-red-50 border border-red-200 rounded-xl"
              >
                Línea de Urgencia Dental (Dolor activo)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
