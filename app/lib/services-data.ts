import { Bone, Microscope, Activity, Stethoscope, Syringe, ClipboardList, Building } from 'lucide-react';

export const SERVICES_DATA: Record<string, any> = {
  'orthopedic-care': {
    title: 'Advanced Orthopedic Care',
    subtitle: 'Restoring Mobility, Relieving Pain',
    icon: Bone,
    image: '/serviceimages/ortho.jpeg',
    description: 'Our orthopedic department is led by Dr. Varun Goel, specializing in complex trauma, joint replacements, and sports medicine. We use minimally invasive techniques to ensure faster recovery and less post-operative pain.',
    features: [
      'Joint Replacement (Knee, Hip, Shoulder)',
      'Complex Trauma & Fracture Management',
      'Arthroscopic Surgery',
      'Sports Injury Rehabilitation',
      'Pediatric Orthopedics'
    ],
    faqs: [
      { q: "How long is the recovery for knee replacement?", a: "Most patients start walking with support within 24 hours. Full recovery typically takes 6-12 weeks." },
      { q: "Do you offer physiotherapy?", a: "Yes, we provide comprehensive post-operative rehabilitation and physiotherapy." }
    ]
  },
  'pathology-lab': {
    title: 'Precision Pathology Lab',
    subtitle: 'Diagnostic Excellence You Can Trust',
    icon: Microscope,
    image: '/serviceimages/patho.jpeg',
    description: 'Led by Dr. Neha Goel, our state-of-the-art pathology lab provides accurate and rapid results across histopathology, cytology, and hematology. We understand that accurate treatment starts with accurate diagnostics.',
    features: [
      'Advanced Histopathology',
      'Cytology & FNA Testing',
      'Comprehensive Blood Analysis',
      'Hormone & Vitamin Assays',
      'Rapid Result Turnaround'
    ],
    faqs: [
      { q: "When can I expect my results?", a: "Most routine tests are delivered within 4-6 hours. Specialized tests may take 24-48 hours." },
      { q: "Is home collection available?", a: "Yes, we offer home sample collection services across Raipur." }
    ]
  },
  'trauma-care': {
    title: 'Emergency Trauma Care',
    subtitle: 'Immediate Response for Critical Injuries',
    icon: Activity,
    image: '/serviceimages/traumacare.jpeg',
    description: 'Accidents don\'t wait, and neither do we. Our trauma center is operational from 9 AM to 8 PM with specialized orthopedic surgeons on call to handle high-velocity injuries and fractures.',
    features: [
      'Prompt Emergency Response',
      'Specialized Trauma Theater',
      'Immediate Fracture Stabilization',
      'Post-Trauma Reconstruction',
      'ICU Support'
    ],
    faqs: [
      { q: "Is a surgeon always available?", a: "Yes, our orthopedic trauma specialists are available during clinic hours." }
    ]
  },
  'digital-xray': {
    title: 'High-Resolution Digital X-Ray',
    subtitle: 'Crystal Clear Imaging for Accurate Diagnosis',
    icon: ClipboardList,
    image: '/serviceimages/digitalx-ray.jpeg',
    description: 'Our digital X-ray facility provides high-resolution imaging with minimal radiation exposure. Instant digital processing allows our doctors to diagnose issues immediately.',
    features: [
      'High-Resolution Digital Imaging',
      'Minimal Radiation Exposure',
      'Instant Image Processing',
      'Digital Copies for Patients',
      'All Specialized Views Available'
    ],
    faqs: [
      { q: "Is X-ray safe for children?", a: "Our digital systems are optimized for the lowest possible dose, making them very safe for all ages." }
    ]
  },
  'joint-replacement': {
    title: 'Joint Replacement Center',
    subtitle: 'The Gold Standard in Arthroplasty',
    icon: Stethoscope,
    image: '/serviceimages/radiology.jpeg',
    description: 'We specialize in total knee and hip replacements using imported, high-durability implants and precise surgical techniques to ensure a pain-free life for our patients.',
    features: [
      'Total Knee Replacement (TKR)',
      'Total Hip Replacement (THR)',
      'Revision Joint Surgery',
      'Unicondylar Knee Replacement',
      'Post-Op Mobility Training'
    ],
    faqs: [
      { q: "What is the lifespan of an implant?", a: "Modern implants can last 20-25 years or even longer with proper care." }
    ]
  },
  'in-house-pharmacy': {
    title: 'In-house Pharmacy',
    subtitle: 'Quality Medications, Always Available',
    icon: Building,
    image: '/serviceimages/inhousepharmacy.jpeg',
    description: 'Our in-house pharmacy ensures that you have immediate access to prescribed medications without leaving the facility. We maintain strict quality control and storage standards.',
    features: [
      'Available 9 AM to 8 PM',
      'Wide Range of Orthopedic Meds',
      'Expert Pharmacist Guidance',
      'Strict Quality Control',
      'Emergency Medicine Stock'
    ],
    faqs: [
      { q: "Do you deliver medicines?", a: "Currently, we offer in-person pickup to ensure correct counseling on dosage." }
    ]
  }
};
