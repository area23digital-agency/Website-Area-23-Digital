import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  tMethodology: Translation['hundredKPages'];
}

const PlatformMockup = ({ type }: { type: number }) => {
  return (
    <div className="relative w-full h-full bg-[#080808] overflow-hidden group-hover:border-primary/20 transition-all duration-500">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80 pointer-events-none"></div>

      {type === 0 && (
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="grid grid-cols-3 gap-3 mb-2 relative z-10">
             <div className="bg-[#111] border border-white/10 rounded-xl p-3 flex flex-col gap-1">
                <div className="text-[0.55rem] text-secondary uppercase tracking-wider font-bold">SPEND</div>
                <div className="text-sm md:text-base font-medium text-white">$12.4k</div>
             </div>
             <div className="bg-primary/10 border border-primary/25 rounded-xl p-3 flex flex-col gap-1 relative overflow-hidden">
                <div className="text-[0.55rem] text-primary uppercase tracking-wider font-bold">ROAS</div>
                <div className="text-sm md:text-base font-medium text-white">4.82x</div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-2xl"></div>
             </div>
             <div className="bg-[#111] border border-white/10 rounded-xl p-3 flex flex-col gap-1">
                <div className="text-[0.55rem] text-secondary uppercase tracking-wider font-bold">CONV.</div>
                <div className="text-sm md:text-base font-medium text-white">342</div>
             </div>
          </div>
          <div className="relative flex-grow w-full mt-2 bg-[#0c0c0c] rounded-xl border border-white/5 overflow-hidden">
             <div className="absolute inset-0 flex flex-col justify-between py-2 px-3 opacity-30">
                <div className="w-full h-px bg-white/10 border-t border-dashed border-white/20"></div>
                <div className="w-full h-px bg-white/10 border-t border-dashed border-white/20"></div>
                <div className="w-full h-px bg-white/10 border-t border-dashed border-white/20"></div>
             </div>
             <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
               <defs>
                 <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#ff0045" stopOpacity="0.5"/>
                   <stop offset="100%" stopColor="#ff0045" stopOpacity="0"/>
                 </linearGradient>
               </defs>
               <path d="M0,80 C20,75 40,50 60,55 C80,60 90,20 100,30 L100,100 L0,100 Z" fill="url(#chartFill)" />
               <path d="M0,80 C20,75 40,50 60,55 C80,60 90,20 100,30" fill="none" stroke="#ff0045" strokeWidth="2" strokeLinecap="round" className="drop-shadow-[0_0_10px_rgba(255,0,69,0.8)]" />
               <circle cx="100" cy="30" r="3" fill="white" stroke="#ff0045" strokeWidth="1.5" className="animate-pulse" />
             </svg>
          </div>
        </div>
      )}

      {type === 1 && (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="relative w-full h-full max-w-[280px]">
             <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="50%" y1="20%" x2="20%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="50%" y1="20%" x2="80%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="20%" y1="50%" x2="50%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="80%" y1="50%" x2="50%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <circle cx="50%" cy="50%" r="40" fill="url(#grad1)" fillOpacity="0.1" />
                <defs>
                  <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#ff0045" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ff0045" stopOpacity="0" />
                  </radialGradient>
                </defs>
             </svg>
             <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] border border-primary/50 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-[0_0_20px_rgba(255,0,69,0.2)] z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[0.6rem] font-bold text-white tracking-wide">STRATEGY</span>
             </div>
             <div className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] border border-white/10 rounded-full px-2.5 py-1 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span className="text-[0.55rem] font-bold text-secondary tracking-wide">DATA</span>
             </div>
             <div className="absolute top-1/2 right-[20%] translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] border border-white/10 rounded-full px-2.5 py-1 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span className="text-[0.55rem] font-bold text-secondary tracking-wide">CREATIVE</span>
             </div>
             <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-black rounded-lg px-3 py-1.5 shadow-xl flex items-center justify-center">
                <span className="text-[0.65rem] font-black tracking-widest">ROI +250%</span>
             </div>
          </div>
        </div>
      )}

      {type === 2 && (
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
           <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
           <div className="relative z-10 w-48 bg-[#111] border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-lg mb-4 group/step hover:border-orange-500/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                 <div className="text-[0.5rem] uppercase font-bold text-orange-500 tracking-wider mb-0.5">Trigger</div>
                 <div className="text-xs font-medium text-white/80 truncate">New Lead Form</div>
              </div>
           </div>
           <div className="relative z-10 w-6 h-6 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white/30 mb-4">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
           </div>
           <div className="relative z-10 w-48 bg-[#111] border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-lg group/step hover:border-blue-500/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                 <div className="text-[0.5rem] uppercase font-bold text-blue-500 tracking-wider mb-0.5">Action</div>
                 <div className="text-xs font-medium text-white/80 truncate">Send WhatsApp + Email</div>
              </div>
           </div>
        </div>
      )}

      {type === 3 && (
        <div className="absolute inset-0 p-6 flex items-center justify-center">
           <div className="w-full max-w-[280px] bg-[#0a0a0a] border border-white/10 rounded-xl flex flex-col overflow-hidden shadow-2xl transition-transform hover:-translate-y-1 duration-500">
             <div className="h-7 bg-white/[0.03] border-b border-white/5 flex items-center px-3 gap-1.5">
                <div className="flex gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-white/10"></div>
                   <div className="w-2 h-2 rounded-full bg-white/10"></div>
                   <div className="w-2 h-2 rounded-full bg-white/10"></div>
                </div>
                <div className="flex-1 ml-4 h-3 bg-black/40 rounded-md"></div>
             </div>
             <div className="p-5 flex flex-col items-center gap-4">
                <div className="w-full flex flex-col items-center gap-2">
                   <div className="w-3/4 h-2 bg-white/20 rounded-full"></div>
                   <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full mt-1">
                   <div className="aspect-[4/3] bg-white/[0.02] border border-white/5 rounded-lg"></div>
                   <div className="aspect-[4/3] bg-white/[0.02] border border-white/5 rounded-lg"></div>
                </div>
                <div className="w-2/3 h-8 bg-primary rounded-lg shadow-[0_0_20px_rgba(255,0,69,0.3)] mt-1 flex items-center justify-center overflow-hidden relative group/btn">
                   <div className="w-12 h-1.5 bg-white/90 rounded-full"></div>
                   <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover/btn:animate-[shine_1.5s_ease-in-out_infinite]"></div>
                </div>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};

const UnifiedGrowthSystem: React.FC<Props> = ({ tMethodology }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const DURATION = 6000;

  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }
    let startTime = Date.now();
    let animationFrame: number;
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = (elapsed / DURATION) * 100;
      if (currentProgress >= 100) {
        setActiveTab((prev) => (prev + 1) % tMethodology.phases.length);
        startTime = Date.now();
        setProgress(0);
      } else {
        setProgress(currentProgress);
      }
      animationFrame = requestAnimationFrame(tick);
    };
    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [isAutoPlaying, activeTab, tMethodology.phases.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setIsAutoPlaying(false);
    setProgress(0);
  };

  return (
    <section id="approach" ref={sectionRef} className="bg-[#020202] py-12 md:py-32 xl:py-40 relative text-white border-t border-white/5 overflow-hidden">
      {/* Background Ambience Shared connecting whole section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-[#020202] to-[#020202] opacity-60"></div>
      
      <div className="container mx-auto px-6 sm:px-8 relative z-10 max-w-7xl">
        
        {/* PART 1 & 2 UNIFIED: THE METHODOLOGY & COMPONENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-20 items-stretch mb-10 md:mb-24">
          
          {/* LEFT COLUMN - TEXT & TABS */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4 md:mb-8">
              {tMethodology.badges.map((badge, i) => (
                <span key={i} className="px-3.5 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] font-bold border border-white/10 rounded-full bg-white/[0.03] text-white/70 shadow-sm backdrop-blur-md">
                  {badge}
                </span>
              ))}
            </div>
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.05] text-white">
              {tMethodology.headline}
            </h2>
            
            {/* Subheadline */}
            <p className="text-sm md:text-xl text-white/50 font-light mb-5 lg:mb-16 max-w-lg leading-relaxed">
              {tMethodology.subheadline}
            </p>

            {/* TABS (Interactive Pipeline) */}
            <div className="flex flex-col relative w-full">
               <div className="hidden lg:block absolute left-[3px] top-2 bottom-2 w-[2px] bg-white/10 rounded-full" />
               
               {tMethodology.phases.map((phase, idx) => {
                 const isActive = activeTab === idx;
                 return (
                   <React.Fragment key={idx}>
                     {/* --- DESKTOP TAB --- */}
                     <div 
                       onClick={() => handleTabClick(idx)}
                       className={`hidden lg:block relative pl-10 py-5 cursor-pointer transition-all duration-300 group
                         ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'}
                       `}
                     >
                       {isActive && (
                         <div className="absolute left-[3px] top-0 bottom-0 w-[2px] bg-transparent overflow-hidden rounded-full z-10">
                            {isAutoPlaying ? (
                              <div 
                                className="absolute top-0 left-0 w-full bg-primary shadow-[0_0_12px_currentColor]"
                                style={{ height: `${progress}%` }}
                              />
                            ) : (
                              <div className="absolute top-0 left-0 w-full h-full bg-primary shadow-[0_0_12px_currentColor]" />
                            )}
                         </div>
                       )}

                       <div className="flex items-center gap-4">
                         <span className="text-[0.65rem] font-mono text-white/40 font-bold tracking-[0.2em] uppercase mt-1">0{idx + 1}</span>
                         <h3 className={`text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60'}`}>
                           {phase.title.replace('&', ' & ')}
                         </h3>
                       </div>
                     </div>

                     {/* --- MOBILE TAB (ACCORDION) --- */}
                     <div 
                       className={`lg:hidden flex flex-col rounded-[2rem] border transition-all duration-500 overflow-hidden mb-4
                         ${isActive ? 'bg-[#080808] border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.02]' : 'bg-white/[0.02] border-white/5 opacity-70'}`}
                     >
                        <div 
                          onClick={() => handleTabClick(idx)}
                          className="p-5 sm:p-6 flex items-center justify-between cursor-pointer"
                        >
                           <div className="flex items-center gap-4">
                             <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${isActive ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-white/[0.05] border-white/10 text-white/40'}`}>
                               <span className="text-[0.65rem] font-mono font-bold">0{idx + 1}</span>
                             </div>
                             <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/80'}`}>
                               {phase.title.replace('&', ' & ')}
                             </h3>
                           </div>
                           <div className={`transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}>
                              <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                           </div>
                        </div>

                        <AnimatePresence initial={false}>
                          {isActive && (
                             <motion.div
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: "auto", opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               transition={{ duration: 0.4, ease: "easeInOut" }}
                               className="overflow-hidden"
                             >
                                {/* Visual Mockup Header */}
                                <div className="w-full h-32 sm:h-48 border-y border-white/5 relative overflow-hidden bg-[#080808]">
                                   <PlatformMockup type={idx === 0 ? 1 : idx === 1 ? 2 : 0} />
                                </div>

                                <div className="p-5 sm:p-6 pb-6">
                                   <div className="inline-flex items-center gap-2 mb-6 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-sm mt-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_currentColor]"></div>
                                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/60">{tMethodology.phaseLabel}</span>
                                   </div>

                                   <ul className="grid grid-cols-1 gap-y-4 mb-6">
                                     {phase.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 sm:gap-4 text-white/70">
                                           <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                             <svg className="w-2.5 h-2.5 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                           </div>
                                           <span className="text-sm leading-relaxed font-light">{item}</span>
                                        </li>
                                     ))}
                                   </ul>

                                   {phase.services?.length > 0 && (
                                     <div className="mb-6 flex flex-wrap gap-2">
                                       {phase.services.map((svc, i) => (
                                         <span key={i} className="px-2.5 py-1 rounded-full text-[0.6rem] font-bold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary/80">
                                           {svc}
                                         </span>
                                       ))}
                                     </div>
                                   )}
                                   
                                   <div className="bg-[#050505] border border-white/5 rounded-2xl p-4 sm:p-5 flex flex-col gap-1.5 shadow-inner ring-1 ring-white/[0.02]">
                                      <span className="text-[0.6rem] uppercase tracking-[0.2em] font-mono text-primary/60 font-semibold mb-1">{tMethodology.outputLabel}</span>
                                      <span className="text-sm font-bold text-white tracking-tight">
                                        {phase.deliverable.includes(':') 
                                           ? phase.deliverable.split(':')[1].trim() 
                                           : phase.deliverable}
                                      </span>
                                   </div>
                                </div>
                             </motion.div>
                          )}
                        </AnimatePresence>
                     </div>
                   </React.Fragment>
                 )
               })}
            </div>
          </div>

          {/* RIGHT COLUMN - CONTENT CARD (DESKTOP ONLY) */}
          <div className="hidden lg:block lg:col-span-7 w-full h-full min-h-[800px] relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[#080808] border border-white/5 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.05]">
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} 
                    className="absolute inset-0 flex flex-col h-full"
                  >
                     <div className="absolute right-8 -bottom-4 md:bottom-8 text-[180px] md:text-[240px] font-black italic text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none z-0">
                       {activeTab + 1}
                     </div>

                     <div className="relative w-full h-48 sm:h-56 border-b border-white/5 overflow-hidden shrink-0">
                        <PlatformMockup type={activeTab === 0 ? 1 : activeTab === 1 ? 2 : 0} />
                     </div>

                     <div className="relative z-10 w-full p-6 sm:p-8 flex flex-col flex-grow overflow-y-auto overflow-x-hidden min-h-0">
                        <div className="inline-flex items-center gap-2 mb-6 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-sm self-start shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_currentColor]"></div>
                          <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/60">{tMethodology.phaseLabel}</span>
                        </div>

                        <h4 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 text-white tracking-tight leading-tight max-w-[90%] shrink-0">
                           {tMethodology.phases[activeTab].title.includes('&') ? (
                             <>
                               {tMethodology.phases[activeTab].title.split('&')[0].trim()}
                               <span className="text-primary font-light italic px-2">&</span>
                               {tMethodology.phases[activeTab].title.split('&')[1].trim()}
                             </>
                           ) : tMethodology.phases[activeTab].title.includes(' Y ') ? (
                             <>
                               {tMethodology.phases[activeTab].title.split(' Y ')[0].trim()}
                               <span className="text-primary font-light italic px-2">Y</span>
                               {tMethodology.phases[activeTab].title.split(' Y ')[1].trim()}
                             </>
                           ) : (
                             tMethodology.phases[activeTab].title
                           )}
                        </h4>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                          {tMethodology.phases[activeTab].items.map((item, i) => (
                             <li key={i} className="flex items-start gap-3 sm:gap-4 text-white/70 group">
                               <div className="mt-1 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                                 <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary/80 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                               </div>
                               <span className="text-sm md:text-base leading-relaxed font-light">{item}</span>
                             </li>
                          ))}
                        </ul>

                        {/* Active capabilities for this phase */}
                        {tMethodology.phases[activeTab].services?.length > 0 && (
                          <div className="mt-6 pt-5 border-t border-white/5">
                            <span className="text-[0.55rem] font-black text-white/20 uppercase tracking-[0.2em] mr-3">{tMethodology.capabilitiesLabel}</span>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {tMethodology.phases[activeTab].services.map((svc, i) => (
                                <span key={i} className="px-2.5 py-1 rounded-full text-[0.6rem] font-bold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary/80">
                                  {svc}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                     </div>

                     <div className="relative z-10 mx-6 sm:mx-8 mb-6 sm:mb-8 shrink-0 mt-auto bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-inner ring-1 ring-white/[0.02]">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[0.6rem] uppercase tracking-[0.2em] font-mono text-primary/60 font-semibold mb-1 hover:text-primary transition-colors cursor-default">{tMethodology.outputLabel}</span>
                          <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                            {tMethodology.phases[activeTab].deliverable.includes(':') 
                               ? tMethodology.phases[activeTab].deliverable.split(':')[1].trim() 
                               : tMethodology.phases[activeTab].deliverable}
                          </span>
                        </div>
                        <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/5 bg-white/[0.02]">
                            <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                     </div>

                  </motion.div>
                </AnimatePresence>
            </div>
          </div>
        </div>

         {/* Unified Footer */}
         {tMethodology.footer && (
           <div className="text-center flex justify-center mt-12 md:mt-24">
              <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/5 text-[0.65rem] font-mono text-white/50 uppercase tracking-[0.2em] backdrop-blur-sm shadow-sm hover:bg-white/[0.04] transition-colors cursor-default">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span>
                 {tMethodology.footer}
              </span>
           </div>
         )}
       </div>
     </section>
   );
};

export default UnifiedGrowthSystem;
