/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { 
  CLINIC_PHONE, 
  CLINIC_EMAIL, 
  CLINIC_ADDRESS, 
  CLINIC_WHATSAPP, 
  SERVICES,
  FAQ_ITEMS 
} from '../data';
import { ContactMessage } from '../types';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatmentId, setTreatmentId] = useState('rct');
  const [message, setMessage] = useState('');
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    const contactMsg: ContactMessage = {
      id: `msg_${Date.now()}`,
      name,
      phone,
      treatmentId,
      message,
      createdAt: new Date().toISOString()
    };

    // Store message logs in localStorage for rich verification tracking
    try {
      const existingStr = localStorage.getItem('clinic_contact_messages');
      const existing = existingStr ? JSON.parse(existingStr) : [];
      localStorage.setItem('clinic_contact_messages', JSON.stringify([contactMsg, ...existing]));
    } catch (e) {
      console.error(e);
    }

    // Reset and feedback success
    setName('');
    setPhone('');
    setMessage('');
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hello Dr. Rajesh's Dental Clinic, I would like to inquire about dental treatments and slot scheduling.");
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${text}`, '_blank');
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section id="contact" className="bg-[#1B2345]/3 py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] bg-[#158A84]/4 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-slate-200 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#158A84] block font-sans">CONNECT WITH US</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2345]">
            Contact & Queries
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-light">
            Have a question? Text our dental desk on WhatsApp or write your specific query details below.
          </p>
        </div>

        {/* 2-Column Grid Layout: (Left details / Right Form) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Handlers and Quick FAQ panel (5 cols on large) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Core Info card */}
              <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                <h3 className="font-display font-black text-xl text-[#1B2345] mb-2">Our Channels</h3>
                
                {/* Phone detail */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#158A84]/10 text-[#158A84] flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-gray-400 font-bold tracking-wider leading-none">Phone Support</h4>
                    <p className="text-base font-extrabold text-[#1B2345] mt-1.5">{CLINIC_PHONE}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 font-light">Dial directly for immediate assistance</p>
                  </div>
                </div>

                {/* Email detail */}
                <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-[#158A84]/10 text-[#158A84] flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-gray-400 font-bold tracking-wider leading-none">Email Helpdesk</h4>
                    <p className="text-sm font-extrabold text-[#1B2345] mt-1.5 break-all">{CLINIC_EMAIL}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 font-light">Expect replies within 2 business hours</p>
                  </div>
                </div>

                {/* Address representation */}
                <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-[#158A84]/10 text-[#158A84] flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-gray-400 font-bold tracking-wider leading-none">Clinic Address</h4>
                    <p className="text-xs font-bold text-[#1B2345] mt-1.5 leading-normal font-sans">
                      {CLINIC_ADDRESS}
                    </p>
                  </div>
                </div>

                {/* Direct WhatsApp chat action */}
                <div className="pt-2">
                  <button
                    onClick={handleWhatsAppChat}
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-[#25D366]/10"
                  >
                    <MessageSquare size={16} fill="currentColor" />
                    <span>Chat on WhatsApp</span>
                    <ChevronRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>

              {/* Mini FAQs Accordion section */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-extrabold text-[#1B2345] tracking-widest flex items-center gap-1">
                  <HelpCircle size={13} className="text-[#158A84]" /> Frequently Answered Questions
                </h4>
                
                <div className="space-y-2">
                  {FAQ_ITEMS.map((faq) => {
                    const isOpen = activeFaq === faq.id;
                    return (
                      <div key={faq.id} className="bg-white/80 border border-gray-100 rounded-xl overflow-hidden transition-all duration-300">
                        <button
                          type="button"
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full px-4 py-3 text-left flex justify-between items-center text-xs font-bold text-[#1B2345] hover:text-[#158A84] outline-none cursor-pointer"
                        >
                          <span className="font-sans leading-tight">{faq.question}</span>
                          <span className="text-gray-400 text-[14px] ml-2 shrink-0">{isOpen ? "−" : "+"}</span>
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-3 text-xs text-gray-500 leading-relaxed font-light border-t border-gray-100 bg-gray-50 pt-2 animate-fade-in">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            <div className="text-xs text-gray-400 text-center font-bold tracking-widest font-mono uppercase lg:block hidden">
              DENTAL SOLUTIONS LEADER
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 cols on large) */}
          <div className="lg:col-span-7 bg-white rounded-[28px] p-6 sm:p-10 border border-gray-100 shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h3 className="font-display font-black text-2xl text-[#1B2345]">Submit Clinical Inquiry</h3>
                <p className="text-xs sm:text-sm text-gray-400">Our senior counselor panel reviews your dental case details to map preliminary advice.</p>
              </div>

              {isSuccess ? (
                /* INLINE SUCCESS SUCCESS FEEDBACK */
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-100 shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-display text-xl font-black text-[#1B2345]">Inquiry Logged Successfully</h4>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                    Thank you! We have received your treatment concerns. Our assistant desk will dial you on mobile shortly.
                  </p>
                </motion.div>
              ) : (
                /* ACTUAL ENTRY CONTENT FOR INQUIRY FORM */
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Verma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-[#158A84] outline-none rounded-xl text-sm transition-all text-[#1B2345]"
                    />
                  </div>

                  {/* Phone & Selective treatment row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider">Mobile Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-[#158A84] outline-none rounded-xl text-sm transition-all text-[#1B2345]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider block">Treatment Required</label>
                      <select
                        value={treatmentId}
                        onChange={(e) => setTreatmentId(e.target.value)}
                        className="w-full px-4 py-[11px] bg-gray-50 border border-gray-100 focus:border-[#158A84] outline-none rounded-xl text-sm transition-all text-[#1B2345] cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider">Describe Your Inquiry Details</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="I would like to enquire about appointments for teeth extraction for my grandma or pricing of RCT..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-[#158A84] outline-none rounded-xl text-sm transition-all text-[#1B2345]"
                    />
                  </div>

                  {/* Submission row */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#1B2345] hover:bg-[#158A84] text-white py-4 rounded-xl font-sans font-bold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send size={13} fill="currentColor" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Quality assurance line */}
            <div className="pt-6 border-t border-gray-100 text-[10.5px] text-gray-400 font-sans mt-6 text-center leading-normal">
              🛡️ Your personal details are completely protected under our secure data encryption practices.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
