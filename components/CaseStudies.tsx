
import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types';

interface CaseStudiesProps {
  t: Translation['caseStudies'];
  testimonials: Translation['testimonials'];
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ t, testimonials }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoplayRef = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  // Duration for autoplay in ms
  const duration = 8000; 

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    // Reset timer
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (!isPaused) startAutoplay();
  };

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      setActiveTab((prev) => (prev + 1) % testimonials.items.length);
    }, duration);
  };

  // Manage Autoplay based on visibility and pause state
  useEffect(() => {
    if (isVisible && !isPaused) {
      startAutoplay();
    } else {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isVisible, isPaused]);

  // Reset progress bar animation on tab change or pause state
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      
      if (!isPaused) {
        // Force reflow
        void progressRef.current.offsetWidth;
        progressRef.current.style.transition = `width ${duration}ms linear`;
        progressRef.current.style.width = '100%';
      }
    }
  }, [activeTab, isPaused]);

  return (
    <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden" ref={sectionRef}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#111] to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-secondary">{testimonials.badge}</span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-black text-white transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {testimonials.headline}
            </h2>
          </div>
          
          <div className="hidden md:flex gap-2">
            <div className="text-right">
               <div className="text-[0.6rem] text-secondary uppercase tracking-widest font-bold mb-1">Database Status</div>
               <div className="text-xs font-mono text-emerald-500">ONLINE • 99.9% UPTIME</div>
            </div>
          </div>
        </div>

        {/* Main Interface */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Column: Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-4">
             {testimonials.items.map((item, idx) => (
               <button
                 key={idx}
                 onClick={() => handleTabChange(idx)}
                 className={`group relative text-left p-6 rounded-xl border transition-all duration-300 overflow-hidden
                   ${activeTab === idx 
                     ? 'bg-white/[0.08] border-primary/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]' 
                     : 'bg-transparent border-white/5 hover:bg-white/[0.02] hover:border-white/10'}
                 `}
               >
                 <div className="flex items-center justify-between relative z-10">
                    <div>
                       <div className={`text-[0.6rem] font-black uppercase tracking-widest mb-1 transition-colors ${activeTab === idx ? 'text-primary' : 'text-secondary'}`}>
                         {item.industry}
                       </div>
                       <div className={`text-sm md:text-base font-bold transition-colors ${activeTab === idx ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                         {item.name}
                       </div>
                    </div>
                    {activeTab === idx && (
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#ff0045]"></div>
                    )}
                 </div>
                 
                 {/* Progress Bar for Active Tab */}
                 {activeTab === idx && (
                   <div className="absolute bottom-0 left-0 h-0.5 bg-primary/50" ref={progressRef}></div>
                 )}
               </button>
             ))}
          </div>

          {/* Right Column: Display Area */}
          <div className="lg:col-span-8">
            <div className="relative h-full min-h-[500px] bg-[#080808] border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
               
               {/* Background Tech Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
               <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                  <svg className="w-32 h-32 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                     <circle cx="50" cy="50" r="45" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_30s_linear_infinite]" />
                     <circle cx="50" cy="50" r="30" strokeWidth="1" />
                     <path d="M50 20 L50 50 L70 70" strokeWidth="1" />
                  </svg>
               </div>

               {/* Metrics Grid */}
               <div className="relative z-10 grid grid-cols-3 gap-4 mb-10">
                  {testimonials.items[activeTab].results.map((res, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-4 md:p-6 backdrop-blur-sm group hover:border-white/10 transition-colors">
                       <div className="text-2xl md:text-4xl font-black text-white mb-1 tracking-tight group-hover:scale-105 transition-transform origin-left">{res.value}</div>
                       <div className="text-[0.55rem] md:text-xs font-bold text-secondary uppercase tracking-widest">{res.label}</div>
                    </div>
                  ))}
               </div>

               {/* Content */}
               <div className="relative z-10 mb-10">
                  <div className="text-3xl md:text-5xl text-primary/20 font-serif absolute -top-6 -left-2 select-none">"</div>
                  <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed mb-6 relative">
                    {testimonials.items[activeTab].quote}
                  </p>
                  <p className="text-sm md:text-base text-accent/80 leading-relaxed border-l-2 border-white/10 pl-4 max-w-2xl">
                    {testimonials.items[activeTab].context}
                  </p>
               </div>

               {/* Footer: User Profile */}
               <div className="relative z-10 flex items-center gap-4 mt-auto pt-8 border-t border-white/5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-white/10 relative">
                     <img 
                       src={testimonials.items[activeTab].image || `https://api.dicebear.com/7.x/initials/svg?seed=${testimonials.items[activeTab].name}`}
                       alt={testimonials.items[activeTab].name}
                       className="w-full h-full object-cover"
                     />
                  </div>
                  <div>
                     <div className="text-white font-bold text-lg leading-tight">{testimonials.items[activeTab].name}</div>
                     <div className="text-primary text-xs font-bold uppercase tracking-wider">{testimonials.items[activeTab].position}</div>
                  </div>
                  <div className="ml-auto text-right hidden sm:block">
                     <div className="text-[0.6rem] font-mono text-white/30 tracking-widest uppercase">System Log ID</div>
                     <div className="text-xs font-mono text-white/50">#{testimonials.items[activeTab].indicator.split(' ').pop()?.padStart(4, '0')}</div>
                  </div>
               </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
