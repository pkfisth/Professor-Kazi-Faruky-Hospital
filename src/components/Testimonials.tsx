import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  relation: string;
  rating: number;
  quote: string;
  specialtyTreated: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Md. Jamil Hossain",
    location: "Raipur, Lakshmipur",
    relation: "Cardiac Care Outpatient",
    rating: 5,
    quote: "The medical team at Professor Kazi Faruky Hospital handled my emergency cardiac evaluation with elite care and perfect precision. The nursing staff kept my family refreshed and fully updated throughout our stay.",
    specialtyTreated: "Cardiology Unit"
  },
  {
    id: 2,
    name: "Farhana Yasmin",
    location: "Lakshmipur Sadar",
    relation: "Inpatient Follow-up",
    rating: 5,
    quote: "I am extremely grateful to the senior consultants for their absolute professionalism and medical empathy. Online report downloading is amazingly fast, making follow-ups completely stress-free.",
    specialtyTreated: "Diagnostic Medicine"
  },
  {
    id: 3,
    name: "Dr. S. M. Rahman",
    location: "Raipur, Lakshmipur",
    relation: "Parent of Pediatric Patient",
    rating: 5,
    quote: "The pediatric ward is incredibly child-friendly and extremely hygienic. The doctors are incredibly patient, kind, and highly authoritative in their treatment plan. Strongly recommended local facility.",
    specialtyTreated: "Pediatrics Department"
  },
  {
    id: 4,
    name: "Mrs. Rahima Khatun",
    location: "Lakshmipur",
    relation: "Laparoscopic Patient",
    rating: 5,
    quote: "Professor Faruky's team pioneered my laparoscopic procedure with outstanding success. I was discharged within 24 hours with negligible discomfort. Elite-level clinical standard.",
    specialtyTreated: "General Surgery"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Autoplay function
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 select-none overflow-hidden border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Clean Minimalism Theme */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-teal-605 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-teal-600" /> Patient Experiences & Gratitude
          </span>
          <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-none">
            Trusted by Local Communities
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto font-medium">
            Hear directly from patients and family members who experienced our elite surgical protocols, quick path diagnostics, and caring nursing staff.
          </p>
          <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full mt-3"></div>
        </div>

        {/* Carousel Content */}
        <div className="max-w-4xl mx-auto relative px-4">
          
          {/* Static Background Graphic Element */}
          <div className="absolute -top-12 -left-4 text-slate-200/50 pointer-events-none hidden md:block">
            <Quote className="h-28 w-28 stroke-[1]" />
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-teal-600"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction === 'right' ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'right' ? -30 : 30 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-6 md:space-y-8"
              >
                {/* Five Stars Rating Group */}
                <div className="flex items-center gap-1 text-teal-500 justify-center md:justify-start">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-teal-500 stroke-teal-500" />
                  ))}
                  <span className="ml-2 font-mono text-[10px] bg-teal-50 text-teal-700 tracking-wider uppercase font-bold px-2.5 py-0.5 rounded-full border border-teal-100">
                    {current.specialtyTreated}
                  </span>
                </div>

                {/* Main Quote Text Block */}
                <blockquote className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-sans font-medium italic text-center md:text-left">
                  "{current.quote}"
                </blockquote>

                {/* Patient Signature Details */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-100 gap-4">
                  <div className="text-center md:text-left">
                    <p className="font-display font-bold text-slate-905 text-sm md:text-base">
                      {current.name}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      {current.relation} • <span className="text-slate-500 font-sans">{current.location}</span>
                    </p>
                  </div>

                  {/* Manual Arrow Controls (Minimalist styled) */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 border border-slate-200 text-slate-650 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4.5 w-4.5" />
                    </button>
                    
                    {/* Position Dots indicator */}
                    <div className="flex gap-1.5 px-2">
                      {TESTIMONIALS.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentIndex ? 'right' : 'left');
                            setCurrentIndex(index);
                          }}
                          className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${
                            index === currentIndex ? 'bg-teal-600' : 'bg-slate-200 hover:bg-slate-300'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      className="p-2 border border-slate-200 text-slate-650 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4.5 w-4.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
