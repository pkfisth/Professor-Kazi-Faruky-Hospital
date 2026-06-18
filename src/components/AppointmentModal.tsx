import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Calendar, Clock, User, Phone, Briefcase, Activity, 
  CheckCircle2, AlertCircle, Sparkles, MapPin, Printer, ChevronRight 
} from 'lucide-react';
import { Doctor, Department, Appointment } from '../types';
import { DEPARTMENTS, DOCTORS } from '../data';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctorId?: string | null;
  onAppointmentCreated: (appointment: Appointment) => void;
}

export default function AppointmentModal({ 
  isOpen, 
  onClose, 
  initialDoctorId,
  onAppointmentCreated 
}: AppointmentModalProps) {
  // Wizard steps: 1 = Clinical Select, 2 = Patient Details, 3 = Confirmation Ticket
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDeptId, setSelectedDeptId] = useState<string>('');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('05:30 PM');
  
  // Patient details state
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientGender, setPatientGender] = useState<string>('Male');
  const [patientDob, setPatientDob] = useState<string>('');
  const [symptoms, setSymptoms] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // Created appointment ticket
  const [createdAppointment, setCreatedAppointment] = useState<Appointment | null>(null);

  // Sync selected doctor from props if any
  useEffect(() => {
    if (initialDoctorId && isOpen) {
      const doc = DOCTORS.find(d => d.id === initialDoctorId);
      if (doc) {
        setSelectedDoctorId(doc.id);
        const dept = DEPARTMENTS.find(d => d.name === doc.specialty);
        if (dept) {
          setSelectedDeptId(dept.id);
        }
      }
      setStep(1);
    } else if (isOpen) {
      // Default selections
      if (DEPARTMENTS.length > 0 && !selectedDeptId) {
        setSelectedDeptId(DEPARTMENTS[0].id);
      }
    }
  }, [initialDoctorId, isOpen]);

  // Sync doctor when department changes (if the current doctor does not match the department)
  useEffect(() => {
    if (selectedDeptId) {
      const dept = DEPARTMENTS.find(d => d.id === selectedDeptId);
      const doctorsInDept = DOCTORS.filter(d => d.specialty === dept?.name);
      
      if (doctorsInDept.length > 0) {
        // Only override if the current doctor is not in this new department
        const currentDoc = DOCTORS.find(d => d.id === selectedDoctorId);
        if (!currentDoc || currentDoc.specialty !== dept?.name) {
          setSelectedDoctorId(doctorsInDept[0].id);
        }
      } else {
        setSelectedDoctorId('');
      }
    }
  }, [selectedDeptId]);

  if (!isOpen) return null;

  const currentDept = DEPARTMENTS.find(d => d.id === selectedDeptId);
  const currentDoctor = DOCTORS.find(d => d.id === selectedDoctorId);
  const doctorsInDept = DEPARTMENTS.find(d => d.id === selectedDeptId) 
    ? DOCTORS.filter(d => d.specialty === DEPARTMENTS.find(dept => dept.id === selectedDeptId)?.name)
    : DOCTORS;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDeptId || !selectedDoctorId || !bookingDate || !patientName || !patientPhone) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      const serialNum = Math.floor(Math.random() * 20) + 5; // Serial between 5 and 25
      const appointmentId = `PKF-A${Math.floor(1000 + Math.random() * 9000)}`;
      
      const newAppointment: Appointment = {
        id: appointmentId,
        serialNumber: serialNum,
        patientName,
        patientPhone,
        patientGender,
        patientDob,
        departmentId: selectedDeptId,
        doctorId: selectedDoctorId,
        date: bookingDate,
        timeSlot,
        symptoms,
        status: 'Confirmed',
        createdAt: new Date().toISOString()
      };

      setCreatedAppointment(newAppointment);
      onAppointmentCreated(newAppointment);
      setIsSubmitting(false);
      setStep(3);
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto select-none">
      <motion.div 
        key="appointment-box"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden"
      >
        {/* Top Header Row */}
        <div className="bg-white border-b border-slate-200 px-6 py-5 text-slate-800 flex justify-between items-center">
          <div>
            <span className="text-teal-600 font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> Booking Portal
            </span>
            <h3 className="text-lg md:text-xl font-display font-semibold text-slate-900 mt-0.5">Professor Kazi Faruky Hospital</h3>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close portal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Wizard Steps indicator - Only show if not printed/confirmed */}
        {step !== 3 && (
          <div className="border-b border-light-200 bg-slate-50 px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step === 1 ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-700 border border-teal-200'}`}>
                1
              </span>
              <span className={`text-xs font-bold ${step === 1 ? 'text-teal-600' : 'text-slate-500'}`}>Department & Consultant</span>
            </div>
            <div className="h-px bg-slate-200 flex-1 mx-4"></div>
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step === 2 ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                2
              </span>
              <span className={`text-xs font-bold ${step === 2 ? 'text-teal-600' : 'text-slate-500'}`}>Patient Specification</span>
            </div>
          </div>
        )}

        {/* Progress Bar (Simulated) */}
        {isSubmitting && (
          <div className="h-1 w-full bg-slate-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-teal-500 animate-[pulse_1.5s_infinite] w-2/3 rounded-full"></div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-950 mt-0.5 shrink-0" />
                  <p className="text-xs text-blue-950/85 leading-relaxed">
                    Choose a clinical category and then pick the preferred specialist. The schedule dates are formulated from their available clinic chambers.
                  </p>
                </div>

                {/* Select Department */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Activity className="h-4 w-4 text-blue-900" /> Specialty Department
                  </label>
                  <select
                    value={selectedDeptId}
                    onChange={(e) => setSelectedDeptId(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-sm font-medium"
                    required
                  >
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.id}>{dept.name}</option>
                    ))}
                  </select>
                </div>

                {/* Select Doctor */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <User className="h-4 w-4 text-blue-900" /> Executive Consultant Physician
                  </label>
                  <select
                    value={selectedDoctorId}
                    onChange={(e) => setSelectedDoctorId(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-sm font-medium"
                    required
                  >
                    {doctorsInDept.length > 0 ? (
                      doctorsInDept.map((doc) => (
                        <option key={doc.id} value={doc.id}>{doc.name} - {doc.title}</option>
                      )
                    )) : (
                      <option value="">No doctors available in department</option>
                    )}
                  </select>
                </div>

                {/* Doctor Clinical Schedule Quick Panel */}
                {currentDoctor && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                    <div>
                      <span className="text-slate-400 block uppercase font-mono tracking-wider font-semibold text-[10px]">Chamber Availability Duration</span>
                      <span className="text-slate-800 font-semibold text-sm flex items-center gap-1.5 mt-1">
                        <Clock className="h-3.5 w-3.5 text-teal-600" /> {currentDoctor.chamberTime}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block uppercase font-mono tracking-wider font-semibold text-[10px]">Chamber Days</span>
                      <span className="text-slate-800 font-semibold leading-relaxed block mt-1">
                        {currentDoctor.days.join(', ')}
                      </span>
                    </div>
                  </div>
                )}

                {/* Select Date and Preferred Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-900" /> Preferred Consultation Date
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-sm"
                      required
                      min={new Date().toISOString().split('T')[0]} // Prevents backward bookings
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-900" /> Choice Consultation Slot
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-sm font-medium"
                    >
                      <option value="05:00 PM">05:00 PM (Early Slot)</option>
                      <option value="05:30 PM">05:30 PM</option>
                      <option value="06:00 PM">06:00 PM (Standard Slot)</option>
                      <option value="06:30 PM">06:30 PM</option>
                      <option value="07:00 PM">07:00 PM</option>
                      <option value="07:30 PM">07:30 PM (Evening Cycle)</option>
                      <option value="08:00 PM">08:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Step Navigation */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      if (!bookingDate) {
                        alert('Please choose a preferred clinical reservation date.');
                        return;
                      }
                      setStep(2);
                    }}
                    className="px-6 py-3 bg-blue-900 text-white rounded-xl text-sm font-semibold hover:bg-blue-950 active:scale-[0.98] transition-all flex items-center gap-1.5 shadow-md shadow-blue-900/10 cursor-pointer"
                  >
                    Proceed with Patient Details <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {/* Doctor choice preview */}
                {currentDoctor && (
                  <div className="bg-slate-50 p-3 rounded-2xl border border-dotted border-slate-300 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <img src={currentDoctor.image} alt="" className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-slate-800">{currentDoctor.name}</p>
                        <p className="text-slate-500">{currentDoctor.specialty}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-teal-700">{bookingDate} • {timeSlot}</p>
                      <p className="text-[10px] text-slate-400">{currentDoctor.roomNo}</p>
                    </div>
                  </div>
                )}

                {/* Patient Information Grid */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">Patient Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="e.g. Salim Al Mahmud"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">Contact Mobile Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          placeholder="e.g. +880 1712-345678"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">Date of Birth</label>
                      <input
                        type="date"
                        value={patientDob}
                        onChange={(e) => setPatientDob(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">Patient Biological Gender</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Male', 'Female', 'Other'].map((gender) => (
                          <button
                            key={gender}
                            type="button"
                            onClick={() => setPatientGender(gender)}
                            className={`py-3 text-sm rounded-xl border font-medium ${patientGender === gender ? 'bg-teal-50 border-teal-500 text-teal-850' : 'bg-slate-50 border-slate-250 text-slate-600 hover:bg-slate-100'} transition-all`}
                          >
                            {gender}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700">Symptoms & Important Health Background (Optional)</label>
                    <textarea
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      placeholder="e.g. Mild chest inflammation, continuous pediatric fever, post-operative checkup schedules..."
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all text-sm"
                    ></textarea>
                  </div>
                </div>

                {/* Submitting Actions */}
                <div className="pt-2 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-3 text-slate-600 hover:text-slate-800 text-sm font-semibold flex items-center gap-1 hover:bg-slate-150 rounded-xl transition-all cursor-pointer"
                  >
                    Back to Selection
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-teal-600 text-white rounded-xl text-sm font-semibold hover:bg-teal-700 disabled:opacity-50 active:scale-[0.98] transition-all flex items-center gap-1.5 shadow-md shadow-teal-600/10 cursor-pointer"
                  >
                    {isSubmitting ? 'Confirming Appointment...' : 'Book Direct Appointment'}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && createdAppointment && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                {/* Visual Official Appointment voucher */}
                <div className="border border-teal-100 bg-teal-50/40 rounded-3xl p-6 relative overflow-hidden text-center md:px-8">
                  <div className="absolute top-0 right-0 p-5 bg-teal-500/10 rounded-bl-[100px] border-b text-teal-700 text-xs font-mono font-medium tracking-wide">
                    SERIAL NO: {createdAppointment.serialNumber}
                  </div>
                  
                  <div className="mx-auto w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-3.5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <h4 className="text-xl md:text-2xl font-display font-semibold text-slate-800">Appointment Confirmed</h4>
                  <p className="text-xs text-slate-500 mt-1">Official Clinical Booking Serial Card</p>

                  <div className="h-px bg-dashed bg-slate-300 w-full my-5"></div>

                  {/* Voucher Grid info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-xs bg-white rounded-2xl p-4 border border-slate-150">
                    <div>
                      <span className="text-slate-400 block font-semibold uppercase font-mono text-[9px]">Patient Name</span>
                      <span className="text-slate-800 text-sm font-semibold block mt-0.5">{createdAppointment.patientName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold uppercase font-mono text-[9px]">Consultant Physician</span>
                      <span className="text-slate-800 text-sm font-semibold block mt-0.5">{currentDoctor?.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold uppercase font-mono text-[9px]">Diagnostic Block / Location</span>
                      <span className="text-slate-800 font-semibold block mt-0.5 flex items-center gap-1 text-teal-800">
                        <MapPin className="h-3 w-3" /> {currentDoctor?.roomNo || currentDept?.location}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold uppercase font-mono text-[9px]">Confirmed Booking Slot</span>
                      <span className="text-slate-800 font-semibold block mt-0.5 text-blue-900">{createdAppointment.date} @ {createdAppointment.timeSlot}</span>
                    </div>
                    <div className="sm:col-span-2 pt-1.5 border-t border-slate-100 mt-1.5 flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>BOOKING ID: {createdAppointment.id}</span>
                      <span>TELEPHONE EXT: {currentDoctor?.phoneExtension}</span>
                    </div>
                  </div>

                  {/* Quick Guidelines */}
                  <div className="mt-5 text-[11px] text-slate-550 leading-relaxed max-w-lg mx-auto bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <strong className="text-slate-800">Important Instructions:</strong> Please present a physical or digital snapshot of this serial card at the chamber reception desk 15 minutes prior to the slot. For reschedule queries, dial hospital hotline extension directly.
                  </div>
                </div>

                {/* Voucher bottom buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-between">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="px-5 py-3 text-slate-700 bg-slate-100 hover:bg-slate-2 w-full sm:w-auto text-sm font-semibold flex items-center justify-center gap-1.5 rounded-xl border border-slate-250 transition-all cursor-pointer"
                  >
                    <Printer className="h-4 w-4" /> Print Booking Card
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                    }}
                    className="px-8 py-3 bg-blue-900 text-white hover:bg-blue-950 w-full sm:w-auto text-sm font-semibold rounded-xl text-center self-end shadow-md shadow-blue-900/10 cursor-pointer"
                  >
                    Finish & Close Portal
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
}
