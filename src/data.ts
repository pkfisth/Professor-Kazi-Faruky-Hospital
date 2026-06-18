import { Doctor, Department, DiagnosticReport } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'emergency',
    name: 'Accident & Emergency',
    iconName: 'ShieldAlert',
    shortDesc: '24/7 high-fidelity trauma and quick-response emergency care unit.',
    longDesc: 'Our Accident & Emergency department is a super-specialized trauma unit designed to handle critical medical, physical, and surgical crises. It features dedicated operational rooms, instantaneous trauma triage, and modern resuscitation gear.',
    features: [
      '24/7 Quick response critical life support (ACLS)',
      'Dedicated point-of-care mobile cardiac and ultrasound units',
      'Instant connection with trauma surgery and coronary care specialists',
      'Advanced trauma resuscitation bay with specialized airflow filters'
    ],
    headOfDepartment: 'Prof. Dr. M. A. Rahman, FRCS (Edin), FACS (USA)',
    location: 'Ground Floor, South Wing (Direct Emergency Entry)'
  },
  {
    id: 'cardiology',
    name: 'Cardiology & CCU',
    iconName: 'HeartPulse',
    shortDesc: 'Comprehensive coronary care, diagnostics, and recovery monitoring.',
    longDesc: 'Professor Kazi Faruky Hospital houses one of the state\'s premier Cardiac and Coronary Care Units (CCU). We provide full non-invasive and invasive cardiac solutions, ranging from early cardiovascular diagnosis to therapeutic monitoring.',
    features: [
      '24/7 dedicated clinical staff with rapid intervention protocols',
      'High-fidelity bedside computerized monitoring and oxygen tracking',
      'State-of-the-art non-invasive diagnostics (Echocardiography, Holter, ETT)',
      'Intensified postoperative and post-angioplasty recovery protocols'
    ],
    headOfDepartment: 'Prof. Dr. Kazi Sharifur Rahman, MD (Cardiology), FCPS',
    location: '2nd Floor, Block A'
  },
  {
    id: 'surgery',
    name: 'General & Laparoscopic Surgery',
    iconName: 'Scissors',
    shortDesc: 'Minimally invasive keyhole and extensive general medical operations.',
    longDesc: 'Our advanced surgical wing is designed around laparoscopic (minimally invasive) innovations. By employing cutting-edge high-definition cameras and precision surgical instruments, we ensure quicker patient recovery, minimal surgical marks, and high clinical triumph rates.',
    features: [
      'State-of-the-art laminar airflow sterile modular operating suites',
      'Advanced high-definition laparoscopic keyhole tools for abdominal surgeries',
      'On-demand cancer, breast, and endocrine specialty surgeries',
      'Excellent post-anesthesia continuous recovery monitoring systems'
    ],
    headOfDepartment: 'Prof. Dr. Brigadier General (Retd.) Kazi Faruky, MBBS, FCPS',
    location: '1st Floor, Block B'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Newborn',
    iconName: 'Baby',
    shortDesc: 'Delicate pediatric treatments, neonatal intensive care, and immunization.',
    longDesc: 'Our Pediatric department provides comprehensive and compassionate health management for neonates, infants, and children. Powered by high-efficiency Neonatal Intensive Care (NICU) units, we provide specialized care for early-term and critically ill newborns.',
    features: [
      'Intensive level-III NICU with automated ventilators and warmers',
      'Sub-specialized pediatric immunology, respiratory, and growth experts',
      'Children-friendly clinical environment that reduces patient anxiety',
      'Integrated daily outpatient vaccination and developmental clinic'
    ],
    headOfDepartment: 'Prof. Dr. Jahanara Begum, MBBS, DCH, MD (Pediatrics)',
    location: '3rd Floor, Children Block'
  },
  {
    id: 'oncology',
    name: 'Oncology (Cancer Care)',
    iconName: 'Sparkles',
    shortDesc: 'Multi-disciplinary oncology, custom therapeutics, and medical counsel.',
    longDesc: 'Providing specialized oncology therapeutics through compassionate expert clinicians. We focus on advanced solid tumor screening, target-oriented chemotherapy administration, and pain-management therapeutic programs.',
    features: [
      'Multi-disciplinary clinical tumor board for optimized custom therapy',
      'Comfortable private chemo-infusion suites with clinical nursing staff',
      'Compassionate counseling, dietary support, and holistic survivorship resources',
      'Early detection and screening diagnostics for varied cancer categories'
    ],
    headOfDepartment: 'Prof. Dr. S. K. Roy, MBBS, M.Phil (Radiotherapist)',
    location: '4th Floor, Oncology Wing'
  },
  {
    id: 'diagnostics',
    name: 'Diagnostics & Pathology',
    iconName: 'FlaskConical',
    shortDesc: 'Automated bio-chemistry lab testing and multi-slice advanced radiology.',
    longDesc: 'A continuous, fully-automated medical diagnostic and imaging lab operated by senior clinical pathologists. Featuring low-radiation CT, high-Tesla MRI, ultrasound systems, and highly structured chemical pathology machinery.',
    features: [
      'Fully computerized biochemistry, serology, and microbiology labs',
      'Ultra-high definition imaging with low exposure diagnostic rays',
      'Expedited digital report preparation accessible via Web QR codes',
      'Internationally certified and calibrated testing machinery'
    ],
    headOfDepartment: 'Prof. Dr. Farzana Chowdhury, MD (Pathology), FCPS',
    location: 'Ground Floor, Diagnostic Block (Entry C)'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-faruky',
    name: 'Prof. Dr. Brig. Gen. (Retd.) Kazi Faruky',
    title: 'Senior Clinical consultant & Director',
    specialty: 'General & Laparoscopic Surgery',
    qualification: 'MBBS, FCPS (Surgery), FACS (USA), FICS',
    degrees: [
      'Bachelor of Medicine & Surgery (MBBS), Dhaka Medical College',
      'Fellowship of the College of Physicians and Surgeons (FCPS)',
      'Fellow of the American College of Surgeons (FACS)'
    ],
    experience: 'Over 35 Years of Clinical Excellence in Surgical Specialties',
    chamberTime: '05:00 PM - 08:30 PM',
    days: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    roomNo: 'Chamber 101, 1st Floor',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    phoneExtension: '1011',
    bio: 'Prof. Dr. Kazi Faruky is a distinguished medical pioneer who dedicated his lifetime career in general and state-of-the-art laparoscopic operative care. Prior to establishing this modern hospital compound, he served as the Brigadier General of Bangladesh Army Medical Corps and chief surgical specialist of Combined Military Hospitals (CMH).'
  },
  {
    id: 'doc-rahman',
    name: 'Prof. Dr. Kazi Sharifur Rahman',
    title: 'Chief Interventional Cardiologist',
    specialty: 'Cardiology & CCU',
    qualification: 'MBBS, MD (Cardiology), FCPS, FACC (USA)',
    degrees: [
      'MBBS, Sir Salimullah Medical College',
      'Doctor of Medicine (MD) in Cardiology, National Heart Foundation',
      'Fellow of the American College of Cardiology (FACC)'
    ],
    experience: 'Over 22 Years of Expert Coronary Screenings & Therapeutics',
    chamberTime: '06:00 PM - 09:30 PM',
    days: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday', 'Thursday'],
    roomNo: 'Chamber 204, 2nd Floor',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    phoneExtension: '2042',
    bio: 'Professor Sharifur Rahman is an internationally educated cardiologist specializing in complex cardiac interventional procedures, pacemaker therapy, and advanced vascular health tracking. He holds an outstanding clinical success tracker and serves on international health review boards.'
  },
  {
    id: 'doc-jahanara',
    name: 'Prof. Dr. Jahanara Begum',
    title: 'Head, Neonatal & Infant Care Wing',
    specialty: 'Pediatrics & Newborn',
    qualification: 'MBBS, DCH, FCPS (Pediatrics), MD (Child Health)',
    degrees: [
      'MBBS, Mymensingh Medical College',
      'Diploma in Child Health (DCH), BSMMU',
      'Fellow of College of Physicians and Surgeons (FCPS)'
    ],
    experience: '20+ Years in Child Health Monitoring and Neonatal Care',
    chamberTime: '04:00 PM - 07:30 PM',
    days: ['Sunday', 'Monday', 'Tuesday', 'Thursday'],
    roomNo: 'Chamber 302, 3rd Floor',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    phoneExtension: '3025',
    bio: 'Prof. Dr. Jahanara Begum is a compassionate child specialist, deeply trusted by thousands of local families. She is highly proficient in handling critical NICU ventilation parameters, respiratory infant ailments, developmental guidelines, and childhood immunization paths.'
  },
  {
    id: 'doc-shafiqul',
    name: 'Prof. Dr. Md. Shafiqul Alam',
    title: 'Senior Trauma Surgery Consultant',
    specialty: 'Accident & Emergency',
    qualification: 'MBBS, MS (Orthopedics), Fellow in Trauma (Singapore)',
    degrees: [
      'MBBS, Chittagong Medical College',
      'MS (Orthopedics), BSMMU',
      'Advanced Trauma Care Fellowship, Singapore General Hospital'
    ],
    experience: '18+ Years in Critical Complex Trauma and Reconstructive Bone Surgery',
    chamberTime: '02:00 PM - 05:00 PM',
    days: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    roomNo: 'Emergency Resuscitation Block',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    phoneExtension: '9111',
    bio: 'Dr. Shafiqul Alam has earned widespread acclaim for managing heavy poly-trauma accidents, extensive reconstructive orthopedic procedures, and immediate high-threat surgical interventions. He leads our 24/7 level-IV Emergency Response team.'
  },
  {
    id: 'doc-farzana',
    name: 'Dr. Farzana Chowdhury',
    title: 'Lead Pathologist & Director of Diagnostics',
    specialty: 'Diagnostics & Pathology',
    qualification: 'MBBS, MD (Hematology), FCPS (Clinical Pathology)',
    degrees: [
      'MBBS, Dhaka Medical College',
      'Doctor of Medicine (MD) in Hematology, BSMMU',
      'Specialist Fellowship in Clinical Diagnostics'
    ],
    experience: '15 Years of Advanced Automated Testing and Cancer Screenings',
    chamberTime: '09:00 AM - 04:00 PM',
    days: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    roomNo: 'Diagnostics Lab 02, Ground Floor',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=800',
    phoneExtension: '0901',
    bio: 'Dr. Farzana Chowdhury is an expert clinical hematologist and diagnostic researcher. She supervises our high-throughput automated chemical analyzers, cell counters, and provides critical verification checks for all medical reports.'
  },
  {
    id: 'doc-roy',
    name: 'Prof. Dr. S. K. Roy',
    title: 'Senior Clinical Oncologist',
    specialty: 'Oncology (Cancer Care)',
    qualification: 'MBBS, M.Phil (Oncology), FCPS',
    degrees: [
      'MBBS, Rajshahi Medical College',
      'M.Phil (Oncology), National Institute of Cancer Research',
      'Advanced Clinical Oncology Training, TATA Memorial, India'
    ],
    experience: '24 Years of Compassionate Oncology Care and Chemotherapy Systems',
    chamberTime: '05:30 PM - 08:30 PM',
    days: ['Sunday', 'Monday', 'Wednesday', 'Thursday'],
    roomNo: 'Chamber 401, 4th Floor',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    phoneExtension: '4011',
    bio: 'Prof. Dr. S.K. Roy is a leading name in tumor treatment and oncological therapeutics. He acts as the chairman of the Hospital Tumor Board, designing combined therapeutic regimens of medication, precise chemotherapy, and targeted clinical procedures.'
  }
];

export const MOCK_REPORTS: Record<string, DiagnosticReport> = {
  'R-1025': {
    id: 'PKF-1025-B',
    patientName: 'Kazi Mujibur Rahman',
    patientAge: '48 Years',
    patientGender: 'Male',
    referredBy: 'Prof. Dr. Kazi Sharifur Rahman',
    testDate: '2026-06-15',
    reportDate: '2026-06-16',
    department: 'Cardiology & Diagnostics',
    tests: [
      { name: 'Serum Cholesterol', result: '185', normalRange: '< 200', unit: 'mg/dL', status: 'Normal' },
      { name: 'Triglycerides', result: '142', normalRange: '< 150', unit: 'mg/dL', status: 'Normal' },
      { name: 'HDL Cholesterol', result: '38', normalRange: '> 40', unit: 'mg/dL', status: 'Low' },
      { name: 'LDL Cholesterol', result: '118', normalRange: '< 100', unit: 'mg/dL', status: 'High' },
      { name: 'Fasting Blood Sugar (FBS)', result: '98', normalRange: '70 - 100', unit: 'mg/dL', status: 'Normal' },
      { name: 'Serum Creatinine', result: '0.92', normalRange: '0.6 - 1.2', unit: 'mg/dL', status: 'Normal' }
    ],
    conclusions: 'Borderline elevated LDL Cholesterol levels detected. HDL is slightly below optimal range. Renal functions and fasting glucose parameters lie within standard diagnostic intervals. Recommend dietary revision and mild aerobic tracking.',
    pathologist: 'Prof. Dr. Farzana Chowdhury',
    pathologistDegree: 'MD (Pathology), FCPS - Clinical Diagnostics Lab Director',
    verified: true
  },
  'R-1120': {
    id: 'PKF-1120-H',
    patientName: 'Sultana Jasmine Begum',
    patientAge: '34 Years',
    patientGender: 'Female',
    referredBy: 'Prof. Dr. Brig. Gen. (Retd.) Kazi Faruky',
    testDate: '2026-06-16',
    reportDate: '2026-06-17',
    department: 'Hematology & General Surgery',
    tests: [
      { name: 'Hemoglobin (Hb)', result: '10.8', normalRange: '12.0 - 15.5', unit: 'g/dL', status: 'Low' },
      { name: 'Total WBC Count', result: '11,200', normalRange: '4,000 - 11,000', unit: '/cu.mm', status: 'High' },
      { name: 'Platelet Count', result: '280,000', normalRange: '150,000 - 450,000', unit: '/cu.mm', status: 'Normal' },
      { name: 'ESR (Westergren)', result: '32', normalRange: '< 20', unit: 'mm/1st hr', status: 'High' },
      { name: 'Random Blood Sugar (RBS)', result: '112', normalRange: '70 - 140', unit: 'mg/dL', status: 'Normal' }
    ],
    conclusions: 'Slight inflammatory markers with elevated WBC and ESR. Mild microcytic hypochromic pattern noted on peripheral blood smear. Suggest iron supplement coordination and clinical monitor post laparoscopy.',
    pathologist: 'Prof. Dr. Farzana Chowdhury',
    pathologistDegree: 'MD (Pathology), FCPS - Clinical Diagnostics Lab Director',
    verified: true
  },
  'R-3540': {
    id: 'PKF-3540-P',
    patientName: 'Master Tahsan Faruky',
    patientAge: '5 Years',
    patientGender: 'Male',
    referredBy: 'Prof. Dr. Jahanara Begum',
    testDate: '2026-06-17',
    reportDate: '2026-06-17',
    department: 'Diagnostics (Pediatrics)',
    tests: [
      { name: 'Hemoglobin (Hb)', result: '12.5', normalRange: '11.0 - 14.5', unit: 'g/dL', status: 'Normal' },
      { name: 'Total WBC Count', result: '7,400', normalRange: '5,000 - 12,000', unit: '/cu.mm', status: 'Normal' },
      { name: 'Neutrophils', result: '48', normalRange: '40 - 70', unit: '%', status: 'Normal' },
      { name: 'Lymphocytes', result: '42', normalRange: '20 - 50', unit: '%', status: 'Normal' },
      { name: 'Serum Calcium', result: '9.4', normalRange: '8.8 - 10.8', unit: 'mg/dL', status: 'Normal' }
    ],
    conclusions: 'Routine pediatric blood metrics are cleanly within optimal growth intervals. Complete blood counts, differential profile, and serum calcium levels indicate robust pediatric developmental parameters.',
    pathologist: 'Prof. Dr. Farzana Chowdhury',
    pathologistDegree: 'MD (Pathology), FCPS - Clinical Diagnostics Lab Director',
    verified: true
  }
};
