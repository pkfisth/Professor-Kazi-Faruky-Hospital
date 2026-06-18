import React from 'react';
import { 
  ArrowRight, ShieldCheck, HeartPulse, Clock, Sparkles, 
  Users, Stethoscope, Building2, HelpCircle 
} from 'lucide-react';

interface HeroProps {
  onOpenBookModal: () => void;
  onOpenReportModal: () => void;
}

export default function Hero({ onOpenBookModal, onOpenReportModal }: HeroProps) {
  const announcements = [
    "New Automated Chemiluminescence system installed in Diagnostics Pathology Unit",
    "24/7 Intensive Care (ICU) and Neonatal Care Units are running with backup ventilators",
    "Prof. Dr. Brig. Gen. (Retd.) Kazi Faruky specialized chamber bookings are now open"
  ];

  return (
    <section id="home" className="relative bg-slate-50 py-8 select-none">
      
      {/* Main Container Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-sm relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Main Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Dynamic sliding line banner */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-ping"></span>
                <span>International Standard Healthcare Excellence</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.1] text-slate-900">
                Compassionate Care, <br />
                <span className="text-teal-600">Advanced Technology.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Professor Kazi Faruky Hospital represents the gold standard of international medical treatment. Combining elite consultant physicians, advanced surgical technology, and customized nursing logistics to ensure your speedy rehabilitation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={onOpenBookModal}
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer text-sm"
                >
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={onOpenReportModal}
                  className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer text-sm"
                >
                  Online Report
                </button>
              </div>

              {/* Live compliance checkboxes */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400 pt-3">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-teal-605" /> Fully Certified Path Lab Services
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-teal-605" /> Expert Laminar Sterile OT Suite
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-teal-605" /> 24/7 Active Intensive Care
                </span>
              </div>
            </div>

            {/* Quick-Stats Multi Column Panel - Matching Design Aspect-Square pop */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              
              <div className="bg-teal-600 rounded-2xl p-5 text-white flex flex-col justify-between aspect-square">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center mb-2">
                  <Stethoscope className="w-5 h-5 text-teal-100" />
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold">50+</h4>
                  <p className="text-xs font-medium opacity-90 mt-1">Senior Consultant Physicians</p>
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl p-5 text-slate-900 flex flex-col justify-between aspect-square">
                <div className="w-9 h-9 bg-slate-200/50 rounded-xl flex items-center justify-center mb-2">
                  <Building2 className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-slate-900">250+</h4>
                  <p className="text-xs font-medium text-slate-500 mt-1">Advanced Clinical Beds</p>
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl p-5 text-slate-900 flex flex-col justify-between aspect-square">
                <div className="w-9 h-9 bg-slate-200/50 rounded-xl flex items-center justify-center mb-2">
                  <HeartPulse className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-slate-900">24/7</h4>
                  <p className="text-xs font-medium text-slate-500 mt-1">Emergency Care & ICU Unit</p>
                </div>
              </div>

              <div className="bg-teal-600 rounded-2xl p-5 text-white flex flex-col justify-between aspect-square">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-teal-100" />
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold">99.8%</h4>
                  <p className="text-xs font-medium opacity-90 mt-1">Laparoscopy Success Rate</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Announcements Scrolling Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white border border-slate-200 text-slate-700 py-3 px-4 flex overflow-hidden rounded-2xl relative z-10 select-none items-center shadow-sm">
          <div className="font-mono text-[9px] uppercase font-bold tracking-widest bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full shrink-0 mr-4 self-center border border-teal-150">
            Emergency Notice:
          </div>
          <div className="overflow-hidden flex-1 flex items-center relative h-6">
            <div className="flex gap-20 absolute whitespace-nowrap animate-[marquee_25s_linear_infinite] font-semibold text-xs text-slate-600">
              <span>• {announcements[0]} </span>
              <span>• {announcements[1]} </span>
              <span>• {announcements[2]} </span>
              <span>• {announcements[0]} </span>
              <span>• {announcements[1]} </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
