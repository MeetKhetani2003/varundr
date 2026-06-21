export const BRAND = {
  teal: 'var(--color-brand-teal)',
  red: '#D81120',
  tealLight: '#E6F0F0',
  redLight: '#FBE7E8',
  lime: '#CCFF00'
};

export const DOCTORS = [
  {
    id: 'dr-varun',
    name: 'Dr. Varun Goel',
    qualifications: 'MS Orthopedic',
    specialization: 'Fellow in Arthroscopy and Sports Medicine\nSpecialization in Trauma & Joint Replacement\nEx Registrar PGI Rohtak',
    image: '/doctors/drvarun.png',
    tags: ['Orthopedics', 'Joint Replacement', 'Sports Medicine', 'Trauma'],
    bio: 'Dr. Varun Goel brings years of specialized experience in complex orthopedic procedures, focusing on restoring mobility and eliminating pain through minimally invasive techniques.'
  },
  {
    id: 'dr-neha',
    name: 'Dr. Neha Goel',
    qualifications: 'MD Pathology',
    specialization: 'Specialist in Histopathology, Cytology and Hematology',
    image: 'https://max-website20-images.s3.ap-south-1.amazonaws.com/Dr_Neha_Gupta_eedf7c787b.png',
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

export const HERO_SLIDES: Array<{
  id: number;
  title: string;
  highlight: string;
  description: string;
  image?: string;
  video?: string;
  poster?: string;
}> = [
    // {
    //   id: 1,
    //   title: 'Care Plus Healthcentre.',
    //   highlight: 'Modern Healthcare.',
    //   description: 'Raipur\'s leading medical clinic combining advanced orthopedic consultation and high-precision pathology laboratory services.',
    //   image: '/images/healthcare.jpeg'
    // },
    {
      id: 1,
      title: 'Restoring Mobility.',
      highlight: 'Knee & Joint Surgery.',
      description: 'State-of-the-art orthopedic procedures and custom rehabilitation protocols for active recovery.',
      video: '/videos/bgortho.mp4',
      poster: '/images/ortho.jpeg'
    },
    {
      id: 2,
      title: 'Expert Orthopedics.',
      highlight: 'Dr. Varun Goel.',
      description: 'Consultation with Dr. Varun Goel (MS Orthopedic), specialist in joint replacements, complex fractures, and sports trauma.',
      image: '/images/ortho.jpeg'
    },
    {
      id: 3,
      title: 'Accurate Reports.',
      highlight: 'Automated Pathology.',
      description: 'High-tech biochem analyzers ensuring zero manual error and quick report delivery for routine & custom health panels.',
      video: '/videos/pathology.mp4',
      poster: '/images/patho.jpeg'
    },
    {
      id: 4,
      title: 'Precision Diagnostics.',
      highlight: 'Dr. Neha Goel.',
      description: 'NABL-aligned pathology lab under the leadership of Dr. Neha Goel (MD Pathology) for accurate clinical reporting.',
      image: '/images/patho.jpeg'
    },
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
