import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TriageWizard } from './components/TriageWizard';
import { TreatmentComparator } from './components/TreatmentComparator';
import { ServicesSection } from './components/ServicesSection';
import { TrustSection } from './components/TrustSection';
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

  const handleScrollToTriage = () => {
    const el = document.getElementById('diagnostico');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-nova-ice text-nova-navy flex flex-col font-sans selection:bg-nova-cyan selection:text-white">
      {/* Barra de Navegación Institucional */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onScrollToTriage={handleScrollToTriage}
      />

      {/* Contenido Principal */}
      <main className="flex-grow">
        {/* Sección Hero con Propuesta de Valor */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToTriage={handleScrollToTriage}
          onOpenEmergency={() => setIsEmergencyOpen(true)}
        />

        {/* Triage / Diagnóstico en Línea (Motor de Conversión 4 Pasos) */}
        <TriageWizard />

        {/* Comparador Interactivo de Tratamientos */}
        <TreatmentComparator
          onSelectTreatmentForBooking={(treatmentName) => handleOpenBooking(treatmentName)}
        />

        {/* Catálogo de 4 Especialidades Clínicas */}
        <ServicesSection
          onSelectService={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        {/* Compromiso Médico, Garantías & Tecnologías */}
        <TrustSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Pie de Página Institucional Deep Navy */}
      <Footer
        onScrollToTriage={handleScrollToTriage}
        onOpenBooking={() => handleOpenBooking()}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Modales Interactivos */}
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
