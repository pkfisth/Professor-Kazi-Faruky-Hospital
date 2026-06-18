import React, { useState } from 'react';
import { 
  PhoneCall, CalendarRange, ClipboardList, Menu, X, 
  Sparkles, HeartPulse, Building2, Stethoscope, Clock 
} from 'lucide-react';

interface HeaderProps {
  onOpenBookModal: () => void;
  onOpenReportModal: () => void;
}

export default function Header({ onOpenBookModal, onOpenReportModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Departments', href: '#departments' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact-us' }
  ];

  return (
    <>
      {/* 24/7 Red Alert Top Bar */}
      <div className="bg-red-700 text-white text-xs font-semibold py-2 px-4 flex justify-between items-center z-40 relative">
        <div className="flex items-center gap-2 animate-[pulse_1.5s_infinite]">
          <span className="w-2 h-2 rounded-full bg-white block"></span>
          <span className="tracking-wider uppercase font-mono text-[10px]">24/7 Trauma Emergency Unit</span>
        </div>
        <div className="flex items-center gap-5 font-mono text-[11px]">
          <span className="hidden sm:inline">Website: <a href="https://www.pkfh.com" className="underline hover:text-red-100 font-bold">www.pkfh.com</a></span>
          <span>Mobile: <a href="tel:017777777777" className="underline hover:text-red-100 font-bold">017777777777</a></span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 bg-white border-b border-slate-200 shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
          
          {/* Brand/Hospital Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold transition-all">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display font-bold text-slate-800 text-base md:text-lg leading-tight tracking-tight mt-0.5">
                Professor Kazi Faruky Hospital
              </p>
              <p className="text-[10px] text-teal-650 font-mono tracking-wider uppercase font-semibold">
                Excellence in Healthcare
              </p>
            </div>
          </a>

          {/* Desktop Navigation Link Row */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-teal-600 pb-0.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call-to-Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenReportModal}
              className="px-5 py-2 border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ClipboardList className="h-4 w-4 text-slate-400" /> Online Reports
            </button>

            <button
              onClick={onOpenBookModal}
              className="px-5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <CalendarRange className="h-4 w-4 text-teal-150" /> Book Appointment
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-605 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-all"
            aria-label="Toggle navigation parameters"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white text-slate-800 p-4 space-y-4 shadow-md select-none">
            <div className="flex flex-col gap-1 font-medium">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm rounded-xl hover:bg-slate-50 transition-all font-semibold text-slate-700"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="h-px bg-slate-150"></div>

            {/* Mobile actions buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button
                onClick={() => {
                  onOpenReportModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ClipboardList className="h-4.5 w-4.5 text-slate-400" /> Online Pathology Reports
              </button>

              <button
                onClick={() => {
                  onOpenBookModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <CalendarRange className="h-4.5 w-4.5 text-teal-150" /> Book Cell Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
