
import React from 'react';
import { Translation } from '../types';

interface FinalCTAProps {
  t: Translation['finalCta'];
}

const FinalCTA: React.FC<FinalCTAProps> = ({ t }) => {
  return (
    <section id="contact" className="relative py-32 md:py-48 bg-black overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[#020202]"></div>
      
      {/* Deep Red Pulse Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-60 animate-pulse"></div>
      
      {/* Digital Grid Floor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_30%,transparent_80%)] pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Headline */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl">
              {t.headline}
            </h2>
          </div>
          
          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-secondary mb-12 md:mb-16 font-medium leading-relaxed max-w-2xl mx-auto">
            {t.subheadline}
          </p>

          {/* Primary Action */}
          <div className="mb-16 md:mb-20">
            <a 
              href="mailto:area23digital@gmail.com?subject=Strategy%20Call&body=Estoy%20listo%20para%20agendar%20mi%20llamada%20estrategica"
              className="group relative inline-flex items-center justify-center px-10 py-5 md:px-14 md:py-6 bg-white text-black rounded-full font-black text-lg md:text-xl tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,0,69,0.3)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                {t.primary}
                <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </a>
          </div>

          {/* Trust Indicators / System Checks */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            {t.trust.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.06]">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-500/10 border border-emerald-500/50 flex items-center justify-center text-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                  <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
