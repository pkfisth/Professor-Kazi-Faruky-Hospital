import React from 'react';
import { motion } from 'motion/react';
import { 
  X, Briefcase, Award, Clock, MapPin, Phone, 
  Stethoscope, ShieldAlert, BadgeCheck, Sparkles 
} from 'lucide-react';
import { Doctor } from '../types';

interface DoctorProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
  onBookDirect: (doctorId: string) => void;
}

export default function DoctorProfileModal({ 
  isOpen, 
  onClose, 
  doctor,
  onBookDirect 
}: DoctorProfileModalProps) {
  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto select-none">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden"
      >
        {/* Color stripe decoration */}
        <div className="h-1 bg-teal-600"></div>

        {/* Header Close button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 rounded-full transition-all z-10"
          aria-label="Close profile"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6 md:p-8 space-y-6">
          {/* Main Info Doctor Cards */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-slate-200 shadow-xs shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-teal-50 text-teal-700 font-bold rounded-full text-[9px] uppercase font-mono border border-teal-150">
                <Stethoscope className="w-3 h-3 text-teal-600" /> Executive Consultant
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight leading-tight pt-1">
                {doctor.name}
              </h3>
              <p className="text-xs font-semibold text-teal-600">{doctor.title}</p>
              <p className="text-xs text-slate-500 font-medium">{doctor.specialty} Specialist</p>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 border border-slate-200 rounded-2xl italic font-sans font-medium">
            "{doctor.bio}"
          </p>

          <div className="h-px bg-slate-250"></div>

          {/* Core Credentials List */}
          <div className="space-y-4">
            {/* Faculty Degrees list */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono flex items-center gap-1.5 mb-2">
                <Award className="h-3.5 w-3.5 text-teal-600" /> Medical Board Qualifications
              </h4>
              <ul className="space-y-1 text-xs text-slate-700 list-none pl-0 font-sans font-medium">
                {doctor.degrees.map((deg, i) => (
                  <li key={i} className="flex items-start gap-2 py-0.5">
                    <BadgeCheck className="h-4 w-4 text-teal-555 shrink-0 mt-0.5" />
                    <span>{deg}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium font-sans">
              {/* Timing */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-150 space-y-1">
                <span className="text-slate-400 block font-mono text-[9px] uppercase font-semibold">Consultation Duration</span>
                <span className="text-slate-850 font-semibold flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-teal-600" /> {doctor.chamberTime}
                </span>
              </div>
              
              {/* Chamber Days */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-150 space-y-1">
                <span className="text-slate-400 block font-mono text-[9px] uppercase font-semibold">Chamber Days</span>
                <span className="text-slate-850 font-semibold">
                  {doctor.days.join(', ')}
                </span>
              </div>

              {/* Room Location */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-150 space-y-1">
                <span className="text-slate-400 block font-mono text-[9px] uppercase font-semibold">Location Room</span>
                <span className="text-slate-850 font-semibold flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-teal-600" /> {doctor.roomNo}
                </span>
              </div>

              {/* Experience */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-150 space-y-1">
                <span className="text-slate-400 block font-mono text-[9px] uppercase font-semibold">Total Expert Practice</span>
                <span className="text-slate-850 font-semibold flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-teal-600" /> {doctor.experience.split('in')[0]}
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-200 pt-1"></div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between text-xs font-medium">
            <span className="text-slate-450 font-mono tracking-tight flex items-center gap-1">
              <Phone className="h-3.5 w-3.5 text-slate-400" /> Chamber Ext: +880-96-PKF-{doctor.phoneExtension}
            </span>
            <button
              onClick={() => {
                onBookDirect(doctor.id);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles className="h-4 w-4 text-white" /> Direct Booking with Expert
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
