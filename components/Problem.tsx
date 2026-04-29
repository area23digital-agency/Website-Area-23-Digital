
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
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const icons = [
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.876c1.27 0 2.09-1.383 1.453-2.486L14.053 4.457c-.637-1.103-2.227-1.103-2.864 0L4.609 14.514c-.637 1.103.183 2.486 1.453 2.486z" /></svg>
  ];

  return (
    <section className="py-14 md:py-32 bg-black relative overflow-hidden" ref={containerRef}>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">

        {/* Headline */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-24">
          <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="block text-center text-primary font-bold uppercase tracking-widest text-xs mb-3">{t.badge}</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center text-white">
              {t.headline}
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-20">
          {t.cards.map((card, idx) => (
            <div
              key={idx}
              className={`group relative bg-[#080808] border border-white/5 p-6 md:p-10 rounded-2xl md:rounded-3xl transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-8 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 text-white/50 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                {icons[idx]}
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-base md:text-2xl font-bold mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm group-hover:text-white/80 transition-colors">
                  {card.text}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className={`flex flex-col items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-px h-10 md:h-16 bg-gradient-to-b from-transparent via-white/10 to-white/20 mb-6 md:mb-8" />
          <p className="text-center text-white/60 font-medium text-base md:text-xl max-w-2xl leading-relaxed px-2">
            {t.transition.split('. ')[0]}.
            {t.transition.split('. ')[1] && (
              <span className="block mt-2 text-white font-serif italic text-xl md:text-3xl">
                {t.transition.split('. ')[1]}
              </span>
            )}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Problem;
