import React, { useState } from 'react';
import { 
  Search, ShieldAlert, Award, Clock, MapPin, Sparkles, 
  Stethoscope, CalendarClock, Phone, ArrowUpRight 
} from 'lucide-react';
import { Doctor } from '../types';
import { DOCTORS } from '../data';

interface DoctorsProps {
  onViewProfile: (doctor: Doctor) => void;
  onBookDoctor: (doctorId: string) => void;
}

export default function Doctors({ onViewProfile, onBookDoctor }: DoctorsProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeSpecialty, setActiveSpecialty] = useState<string>('All');

  // List of all unique specialties (+ All) for filtering tabs
  const specialties = ['All', ...Array.from(new Set(DOCTORS.map(d => d.specialty)))];

  // Map specialty tab to nice human labels if needed, otherwise use original
  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.qualification.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = activeSpecialty === 'All' || doc.specialty === activeSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <section id="doctors" className="py-20 bg-slate-50 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-teal-600 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Clinical Leadership
          </span>
          <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-none">
            Meet Our Experienced Team
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto font-medium">
            Professor Kazi Faruky Hospital compound is powered by distinguished clinical specialists, professors, and retired army medical commanders.
          </p>
          <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full mt-3"></div>
        </div>

        {/* Filter Toolbar Controls */}
        <div className="space-y-6 mb-12">
          
          {/* Search inputs */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search consultants by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-full focus:border-teal-500 focus:outline-none transition-colors text-xs text-slate-800 placeholder-slate-400"
            />
          </div>

          {/* Tab Filter Pills Row */}
          <div className="flex flex-wrap justify-center gap-2">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setActiveSpecialty(specialty)}
                className={`px-4.5 py-1.5 border rounded-full text-xs font-semibold tracking-tight transition-colors cursor-pointer ${
                  activeSpecialty === specialty
                    ? 'bg-teal-600 border-teal-600 text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {specialty === 'All' ? 'All Specialties' : specialty}
              </button>
            ))}
          </div>

        </div>

        {/* Doctors Grid output */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doc) => (
              <div 
                key={doc.id}
                className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-350 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  
                  {/* Doctor Image and Specialty Card */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-150 border border-slate-200">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-500 saturate-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-xs text-slate-800 font-bold rounded-full text-[9px] uppercase font-mono shadow-xs border border-slate-100">
                        <Stethoscope className="w-3.5 h-3.5 text-teal-600" /> {doc.specialty}
                      </span>
                    </div>
                  </div>

                  {/* Context Block */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-wider text-slate-450 uppercase font-bold">
                      {doc.title}
                    </span>
                    <h3 className="text-base font-display font-semibold text-slate-800 group-hover:text-teal-605 transition-all leading-snug">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 italic">
                      {doc.qualification}
                    </p>
                  </div>

                  <div className="h-px bg-slate-150 my-1"></div>

                  {/* Chamber parameters info */}
                  <div className="space-y-2 text-[11px] text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      <span>Chamber: <strong className="text-slate-705">{doc.chamberTime}</strong></span>
                    </div>

                    <div className="flex items-start gap-2">
                      <CalendarClock className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">Days: <strong className="text-slate-705">{doc.days.join(', ')}</strong></span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />
                      <span>{doc.roomNo}</span>
                    </div>
                  </div>

                </div>

                {/* Grid card action buttons */}
                <div className="pt-5 border-t border-slate-150/50 mt-5 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onViewProfile(doc)}
                    className="py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs rounded-full transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    View Biography
                  </button>

                  <button
                    onClick={() => onBookDoctor(doc.id)}
                    className="py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-full transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    Book Doctor <ArrowUpRight className="h-3.5 w-3.5 text-teal-150" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Search results */
          <div className="bg-white border text-slate-700 border-slate-200 rounded-3xl p-12 text-center max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mx-auto">
              <Search className="h-6 w-6" />
            </div>
            <p className="text-sm font-semibold text-slate-800">No clinical consultants found</p>
            <p className="text-xs text-slate-500">
              We couldn't locate any specialists corresponding containing "{searchTerm}". Reset the filters to browse all consultants.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveSpecialty('All');
              }}
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-xs font-semibold cursor-pointer"
            >
              Reset Search Parameters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
