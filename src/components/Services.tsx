import React from 'react';
import { 
  ShieldAlert, FlaskConical, HeartPulse, Sparkles, 
  HelpCircle, CheckCircle2, Ambulance, Cpu, Activity 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'emergency-team',
      badge: "Trauma Level IV",
      icon: Ambulance,
      title: "Quick Response Team (Emergency)",
      desc: "Our high-alert trauma coordinators on standby 24/7. Backed by fully-equipped, cardiac-ready ICU ambulances with mobile oxygenators, defibrillator monitors, and critical clinical crews.",
      features: [
        "10-minute target emergency admissions triage",
        "Expert trauma surgeons on instant summon logs",
        "Advanced life support (ACLS) transport systems",
        "Direct trauma operations bay coordination"
      ]
    },
    {
      id: 'diagnostic-labs',
      badge: "Fully Automated Labs",
      icon: FlaskConical,
      title: "State-of-the-Art Diagnostic Facilities",
      desc: "High-throughput pathology analyzers conducting extensive biochemical and serological screenings. Operated under stringent lab quality controls and verified by senior hematology professors.",
      features: [
        "Computerized barcoded sample tracking system",
        "Multi-slice high-resolution diagnostic scanning",
        "Verified digital pathology report delivery",
        "Certified machinery calibrations"
      ]
    },
    {
      id: 'intensive-ccu',
      badge: "Direct Life Support",
      icon: HeartPulse,
      title: "24/7 Coronary Care & Intensive Unit (CCU/ICU)",
      desc: "Highly sterile, computerized critical monitoring cubicles for cardiac interventional restoration. Complete with level-III ventilators, automated infusion pumps, and specialized neonatal incubator units.",
      features: [
        "Bedside continuous vital diagnostics with telemetry alerts",
        "1:1 patient-to-nurse critical ratio guidelines",
        "Immediate cardiologist bedside interventional blocks",
        "Integrated level-III newborn incubator zones (NICU)"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-teal-600 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> High Capability Logistics
          </span>
          <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-none">
            Core Facilities & Key Features
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto font-medium">
            Professor Kazi Faruky Hospital is engineered around specialized healthcare pillars to protect life during critical medical crises.
          </p>
          <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full mt-3"></div>
        </div>

        {/* Bento/Modern Layout for Core Pillars */}
        <div className="space-y-12">
          {services.map((srv, index) => {
            const IconComp = srv.icon;
            const isAbrupt = index % 2 !== 0;

            return (
              <div 
                key={srv.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl hover:border-teal-400 hover:shadow-xs transition-all duration-300 ${
                  isAbrupt ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Visual Icon Column */}
                <div className={`lg:col-span-12 xl:col-span-5 space-y-4 ${isAbrupt ? 'lg:order-last' : ''}`}>
                  <div className="w-12 h-12 bg-white border border-slate-150 rounded-xl flex items-center justify-center text-teal-600 shadow-xs">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-teal-600 font-mono text-[9px] uppercase font-bold tracking-widest bg-teal-50 border border-teal-150 px-2.5 py-0.5 rounded-full">
                      {srv.badge}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-slate-800 mt-2.5">
                      {srv.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                {/* Bullets feature list Column */}
                <div className="lg:col-span-12 xl:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-4 flex items-center gap-1.5 matches-title">
                    <Cpu className="h-4 w-4 text-teal-600" /> Medical Operational parameters
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {srv.features.map((feat, i) => (
                      <div key={i} className="flex gap-2.5 items-start">
                        <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                          <CheckCircle2 className="h-3 w-3" />
                        </div>
                        <span className="text-xs text-slate-600 font-medium leading-normal">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operational Status Tag bottom */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-[9px] text-teal-600 uppercase font-mono tracking-wider font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-[pulse_1.5s_infinite]"></span>
                    <span>Continuous Active Status — Calibrated 2026</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
