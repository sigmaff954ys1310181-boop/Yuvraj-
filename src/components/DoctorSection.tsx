/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Award, CheckCircle, GraduationCap } from 'lucide-react';
import { CLINIC_DOCTOR } from '../data';

interface DoctorSectionProps {
  onBookClick: () => void;
}

export default function DoctorSection({ onBookClick }: DoctorSectionProps) {
  const doctor = CLINIC_DOCTOR;

  return (
    <section id="doctor" className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[30%] left-[-5%] w-96 h-96 bg-[#158A84]/5 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#158A84]">Expert Dentist</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2345]">
            Meet Our Senior Surgeon
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-light">
            Entrust your clinical care to one of Lucknow's most respected tooth conservation specialists and implantologists.
          </p>
        </div>

        {/* Doctor Card with glassmorphism as requested */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Doctor Image Panel (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative min-h-[350px] lg:min-h-[450px] rounded-[24px] overflow-hidden shadow-xl"
          >
            <img
              src={doctor.photoUrl}
              alt={doctor.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Elegant overlay card details on image */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-center justify-center">
              <h3 className="font-serif font-black text-xl tracking-wide">{doctor.name}</h3>
              <p className="text-xs text-[#158A84] font-semibold mt-1 uppercase tracking-wider">{doctor.title}</p>
            </div>
          </motion.div>

          {/* Doctor Info Panel (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white/70 backdrop-blur-md border border-white/40 p-6 sm:p-10 rounded-[28px] shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Doctor Header details */}
              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-[#1B2345] leading-tight">
                  {doctor.name}
                </h3>
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-gray-500">
                  <span className="text-[#158A84] font-bold">25+ Years Experience</span>
                  <span>•</span>
                  <span>Specialist Implantologist & RCT expert</span>
                </div>
              </div>

              {/* Qualification section */}
              <div className="p-4 bg-[#158A84]/5 rounded-xl border border-[#158A84]/15 flex items-start gap-3.5">
                <GraduationCap className="text-[#158A84] shrink-0 mt-0.5" size={22} />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400">Academic Qualification</h4>
                  <p className="text-sm font-bold text-[#1B2345] mt-1">
                    {doctor.qualification}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 font-light">
                    Graduated from the prestigious Dental Wing of KGMC Lucknow, India's foremost medical powerhouse.
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                {doctor.bio}
              </p>

              {/* Achievements Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-widest text-[#1B2345] flex items-center gap-1.5">
                  <Award size={14} className="text-[#158A84]" /> Key Clinical Achievements
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {doctor.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-sans">
                      <CheckCircle size={15} className="text-[#158A84] shrink-0" fill="#158A84" stroke="white" />
                      <span className="font-medium">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA action bottom row */}
            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <span className="text-xs uppercase text-gray-400 font-medium">Have questions? Speak with Dr. Rajesh</span>
                <p className="text-base font-black text-[#1B2345] mt-0.5 flex items-center gap-1.5 focus:text-[#158A84]">
                  <Phone size={14} className="text-[#158A84]" /> {doctor.phone}
                </p>
              </div>
              
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto bg-[#158A84] hover:bg-[#116e69] text-white font-sans font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
              >
                Schedule consultation
              </button>
            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
