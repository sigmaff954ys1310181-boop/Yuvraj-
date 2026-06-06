/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Sparkles, Trash2, CalendarX, CheckCircle, Smile } from 'lucide-react';
import { SERVICES } from '../data';
import { Appointment } from '../types';

interface BookingsViewerProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  onCancelAppointment: (id: string) => void;
  onBookImmediateClick: () => void;
}

export default function BookingsViewer({
  isOpen,
  onClose,
  appointments,
  onCancelAppointment,
  onBookImmediateClick,
}: BookingsViewerProps) {
  
  const getTreatmentName = (id: string) => {
    const srv = SERVICES.find((s) => s.id === id);
    return srv ? srv.name : "General Dental Consultation";
  };

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString + "T00:00:00"); // Avoid timezone shift
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    } catch (e) {
      return isoString;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background overlay with smooth fade */}
      <div 
        className="absolute inset-0 bg-[#1B2345]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer box */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-screen max-w-lg sm:max-w-md bg-white shadow-2xl flex flex-col justify-between"
        >
          {/* Drawer Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-display font-black text-xl text-[#1B2345] flex items-center gap-1.5">
                <Sparkles size={18} className="text-[#158A84]" /> My Appointments
              </h3>
              <p className="text-xs text-gray-400 font-light">Track and manage your upcoming clinic appointments.</p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Close drawer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
            {appointments.length === 0 ? (
              /* EMPTY APPOINTMENTS PLACEHOLDER */
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 px-4">
                <div className="w-20 h-20 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center border-2 border-dashed border-gray-200">
                  <CalendarX size={36} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-black text-lg text-[#1B2345]">No Appointments Booked</h4>
                  <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed font-light">
                    You haven’t scheduled any consultation slots yet. Click below to secure one directly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onBookImmediateClick();
                  }}
                  className="px-5 py-2.5 bg-[#158A84] hover:bg-[#116e69] text-white font-sans font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Book Your First Slot
                </button>
              </div>
            ) : (
              /* APPOINTMENTS LIST ACTIVE MODE */
              <div className="space-y-4">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest px-1">
                  Active Booking Slots ({appointments.length})
                </p>
                
                {appointments.map((appt) => (
                  <div
                    key={appt.id}
                    className="border border-gray-100 bg-white shadow-sm p-4 rounded-2xl relative overflow-hidden group hover:border-[#158A84]/25 transition-all"
                  >
                    {/* Visual side band accent */}
                    <div className="absolute left-0 inset-y-0 w-1.5 bg-[#158A84]" />

                    {/* Appt details */}
                    <div className="pl-2 space-y-3">
                      
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-sans font-bold text-sm text-[#1B2345] truncate max-w-[200px]">
                            {appt.patientName}
                          </h4>
                          <p className="text-[10px] uppercase tracking-wider font-extrabold text-[#158A84] mt-0.5">
                            {getTreatmentName(appt.treatmentId)}
                          </p>
                        </div>

                        {/* Confirmation badge */}
                        <div className="text-right">
                          <span className="inline-flex items-center gap-1 bg-[#158A84]/15 text-[#158A84] text-[9px] font-black font-mono tracking-wider px-2 py-0.5 rounded uppercase">
                            Code: {appt.id}
                          </span>
                          <span className="block text-[8px] text-gray-400 font-sans mt-0.5 font-bold">LIVE STATUS</span>
                        </div>
                      </div>

                      {/* Date details and Time pills */}
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 font-sans bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/30">
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <Calendar size={13} className="text-gray-400 shrink-0" />
                          <span className="font-medium truncate">{formatDate(appt.date)}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <Clock size={13} className="text-gray-400 shrink-0" />
                          <span className="font-medium">{appt.timeSlot}</span>
                        </div>
                      </div>

                      {/* Optional message summary indicator */}
                      {appt.message && (
                        <p className="text-[11px] font-light italic text-gray-400 bg-slate-50/30 px-2 py-1.5 rounded-lg border-l border-dashed border-gray-200">
                          "{appt.message}"
                        </p>
                      )}

                      {/* Appt controls bar */}
                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                        <span className="flex items-center gap-1 text-[10px] text-teal-600 font-bold font-sans">
                          <CheckCircle size={11} /> Appointment Confirmed
                        </span>
                        
                        <button
                          onClick={() => onCancelAppointment(appt.id)}
                          className="p-1 px-2 text-red-500 hover:text-red-700 font-sans font-semibold text-[10.5px] rounded-lg hover:bg-red-50 transition-colors flex items-center gap-1 cursor-pointer"
                          title="Cancel appointment"
                        >
                          <Trash2 size={12} />
                          <span>Cancel Slot</span>
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer info card */}
          <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
            <div className="flex items-center gap-2.5 p-3.5 bg-white rounded-2xl border border-gray-200/50 text-xs text-gray-500 font-light">
              <Smile size={16} className="text-[#158A84] shrink-0" />
              <span>Need to reschedule instead? Please call our direct helpline for swift assistance.</span>
            </div>
            
            <div className="text-center text-[10px] font-mono text-gray-400 font-semibold uppercase tracking-widest">
              Live Medical Scheduling Suite
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
