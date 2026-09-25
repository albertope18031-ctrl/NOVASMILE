import React, { useState, useEffect } from 'react';
import { Sparkles, Smile, Scale, ShieldCheck, Clock, UserCheck } from 'lucide-react';

const sections = [
  { id: 'transformaciones', label: 'Resultados', icon: Sparkles },
  { id: 'objetivos', label: 'Tu Objetivo', icon: Smile },
  { id: 'comparador', label: 'Comparar', icon: Scale },
  { id: 'confort-3d', label: 'Cero Dolor', icon: ShieldCheck },
  { id: 'primera-cita', label: '1ª Cita', icon: Clock },
  { id: 'especialistas', label: 'Doctores', icon: UserCheck },
];

export function MobileQuickPills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('transformaciones');

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar solo después de pasar el Hero (aprox 350px de scroll)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detectar sección activa
      const scrollPosition = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120; // Compensación por navbar fijo + barra de píldoras
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-b border-nova-slate-border py-2 px-3 shadow-xs animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
        {sections.map((sec) => {
          const IconComp = sec.icon;
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border flex-shrink-0 ${
                isActive
                  ? 'bg-nova-navy text-white border-nova-navy shadow-xs ring-1 ring-nova-cyan/30'
                  : 'bg-nova-ice hover:bg-slate-100 text-nova-slate border-nova-slate-border/80'
              }`}
            >
              <IconComp className={`w-3 h-3 ${isActive ? 'text-nova-cyan' : 'text-nova-teal'}`} />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
