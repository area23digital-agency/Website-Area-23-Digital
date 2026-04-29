
import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types';

interface FAQProps {
  t: Translation['faq'];
}

const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="faq" className="py-12 md:py-32 bg-white/[0.01]" ref={sectionRef}>
      <div className="container mx-auto px-5 sm:px-6">

        <div className="text-center mb-10 md:mb-24">
          <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t.headline}
          </h2>
          <p className={`text-accent text-sm md:text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t.subheadline}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-6">
          {t.items.map((item, i) => (
            <div
              key={i}
              className={`border border-white/5 bg-white/[0.02] rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
            >
              <button
                onClick={() => toggle(i)}
                className={`w-full px-5 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8 flex items-center justify-between text-left transition-all duration-300 ${openIndex === i ? 'bg-primary/5' : 'hover:bg-white/5'}`}
              >
                <span className="font-black text-sm sm:text-base md:text-xl pr-4 md:pr-8 leading-snug">{item.q}</span>
                <span className={`text-primary flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${openIndex === i ? 'rotate-180 scale-110' : ''}`}>
                  <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${openIndex === i ? 'max-h-[800px] opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'}`}>
                <div className={`px-5 py-5 sm:px-6 sm:py-6 md:p-10 text-accent leading-relaxed text-sm md:text-lg transition-all duration-500 delay-100 ${openIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
