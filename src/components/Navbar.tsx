/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Clock } from 'lucide-react';
import { CLINIC_NAME, CLINIC_PHONE } from '../data';

interface NavbarProps {
  onBookClick: () => void;
  onManageBookingsClick: () => void;
}

export default function Navbar({ onBookClick, onManageBookingsClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['home', 'about', 'services', 'reviews', 'location', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Location', id: 'location' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top micro-bar for premium utility - hides on scroll of 50px for minimalistic cleanliness */}
      <div className={`hidden md:block bg-gradient-to-r from-[#1B2345] to-[#252f5c] text-white py-1.5 px-6 font-sans text-xs transition-transform duration-300 ${isScrolled ? '-translate-y-full absolute' : 'relative z-50'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#158A84]" /> Mon-Sat: 10 AM - 2 PM, 5 PM - 8:30 PM
            </span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} className="text-[#158A84]" /> Urgent emergency care available
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={onManageBookingsClick} 
              className="hover:text-[#158A84] transition-colors cursor-pointer font-medium"
            >
              My Appointments
            </button>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">ISO 9001:2015 Certified Clinic</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Clinic Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1B2345] to-[#158A84] flex items-center justify-center shadow-md shadow-[#158A84]/10 group-hover:scale-105 transition-transform">
              <span className="text-white font-serif font-bold text-xl leading-none">R</span>
            </div>
            <div>
              <span className="block text-base sm:text-lg font-serif font-black tracking-tight text-[#1B2345] group-hover:text-[#158A84] transition-colors">
                Dr. Rajesh Kumar
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-gray-500 font-medium">
                Premium Dental Clinic
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans font-medium text-[15px] cursor-pointer transition-colors ${
                  activeSection === item.id
                    ? 'text-[#158A84] font-semibold'
                    : 'text-[#1B2345]/80 hover:text-[#158A84]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onManageBookingsClick}
              className="lg:hidden text-xs font-semibold text-[#1B2345] hover:text-[#158A84] transition-colors cursor-pointer mr-2"
            >
              My Bookings
            </button>
            <a
              href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`}
              className="hidden xl:flex items-center gap-2 text-[#1B2345] font-semibold text-sm hover:text-[#158A84] transition-colors"
            >
              <Phone size={16} className="text-[#158A84]" /> {CLINIC_PHONE}
            </a>
            <button
              onClick={onBookClick}
              className="bg-[#158A84] hover:bg-[#116e69] text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-[#158A84]/10 hover:shadow-lg hover:shadow-[#158A84]/20 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              id="nav-cta-btn"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={onManageBookingsClick}
              className="sm:hidden text-xs font-semibold text-[#1B2345] hover:text-[#158A84] transition-colors cursor-pointer px-2 py-1 bg-gray-100 rounded-lg"
            >
              Bookings
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1B2345] hover:text-[#158A84] focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-4 absolute top-full left-0 right-0 shadow-lg animate-fade-in-down">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-sans font-medium text-base py-1 cursor-pointer ${
                    activeSection === item.id ? 'text-[#158A84] font-semibold' : 'text-[#1B2345]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 border border-gray-200 text-[#1B2345] font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <Phone size={16} className="text-[#158A84]" /> Call Clinic
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="bg-[#158A84] text-white font-sans font-semibold py-3 rounded-xl shadow-md text-center hover:bg-[#116e69] transition-all cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
