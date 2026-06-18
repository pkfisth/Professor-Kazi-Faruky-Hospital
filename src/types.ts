/**
 * Types & Interfaces for Professor Kazi Faruky Hospital Web Platform
 */

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  qualification: string;
  degrees: string[];
  experience: string;
  chamberTime: string;
  days: string[];
  roomNo: string;
  image: string;
  phoneExtension: string;
  bio: string;
}

export interface Department {
  id: string;
  name: string;
  iconName: string; // Used to determine Lucide Icon component
  shortDesc: string;
  longDesc: string;
  features: string[];
  headOfDepartment: string;
  location: string;
}

export interface Appointment {
  id: string;
  serialNumber: number;
  patientName: string;
  patientPhone: string;
  patientGender: string;
  patientDob: string;
  departmentId: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  symptoms?: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
  createdAt: string;
}

export interface DiagnosticReport {
  id: string; // e.g. PKF-9821-B
  patientName: string;
  patientAge: string;
  patientGender: string;
  referredBy: string;
  testDate: string;
  reportDate: string;
  department: string;
  tests: {
    name: string;
    result: string;
    normalRange: string;
    unit: string;
    status: 'Normal' | 'High' | 'Low';
  }[];
  conclusions: string;
  pathologist: string;
  pathologistDegree: string;
  verified: boolean;
}
