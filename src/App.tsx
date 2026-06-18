import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

// Portal overlays
import AppointmentModal from './components/AppointmentModal';
import OnlineReportModal from './components/OnlineReportModal';
import DoctorProfileModal from './components/DoctorProfileModal';

import { Doctor, Appointment } from './types';
import { CalendarRange, X, CheckSquare, ArrowUpDown } from 'lucide-react';
import { DOCTORS } from './data';

export default function App() {
  // Modal toggle state managers
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Selected clinical targets
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [preSelectedDoctorId, setPreSelectedDoctorId] = useState<string | null>(null);
  
  // Active state local storage synchronization
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showBookingsPane, setShowBookingsPane] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'specialty'>('date');

  // Load appointments from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('pkf_appointments');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse local medical bookings", e);
      }
    }
  }, []);

  const handleAddNewAppointment = (appt: Appointment) => {
    const updated = [appt, ...appointments];
    setAppointments(updated);
    localStorage.setItem('pkf_appointments', JSON.stringify(updated));
  };

  const handleCancelAppointment = (id: string) => {
    if (window.confirm("Are you sure you want to cancel this outpatient clinical consultation booking?")) {
      const updated = appointments.filter(a => a.id !== id);
      setAppointments(updated);
      localStorage.setItem('pkf_appointments', JSON.stringify(updated));
    }
  };

  const openBookingForDoctor = (doctorId: string) => {
    setPreSelectedDoctorId(doctorId);
    setIsBookOpen(true);
  };

  const openProfileView = (doc: Doctor) => {
    setSelectedDoctor(doc);
    setIsProfileOpen(true);
  };

  const sortedAppointments = [...appointments].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      const docA = DOCTORS.find(d => d.id === a.doctorId);
      const docB = DOCTORS.find(d => d.id === b.doctorId);
      const specA = docA?.specialty || '';
      const specB = docB?.specialty || '';
      if (specA !== specB) {
        return specA.localeCompare(specB);
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative selection:bg-teal-500 selection:text-white antialiased">
      
      {/* 1. Header (Sticky) */}
      <Header 
        onOpenBookModal={() => {
          setPreSelectedDoctorId(null);
          setIsBookOpen(true);
        }}
        onOpenReportModal={() => setIsReportOpen(true)}
      />

      {/* 2. Main Content Blocks */}
      <main className="flex-grow">
        
        {/* Hero Banner Section */}
        <Hero 
          onOpenBookModal={() => {
            setPreSelectedDoctorId(null);
            setIsBookOpen(true);
          }}
          onOpenReportModal={() => setIsReportOpen(true)}
        />

        {/* About Us section */}
        <AboutUs />

        {/* Major Medical departments grids */}
        <Departments 
          onSelectDepartment={(deptId) => {
            // Pick default doctor for that department
            openBookingForDoctor('');
          }}
        />

        {/* Meet Experienced Doctors Section */}
        <Doctors 
          onViewProfile={openProfileView}
          onBookDoctor={openBookingForDoctor}
        />

        {/* Key Features & Core Services section */}
        <Services />

        {/* Patient Testimonials Carousel */}
        <Testimonials />

        {/* Contact Us block and compound layouts */}
        <ContactUs />

      </main>

      {/* 3. Footer */}
      <Footer 
        onOpenBookModal={() => {
          setPreSelectedDoctorId(null);
          setIsBookOpen(true);
        }}
        onOpenReportModal={() => setIsReportOpen(true)}
      />

      {/* ========================================================== */}
      {/* ======================= OVERLAY PORTALS ================== */}
      {/* ========================================================== */}

      {/* Direct Scheduling Wizard Modal */}
      <AppointmentModal 
        isOpen={isBookOpen}
        onClose={() => {
          setIsBookOpen(false);
          setPreSelectedDoctorId(null);
        }}
        initialDoctorId={preSelectedDoctorId}
        onAppointmentCreated={handleAddNewAppointment}
      />

      {/* Diagnostic reports lookup modal */}
      <OnlineReportModal 
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />

      {/* Comprehensive Doctor profile modal */}
      <DoctorProfileModal 
        isOpen={isProfileOpen}
        onClose={() => {
          setIsProfileOpen(false);
          setSelectedDoctor(null);
        }}
        doctor={selectedDoctor}
        onBookDirect={(doctorId) => {
          openBookingForDoctor(doctorId);
        }}
      />

      {/* ========================================================== */}
      {/* ============= INTERACTIVE BOOKING LOG WIDGET ============= */}
      {/* ========================================================== */}
      {appointments.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40 select-none">
          {/* Main Toggle Floating Bubble */}
          {!showBookingsPane ? (
            <button
              onClick={() => setShowBookingsPane(true)}
              className="px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-slate-900 font-bold rounded-full shadow-2xl flex items-center gap-2 border border-teal-300 animate-bounce cursor-pointer text-xs"
            >
              <CalendarRange className="h-4.5 w-4.5" />
              <span>Active Consultations ({appointments.length})</span>
            </button>
          ) : (
            /* Active bookings drawer */
            <div className="w-80 bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl space-y-4 animate-[fadeIn_0.2s_ease-out]">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <h4 className="font-display font-bold text-slate-800 text-sm flex items-center gap-1">
                  <CheckSquare className="h-4.5 w-4.5 text-teal-600" /> Confirmed Bookings ({appointments.length})
                </h4>
                <button 
                  onClick={() => setShowBookingsPane(false)}
                  className="p-1 text-slate-400 hover:text-slate-650 rounded-full hover:bg-slate-50 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Enhanced Sort Selection Dropdown */}
              <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-100/85">
                <span className="text-slate-500 font-semibold flex items-center gap-1">
                  <ArrowUpDown className="h-3.5 w-3.5 text-teal-600" /> Sort consultations
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'date' | 'specialty')}
                  className="bg-slate-50 border border-slate-205 rounded-xl px-2 py-1 text-[10px] text-slate-700 font-bold focus:outline-none focus:border-teal-500 cursor-pointer shadow-xs"
                >
                  <option value="date">Nearest Date First</option>
                  <option value="specialty">Doctor Specialty</option>
                </select>
              </div>

              <div className="max-h-60 overflow-y-auto space-y-2.5 text-[11px] pr-1 scrollbar-thin">
                {sortedAppointments.map((appt) => {
                  const doc = DOCTORS.find(d => d.id === appt.doctorId);
                  return (
                    <div key={appt.id} className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex flex-col justify-between gap-1.5 hover:border-teal-300 transition-colors">
                      <div>
                        <div className="flex justify-between font-mono text-[9px] text-slate-400 font-bold">
                          <span>ID: {appt.id}</span>
                          <span className="text-teal-700 font-semibold">SERIAL #{appt.serialNumber}</span>
                        </div>
                        <p className="font-bold text-slate-800 text-xs mt-1">Patient: {appt.patientName}</p>
                        {doc && (
                          <div className="mt-1 bg-white border border-slate-100 rounded-lg p-1.5 space-y-0.5 shadow-2xs">
                            <p className="font-semibold text-slate-800 text-[10px] leading-tight">{doc.name}</p>
                            <p className="text-[8px] text-teal-600 font-mono uppercase tracking-wider font-bold leading-none">{doc.specialty}</p>
                          </div>
                        )}
                        <p className="text-slate-500 mt-1 text-[10px]">Date: {appt.date} • {appt.timeSlot}</p>
                      </div>
                      <button
                        onClick={() => handleCancelAppointment(appt.id)}
                        className="text-red-600 hover:text-red-800 hover:underline font-semibold text-[9px] text-left mt-0.5 cursor-pointer"
                      >
                        Cancel Consultation
                      </button>
                    </div>
                  );
                })}
              </div>

              <p className="text-[10px] text-slate-400 leading-normal bg-slate-50 p-2.5 rounded-lg text-center font-mono">
                Present active reservation ID cards on arrival at chamber desks.
              </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
