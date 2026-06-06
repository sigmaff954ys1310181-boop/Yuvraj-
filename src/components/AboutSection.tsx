/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CalendarRange, HeartHandshake, Zap } from 'lucide-react';
import { IMAGES } from '../data';

export default function AboutSection() {
  const highlights = [
    {
      icon: <ShieldCheck className="text-[#158A84]" size={20} />,
      title: "Gold-Standard Hygiene",
      desc: "Four-tier class-B autoclave sterilization protocol to ensure absolute sterile conditions for every surgery."
    },
    {
      icon: <CalendarRange className="text-[#158A84]" size={20} />,
      title: "Patient-Focused Scheduling",
      desc: "No overbooking, minimal queue waiting times, and extended detailed consultative slots for complete listening."
    },
    {
      icon: <HeartHandshake className="text-[#158A84]" size={20} />,
      title: "Transparent, Honest Pricing",
      desc: "Clear upfront billing, no hidden fees, and standard pricing breakdowns explained before starting treatments."
    },
    {
      icon: <Zap className="text-[#158A84]" size={20} />,
      title: "Advanced Bio-Compatible Materials",
      desc: "We exclusively import premium implants and restorations (e.g. zirconia crowns, BPS composites) certified free from heavy toxic metals."
    }
  ];

  return (
    <section id="about" className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text explanation (7 cols on large) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#158A84] block font-sans">
                ABOUT THE CLINIC
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2345] leading-tight">
                A doctor who listens.<br />
                <span className="text-[#158A84]">A clinic you trust.</span>
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              Since 2001, we have built a legacy of dental trust in Butler Colony, Lucknow. We recognize that visiting the dentist can spark anxiety, which is why we’ve revolutionized the environment. By blending luxury-spa aesthetics, premium sterilized equipment, and a patient-first communication layer, we render your visit therapeutic.
            </p>

            <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed font-light">
              Our clinical protocol is built on custom patient diagnostics. We listen closely to your physiological constraints, food habits, and facial aesthetic expectations, drafting individual restorative treatment maps. We do not rushing from tooth to tooth; our focus is on building complete oral health harmony that stands the test of time.
            </p>

            {/* Grid of high-value clinic features */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4 p-4 border border-gray-100 hover:border-[#158A84]/20 hover:bg-gray-50/50 rounded-2xl transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#158A84]/10 flex items-center justify-center shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1B2345] font-sans">{highlight.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed font-light">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image & Stats Graphic (5 cols on large) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="relative rounded-[28px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gray-100"
            >
              <img
                src={IMAGES.interior}
                alt="Clinic Interior Waiting Lounge"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Premium Floating overlay block presenting statistics or metrics */}
              <div className="absolute inset-x-6 bottom-6 bg-white/95 backdrop-blur shadow-xl rounded-2xl p-5 border border-gray-100/40 text-center">
                <div className="flex justify-around items-center divide-x divide-gray-100">
                  <div className="px-3">
                    <p className="text-3xl font-display font-black text-[#158A84]">15k+</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mt-1">Happy Patients</p>
                  </div>
                  <div className="px-3">
                    <p className="text-3xl font-display font-black text-[#1B2345]">25+</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mt-1">Years Practice</p>
                  </div>
                  <div className="px-3">
                    <p className="text-3xl font-display font-black text-[#158A84]">99%</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mt-1">Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
