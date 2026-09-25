import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SmileTransformationSlider } from './components/SmileTransformationSlider';
import { PatientGoalsSection } from './components/PatientGoalsSection';
import { TreatmentComparator } from './components/TreatmentComparator';
import { AnxietyFreeSection } from './components/AnxietyFreeSection';
import { FirstVisitJourney } from './components/FirstVisitJourney';
import { SpecialistsSection } from './components/SpecialistsSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { EmergencyModal } from './components/EmergencyModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  const handleScrollToTransformations = () => {
    const el = document.getElementById('transformaciones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-nova-ice text-nova-text flex flex-col font-sans selection:bg-nova-mint selection:text-white">
      {/* 1. HEADER BOUTIQUE: Menú minimalista + Botón "Valoración 3D" */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onScrollToTriage={handleScrollToTransformations}
      />

      {/* Contenido Principal con la Nueva Estructura Editorial de 9 Bloques */}
      <main className="flex-grow">
        {/* 2. HERO EDITORIAL HUMANO: Fotografía estética + Promesa "Sonrisas sin Dolor" */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToTransformations={handleScrollToTransformations}
          onOpenEmergency={() => setIsEmergencyOpen(true)}
        />

        {/* 3. ANTES Y DESPUÉS INTERACTIVO (Smile Transformation Slider): La prueba visual reina */}
        <SmileTransformationSlider
          onSelectCaseForBooking={(caseTitle) => handleOpenBooking(caseTitle)}
        />

        {/* 4. MENÚ "POR TU OBJETIVO" (Patient-Centric Tabs): [Alinear] • [Blanquear] • [Perdí un diente]... */}
        <PatientGoalsSection
          onSelectGoalForBooking={(goalTitle) => handleOpenBooking(goalTitle)}
        />

        {/* 5. EL COMPARADOR DE ESTILO DE VIDA: Invisalign vs Brackets & Carillas de Porcelana vs Resina */}
        <TreatmentComparator
          onSelectTreatmentForBooking={(treatmentName) => handleOpenBooking(treatmentName)}
        />

        {/* 6. PROTOCOLO LIBRE DE ANSIEDAD: Tecnología & Confort 3D (Escáner sin pastas + Anestesia digital) */}
        <AnxietyFreeSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 7. "CÓMO ES TU PRIMERA CONSULTA": El viaje del paciente en 3 etapas simples */}
        <FirstVisitJourney
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 8. CONOCE A TUS ESPECIALISTAS: Humanizar la medicina con nombres, fotos y cédulas */}
        <SpecialistsSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 9. RESERVA DE VALORACIÓN CON SELECCIÓN DE MOTIVO: Módulo interactivo en página */}
        <BookingSection />
      </main>

      {/* Pie de Página Institucional Boutique Deep Emerald */}
      <Footer
        onScrollToTriage={handleScrollToTransformations}
        onOpenBooking={() => handleOpenBooking()}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Modales Interactivos Flotantes */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultService={selectedService}
      />

      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />

      {/* Botón Flotante Global de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
