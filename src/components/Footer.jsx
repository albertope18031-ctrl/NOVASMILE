import React from 'react';
import { clinicInfo, specialtiesData } from '../data/dentalData';
import { MapPin, Phone, Clock, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export function Footer({ onScrollToTriage, onOpenBooking, onOpenEmergency }) {
  return (
    <footer className="bg-nova-navy text-nova-ice border-t border-nova-navy-800">
      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Columna Marca & Identidad */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-novasmile.jpg"
                alt="NovaSmile Odontología"
                className="h-10 w-auto object-contain rounded bg-white p-1"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  NOVA<span className="text-nova-cyan font-light">SMILE</span>
                </span>
                <p className="text-[10px] uppercase tracking-widest text-nova-slate-light">
                  {clinicInfo.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-nova-slate-light leading-relaxed">
              La ciencia de tu salud bucal, el arte de tu mejor sonrisa. Odontología integral de alta precisión guiada por tecnología digital 3D y mínimamente invasiva.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-nova-slate-light">
              <ShieldCheck className="w-4 h-4 text-nova-gold" />
              <span>Instalaciones con estándares médicos certificados</span>
            </div>
          </div>

          {/* Columna Especialidades Rápidas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs text-nova-slate-light">
              {specialtiesData.map((s) => (
                <li key={s.id}>
                  <a href="#especialidades" className="hover:text-nova-cyan transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Accesos Directos */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Interacción Rápida
            </h4>
            <ul className="space-y-2 text-xs text-nova-slate-light">
              <li>
                <button onClick={onScrollToTriage} className="hover:text-nova-cyan transition-colors flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-nova-cyan" />
                  Diagnóstico en Línea
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-nova-cyan transition-colors">
                  Agendar en Consultorio
                </button>
              </li>
              <li>
                <a href="#comparador" className="hover:text-nova-cyan transition-colors">
                  Comparador de Opciones
                </a>
              </li>
              <li>
                <button onClick={onOpenEmergency} className="text-red-400 hover:text-red-300 font-medium transition-colors">
                  Canal de Urgencias 24/7
                </button>
              </li>
            </ul>
          </div>

          {/* Columna Ubicación & Horarios */}
          <div className="lg:col-span-3 space-y-3 text-xs text-nova-slate-light">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto & Ubicación
            </h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-nova-cyan flex-shrink-0 mt-0.5" />
              <span>{clinicInfo.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-nova-whatsapp flex-shrink-0" />
              <a
                href={`https://wa.me/${clinicInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-nova-whatsapp transition-colors"
              >
                {clinicInfo.whatsappDisplay} (WhatsApp Oficial)
              </a>
            </div>
            <div className="flex items-start gap-2 pt-1">
              <Clock className="w-4 h-4 text-nova-cyan flex-shrink-0 mt-0.5" />
              <div>
                <p>{clinicInfo.hours.weekdays}</p>
                <p>{clinicInfo.hours.saturday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior de Copyright & Aviso Médico */}
        <div className="mt-12 pt-8 border-t border-nova-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-nova-slate">
          <p>
            © {new Date().getFullYear()} {clinicInfo.fullName}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1">
            Odontología ética, transparente y sin dolor.
          </p>
        </div>
      </div>
    </footer>
  );
}
