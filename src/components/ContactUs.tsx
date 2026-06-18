import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  HelpCircle, ChevronDown, Sparkles, Building2, Map, Globe 
} from 'lucide-react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Query');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // FAQs state control
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How can I book an outpatient appointment for diagnostic medical test?",
      a: "Outpatient consultations can be booked directly via our website portal by selecting 'Book Appointment' in the navigation bar. You may also dial our mobile diagnostic desk (017777777777) during standard chamber hours."
    },
    {
      q: "What is the typical turnaround duration for pathology diagnostics reports?",
      a: "Routine biochemistry, hematology, and serology tests are finished on-site in under 4 to 8 hours. Rare microbiology cultures and specialized cancer tumor markers take between 24 and 48 hours. Reports can be accessed online instantly."
    },
    {
      q: "Do you support health insurance and corporate medical policies?",
      a: "Yes. Professor Kazi Faruky Hospital maintains billing affiliations with all major medical insurance providers and government pension blocks. Please present your insurance booklet or corporate health token at admission."
    },
    {
      q: "What are the visitor guidelines for critical ICU and CCU wings?",
      a: "To protect patients from infection, visitors are restricted to one family partner at a time during morning (10:00 AM - 11:30 AM) and evening (05:00 PM - 06:30 PM) sessions. Wearing sanitizing masks is mandatory."
    }
  ];

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setIsSent(false), 5000);
    }, 1000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  return (
    <section id="contact-us" className="py-20 bg-slate-50 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-teal-600 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Direct Communications Channel
          </span>
          <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-none">
            Get in Touch with Our Compound
          </h2>
          <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column Left: Contact Info Specs & Map Compound */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-base font-semibold text-slate-800">Administrative Contact Desk</h3>
              
              <div className="space-y-4 text-xs font-medium text-slate-600">
                
                {/* Address */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono text-[9px] uppercase font-bold tracking-wider">Hospital Address</span>
                    <p className="text-slate-800 font-semibold leading-relaxed mt-0.5">
                      Professor Kazi Faruky Hospital Compound,<br />
                      Rakhalia, Raipur, Lakshmipur
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono text-[9px] uppercase font-bold tracking-wider">Mobile Hotline</span>
                    <p className="text-slate-800 font-semibold mt-0.5 leading-relaxed">
                      Main Mobile: <a href="tel:017777777777" className="hover:text-teal-600 underline">017777777777</a>
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <Globe className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono text-[9px] uppercase font-bold tracking-wider">Official Website</span>
                    <p className="text-slate-800 font-semibold mt-0.5">
                      <a href="https://www.pkfh.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 underline">www.pkfh.com</a>
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono text-[9px] uppercase font-bold tracking-wider">Hospital Admissions Registry</span>
                    <p className="text-slate-800 font-semibold mt-0.5">
                      admissions@pkfh.com <br />
                      info@pkfh.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated Hospital Block Compound Map Representation */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 relative overflow-hidden space-y-4 shadow-sm">
              <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none">
                <Map className="w-48 h-48" />
              </div>

              <div>
                <span className="bg-teal-500/15 text-teal-300 border border-teal-550/20 font-mono text-[8px] uppercase tracking-wider font-semibold rounded-full px-2.5 py-0.5">
                  Clinical Compound Map Layout
                </span>
                <h4 className="font-display font-semibold text-sm mt-2 text-white/90">Main Medical Complex Coordinates</h4>
              </div>

              <div className="space-y-2 text-[11px] text-slate-300">
                <p>• <strong>Block A:</strong> Outpatient Triage & Chief Surgical Consultants Chambers (1st & 2nd Floor)</p>
                <p>• <strong>Block B:</strong> Modular Operating Suites & 24/7 CCU/ICU Zones (2nd Floor)</p>
                <p>• <strong>Block C:</strong> Diagnostics Pathology Lab, Admissions Desk, Pharmacy (Ground Floor)</p>
              </div>

              {/* Transit guidance */}
              <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-400 font-medium">
                Hospital compound parking slots are free for ambulance and patient transport vehicles behind Block C.
              </div>
            </div>
          </div>

          {/* Column Right: Interactive Contact Form & FAQ Collapse */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8">
            
            {/* Contact Form Container */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-base font-semibold text-slate-800">Transmit Direct Patient Query</h3>
              
              <form onSubmit={handleMessageSubmit} className="space-y-4 text-xs font-semibold">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-600 block">Patient Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Rahman"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full focus:border-teal-500 focus:outline-none transition-all text-xs text-slate-700 font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-600 block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. tanvir@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full focus:border-teal-500 focus:outline-none transition-all text-xs text-slate-700 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-600 block">Administrative Department Category</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full focus:border-teal-500 focus:outline-none transition-all text-xs text-slate-600 font-medium"
                  >
                    <option value="General Query">General Administrative Query</option>
                    <option value="Billing">Accounts & Bill Reductions</option>
                    <option value="Reports Verification">Pathology Reports Verification</option>
                    <option value="Corporate Health Schemes">Corporate Health Partnerships</option>
                    <option value="Feedback">Specialist Performance Feedback</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-600 block">Brief Message Description</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your outpatient admission query, clinical feedback, or prescription report question here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:border-teal-500 focus:outline-none transition-all text-xs text-slate-700 font-medium"
                  ></textarea>
                </div>

                {isSent && (
                  <div className="p-3 bg-teal-50 text-teal-800 border border-teal-150 rounded-2xl flex items-center gap-2 text-xs font-semibold">
                    <CheckCircle2 className="h-4.5 w-4.5 text-teal-600 shrink-0" />
                    <span>Your patient message query has been verified and sent directly to hospital desk! (Simulation confirmed)</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-xs"
                  >
                    <Send className="h-4 w-4 text-white" /> {submitting ? 'Transmitting...' : 'Send Message to Administrative Desk'}
                  </button>
                </div>

              </form>
            </div>

            {/* FAQs Collapse items Column */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-slate-800 px-2">Frequently Asked Patient Questions</h3>
              
              <div className="space-y-2.5">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div 
                      key={index}
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-5 py-3.5 text-left font-display font-semibold text-xs sm:text-sm text-slate-700 hover:text-teal-600 flex justify-between items-center bg-slate-50/20 hover:bg-slate-50 transition-all cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`h-4 w-4 text-slate-400 shrink-0 transform ${isOpen ? 'rotate-180 text-teal-600' : ''} transition-all`} />
                      </button>

                      {isOpen && (
                        <div className="p-5 text-xs text-slate-500 border-t border-slate-150 leading-relaxed bg-white font-sans animate-[fadeIn_0.2s_ease-out]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
