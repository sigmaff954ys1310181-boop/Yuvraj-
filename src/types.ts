/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DentalService {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  iconName: string; // Used to look up Lucide icons
  costEstimate?: string;
  duration?: string;
}

export interface Doctor {
  name: string;
  title: string;
  qualification: string;
  achievements: string[];
  phone: string;
  photoUrl: string;
  bio: string;
}

export interface Review {
  id: string;
  authorName: string;
  rating: number;
  text: string;
  date: string;
  avatarUrl: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  email?: string;
  treatmentId: string;
  date: string;
  timeSlot: string;
  message?: string;
  createdAt: string;
  status: 'Pending' | 'Confirmed';
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  treatmentId: string;
  message: string;
  createdAt: string;
}
