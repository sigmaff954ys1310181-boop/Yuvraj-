/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, Cpu, ThumbsUp, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="text-[#158A84]" size={28} />,
      title: "Experienced Dentist",
      description: "Led by Dr. Rajesh Kumar Singh, with over 25+ years of dedicated clinical experience and thousands of successful dental restorations."
    },
    {
      icon: <Cpu className="text-[#158A84]" size={28} />,
      title: "Modern Equipment",
      description: "Equipped with state-of-the-art computer-guided implant systems, computerized digital X-rays, and premium laser sterilization tech."
    },
    {
      icon: <ThumbsUp className="text-[#158A84]" size={28} />,
      title: "Affordable Pricing",
      description: "We represent absolute pricing honesty. Standard treatment breakdowns are detailed upfront with zero hidden margins."
    },
    {
      icon: <Smile className="text-[#158A84]" size={28} />,
      title: "Comfortable Environment",
      description: "A calming luxury-spa workspace featuring noise-canceling dental channels, cozy waiting rooms, and ultra-gentle care."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background soft geometry pattern lines */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#158A84]/2 rounded-full filter blur-2xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-sky-50 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Banner with visual accent boundary */}
        <div className="bg-gradient-to-br from-[#1B2345] to-[#252f5c] text-white rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle decoration vector circle */}
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#158A84]/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-[250px] h-[250px] bg-white/5 rounded-full pointer-events-none" />

          {/* Section Heading Inside Banner */}
          <div className="relative z-10 max-w-3xl mb-12 lg:mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#158A84]">WHY PATIENTS TRUST US</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Clinically Driven. <br className="sm:hidden" />
              Patient Appreciated.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-light max-w-xl">
              We maintain absolute commitment to surgical detailing, hygiene compliance, and personalized treatment experiences.
            </p>
          </div>

          {/* 4-Column Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4 p-5 rounded-[20px] bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all group"
              >
                {/* Feature Icon Indicator */}
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {feat.icon}
                </div>

                {/* Info and detail lines */}
                <div className="space-y-2">
                  <h3 className="font-sans font-extrabold text-base sm:text-lg text-white">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
