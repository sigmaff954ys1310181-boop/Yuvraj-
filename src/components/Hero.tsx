/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Star, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_PHONE } from '../data';

interface HeroProps {
  onBookClick: () => void;
  heroImgUrl: string;
}

export default function Hero({ onBookClick, heroImgUrl }: HeroProps) {
  return (
    <section id="home" className="relative bg-white pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Soft abstract medical shape background decorations */}
      <div className="absolute top-[10%] right-[-5%] w-[450px] h-[450px] bg-[#158A84]/5 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-slate-100 rounded-full filter blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Elegant Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#158A84]/10 text-[#158A84] rounded-full text-xs font-sans font-semibold tracking-wide"
            >
              <span className="flex items-center text-amber-500">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </span>
              <span>148+ Verified Google Reviews</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#1B2345] leading-[1.1] tracking-tight"
              >
                Healthy Smiles. <br className="hidden sm:inline" />
                <span className="text-[#158A84]">Trusted Care.</span>
              </motion.h1>
              
              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Providing advanced dental treatments with compassion, precision, and decades of experience. Dr. Rajesh Kumar Singh restores your natural, radiant smile using modern technologies and gentle care.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto bg-[#158A84] hover:bg-[#116e69] text-white font-sans font-semibold px-8 py-4 rounded-xl shadow-lg shadow-[#158A84]/20 hover:shadow-xl hover:shadow-[#158A84]/30 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
                id="hero-book-btn"
              >
                <Calendar size={18} className="transition-transform group-hover:scale-110" />
                <span>Book Appointment</span>
              </button>
              
              <a
                href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto border-2 border-gray-200 hover:border-[#158A84] bg-white text-[#1B2345] hover:text-[#158A84] font-sans font-semibold px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-sm hover:shadow"
              >
                <Phone size={18} className="text-[#158A84] transition-transform group-hover:scale-110" />
                <span>Call Now: {CLINIC_PHONE}</span>
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 text-left"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#158A84]/10 text-[#158A84] flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1B2345]">100% Sterilized</h4>
                  <p className="text-xs text-gray-500">Strict safety protocols</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#158A84]/10 text-[#158A84] flex items-center justify-center shrink-0">
                  <Heart size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1B2345]">Care for All</h4>
                  <p className="text-xs text-gray-500">Kid & elder friendly</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative relative-parent mx-auto max-w-md lg:max-w-none"
            >
              {/* Premium geometric layout decoration */}
              <div className="absolute inset-0 bg-[#158A84]/10 rounded-[30px] transform rotate-3 translate-x-2 translate-y-2 -z-10" />
              
              {/* Image Container with Luxury Frame */}
              <div className="overflow-hidden rounded-[30px] shadow-2xl border-4 border-white aspect-[16/11]">
                <img
                  src={heroImgUrl}
                  alt="Dr. Rajesh's Premium Dental Clinic Room"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float badge 1: Trust marker */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute shrink-0 top-6 -left-6 bg-white/90 backdrop-blur shadow-lg rounded-2xl p-4 flex items-center gap-3 border border-gray-100 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-white font-black text-lg">
                  25+
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium leading-none">Clinical Experience</p>
                  <p className="text-sm font-black text-[#1B2345] mt-1">Years of Trust</p>
                </div>
              </motion.div>

              {/* Float badge 2: ISO certified */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-6 -right-6 bg-white/90 backdrop-blur shadow-lg rounded-2xl p-3.5 flex items-center gap-2.5 border border-gray-100 hidden sm:flex"
              >
                <div className="w-8 h-8 rounded-full bg-[#158A84]/20 text-[#158A84] flex items-center justify-center">
                  <Star size={16} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1B2345] leading-none">Modern Technology</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Computer-Guided Care</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
