/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DoctorSection from './components/DoctorSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import BookingsViewer from './components/BookingsViewer';
import FloatingButtons from './components/FloatingButtons';
import { Appointment } from './types';
import { IMAGES } from './data';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isBookingsViewerOpen, setIsBookingsViewerOpen] = useState(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | undefined>(undefined);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Parse existing appointments from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('clinic_appointments');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading clinical storage profiles", e);
      }
    }
  }, []);

  const handleBookClick = (treatmentId?: string) => {
    setSelectedTreatmentId(treatmentId);
    setIsBookingOpen(true);
  };

  const handleAppointmentCreated = (newAppt: Appointment) => {
    const updated = [newAppt, ...appointments];
    setAppointments(updated);
    localStorage.setItem('clinic_appointments', JSON.stringify(updated));
  };

  const handleCancelAppointment = (id: string) => {
    if (window.confirm("Are you sure you want to cancel this appointment slot?")) {
      const updated = appointments.filter((appt) => appt.id !== id);
      setAppointments(updated);
      localStorage.setItem('clinic_appointments', JSON.stringify(updated));
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1B2345] relative font-sans antialiased overflow-x-hidden selection:bg-[#158A84]/20 selection:text-[#158A84]">
      {/* 1. Header with responsive transparency trigger */}
      <Navbar 
        onBookClick={() => handleBookClick()} 
        onManageBookingsClick={() => setIsBookingsViewerOpen(true)}
      />

      {/* 2. Primary Sections stack */}
      <main>
        {/* Hero Banner Section */}
        <Hero 
          onBookClick={() => handleBookClick()} 
          heroImgUrl={IMAGES.hero}
        />

        {/* Doctor Rajesh Kumar Section */}
        <DoctorSection 
          onBookClick={() => handleBookClick()}
        />

        {/* About Clinic Section */}
        <AboutSection />

        {/* Clinical Services Portfolio */}
        <ServicesSection 
          onBookClick={(id) => handleBookClick(id)}
        />

        {/* Why Choose Us Highlight Box */}
        <WhyChooseUs />

        {/* Google Reviews Testimonials */}
        <ReviewsSection />

        {/* Location & Embedded Map Details */}
        <LocationSection />

        {/* Contact Inquiry & Support FAQ desk */}
        <ContactSection />
      </main>

      {/* 3. Footer Branding */}
      <Footer onBookClick={() => handleBookClick()} />

      {/* 4. Overlays, Modals and Utility Drawers */}
      
      {/* Interactive Booking Scheduler form dialog */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedTreatmentId={selectedTreatmentId}
        onAppointmentCreated={handleAppointmentCreated}
      />

      {/* Patient Appointments Manager drawer */}
      <BookingsViewer
        isOpen={isBookingsViewerOpen}
        onClose={() => setIsBookingsViewerOpen(false)}
        appointments={appointments}
        onCancelAppointment={handleCancelAppointment}
        onBookImmediateClick={() => handleBookClick()}
      />

      {/* Persistent floating triggers: WhatsApp launcher, scroll assistance */}
      <FloatingButtons onBookClick={() => handleBookClick()} />
    </div>
  );
}
