import React from 'react';
import { 
  HeartPulse, Phone, Mail, MapPin, ExternalLink, 
  CalendarRange, ClipboardList, UserCheck, Shield 
} from 'lucide-react';

interface FooterProps {
  onOpenBookModal: () => void;
  onOpenReportModal: () => void;
}

export default function Footer({ onOpenBookModal, onOpenReportModal }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-16 border-t-2 border-white/5 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 Brand Columns */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold shadow-xs">
                <HeartPulse className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display font-medium text-white text-base lg:text-lg tracking-tight">Kazi Faruky Hospital</span>
                <p className="text-[9px] font-mono tracking-widest text-teal-400 uppercase font-bold">Excellence in Healthcare</p>
              </div>
            </div>
            
            <p className="text-[11px] leading-relaxed text-slate-400 max-w-sm">
              An elite, multi-wing healthcare compound, established with military precision, dedicated to delivering uncompromised clinical outcomes and patient trust.
            </p>

            <div className="pt-2 text-[10px] text-slate-500 font-mono">
              REGISTRATION NO: PKF-2012-DHAKA <br />
              DIRECTORATE GENERAL OF HEALTH SERVICES (DGHS) COMPLIANT
            </div>
          </div>

          {/* Col 2 Quick actions Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest font-mono">Outpatient Portal Links</h4>
            <ul className="space-y-2.5 font-sans font-medium">
              <li>
                <button 
                  onClick={onOpenBookModal} 
                  className="hover:text-white flex items-center gap-1.5 transition-all outline-none cursor-pointer"
                >
                  <CalendarRange className="h-3.5 w-3.5 text-teal-400" /> Book Direct Appointment
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenReportModal} 
                  className="hover:text-white flex items-center gap-1.5 transition-all outline-none cursor-pointer"
                >
                  <ClipboardList className="h-3.5 w-3.5 text-teal-400" /> Retrieve Diagnostic Reports
                </button>
              </li>
              <li>
                <a 
                  href="#doctors" 
                  className="hover:text-white flex items-center gap-1.5 transition-all"
                >
                  <UserCheck className="h-3.5 w-3.5 text-teal-400" /> Meet Consultative Physicians
                </a>
              </li>
              <li>
                <a 
                  href="#departments" 
                  className="hover:text-white flex items-center gap-1.5 transition-all"
                >
                  <Shield className="h-3.5 w-3.5 text-teal-400" /> Specialty Clinical Wards
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 Contacts details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest font-mono font-sans">Contact Compound Coordinates</h4>
            <div className="space-y-3 leading-relaxed text-[11px]">
              
              <div className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                <p>
                  Professor Kazi Faruky Hospital Compound, Rakhalia, Raipur, Lakshmipur
                </p>
              </div>

              <div className="flex gap-2.5 items-start">
                <Phone className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                <p>
                  Emergency Hotline: <strong className="text-slate-200">017777777777</strong> (24 Hours Direct Line)
                </p>
              </div>

              <div className="flex gap-2.5 items-start">
                <Mail className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                <p>
                  Website: <a href="https://www.pkfh.com" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:underline">www.pkfh.com</a> <br />
                  Emails: <span className="text-slate-300">admin@pkfh.com, admissions@pkfh.com</span>
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom copyright line exactly as requested */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-mono">
          <p>
            Copyright © 2026 Professor Kazi Faruky Hospital. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="#about-us" className="hover:text-slate-350">Privacy Guidelines</a>
            <span>•</span>
            <a href="#contact-us" className="hover:text-slate-350">Patient Disclosures</a>
            <span>•</span>
            <a href="#home" className="hover:text-slate-350">Scroll Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
