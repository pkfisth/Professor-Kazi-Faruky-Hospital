import React from 'react';
import { Award, ShieldCheck, HeartPulse, Sparkles, Building2, Flame } from 'lucide-react';

export default function AboutUs() {
  const highlights = [
    {
      icon: Award,
      title: "International Standards of Care",
      desc: "Our systems conform directly to global healthcare standards, utilizing computerized patient dashboards, strict medication monitoring regimes, and laminar air-filtered sterile zones."
    },
    {
      icon: ShieldCheck,
      title: "Founded on Unshakeable Patient Trust",
      desc: "Directed by retired military and senior civilian professors, clinical ethics and absolute cost-transparency shape our clinical compound actions daily. No hidden fees or redundant diagnostic recommendations."
    },
    {
      icon: HeartPulse,
      title: "Advanced Life-Saving Technology",
      desc: "From state-of-the-art biochemistry pathology systems to multi-slice low-intensity diagnostic scanning, our equipment delivers unparalleled diagnostic precision."
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-slate-50 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-teal-600 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Estd. 2012 — Administrative Hub
          </span>
          <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-none">
            Advancing Safe, Compassionate General Healthcare
          </h2>
          <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column Left: High-contrast graphical layout with photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-sm border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Clinical Pathologists in Lab" 
                  className="w-full h-auto object-cover filter saturate-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 backdrop-blur-xs p-5 text-white">
                  <p className="font-mono text-[9px] uppercase tracking-wider font-semibold">Live Lab Calibrations</p>
                  <p className="font-semibold text-xs mt-0.5">Automated Clinical Hematology System Calibration Controls</p>
                </div>
              </div>

              {/* Founder Quote Card snippet - Minimalism Styled with Left Accent */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 text-slate-800 shadow-sm space-y-3 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal-600"></div>
                <p className="text-xs leading-relaxed italic text-slate-600 pl-2">
                  "Our mission matches clinical proficiency with absolute accountability. We founded this compound and medical staff roster to make premium life support and interventional medicine accessible to all local communities."
                </p>
                <div className="text-xs pl-2">
                  <p className="font-bold text-slate-900 text-sm">Prof. Dr. Brig. Gen. (Retd.) Kazi Faruky</p>
                  <p className="text-teal-605 text-[9px] tracking-wide font-mono mt-0.5 uppercase font-semibold">Founder Director & Senior Surgeon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column Right: Copy highlighting features */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-850 leading-tight">
                An Elite Medical Compound Rooted in Care Integrity and Surgical Innovation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Professor Kazi Faruky Hospital, we understand that patient confidence is earned with every clinical diagnosis, successful operation, and discharge protocol. Our multi-wing healthcare center operates modern diagnostic imaging blocks, fully-managed intensive recovery zones, and expert sub-specialists on 24-hour schedules.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every department, clinical nurse, and pathology technician is calibrated under rigorous checks, assuring patients access clinical consultation, on-demand surgery speeds, and digital pathology reports instantly.
              </p>
            </div>

            {/* Core features columns */}
            <div className="space-y-5">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-teal-650 group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-slate-850 group-hover:text-teal-700 transition-all">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
