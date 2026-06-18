import React, { useState } from 'react';
import { 
  ShieldAlert, HeartPulse, Scissors, Baby, Sparkles, 
  FlaskConical, ArrowRight, UserCheck, MapPin, CheckCircle2 
} from 'lucide-react';
import { Department } from '../types';
import { DEPARTMENTS } from '../data';

interface DepartmentsProps {
  onSelectDepartment: (deptId: string) => void;
}

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  ShieldAlert: ShieldAlert,
  HeartPulse: HeartPulse,
  Scissors: Scissors,
  Baby: Baby,
  Sparkles: Sparkles,
  FlaskConical: FlaskConical
};

export default function Departments({ onSelectDepartment }: DepartmentsProps) {
  const [activeDeptId, setActiveDeptId] = useState<string | null>(null);

  const toggleDeptExpanse = (id: string) => {
    setActiveDeptId(prev => (prev === id ? null : id));
  };

  return (
    <section id="departments" className="py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-teal-600 font-mono text-xs uppercase tracking-widest font-bold">
            Medical Disciplines & Clinical Excellence
          </span>
          <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-none">
            Major Specialized Departments
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto font-medium">
            Professor Kazi Faruky Hospital is structured around state-of-the-art specialty wings to deliver high-precision interventional treatments. Click on any department to view its features.
          </p>
          <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full mt-3"></div>
        </div>

        {/* Departments Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept) => {
            const IconComp = ICON_MAP[dept.iconName] || HeartPulse;
            const isExpanded = activeDeptId === dept.id;

            return (
              <div 
                key={dept.id}
                className={`group bg-white border rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isExpanded 
                    ? 'border-teal-600 shadow-sm' 
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Icon & Title block */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center text-teal-605 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 border border-slate-200/80 shrink-0">
                      <IconComp className="h-5.5 w-5.5" />
                    </div>
                    <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      Level IV Wings
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-display font-semibold text-slate-800 group-hover:text-teal-750 transition-all">
                      {dept.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {dept.shortDesc}
                    </p>
                  </div>

                  {/* Expanded specifications features */}
                  {isExpanded && (
                    <div className="space-y-4 pt-3 border-t border-slate-150 animate-[fadeIn_0.2s_ease-out]">
                      <div className="text-xs text-slate-600 leading-relaxed space-y-1">
                        <strong className="text-slate-800">Operational Focus:</strong>
                        <p>{dept.longDesc}</p>
                      </div>

                      {/* Bullet Specs */}
                      <div className="space-y-1.5">
                        <strong className="text-slate-800 text-[10px] font-bold uppercase tracking-wider block font-mono">Wing Features:</strong>
                        <ul className="space-y-1 list-none pl-0">
                          {dept.features.map((feat, i) => (
                            <li key={i} className="flex gap-2 text-xs text-slate-550 italic">
                              <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Clinical Head & Coordinates */}
                      <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl space-y-1.5 text-xs font-medium">
                        <div className="flex items-start gap-1.5 text-slate-700">
                          <UserCheck className="h-4 w-4 text-teal-606 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider block font-semibold font-sans">Head of Department</span>
                            <span>{dept.headOfDepartment}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-1.5 text-slate-755">
                          <MapPin className="h-4 w-4 text-teal-606 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider block font-semibold font-sans">Location Block</span>
                            <span>{dept.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Card CTA actions */}
                <div className="pt-5 border-t border-slate-150/50 mt-5 flex justify-between items-center">
                  <button 
                    type="button"
                    onClick={() => toggleDeptExpanse(dept.id)}
                    className="text-xs font-semibold text-slate-600 hover:text-teal-600 cursor-pointer flex items-center gap-1 transition-all"
                  >
                    {isExpanded ? 'Show Quick Summary' : 'Read Wing Details'} <ArrowRight className={`h-3 w-3 ${isExpanded ? 'rotate-90' : ''} transition-all`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectDepartment(dept.id)}
                    className="px-4.5 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-750 rounded-full transition-colors cursor-pointer text-center"
                  >
                    Book Ward
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
