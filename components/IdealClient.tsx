
import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types';

interface IdealClientProps {
  t: Translation['idealClient'];
}

const IdealClient: React.FC<IdealClientProps> = ({ t }) => {
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
    <section id="about" className="py-12 md:py-32 bg-white/[0.02]" ref={sectionRef}>
      <div className="container mx-auto px-5 sm:px-6">

        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 md:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto mb-10 md:mb-24">

          {/* Work With */}
          <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-700 delay-200`}>
            <h3 className="text-base md:text-2xl font-black mb-6 md:mb-10 flex items-center uppercase tracking-tight">
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 md:mr-5 flex-shrink-0 shadow-inner">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {t.workWithTitle}
            </h3>
            <ul className="space-y-3 md:space-y-6">
              {t.workWith.map((item, i) => (
                <li
                  key={i}
                  className={`group flex items-start text-accent leading-relaxed text-sm md:text-lg transition-all duration-500 cursor-default ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                >
                  <div className="relative mt-0.5 mr-3 md:mr-5 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="group-hover:text-emerald-400 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-700 delay-200`}>
            <h3 className="text-base md:text-2xl font-black mb-6 md:mb-10 flex items-center text-accent uppercase tracking-tight">
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 text-secondary flex items-center justify-center mr-3 md:mr-5 flex-shrink-0">○</span>
              {t.notForTitle}
            </h3>
            <ul className="space-y-3 md:space-y-6">
              {t.notFor.map((item, i) => (
                <li
                  key={i}
                  className={`group flex items-start text-secondary leading-relaxed text-sm md:text-lg transition-all duration-500 cursor-default ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                >
                  <span className="text-secondary/40 mr-3 md:mr-5 mt-0.5 font-black flex-shrink-0">○</span>
                  <span className="group-hover:text-accent transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center pt-8 md:pt-16 border-t border-white/5 max-w-3xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-secondary/60 mb-6 md:mb-12 font-bold uppercase tracking-widest text-[0.6rem] md:text-xs">{t.industries}</p>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <p className="text-lg md:text-2xl font-black mb-6 md:mb-12 italic text-white leading-tight">{t.cta}</p>
            <a
              href="mailto:area23digital@gmail.com?subject=Strategy%20Call&body=Estoy%20listo%20para%20agendar%20mi%20llamada%20estrategica"
              className="relative group overflow-hidden w-full sm:w-auto bg-primary text-white px-8 py-4 md:px-12 md:py-6 rounded-xl font-black text-base md:text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 text-center block sm:inline-block"
            >
              <span className="relative z-10">{t.ctaButton}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IdealClient;
