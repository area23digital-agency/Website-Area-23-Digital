
import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types';

interface ProblemProps {
  t: Translation['problem'];
}

const Problem: React.FC<ProblemProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Custom Icons matching the specific problems
  const icons = [
    // Marketing without a system (Chaos / Disconnected)
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    // Lack of clarity (Eye blocked / Fog)
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>,
    // Leads without follow-up (Leaky bucket / Alert)
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.876c1.27 0 2.09-1.383 1.453-2.486L14.053 4.457c-.637-1.103-2.227-1.103-2.864 0L4.609 14.514c-.637 1.103.183 2.486 1.453 2.486z" /></svg>
  ];

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden" ref={containerRef}>
      
      {/* Subtle "Pain" Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Headline */}
        <div className="flex flex-col items-center justify-center mb-16 md:mb-24">
          <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="block text-center text-primary font-bold uppercase tracking-widest text-xs mb-4">{t.badge}</span>
            <h2 className="text-3xl md:text-5xl font-black text-center text-white">
              {t.headline}
            </h2>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {t.cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-[#080808] border border-white/5 p-8 md:p-10 rounded-3xl transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 mb-8 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 text-white/50 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                {icons[idx]}
              </div>

              {/* Text */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm md:text-base group-hover:text-white/80 transition-colors">
                  {card.text}
                </p>
              </div>

              {/* Subtle visual indicator at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Connector Line & Transition */}
        <div className={`flex flex-col items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Animated Line */}
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-white/20 mb-8"></div>
          
          {/* Text */}
          <p className="text-center text-white/60 font-medium text-lg md:text-xl max-w-2xl leading-relaxed">
            {t.transition.split('. ')[0]}.
            <span className="block mt-2 text-white font-serif italic text-2xl md:text-3xl">
              {t.transition.split('. ')[1]}
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Problem;
