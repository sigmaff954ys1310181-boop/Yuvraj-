/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_WHATSAPP, CLINIC_PHONE } from '../data';

interface FloatingButtonsProps {
  onBookClick: () => void;
}

export default function FloatingButtons({ onBookClick }: FloatingButtonsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hello Dr. Rajesh's Dental Clinic, I would like to inquire about booking a dental slot.");
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* 1. Floating WhatsApp Button (Standard Bottom-Right) */}
      <div className={`fixed ${isVisible ? 'bottom-[84px] sm:bottom-6' : 'bottom-6'} right-4 sm:right-6 z-40 flex flex-col items-center space-y-1.5 sm:space-y-3.5 transition-all duration-300`}>
        
        {/* Text prompt appearing on load helper */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              onClick={handleWhatsAppChat}
              className="bg-[#1B2345] text-white px-3.5 py-1.5 rounded-full text-[11px] font-sans font-bold shadow-md shadow-[#1B2345]/10 border border-gray-700/50 cursor-pointer hover:bg-[#158A84] transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
              <span>Dental Desk Online</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Icon Circle Ring */}
        <motion.button
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={handleWhatsAppChat}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/20 cursor-pointer transform hover:scale-105 active:scale-95 transition-all relative overflow-hidden group border-2 border-white"
          aria-label="Chat on WhatsApp"
        >
          {/* Animated pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75 pointer-events-none group-hover:scale-110 transition-transform" />
          <MessageCircle size={28} fill="currentColor" className="relative z-10" />
        </motion.button>
      </div>

      {/* 2. Floating / Sticky Book Appointment Button (Bottom-Left conversion helper) */}
      <AnimatePresence>
        {isVisible && (
          <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
            <motion.button
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              onClick={onBookClick}
              className="px-5 py-3.5 bg-[#158A84] text-white rounded-full font-sans font-extrabold text-xs tracking-wider uppercase flex items-center gap-2 shadow-xl shadow-[#158A84]/20 hover:bg-[#116e69] transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar size={14} />
              <span>Book Appointment Slot</span>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile-only sticky bottom bar for instantaneous call conversion */}
      <div className="sm:hidden fixed bottom-14 left-0 right-0 z-40 px-4 pointer-events-none">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full bg-[#1B2345]/90 backdrop-blur border border-white/10 p-2 rounded-2xl shadow-2xl flex gap-2 pointer-events-auto items-center justify-between"
            >
              <a
                href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`}
                className="flex-1 bg-white/[0.08] hover:bg-white/15 text-white py-3 text-center rounded-xl text-xs font-bold transition-all border border-white/10"
              >
                Call Clinic
              </a>
              <button
                onClick={onBookClick}
                className="flex-1 bg-[#158A84] hover:bg-[#116e69] text-white py-3 text-center rounded-xl text-xs font-bold transition-all shadow-md"
              >
                Book Appointment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
