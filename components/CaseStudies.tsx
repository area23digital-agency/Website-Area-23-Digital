
import React, { useEffect, useRef, useState } from 'react';
import { Translation } from '../types';
import { motion } from 'framer-motion';

interface CaseStudiesProps {
  t: Translation['caseStudies'];
  testimonials: Translation['testimonials'];
}

type Item = Translation['testimonials']['items'][number];

// ── Cursor-tracking glow card ─────────────────────────────────────────────
const Card: React.FC<{ item: Item }> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    glowRef.current.style.opacity = '1';
    glowRef.current.style.background = `radial-gradient(260px circle at ${x}% ${y}%, rgba(255,0,69,0.09), transparent 70%)`;
  };

  const onLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative bg-[#0e0e0e] border border-white/[0.07] rounded-2xl p-5 mb-3 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-white/[0.13] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
    >
      {/* cursor glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ opacity: 0, transition: 'opacity 0.3s' }}
      />
      <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* industry + stars */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[0.55rem] font-black uppercase tracking-[0.18em] text-primary/60">{item.industry}</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3 h-3 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>

      {/* quote */}
      <p className="text-white/68 text-sm leading-relaxed mb-4 font-light">"{item.quote}"</p>

      {/* 2 metrics */}
      <div className="flex gap-2 mb-4">
        {item.results.slice(0, 2).map((r, i) => (
          <div key={i} className="flex-1 bg-white/[0.03] border border-white/[0.05] rounded-xl px-3 py-2 text-center">
            <div className="text-white font-black text-sm tracking-tight">{r.value}</div>
            <div className="text-white/25 text-[0.48rem] uppercase tracking-widest font-bold mt-0.5">{r.label}</div>
          </div>
        ))}
      </div>

      {/* profile */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/[0.05]">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 ring-1 ring-primary/10 flex-shrink-0">
          <img
            src={item.image || `https://api.dicebear.com/7.x/initials/svg?seed=${item.name}&backgroundColor=111111&textColor=ffffff`}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
            width="32"
            height="32"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-white text-xs font-bold truncate">{item.name}</div>
          <div className="text-white/35 text-[0.58rem] truncate">{item.position}</div>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
          <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-[0.5rem] font-bold text-emerald-400 uppercase tracking-wider">Verified</span>
        </div>
      </div>
    </div>
  );
};

// ── rAF-driven infinite scroll column ────────────────────────────────────
const ScrollColumn = ({
  items,
  direction,
  speed,
  isPaused,
}: {
  items: Item[];
  direction: 'up' | 'down';
  speed: number;
  isPaused: boolean;
}) => {
  const innerRef  = useRef<HTMLDivElement>(null);
  const posRef    = useRef(0);
  const rafRef    = useRef<number | null>(null);
  const lastRef   = useRef(0);
  const doubled   = [...items, ...items];

  useEffect(() => {
    const tick = (now: number) => {
      const delta = now - (lastRef.current || now);
      lastRef.current = now;

      if (!isPaused && innerRef.current) {
        const halfH = innerRef.current.scrollHeight / 2;
        if (halfH > 0) {
          const step = (speed / 1000) * delta;
          posRef.current = direction === 'up'
            ? (posRef.current + step) % halfH
            : ((posRef.current - step) % halfH + halfH) % halfH;

          const offset = direction === 'up' ? -posRef.current : posRef.current - halfH;
          innerRef.current.style.transform = `translateY(${offset}px)`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [direction, speed, isPaused]);

  return (
    <div
      className="relative overflow-hidden flex-1"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    >
      <div ref={innerRef} style={{ willChange: 'transform' }}>
        {doubled.map((item, i) => (
          <Card key={`${item.indicator}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
};


// ── Main section ──────────────────────────────────────────────────────────
const CaseStudies: React.FC<CaseStudiesProps> = ({ testimonials }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = testimonials.items;
  const col1 = [...items.slice(0)];
  const col2 = [...items.slice(2), ...items.slice(0, 2)];
  const col3 = [...items.slice(4), ...items.slice(0, 4)];

  const wallVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section id="results" className="py-20 md:py-32 bg-black relative overflow-hidden" ref={sectionRef}>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-8%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-primary/5 blur-[120px] md:blur-[180px]" />
        <div className="absolute bottom-[-20%] right-[-8%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-primary/4 blur-[100px] md:blur-[160px]" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          animate={isVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-5"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.34, 1.4, 0.64, 1] }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.7)]"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/50">{testimonials.badge}</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {testimonials.headline}
          </motion.h2>

          <motion.p
            className="text-white/40 text-sm md:text-lg max-w-sm md:max-w-md mx-auto font-light px-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {testimonials.subheadline}
          </motion.p>
        </motion.div>

        {/* ── Mobile: single centered column ── */}
        <motion.div
          className="md:hidden h-[500px]"
          variants={wallVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchCancel={() => setIsPaused(false)}
        >
          <ScrollColumn items={col1} direction="up" speed={32} isPaused={isPaused} />
        </motion.div>

        {/* ── Desktop: 3 columns ── */}
        <motion.div
          className="hidden md:flex gap-4 md:gap-5 h-[700px]"
          variants={wallVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <ScrollColumn items={col1} direction="up"   speed={55}  isPaused={isPaused} />
          <ScrollColumn items={col2} direction="down" speed={42}  isPaused={isPaused} />
          <ScrollColumn items={col3} direction="up"   speed={50}  isPaused={isPaused} />
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudies;
