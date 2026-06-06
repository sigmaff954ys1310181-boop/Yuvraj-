/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  ShieldCheck, 
  Sparkle, 
  Grid, 
  Sparkles, 
  Crown, 
  Heart, 
  Activity, 
  ChevronRight, 
  ArrowRight,
  Stethoscope,
  Clock,
  Coins
} from 'lucide-react';
import { SERVICES } from '../data';
import { DentalService } from '../types';

interface ServicesSectionProps {
  onBookClick: (treatmentId?: string) => void;
}

// Icon helper map matching iconName string to actual Lucide component
const iconLookup: Record<string, React.ComponentType<{ className?: string, size?: number }>> = {
  FlameKindling: Flame,
  ShieldCheck: ShieldCheck,
  Sparkle: Sparkle,
  Grid: Grid,
  Sparkles: Sparkles,
  Crown: Crown,
  Heart: Heart,
  Activity: Activity
};

export default function ServicesSection({ onBookClick }: ServicesSectionProps) {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section id="services" className="bg-[#1B2345]/3 py-16 lg:py-24 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#158A84]/2 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1B2345]/2 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#158A84] block">
            CLINICAL DEPARTMENTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2345] leading-tight">
            Premium Dental Services
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-light max-w-xl mx-auto">
            Experience therapeutic clinical treatments driven by computer-aided accuracy, sterilized tools, and compassionate patient ergonomics.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, index) => {
            const IconComponent = iconLookup[srv.iconName] || Stethoscope;
            const isHovered = hoveredCardId === srv.id;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredCardId(srv.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className={`bg-white rounded-[24px] p-6 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isHovered 
                    ? 'shadow-xl shadow-[#158A84]/5 border-[#158A84]/30 -translate-y-1.5' 
                    : 'shadow-md shadow-gray-100/60 border-gray-100'
                }`}
              >
                {/* Accent subtle background flare on hover */}
                <div 
                  className={`absolute -right-12 -top-12 w-28 h-28 bg-[#158A84]/5 rounded-full transition-transform duration-500 ${
                    isHovered ? 'scale-150' : 'scale-100'
                  }`} 
                />

                <div className="space-y-4 relative z-10">
                  {/* Service Icon Box */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isHovered 
                      ? 'bg-[#158A84] text-white rotate-6 scale-105' 
                      : 'bg-[#158A84]/10 text-[#158A84]'
                  }`}>
                    <IconComponent size={24} />
                  </div>

                  {/* Header & Details */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-black text-lg text-[#1B2345] group-hover:text-[#158A84] transition-colors">
                      {srv.name}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-light min-h-[50px]">
                      {srv.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Info block: Cost & Duration - subtle detail for luxury feeling */}
                <div className="mt-5 pt-4 border-t border-gray-100/80 flex justify-between items-center text-[11px] font-sans text-gray-400 font-semibold relative z-10">
                  <span className="flex items-center gap-1">
                    <Coins size={12} className="text-gray-300 shrink-0" /> {srv.costEstimate || 'Est: Custom'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-gray-300 shrink-0" /> {srv.duration || '30m'}
                  </span>
                </div>

                {/* Action button inside card */}
                <div className="mt-4 pt-1 relative z-10">
                  <button
                    onClick={() => onBookClick(srv.id)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                      isHovered
                        ? 'bg-[#158A84] text-white shadow-md shadow-[#158A84]/10'
                        : 'bg-[#1B2345]/5 text-[#1B2345] hover:bg-[#1B2345]/10'
                    }`}
                  >
                    <span>Book Treatment</span>
                    <ChevronRight size={13} className={`transition-transform duration-300 ${isHovered ? 'translate-x-0.5' : ''}`} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section bottom note regarding customized dental plans */}
        <div className="mt-12 text-center p-6 bg-white rounded-3xl border border-gray-100 max-w-2xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-500 leading-normal text-left font-light max-w-md">
            <span className="font-bold text-[#1B2345] block mb-0.5">Customized treatments needed?</span>
            Dr. Rajesh custom designs full surgical and orthodontic transformations tailored exactly to your clinical x-rays and structural reports.
          </p>
          <button
            onClick={() => onBookClick()}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-[#1B2345] to-[#252f5c] hover:from-[#116e69] hover:to-[#158A84] text-white text-xs font-bold rounded-xl shadow transition-all cursor-pointer flex items-center justify-center gap-1 shrink-0"
          >
            <span>Consult doctor now</span>
            <ArrowRight size={13} />
          </button>
        </div>

      </div>
    </section>
  );
}
