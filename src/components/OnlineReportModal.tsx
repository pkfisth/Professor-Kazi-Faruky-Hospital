import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Search, FileText, CheckCircle2, Download, 
  Printer, ArrowRight, Activity, HelpCircle, ShieldCheck 
} from 'lucide-react';
import { DiagnosticReport } from '../types';
import { MOCK_REPORTS } from '../data';

interface OnlineReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnlineReportModal({ isOpen, onClose }: OnlineReportModalProps) {
  const [reportIdInput, setReportIdInput] = useState<string>('');
  const [activeReport, setActiveReport] = useState<DiagnosticReport | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<string[]>(['R-1025', 'R-1120']);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = reportIdInput.trim().toUpperCase();
    
    // Check key in MOCK_REPORTS
    if (MOCK_REPORTS[cleanId]) {
      setActiveReport(MOCK_REPORTS[cleanId]);
      setErrorMessage('');
      if (!searchHistory.includes(cleanId)) {
        setSearchHistory(prev => [cleanId, ...prev.slice(0, 3)]);
      }
    } else {
      setActiveReport(null);
      setErrorMessage(`No diagnostic report matches code "${cleanId}". Please check your receipt barcode or test with values like R-1025, R-1120, or R-3540.`);
    }
  };

  const handleQuickSelect = (id: string) => {
    setReportIdInput(id);
    setActiveReport(MOCK_REPORTS[id]);
    setErrorMessage('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto select-none">
      <motion.div 
        key="report-box"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden"
      >
        {/* Top Header Row */}
        <div className="bg-white border-b border-slate-200 px-6 py-5 text-slate-800 flex justify-between items-center z-10 relative">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-605 shadow-xs shrink-0 border border-slate-100">
              <FileText className="h-5.5 w-5.5" />
            </div>
            <div>
              <span className="bg-teal-50 text-teal-700 border border-teal-150 font-mono text-[8px] uppercase tracking-wider font-bold rounded-full px-2.5 py-0.5">
                Pathology Labs Cloud
              </span>
              <h3 className="text-base md:text-lg font-display font-semibold text-slate-955 mt-0.5">Online Laboratory Diagnostics Reports</h3>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close report search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Inner Panel */}
        <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans">
          {/* Quick instructions and Search Form */}
          {!activeReport ? (
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col md:flex-row items-center gap-4">
                <div className="w-11 h-11 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center shrink-0 border border-teal-100 shadow-xs">
                  <ShieldCheck className="w-5.5 h-5.5" />
                </div>
                <div className="text-sm text-slate-700 text-center md:text-left leading-relaxed">
                  <h4 className="font-semibold text-xs text-slate-800 uppercase tracking-widest font-mono">Secure Report Delivery Authentication</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Professor Kazi Faruky Hospital publishes fully-automated diagnostic reports online. Input the official alphanumeric reference code shown on your billing receipt to download fully certified clinical summaries.
                  </p>
                </div>
              </div>

              {/* Form Search Bar */}
              <form onSubmit={handleSearch} className="space-y-3">
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest font-mono">Invoice / Diagnostic Barcode ID</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={reportIdInput}
                      onChange={(e) => setReportIdInput(e.target.value)}
                      placeholder="e.g. R-1025, R-1120, or R-3540"
                      className="w-full pl-11 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full focus:border-teal-500 focus:outline-none transition-colors text-xs uppercase font-mono tracking-wider text-slate-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Pull Report <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>

              {errorMessage && (
                <div className="p-4 bg-coral-50/50 text-coral-950 text-xs border border-coral-200 rounded-xl flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-coral-100 text-coral-800 flex items-center justify-center font-bold font-mono text-[9px] shrink-0">!</div>
                  <p className="leading-relaxed text-red-700">{errorMessage}</p>
                </div>
              )}

              {/* Demo Helper box */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <HelpCircle className="h-3.5 w-3.5 text-teal-600" /> Test Drive Credentials
                </h5>
                <p className="text-xs text-slate-550 mt-1.5 leading-relaxed">
                  To preview our high-fidelity digital reports layout, select any preset patient code below:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3.5">
                  <button
                    type="button"
                    onClick={() => handleQuickSelect('R-1025')}
                    className="p-3 bg-white hover:bg-teal-50 hover:border-teal-400 border border-slate-200 rounded-xl text-left transition-all group"
                  >
                    <div className="text-[10px] font-mono font-semibold text-slate-400 tracking-wider group-hover:text-teal-600">INVOICE: R-1025</div>
                    <div className="font-semibold text-xs text-slate-800 mt-1">Kazi Mujibur Rahman</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Cardiology Bio-profile</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickSelect('R-1120')}
                    className="p-3 bg-white hover:bg-teal-50 hover:border-teal-400 border border-slate-200 rounded-xl text-left transition-all group opacity-100"
                  >
                    <div className="text-[10px] font-mono font-semibold text-slate-400 tracking-wider group-hover:text-teal-600">INVOICE: R-1120</div>
                    <div className="font-semibold text-xs text-slate-800 mt-1">Sultana Jasmine Begum</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Hematology & Surgical</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickSelect('R-3540')}
                    className="p-3 bg-white hover:bg-teal-50 hover:border-teal-400 border border-slate-200 rounded-xl text-left transition-all group"
                  >
                    <div className="text-[10px] font-mono font-semibold text-slate-400 tracking-wider group-hover:text-teal-600">INVOICE: R-3540</div>
                    <div className="font-semibold text-xs text-slate-800 mt-1">Master Tahsan Faruky</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Pediatric Health Screen</div>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Active Report Present - High-Fidelity Pathology Layout */
            <motion.div
              key="active-report"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Back controls navigation */}
              <div className="flex justify-between items-center bg-slate-50 p-2 rounded-xl border border-slate-150 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setActiveReport(null);
                    setReportIdInput('');
                  }}
                  className="px-3.5 py-1.5 text-blue-900 font-semibold hover:bg-white rounded-lg transition-all"
                >
                  ← Return to Search
                </button>
                <div className="text-slate-400 font-mono text-[10px]">
                  ID MATCH: {activeReport.id} (VERIFIED ONLINE)
                </div>
              </div>

              {/* Lab Report Sheet Container */}
              <div className="bg-white border-2 border-slate-300 rounded-2xl shadow-sm p-6 sm:p-8 space-y-6 font-sans relative select-text" id="printable-report">
                
                {/* Simulated Watermark background */}
                <div className="absolute inset-x-0 top-1/3 bottom-1/4 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                  <FileText className="w-96 h-96" />
                </div>

                {/* Patient / Clinic Top Letterhead */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-5 border-b-2 border-slate-200">
                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-slate-900 font-display">PROFESSOR KAZI FARUKY HOSPITAL</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Advanced Medical Compound & Laboratory Pathology Services</p>
                    <p className="text-[10px] text-teal-700 font-semibold mt-1 font-mono">DHAKA, BANGLADESH • CLOUD DELIVERY KEY: PKF-INT</p>
                  </div>
                  <div className="text-right flex flex-col items-start md:items-end">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 font-bold rounded-full text-[10px] uppercase font-mono border border-green-200">
                      <CheckCircle2 className="w-3 h-3 text-green-600" /> Digital Integrity Verified
                    </span>
                    <p className="text-[10px] text-slate-400 mt-1.5">BARCODE ID No: CLINIC-{activeReport.id}</p>
                  </div>
                </div>

                {/* Patient Specifications Table */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase font-mono">Patient Name</span>
                    <span className="text-slate-850 font-bold mt-0.5 block">{activeReport.patientName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase font-mono">Age / Gender</span>
                    <span className="text-slate-850 font-bold mt-0.5 block">{activeReport.patientAge} / {activeReport.patientGender}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase font-mono">Prescribing Consultant</span>
                    <span className="text-slate-850 font-semibold mt-0.5 block truncate">{activeReport.referredBy}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase font-mono">Sample / Report Date</span>
                    <span className="text-slate-850 font-semibold mt-0.5 block">{activeReport.testDate} / {activeReport.reportDate}</span>
                  </div>
                </div>

                {/* Clinical Tests table */}
                <div className="space-y-2 mt-4">
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Pathology Analysis Parameters</h5>
                  <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs text-slate-800 border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-[10px] text-slate-500 uppercase font-mono">
                          <th className="p-3 font-semibold">Test Specification</th>
                          <th className="p-3 font-semibold text-center">Observed Result</th>
                          <th className="p-3 font-semibold text-center">Diagnostic Range</th>
                          <th className="p-3 font-semibold text-center">Critical Unit</th>
                          <th className="p-3 font-semibold text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono">
                        {activeReport.tests.map((test, index) => (
                          <tr key={index} className="hover:bg-slate-50/50">
                            <td className="p-3 text-slate-950 font-sans font-medium">{test.name}</td>
                            <td className="p-3 text-center text-slate-900 font-bold">{test.result}</td>
                            <td className="p-3 text-center text-slate-500">{test.normalRange}</td>
                            <td className="p-3 text-center text-slate-400">{test.unit}</td>
                            <td className="p-3 text-right">
                              <span className={`inline-block px-2 py-0.5 text-[9px] font-bold uppercase rounded-full ${
                                test.status === 'Normal' ? 'bg-green-50 text-green-700 border border-green-200' :
                                test.status === 'High' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                                'bg-red-50 text-red-700 border border-red-200'
                              }`}>
                                {test.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pathology Opinion Section */}
                <div className="space-y-2 bg-slate-50/70 p-4 border border-slate-200 rounded-xl">
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Clinical Impression & Conclusion</h5>
                  <p className="text-xs text-slate-800 leading-relaxed font-sans">{activeReport.conclusions}</p>
                </div>

                {/* Letter Signatures */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start md:items-center gap-4 text-xs font-sans">
                  <div className="p-2 border border-slate-150 rounded-xl bg-slate-50/50 max-w-xs flex gap-3 items-center">
                    <div className="w-10 h-10 bg-white rounded border flex items-center justify-center font-bold text-[11px] font-mono tracking-tight shrink-0">
                      QR CODE
                    </div>
                    <span className="text-[10px] text-slate-450 leading-relaxed font-mono">
                      Secured via Kazi Faruky Lab Token verification systems. Scan barcode on receipt to retest integrity.
                    </span>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="font-semibold text-slate-800 text-sm leading-relaxed">{activeReport.pathologist}</p>
                    <p className="text-[10px] text-slate-400 font-sans font-medium">{activeReport.pathologistDegree}</p>
                    <div className="mt-2 text-[10px] uppercase font-bold text-teal-600 font-mono tracking-wider flex items-center justify-start sm:justify-end gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Fully Signed Digitally
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons for downloading and printing */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-between">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-5 py-3 text-slate-700 bg-slate-100 hover:bg-slate-200 text-sm font-semibold flex items-center justify-center gap-1.5 rounded-xl border border-slate-250 transition-all cursor-pointer"
                >
                  <Printer className="h-4 w-4" /> Print Pathology Report
                </button>

                <button
                  type="button"
                  onClick={() => {
                    alert(`Laboratory report CLINIC-${activeReport.id}.pdf download initiated successfully! (Simulated download of certified clinic receipt)`);
                  }}
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold flex items-center justify-center gap-1.5 rounded-xl shadow-md cursor-pointer"
                >
                  <Download className="h-4 w-4" /> Download Official Certified PDF
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
