export const BRAND = {
  teal: '#0F5B5D',
  red: '#D81120',
  tealLight: '#E6F0F0',
  redLight: '#FBE7E8'
};

export const DOCTORS = [
  {
    id: 'dr-varun',
    name: 'Dr. Varun Goel',
    qualifications: 'MS Orthopedic',
    specialization: 'Fellow in Arthroscopy and Sports Medicine\nSpecialization in Trauma & Joint Replacement\nEx Registrar PGI Rohtak',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    tags: ['Orthopedics', 'Joint Replacement', 'Sports Medicine', 'Trauma'],
    bio: 'Dr. Varun Goel brings years of specialized experience in complex orthopedic procedures, focusing on restoring mobility and eliminating pain through minimally invasive techniques.'
  },
  {
    id: 'dr-neha',
    name: 'Dr. Neha Goel',
    qualifications: 'MD Pathology',
    specialization: 'Specialist in Histopathology, Cytology and Hematology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    tags: ['Pathology', 'Histopathology', 'Cytology', 'Hematology'],
    bio: 'Dr. Neha Goel leads our advanced diagnostic division, ensuring accurate, rapid, and comprehensive pathological analysis to guide effective treatment plans.'
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1582750433449-648ed127d09e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
];

export const handleImageFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800';
};

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Advanced Care.',
    highlight: 'Modern Medicine.',
    description: 'Combining world-class orthopedic expertise with advanced pathology diagnostics to accelerate your healing journey.',
    video: 'https://cdn.pixabay.com/video/2020/09/13/49809-458438857_large.mp4',
    poster: 'https://cdn.pixabay.com/video/2020/09/13/49809-458438857_large.jpg'
  },
  {
    id: 2,
    title: 'Precision Diagnostics.',
    highlight: 'Accurate Results.',
    description: 'Our advanced pathology lab ensures 100% accuracy and rapid results to guide your treatment effectively.',
    video: 'https://cdn.pixabay.com/video/2025/03/03/262188_large.mp4',
    poster: 'https://cdn.pixabay.com/video/2025/03/03/262188_large.jpg'
  },
  {
    id: 3,
    title: 'Emergency Support.',
    highlight: '24/7 Availability.',
    description: 'Immediate medical attention for trauma and critical cases, available round the clock in Raipur.',
    video: 'https://cdn.pixabay.com/video/2019/09/30/27385-363513429_large.mp4',
    poster: 'https://cdn.pixabay.com/video/2019/09/30/27385-363513429_large.jpg'
  }
];

export const modernEase = [0.22, 1, 0.36, 1] as const;

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: modernEase } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
