/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Clock, Calendar, CheckCircle2, Navigation } from 'lucide-react';
import { CLINIC_ADDRESS, CLINIC_TIMINGS, MAP_IFRAME_URL } from '../data';

export default function LocationSection() {
  const handleOpenGoogleMaps = () => {
    // Elegant navigation linker
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <section id="location" className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#158A84] block font-sans">CLINIC ADDRESS</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2345]">
            Visit Our Clinic
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-light">
            Conveniently nestled in the central commercial hub of Lucknow, offering reserved parking and 24/7 security.
          </p>
        </div>

        {/* Location Layout Panel Grid (12 cols) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Panel: Contact Address, Timings and Navigation Advice (5 cols) */}
          <div className="lg:col-span-5 bg-gray-50 border border-gray-100 p-6 sm:p-10 rounded-[28px] shadow-sm flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Address block */}
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#158A84]/10 text-[#158A84] flex items-center justify-center shadow-sm">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-black text-xl text-[#1B2345]">Our Location</h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                    {CLINIC_ADDRESS}
                  </p>
                  <p className="text-xs text-gray-400 font-medium">
                    📍 Landmark: Near National Dental College / Suraj Deep Mall Zone
                  </p>
                </div>
              </div>

              {/* Consultation Timings Block */}
              <div className="space-y-4 pt-2 border-t border-gray-200/50">
                <div className="w-10 h-10 rounded-xl bg-[#158A84]/10 text-[#158A84] flex items-center justify-center shadow-sm">
                  <Clock size={20} />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display font-black text-xl text-[#1B2345]">Consultation Hours</h3>
                  <div className="space-y-2.5">
                    {CLINIC_TIMINGS.map((time, idx) => (
                      <div key={idx} className="flex justify-between items-start text-xs sm:text-sm font-sans">
                        <span className="font-bold text-[#1B2345]/80 flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#158A84]" /> {time.days}
                        </span>
                        <span className="text-gray-500 text-right max-w-[200px] leading-tight font-light">{time.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Patient checklist */}
              <div className="space-y-2 pt-6 border-t border-gray-200/50 text-xs text-gray-500 font-sans font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-teal-500" />
                  <span>Free wheelchair lift accessibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-teal-500" />
                  <span>Visitor parking space inside Suraj Deep Complex</span>
                </div>
              </div>
            </div>

            {/* Direct navigation trigger */}
            <div className="pt-8">
              <button
                onClick={handleOpenGoogleMaps}
                className="w-full bg-[#1B2345] hover:bg-[#158A84] text-white py-3.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <Navigation size={14} />
                <span>Navigate on Google Maps</span>
              </button>
            </div>
            
          </div>

          {/* Right Panel: Map iframe container (7 cols) */}
          <div className="lg:col-span-7 rounded-[28px] overflow-hidden shadow-md border border-gray-100 aspect-video lg:aspect-auto min-h-[350px] relative">
            {/* Embedded Iframe */}
            <iframe
              src={MAP_IFRAME_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Suraj Deep Complex"
              className="w-full h-full"
            />
            {/* Overlay hint */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#1B2345] px-3 py-1.5 rounded-lg text-[10px] font-sans font-bold shadow-md border border-gray-100 hidden sm:block">
              Interactive Google Maps
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
