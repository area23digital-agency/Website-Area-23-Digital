
import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types';

interface TestimonialsProps {
  t: Translation['testimonials'];
}

const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoplayRef = useRef<number | null>(null);

  const duration = 8000; // Time per slide

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % t.items.length);
      setIsAnimating(false);
    }, 500); // Wait for exit animation
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + t.items.length) % t.items.length);
      setIsAnimating(false);
    }, 500);
  };

  // Autoplay
  useEffect(() => {
    if (isVisible) {
      autoplayRef.current = window.setInterval(handleNext, duration);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isVisible, activeIndex]); // Reset timer on interaction

  const activeItem = t.items[activeIndex];

  return (
    <section className="py-20 md:py-32 bg-[#020202] relative overflow-hidden" ref={sectionRef}>
      
      {/* Background Tech Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        {/* Glow behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - Minimalist */}
        <div className="text-center mb-16 md:mb-24">
           <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-secondary">{t.badge}</span>
           </div>
           <h2 className={`text-3xl md:text-5xl font-black text-white transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             {t.headline}
           </h2>
        </div>

        {/* Main Interface Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#050505] border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-black/50">
            
            {/* Top Bar (UI Detail) */}
            <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 md:px-8 bg-white/[0.02]">
               <div className="flex items-center gap-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
               </div>
               <div className="text-[0.6rem] font-mono text-white/30 tracking-widest uppercase">Encrypted {activeItem.indicator}</div>
            </div>

            <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[450px]">
              
              {/* LEFT: Client Profile & Metric (Fixed Width) */}
              <div className="md:w-[35%] bg-white/[0.02] border-r border-white/5 p-8 md:p-10 flex flex-col justify-between relative group">
                
                {/* Profile Image with Ring */}
                <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>
                  
                  {/* Industry Badge */}
                  <div className="mb-8">
                     <span className="px-2 py-1 bg-white/10 rounded text-[0.6rem] font-black uppercase tracking-wider text-white">
                        {activeItem.industry}
                     </span>
                  </div>

                  <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6">
                    <div className="absolute inset-0 rounded-full border border-white/10 border-dashed animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute -inset-2 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden bg-white/10">
                      <img 
                          src={activeItem.image || `https://api.dicebear.com/7.x/initials/svg?seed=${activeItem.name}&backgroundColor=1a1a1a&textColor=ffffff`} 
                          alt={activeItem.name} 
                          className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1 mb-8">
                    <h3 className="text-xl font-bold text-white">{activeItem.name}</h3>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">{activeItem.position}</div>
                  </div>
                </div>

                {/* The "Result" Stamp (Smaller, secondary focus) */}
                <div className={`relative p-4 rounded-xl bg-primary/5 border border-primary/20 transition-all duration-500 delay-100 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                   <div className="text-[0.6rem] text-secondary font-black uppercase tracking-widest mb-1">Primary Outcome</div>
                   <div className="text-3xl font-black text-white mb-1">{activeItem.results[0]?.value}</div>
                   <div className="text-xs text-white/60 font-medium">{activeItem.results[0]?.label}</div>
                </div>

              </div>

              {/* RIGHT: The Quote (Expanded View) */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative bg-gradient-to-b from-[#080808] to-[#050505]">
                
                {/* Decorative Quote Mark */}
                <div className="absolute top-8 left-8 text-white/5 text-9xl font-serif leading-none select-none pointer-events-none">"</div>

                <div className={`relative z-10 transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-8 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}>
                  <p className="text-xl md:text-3xl lg:text-4xl text-white font-serif italic leading-relaxed md:leading-relaxed">
                    {activeItem.quote}
                  </p>
                </div>

                {/* Navigation Controls */}
                <div className="mt-12 md:mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      {t.items.map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => {
                            if (isAnimating || i === activeIndex) return;
                            setIsAnimating(true);
                            setTimeout(() => {
                              setActiveIndex(i);
                              setIsAnimating(false);
                            }, 500);
                          }}
                          className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                   </div>

                   <div className="flex items-center gap-4">
                     <button 
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all active:scale-95"
                    >
                       ←
                     </button>
                     <button 
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all active:scale-95"
                    >
                       →
                     </button>
                   </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
