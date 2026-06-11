import { Bone, Microscope } from 'lucide-react';

export const DOCTORS_DATA: Record<string, any> = {
  'dr-varun': {
    id: 'dr-varun',
    name: 'Dr. Varun Goel',
    qualifications: 'MS Orthopedic',
    specialization: 'Fellow in Arthroscopy and Sports Medicine | Trauma & Joint Replacement',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    bio: 'Dr. Varun Goel is a renowned orthopedic surgeon in Raipur with over 15 years of experience in complex trauma management and joint replacement surgeries.',
    experience: [
      'MS Orthopedics (Specialist in Trauma & Joint Replacement)',
      'Ex-Registrar at PGI Rohtak (Intensive Trauma Care)',
      'Fellow in Arthroscopy and Sports Medicine',
      'Chief Orthopedic Consultant & Founder of Care Plus Healthcentre (March 2026)'
    ],
    expertise: ['Knee Replacement', 'Hip Replacement', 'Sports Injuries', 'Complex Fractures'],
    achievements: ['Gold Medalist in MS Orthopedics', 'Best Surgeon Award 2022', 'Published 10+ Research Papers']
  },
  'dr-neha': {
    id: 'dr-neha',
    name: 'Dr. Neha Goel',
    qualifications: 'MD Pathology',
    specialization: 'Specialist in Histopathology, Cytology and Hematology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    bio: 'Dr. Neha Goel leads the diagnostic wing with a focus on precision and rapid reporting. She is an expert in histopathology and complex diagnostic cases.',
    experience: [
      'MD Pathology (Specialist in Histopathology, Cytology & Hematology)',
      'Fellowship / Clinical Training in Advanced Cytopathology and Hematology',
      'Chief Pathologist & Founder of Care Plus Advanced Pathology Diagnostics Lab (March 2026)',
      'Implemented NABL-aligned Diagnostic Quality Standards and Protocols',
      '100% Diagnostic Accuracy Record with 1M+ Test Reporting'
    ],
    expertise: ['Histopathology', 'Cytology', 'Hematology', 'Blood Disorders'],
    achievements: ['Excellence in Diagnostics Award', 'Lead Pathologist for State Health Programs', 'Member of Central Pathology Council']
  }
};
