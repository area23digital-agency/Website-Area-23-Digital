
import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types';

interface ComparisonProps {
  t: Translation['comparison'];
}

const Comparison: React.FC<ComparisonProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (tableRef.current) observer.observe(tableRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-20">
          {t.headlineParts[0]} <span className="text-primary italic font-serif">{t.headlineParts[1]}</span>
        </h2>
        
        <div className="max-w-4xl mx-auto overflow-x-auto" ref={tableRef}>
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 md:py-8 px-4 md:px-6 text-secondary uppercase tracking-[0.2em] text-[0.6rem] md:text-[0.65rem] font-black">Aspect</th>
                <th className="py-6 md:py-8 px-4 md:px-6 text-secondary uppercase tracking-[0.2em] text-[0.6rem] md:text-[0.65rem] font-black">Others</th>
                <th className="py-6 md:py-8 px-4 md:px-6 text-primary uppercase tracking-[0.2em] text-[0.6rem] md:text-[0.65rem] font-black relative overflow-hidden">
                  Area 23 Digital
                  <div className="absolute top-0 left-0 right-0 h-full bg-primary/5 pointer-events-none"></div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {t.aspects.map((row, i) => (
                <tr 
                  key={i} 
                  className={`group hover:bg-white/[0.03] hover:scale-[1.01] transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <td className="py-4 md:py-6 px-4 md:px-6 font-bold text-white/60 group-hover:text-white transition-colors text-sm md:text-base">{row.label}</td>
                  <td className="py-4 md:py-6 px-4 md:px-6 text-secondary group-hover:text-accent transition-colors text-sm md:text-base">{row.others}</td>
                  <td className="py-4 md:py-6 px-4 md:px-6 font-extrabold text-white border-x border-primary/20 bg-primary/5 relative text-sm md:text-base">
                    <span className="relative z-10 group-hover:text-primary transition-colors">{row.we}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`mt-12 md:mt-24 text-center transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          <p className="text-xl md:text-3xl font-serif italic text-primary">
            {t.anchor}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
