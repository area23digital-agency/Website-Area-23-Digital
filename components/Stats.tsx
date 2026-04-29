
import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types';

interface StatsProps {
  t: Translation['stats'];
}

const Counter = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.5 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      setCount(Math.floor(easeProgress * numericValue));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, numericValue, duration]);

  return (
    <div ref={elementRef} className="flex items-center justify-center">
      {count}{suffix}
    </div>
  );
};

const Stats: React.FC<StatsProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white/[0.01]" id="results" ref={sectionRef}>
      <div className="container mx-auto px-6 text-center">
        <h2 className={`text-3xl md:text-5xl font-bold mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t.headline}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-20 gap-x-8 md:gap-x-12">
          {t.items.map((stat, i) => (
            <div 
              key={i} 
              className={`group transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl md:text-7xl font-black mb-2 md:mb-4 group-hover:text-primary transition-all duration-500 group-hover:scale-110 group-hover:[text-shadow:0_0_40px_rgba(255,0,69,0.5)]">
                <Counter value={stat.value} />
              </div>
              <div className={`text-accent uppercase tracking-[0.15rem] md:tracking-[0.25rem] text-[0.6rem] md:text-xs font-black transition-all duration-500 group-hover:translate-y-2 group-hover:text-white ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${0.4 + i * 0.1}s` }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
