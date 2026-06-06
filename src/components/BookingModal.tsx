/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Smile, Check, AlertCircle, Sparkles } from 'lucide-react';
import { SERVICES, TIME_SLOTS } from '../data';
import { Appointment } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTreatmentId?: string;
  onAppointmentCreated: (appt: Appointment) => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedTreatmentId = 'rct',
  onAppointmentCreated,
}: BookingModalProps) {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [treatmentId, setTreatmentId] = useState(selectedTreatmentId);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [message, setMessage] = useState('');
  
  const [formError, setFormError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [latestApptCode, setLatestApptCode] = useState('');

  // Auto-update treatment selection when prop changes
  useEffect(() => {
    if (selectedTreatmentId) {
      setTreatmentId(selectedTreatmentId);
    }
  }, [selectedTreatmentId]);

  // Generate date pills for the next 7 available clinic days (excluding Sunday if priority needed, but we keep it clean)
  const getNextClinicDates = () => {
    const dates = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // We fetch dates starting today
    let checkedCount = 0;
    let dayOffset = 0;

    while (checkedCount < 6) {
      const d = new Date();
      d.setDate(d.getDate() + dayOffset);
      
      // Is it a Sunday? Let's check. Clinic has prioritize hours on Sunday, let's list it but flag it
      const dayName = weekdays[d.getDay()];
      const isSunday = d.getDay() === 0;
      
      const formattedValue = d.toISOString().split('T')[0];
      const displayLabel = `${dayName}, ${d.getDate()} ${months[d.getMonth()]}`;

      dates.push({
        value: formattedValue,
        label: displayLabel,
        isSunday
      });

      checkedCount++;
      dayOffset++;
    }
    return dates;
  };

  const datesList = getNextClinicDates();

  // Set default date
  useEffect(() => {
    if (isOpen && datesList.length > 0 && !selectedDate) {
      setSelectedDate(datesList[0].value);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!patientName.trim()) {
      setFormError('Please enter the patient name.');
      return;
    }
    if (!phone.match(/^[0-9\s+-]{10,13}$/)) {
      setFormError('Please enter a valid phone number (10-12 digits).');
      return;
    }
    if (!selectedDate) {
      setFormError('Please choose a convenience date.');
      return;
    }
    if (!selectedSlot) {
      setFormError('Please select a timing slot.');
      return;
    }

    const apptCode = `DC-${Math.floor(1000 + Math.random() * 9000)}`;
    const newAppt: Appointment = {
      id: apptCode,
      patientName,
      phone,
      email: email.trim() || undefined,
      treatmentId,
      date: selectedDate,
      timeSlot: selectedSlot,
      message: message.trim() || undefined,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };

    // Callback to App.tsx
    onAppointmentCreated(newAppt);

    // Render local Success
    setLatestApptCode(apptCode);
    setIsSuccess(true);

    // Reset Form
    setPatientName('');
    setPhone('');
    setEmail('');
    setSelectedSlot('');
    setMessage('');
  };

  const handleCloseAndReset = () => {
    setIsSuccess(false);
    setFormError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Dark overlay with fade-in */}
      <div 
        className="fixed inset-0 bg-[#1B2345]/60 backdrop-blur-sm transition-opacity"
        onClick={handleCloseAndReset}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-[32px] w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100/50 p-6 sm:p-8 shrink-0 select-none z-10 my-8">
        
        {/* Header Close button */}
        <button
          onClick={handleCloseAndReset}
          className="absolute right-6 top-6 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Close form"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          /* SUCCESS SCREEN DISPLAY */
          <div className="py-8 text-center space-y-6">
            <div className="w-20 h-20 bg-[#158A84]/15 rounded-full flex items-center justify-center mx-auto text-[#158A84] border-2 border-[#158A84]/30 animate-pulse">
              <Check size={40} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-black text-[#1B2345]">Appointment Confirmed!</h3>
              <p className="text-sm text-[#1B2345] font-semibold">
                Your Confirmation Slip: <span className="bg-slate-100 px-2.5 py-1 text-xs tracking-mono font-bold font-mono text-[#158A84] rounded-md">{latestApptCode}</span>
              </p>
              <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed pt-2">
                We have logged your slot in our live practice dashboard. Dr. Rajesh Kumar Singh looks forward to seeing you. Please arrive 10 minutes prior to your selected slot.
              </p>
            </div>

            <button
              onClick={handleCloseAndReset}
              className="px-6 py-3 bg-[#158A84] hover:bg-[#116e69] text-white text-xs font-bold rounded-xl transition-all shadow cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        ) : (
          /* FORM ENTRY SCHEDULING MODE */
          <div className="space-y-6">
            
            {/* Form Title banner */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#158A84] flex items-center gap-1">
                <Sparkles size={11} fill="currentColor" /> Premium Dental Booking
              </span>
              <h3 className="font-display text-2xl font-black text-[#1B2345]">Schedule Doctor Slot</h3>
              <p className="text-xs text-gray-400 font-light">Confirm your physical, modern consulting time in 1 minute.</p>
            </div>

            {/* Form handler */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Form errors */}
              {formError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl flex items-center gap-2 text-xs font-medium font-sans">
                  <AlertCircle size={15} className="shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Patient Name & Phone Inputs */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider">Patient Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:border-[#158A84] outline-none rounded-xl text-sm transition-all text-[#1B2345]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:border-[#158A84] outline-none rounded-xl text-sm transition-all text-[#1B2345]"
                  />
                </div>
              </div>

              {/* Treatment selector & optional email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider block">Dental Concern</label>
                  <select
                    value={treatmentId}
                    onChange={(e) => setTreatmentId(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:border-[#158A84] outline-none rounded-xl text-sm transition-all text-[#1B2345] cursor-pointer"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.name} (from {srv.costEstimate || 'Custom'})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Email (Optional)</label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:border-[#158A84] outline-none rounded-xl text-sm transition-all text-[#1B2345]"
                  />
                </div>
              </div>

              {/* Dynamic Dates list selection pills */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#158A84]" /> 1. Select Clinic Date
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {datesList.map((dt) => {
                    const isSelected = selectedDate === dt.value;
                    return (
                      <button
                        type="button"
                        key={dt.value}
                        onClick={() => setSelectedDate(dt.value)}
                        className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-[#158A84] border-[#158A84] text-white shadow-sm'
                            : 'bg-gray-50 border-gray-100 hover:border-[#158A84]/30 text-[#1B2345]'
                        }`}
                      >
                        <span className="block">{dt.label.split(',')[0]}</span>
                        <span className={`block text-[10px] mt-0.5 font-normal ${isSelected ? 'text-teal-100' : 'text-gray-400'}`}>
                          {dt.label.split(',')[1]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Time Slots list selection pills */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider flex items-center gap-1.5">
                  <Clock size={13} className="text-[#158A84]" /> 2. Choose Time Slot
                </label>
                <div className="flex flex-wrap gap-1.5 max-h-[110px] overflow-y-auto p-1 bg-gray-50 rounded-2xl border border-gray-100 scrollbar-thin">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`px-3 py-1.5 rounded-lg text-[10.5px] font-bold transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-[#158A84]/20 border-[#158A84] text-[#158A84]'
                            : 'bg-white border-gray-200 hover:border-gray-300 text-[#1B2345]/80'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Symptoms / Notes (Optional)</label>
                <textarea
                  placeholder="Need urgent care / pain diagnostic..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-100 focus:border-[#158A84] outline-none rounded-xl text-xs transition-all text-[#1B2345]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#158A84] hover:bg-[#116e69] text-white py-3.5 rounded-xl font-sans font-bold text-sm tracking-wide shadow-md shadow-[#158A84]/15 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Smile size={18} />
                  <span>Confirm Secured Slot Now</span>
                </button>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}
