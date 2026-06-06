/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Check, User, Quote, LogIn } from 'lucide-react';
import { REVIEWS } from '../data';
import { Review } from '../types';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSubmitMode, setIsSubmitMode] = useState(false);
  
  // Custom reviews form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Load reviews from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem('clinic_reviews');
    if (saved) {
      try {
        setReviews(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading saved reviews", e);
      }
    }
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const addedReview: Review = {
      id: `custom_${Date.now()}`,
      authorName: newAuthor,
      rating: newRating,
      text: newText,
      date: "Just now",
      avatarUrl: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random()*100000000)}?auto=format&fit=crop&q=80&w=120`
    };

    const updatedReviews = [addedReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('clinic_reviews', JSON.stringify(updatedReviews));

    // Reset and show success
    setNewAuthor('');
    setNewText('');
    setNewRating(5);
    setIsSuccess(true);
    setActiveIndex(0);

    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitMode(false);
    }, 3000);
  };

  // Render yellow stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <Star
        key={idx}
        size={16}
        className={idx < rating ? "text-amber-500 fill-amber-500" : "text-gray-200"}
      />
    ));
  };

  return (
    <section id="reviews" className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] bg-[#158A84]/4 rounded-full filter blur-2xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-slate-200 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Heading with Reviews Metatags */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 max-w-5xl mx-auto">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#158A84] block">PATIENT TESTIMONIALS</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2345] leading-tight">
              148+ Five Star Reviews
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-light max-w-lg">
              Read honest stories from our corporate and family patients about their orthodontic and clinical treatments.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 shrink-0 bg-white px-5 py-4 rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-center md:text-right shrink-0">
              <div className="flex items-center gap-0.5 justify-center md:justify-end text-amber-500">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="text-lg font-black text-[#1B2345] mt-1">4.9 out of 5.0</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Google Maps Rating</p>
            </div>
            
            <button
              onClick={() => setIsSubmitMode(!isSubmitMode)}
              className="px-4 py-2.5 bg-[#158A84]/10 hover:bg-[#158A84]/20 text-[#158A84] font-sans font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <MessageSquare size={14} />
              <span>{isSubmitMode ? "View Reviews" : "Write a Review"}</span>
            </button>
          </div>
        </div>

        {/* Carousel & Add Review Layout */}
        <div className="max-w-4xl mx-auto">
          {!isSubmitMode ? (
            /* Carousel Review Interface */
            <div className="relative">
              
              {/* Display card with custom animations */}
              <div className="min-h-[280px] bg-white rounded-[28px] p-8 sm:p-12 border border-gray-100 shadow-xl shadow-gray-200/40 relative flex flex-col justify-between">
                
                {/* Backquote icon illustration */}
                <div className="absolute right-8 top-8 text-gray-100 pointer-events-none">
                  <Quote size={80} strokeWidth={1.5} />
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Google Verified Stars bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {renderStars(reviews[activeIndex].rating)}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-[#158A84] bg-[#158A84]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Verified Patient
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-base sm:text-lg text-[#1B2345]/90 italic font-light leading-relaxed">
                    "{reviews[activeIndex].text}"
                  </p>
                </div>

                {/* Patient Creator Signature row */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <img
                      src={reviews[activeIndex].avatarUrl}
                      alt={reviews[activeIndex].authorName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow shadow-gray-200 shrink-0"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback avatar if unsplash links break in sandbox
                        (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${reviews[activeIndex].authorName}`;
                      }}
                    />
                    <div>
                      <h4 className="font-serif font-bold text-[15px] sm:text-base text-[#1B2345]">
                        {reviews[activeIndex].authorName}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">
                        Patient Review • {reviews[activeIndex].date}
                      </p>
                    </div>
                  </div>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-gray-100 hover:border-[#158A84]/30 hover:bg-gray-50 flex items-center justify-center text-gray-500 hover:text-[#158A84] transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-gray-100 hover:border-[#158A84]/30 hover:bg-gray-50 flex items-center justify-center text-gray-500 hover:text-[#158A84] transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

              </div>

              {/* Progress Bullet Indicators */}
              <div className="flex justify-center gap-1.5 mt-6">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIndex ? "w-6 bg-[#158A84]" : "w-1.5 bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          ) : (
            /* Interactive Write Guest Review Form */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[28px] p-6 sm:p-10 border border-gray-100 shadow-xl"
            >
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#158A84]/10 text-[#158A84] flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <Check size={32} strokeWidth={3} />
                  </div>
                  <h3 className="font-display text-2xl font-black text-[#1B2345]">Review Submitted!</h3>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto leading-normal">
                    Thank you so much! Your review has been added under verified testimonials list successfully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddReviewSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-black text-[#1B2345]">
                      Write Your Testimonial
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Share your treatment story with Dr. Rajesh. Your feedback helps families trust our clinic.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Author Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-[#158A84] outline-none rounded-xl text-sm transition-all text-[#1B2345]"
                      />
                    </div>

                    {/* Star selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider block">Your Star Rating</label>
                      <div className="flex gap-2 items-center h-[46px] px-2">
                        {Array.from({ length: 5 }).map((_, idx) => {
                          const starVal = idx + 1;
                          return (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => setNewRating(starVal)}
                              className="text-amber-500 hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                            >
                              <Star
                                size={28}
                                fill={starVal <= newRating ? "currentColor" : "none"}
                                className={starVal <= newRating ? "text-amber-500" : "text-gray-300"}
                              />
                            </button>
                          );
                        })}
                        <span className="text-xs text-gray-500 ml-2 font-bold font-sans">({newRating}/5 Stars)</span>
                      </div>
                    </div>
                  </div>

                  {/* Comment input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-[#1B2345] tracking-wider">Your Treatment Review Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="My root canal treatment experience was completely painless..."
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-[#158A84] outline-none rounded-xl text-sm transition-all text-[#1B2345]"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#158A84] hover:bg-[#116e69] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-[#158A84]/10 hover:shadow-lg"
                    >
                      Submit Verified Review
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubmitMode(false)}
                      className="px-6 py-3 border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Back
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
