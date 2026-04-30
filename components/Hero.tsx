
import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types';

interface HeroProps {
  t: Translation['hero'];
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#020202] py-20 md:py-48"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-primary/10 blur-[100px] md:blur-[150px] rounded-full mix-blend-screen opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] bg-blue-600/5 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen opacity-20" />
      </div>

      {/* Perspective grid — hidden on mobile via CSS media query */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.15,
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)'
        }}
      >
        <div
          className="absolute inset-0 w-[200%] h-[200%] -left-[50%]"
          style={{
            transform: 'rotateX(60deg) translateY(-100px) translateZ(-200px)',
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            animation: 'gridMove 40s linear infinite',
          }}
        />
      </div>

      {/* Mouse glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 hidden md:block"
        style={{ background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,0,69,0.06), transparent 40%)` }}
      />

      {/* Content */}
      <div className="container mx-auto px-5 sm:px-6 relative z-10 flex flex-col items-center justify-center w-full">

        {/* Badge */}
        <div className="mb-5 md:mb-12 animate-fadeSlideDown">
          <div className="relative group cursor-default">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative px-4 py-1.5 bg-[#0a0a0a] rounded-full border border-white/10 flex items-center gap-2.5">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              </span>
              <span className="text-[0.6rem] md:text-xs font-bold uppercase tracking-[0.18em] text-white/90">
                {t.badge}
              </span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center w-full max-w-5xl mx-auto mb-5 md:mb-10">
          <div className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08] flex flex-col items-center">
            <span className="block text-white animate-reveal" style={{ animationDelay: '0.1s' }}>
              {t.headlineParts[0]}
            </span>
            <span className="block font-serif italic text-white/60 animate-reveal my-1 md:my-2" style={{ animationDelay: '0.2s' }}>
              {t.headlineParts[1]}
            </span>
            <span className="block animate-reveal" style={{ animationDelay: '0.3s' }}>
              <span className="text-primary drop-shadow-[0_0_30px_rgba(255,0,69,0.4)]">
                {t.headlineParts[2]}
              </span>
            </span>
          </div>
        </h1>

        {/* Subheadline */}
        <p
          className="text-sm sm:text-base md:text-xl text-secondary text-center max-w-[92%] sm:max-w-xl md:max-w-3xl mx-auto mb-7 md:mb-12 leading-relaxed animate-fadeSlideUp font-medium"
          style={{ animationDelay: '0.4s' }}
        >
          {t.subheadline}
        </p>

        {/* Features tagline */}
        <div className="animate-fadeSlideUp mb-7 md:mb-14" style={{ animationDelay: '0.45s' }}>
          <p className="text-[0.55rem] sm:text-[0.6rem] md:text-sm font-bold text-white/70 uppercase tracking-[0.2em] px-4 py-2 border-y border-white/5 bg-white/[0.02] text-center">
            {t.features}
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 md:gap-8 animate-fadeSlideUp w-full max-w-sm sm:max-w-none sm:w-auto"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="mailto:area23digital@gmail.com?subject=Strategy%20Call&body=Estoy%20listo%20para%20agendar%20mi%20llamada%20estrategica"
            className="w-full sm:w-auto group relative px-7 py-3.5 md:px-10 md:py-4 bg-white text-black rounded-full font-bold text-sm md:text-lg overflow-hidden transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
          >
            {t.primaryCTA}
            <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="#pricing"
            className="w-full sm:w-auto px-7 py-3.5 md:px-8 border-2 border-[#0066FF] bg-[#050505] text-gray-300 rounded-xl font-bold text-xs md:text-sm uppercase tracking-[0.15em] transition-all hover:bg-[#0066FF]/10 hover:border-blue-400 hover:text-white shadow-[0_0_15px_rgba(0,102,255,0.15)] flex items-center justify-center"
          >
            {t.secondaryCTA}
          </a>
        </div>

        {/* Trust pill */}
        <div
          className="relative w-full max-w-[95%] md:max-w-fit mx-auto mt-10 md:mt-24 z-20 animate-fadeIn"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-full p-4 md:py-3 md:px-8 flex flex-col md:flex-row items-center gap-3 md:gap-8 shadow-2xl shadow-black/50">

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5 flex-shrink-0">
                {avatars.map((src, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0f0f0f] overflow-hidden">
                    <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" width="40" height="40" />
                  </div>
                ))}
              </div>
              <div className="text-[0.55rem] text-secondary uppercase tracking-widest font-black">
                {t.trustBadge}
              </div>
            </div>

            <div className="w-full h-px bg-white/10 md:hidden" />
            <div className="hidden md:block w-px h-8 bg-white/10" />

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0 shadow-[0_0_8px_#10b981]" />
              <div className="text-[0.6rem] md:text-sm text-white font-bold tracking-wide text-center md:text-left leading-tight">
                {t.trustBadgeSub}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
