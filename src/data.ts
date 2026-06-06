/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DentalService, Doctor, Review } from './types';

export const CLINIC_NAME = "Dr. Rajesh's Premium Dental";
export const CLINIC_TAGLINE = "Healthy Smiles. Trusted Care.";
export const CLINIC_PHONE = "+91 94150 12345";
export const CLINIC_WHATSAPP = "919415012345"; // For direct api.whatsapp links
export const CLINIC_EMAIL = "care@doctorrajeshdental.com";
export const CLINIC_ADDRESS = "Ground Floor, B, Suraj Deep Complex, Jopling Road, Butler Colony, Lucknow, Uttar Pradesh 226001";
export const MAP_IFRAME_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7431326466336!2d80.94121!3d26.84814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0a273200ff%3A0xc3f8f170af3106ac!2sSuraj%20Deep%20Complex!5e0!3m2!1sen!2sin!4v1717650000000!5m2!1sen!2sin";

export const IMAGES = {
  hero: "/src/assets/images/hero_dentistry_1780724764381.png",
  doctor: "/src/assets/images/doctor_profile_1780724781487.png",
  interior: "/src/assets/images/clinic_interior_1780724797842.png"
};

export const CLINIC_DOCTOR: Doctor = {
  name: "Dr. Rajesh Kumar Singh",
  title: "Senior Dental Surgeon & Implantologist",
  qualification: "BDS – King George's Medical College (KGMC), Lucknow",
  bio: "Dr. Rajesh Kumar Singh is a highly esteemed dental clinician with over 25 years of hands-on expertise rendering comprehensive dental solutions. He is renowned for his precise, micro-targeted implant placements, advanced pain-free root canals, and a compassionate, family-centric approach to patient care.",
  achievements: [
    "25+ Years of Dedicated Clinical Experience",
    "Life Member, Indian Dental Association (IDA)",
    "Certified Implantologist & Esthetic Clinician",
    "Pioneer in Advanced Laser Dentistry Procedures",
    "Over 15,000+ Patient Smiles Restored"
  ],
  phone: CLINIC_PHONE,
  photoUrl: IMAGES.doctor
};

export const SERVICES: DentalService[] = [
  {
    id: "rct",
    name: "Root Canal Treatment",
    shortDescription: "Pain-free root canal procedures using modern techniques & advanced rotary instruments.",
    longDescription: "Our root canal therapy is fully computer-guided and computerized, ensuring zero pain and maximum precision. We remove infected pulp, shape the canals, sterile-flush the chamber, and seal with premium bio-materials in single-visit procedures.",
    iconName: "FlameKindling", // Root canal thermal care / treatment
    costEstimate: "₹3,500 - ₹6,000",
    duration: "45 mins"
  },
  {
    id: "implants",
    name: "Dental Implants",
    shortDescription: "Permanent, aesthetic replacements for missing teeth that look and feel entirely natural.",
    longDescription: "Using premium titanium alloys and customized monolithic zirconia crowns, our dental implant system restores complete chewing functionality and pristine aesthetic smiles with lifetime assurances.",
    iconName: "ShieldCheck",
    costEstimate: "₹25,000 - ₹45,000",
    duration: "60 mins"
  },
  {
    id: "extract",
    name: "Tooth Extractions",
    shortDescription: "Safe, atraumatic extraction procedures, including surgical wisdom teeth management.",
    longDescription: "Under standard localized comfort, our surgical team carries out delicate extraction procedures to protect adjacent alveolar bone structure, securing rapid recovery times with minimum discomfort.",
    iconName: "Sparkle",
    costEstimate: "₹800 - ₹2,500",
    duration: "30 mins"
  },
  {
    id: "dentures",
    name: "Complete Dentures",
    shortDescription: "Custom-made full or partial dentures designed for premium comfort, fit, and appearance.",
    longDescription: "We craft custom, lightweight BPS and high-impact anatomical complete dentures. These are perfectly aligned with facial vertical dimension metrics for long-stay chewing efficiency.",
    iconName: "Grid",
    costEstimate: "₹18,000 - ₹35,000",
    duration: "3 sessions"
  },
  {
    id: "whitening",
    name: "Teeth Whitening",
    shortDescription: "Professional state-of-the-art office bleaching for immediate, brilliant teeth whitening.",
    longDescription: "Using medically graded Blue-Laser light acceleration combined with premium European peroxide formulas, we lighten teeth by up to 8 real shades within just a single in-office visit.",
    iconName: "Sparkles",
    costEstimate: "₹6,000 - ₹12,000",
    duration: "45 mins"
  },
  {
    id: "crowns",
    name: "Dental Crowns & Bridges",
    shortDescription: "Highly durable CAD/CAM dental restorations and crowns for aesthetic repair.",
    longDescription: "We provide high-grade zirconia and porcelain-fused-to-metal crowns, offering superior structural longevity matched perfectly with your surrounding natural enamel hue.",
    iconName: "Crown",
    costEstimate: "₹4,500 - ₹15,000",
    duration: "2 sessions"
  },
  {
    id: "pediatric",
    name: "Pediatric Dentistry",
    shortDescription: "Specialized, warm, and gentle dental care designed especially for growing childrens' teeth.",
    longDescription: "Our specialized kid-friendly clinic ensures positive dental impressions. We offer cavity preventatives, pit dental sealants, fluoride varnishes, and custom early orthodontic monitoring.",
    iconName: "Heart",
    costEstimate: "₹1,200 - ₹3,500",
    duration: "30 mins"
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dentistry",
    shortDescription: "Complete smile makeover treatments incorporating custom veneers, contouring, and alignment.",
    longDescription: "Achieve the smile of your dreams. Through custom E-Max porcelain laminates, ultra-thin cosmetic veneers, dental contouring, and gap closings, we redefine dental alignment.",
    iconName: "Activity",
    costEstimate: "Custom",
    duration: "Varies"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev1",
    authorName: "Aman Gupta",
    rating: 5,
    text: "Dr. Rajesh Kumar Singh performed a root canal on my wisdom tooth. I was absolutely terrified of RCT, but I swear I did not feel a single pinch of pain! The clinic is exceptionally neat, hygienic, and uses advanced systems. Fully recommended!",
    date: "2 weeks ago",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "rev2",
    authorName: "Sneha Rawat",
    rating: 5,
    text: "Got zero-pain dental implants here for my mother. Dr. Rajesh spent so much time explaining the whole procedure, transparent breakdown of pricing, and options. The implants work perfectly and she can eat everything comfortably now.",
    date: "1 month ago",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "rev3",
    authorName: "Vikram Malhotra",
    rating: 5,
    text: "The best dentist in Lucknow. Extremely professional, direct, and doesn't recommend unnecessary treatments. Standard prices, superb modern laser equipment, and premium hospital hygiene levels. Pediatric care for my son was also excellent.",
    date: "3 weeks ago",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "rev4",
    authorName: "Pooja Trivedi",
    rating: 5,
    text: "I did teeth whitening before my wedding. The results are spectacular and very natural. The behavior of Dr. Rajesh and the medical staff was polite and incredibly caring. No post-treatment sensitivity either!",
    date: "1 month ago",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
  }
];

export const FAQ_ITEMS = [
  {
    id: "q1",
    question: "Do you offer single-visit RCTs?",
    answer: "Yes, utilizing advanced digital micro-rotary instruments, we complete standard, uncomplicated Root Canal Treatments in a single session of 45-60 minutes."
  },
  {
    id: "q2",
    question: "What are your standard consultation hours?",
    answer: "We are open Monday to Saturday from 10:00 AM to 2:00 PM in the morning, and 5:00 PM to 8:30 PM in the evening. Sunday is open by special priority appointment only."
  },
  {
    id: "q3",
    question: "How long do premium dental implants last?",
    answer: "With proper home care and professional check-ups every 6 months, dental implants can easily last standard lifetimes. They behave just like natural biological teeth."
  },
  {
    id: "q4",
    question: "Is there enough parking space at the clinic?",
    answer: "Yes, Suraj Deep Complex has reserved visitor parking slots with dedicated car parking zones and 24/7 security."
  }
];

export const CLINIC_TIMINGS = [
  { days: "Monday - Saturday", hours: "10:00 AM - 02:00 PM, 05:00 PM - 08:30 PM" },
  { days: "Sunday", hours: "11:00 AM - 01:30 PM (Prior Appointment Only)" }
];

export const TIME_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM"
];
