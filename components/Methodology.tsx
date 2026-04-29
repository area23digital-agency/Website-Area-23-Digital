
import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types';

interface MethodologyProps {
  t: Translation['methodology'];
}

const Methodology: React.FC<MethodologyProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-black" id="how-we-work" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-12 md:mb-20 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {t.headline}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {t.pillars.map((pillar, i) => (
            <div 
              key={i} 
              className={`group relative p-8 md:p-12 bg-white/[0.02] border border-white/10 rounded-3xl transition-all duration-500 hover:border-primary/40 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(255,0,69,0.1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Internal Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-transparent via-primary/0 to-transparent group-hover:via-primary/30 transition-all duration-700 pointer-events-none"></div>

              {/* Number with specific gradient */}
              <div className={`relative overflow-hidden w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-8 md:mb-10 text-2xl font-black shadow-lg shadow-black/40 transition-all duration-500 group-hover:scale-110
                ${i === 0 ? 'bg-gradient-to-br from-purple-500 to-purple-800 text-white' : 
                  i === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-800 text-white' : 
                  i === 2 ? 'bg-gradient-to-br from-orange-500 to-orange-800 text-white' : 
                  'bg-gradient-to-br from-primary to-pinkHover text-white'}
              `}>
                <span className="relative z-10">{i + 1}</span>
                {/* Shine Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-white transition-colors">{pillar.title}</h3>
              <p className="text-accent leading-relaxed text-base md:text-lg">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
