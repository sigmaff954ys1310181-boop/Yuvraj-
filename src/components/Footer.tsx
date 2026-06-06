/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Clock, 
  Star,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { 
  CLINIC_NAME, 
  CLINIC_PHONE, 
  CLINIC_EMAIL, 
  CLINIC_ADDRESS, 
  SERVICES 
} from '../data';

interface FooterProps {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  const handleScrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const elPos = elRect - bodyRect;
      window.scrollTo({
        top: elPos - offset,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2345] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Columns Grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-gray-800">
          
          {/* Column 1: App branding (4 wide) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#158A84] flex items-center justify-center shadow">
                <span className="text-white font-serif font-black text-lg">R</span>
              </div>
              <div>
                <span className="block text-base font-serif font-black text-white leading-none">
                  Dr. Rajesh Kumar
                </span>
                <span className="block text-[8px] uppercase tracking-widest text-[#158A84] font-bold mt-1">
                  Premium Dental Clinic
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light font-sans">
              Decades of experience in restorative, orthodontic, pediatric, and structural implant surgery. Dedicated to delivering advanced computer-guided treatments paired with elite hygiene safeguards.
            </p>

            {/* Google review star summary */}
            <div className="flex items-center gap-2 p-3 bg-white/[0.03] border border-white/[0.05] rounded-xl max-w-xs text-xs">
              <Star size={14} className="text-amber-500 fill-amber-500 shrink-0" />
              <span className="font-sans font-semibold text-gray-300 text-[11px]">
                4.9/5 Rating (148+ Google Reviews)
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-[#158A84] hover:text-white flex items-center justify-center transition-colors text-gray-400 shadow cursor-pointer">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-[#158A84] hover:text-white flex items-center justify-center transition-colors text-gray-400 shadow cursor-pointer">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-[#158A84] hover:text-white flex items-center justify-center transition-colors text-gray-400 shadow cursor-pointer">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-[#158A84] hover:text-white flex items-center justify-center transition-colors text-gray-400 shadow cursor-pointer">
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 wide) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#158A84] pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['Home', 'About', 'Services', 'Reviews', 'Location', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleScrollToId(link.toLowerCase())}
                    className="hover:text-[#158A84] text-gray-400 font-sans font-medium transition-colors text-left flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronRight size={12} className="text-gray-600" />
                    <span>{link}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Major Services Directory (3 wide) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#158A84] pl-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleScrollToId('services')}
                    className="hover:text-[#158A84] text-gray-400 font-sans font-medium transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <div className="w-1 h-1 bg-[#158A84] rounded-full shrink-0" />
                    <span className="truncate">{srv.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address Contact overview (3 wide) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#158A84] pl-2">
              Contact Desk
            </h4>
            
            <div className="space-y-3.5 text-xs text-gray-400">
              
              {/* Address details */}
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#158A84] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">{CLINIC_ADDRESS}</span>
              </div>

              {/* Phone detail */}
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#158A84] shrink-0" />
                <a href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`} className="hover:text-[#158A84] font-semibold text-gray-300">
                  {CLINIC_PHONE}
                </a>
              </div>

              {/* Email detail */}
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#158A84] shrink-0" />
                <a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-[#158A84] font-medium transition-colors break-all">
                  {CLINIC_EMAIL}
                </a>
              </div>

              {/* Direct Booking action */}
              <div className="pt-2">
                <button
                  onClick={onBookClick}
                  className="w-full bg-[#158A84] hover:bg-[#116e69] text-white py-2 px-4 rounded-xl text-[11px] font-bold tracking-wide flex items-center justify-center gap-1 cursor-pointer transition-all shadow shadow-black/25"
                >
                  <span>Schedule Consultation</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Brand Copyright and Certification notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-gray-500 font-medium">
          
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#158A84]" />
            <span>© {currentYear} Dr. Rajesh's Premium Dental. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hover:text-[#158A84] transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#158A84] transition-colors cursor-pointer">Sterilization Standard</span>
            <span>•</span>
            <span className="hover:text-[#158A84] transition-colors cursor-pointer">Lucknow Dental Council</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
