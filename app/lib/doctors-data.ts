export const DOCTORS_DATA: Record<string, any> = {
  'dr-varun': {
    id: 'dr-varun',
    name: 'Dr. Varun Goel',
    qualifications: 'MS Orthopedic',
    specialization: 'Fellow in Arthroscopy and Sports Medicine | Trauma & Joint Replacement',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    bio: 'Dr. Varun Goel is a renowned orthopedic surgeon in Raipur with over 15 years of experience in complex trauma management and joint replacement surgeries.',
    journey: [
      { year: '2008', event: 'Completed MS Orthopedics with distinction.' },
      { year: '2010', event: 'Registrar at PGI Rohtak, gaining intensive trauma experience.' },
      { year: '2013', event: 'Fellowship in Arthroscopy and Sports Medicine.' },
      { year: '2015', event: 'Founded Care Plus Healthcentre with a vision for modern orthopedics.' },
      { year: '2020', event: 'Successfully completed 5,000+ joint replacement surgeries.' }
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
    journey: [
      { year: '2010', event: 'Completed MD Pathology from a premier medical institute.' },
      { year: '2012', event: 'Specialization in Histopathology and Cytology.' },
      { year: '2015', event: 'Established the advanced pathology lab at Care Plus.' },
      { year: '2018', event: 'Implemented NABL-level quality standards in the lab.' },
      { year: '2023', event: 'Recognized for 100% diagnostic accuracy in over 1 million tests.' }
    ],
    expertise: ['Histopathology', 'Cytology', 'Hematology', 'Blood Disorders'],
    achievements: ['Excellence in Diagnostics Award', 'Lead Pathologist for State Health Programs', 'Member of Central Pathology Council']
  }
};
