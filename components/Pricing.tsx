
import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types';

interface PricingProps {
  t: Translation['pricing'];
}

const Pricing: React.FC<PricingProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 md:py-32 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[80%] h-[150%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className={`inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,0,69,0.5)] animate-pulse"></div>
             <span className="text-[0.65rem] font-bold text-white/50 uppercase tracking-[0.2em]">Investment</span>
             <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,0,69,0.5)] animate-pulse"></div>
          </div>
          
          <h2 className={`relative text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t.headline}
          </h2>
          <p className={`relative text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t.subheadline}
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {t.sections.map((section, sIdx) => (
            <div key={sIdx} className="mb-32 last:mb-0 border-b border-white/5 pb-24 last:border-0 last:pb-0">
              {/* Section Header */}
              {(section.title || section.subtitle || section.description) && (
                <div className="text-center mb-16 relative">
                  {section.title && (
                    <div className="inline-block relative">
                      <h3 className="relative text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-widest pl-2">
                        {section.title}
                      </h3>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full opacity-50"></div>
                    </div>
                  )}
                  {section.subtitle && (
                    <p className="text-white/80 text-xl font-bold max-w-3xl mx-auto mt-6 px-4">
                      {section.subtitle}
                    </p>
                  )}
                  {section.description && (
                    <p className="text-white/60 text-sm md:text-base font-medium max-w-3xl mx-auto mt-4 px-4">
                      {section.description}
                    </p>
                  )}
                </div>
              )}

              {/* Common Features */}
              {section.commonFeatures && (
                <div className="mb-16 bg-[#040404] border border-white/5 rounded-3xl p-8 md:p-10 max-w-5xl mx-auto flex flex-col items-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                   <div className="text-center mb-8 flex items-center gap-4">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(255,0,69,0.6)]"></div>
                     <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
                       {section.commonFeaturesTitle}
                     </span>
                     <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(255,0,69,0.6)]"></div>
                   </div>
                   
                   <ul className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-12 gap-y-4 w-full">
                     {section.commonFeatures.map((feature, fIdx) => (
                       <li key={fIdx} className="flex items-center text-white/90 text-sm md:text-base font-medium">
                         <span className="text-primary mr-3 text-base md:text-lg">✓</span>
                         {feature}
                       </li>
                     ))}
                   </ul>
                </div>
              )}

              {/* Plans Display */}
              {section.isAccordion ? (
                <div className="max-w-4xl mx-auto space-y-4">
                  {section.plans.map((plan, pIdx) => {
                    const isOpen = activeAccordion === pIdx;
                    return (
                      <div 
                        key={pIdx} 
                        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden transition-all duration-300"
                      >
                        <button 
                          onClick={() => setActiveAccordion(isOpen ? null : pIdx)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                        >
                          <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wider">{plan.name}</h3>
                          <div className="flex items-center gap-6">
                            <span className="text-primary font-bold text-lg hidden sm:block sm:w-32 md:w-40 text-right">{plan.price}</span>
                            <span className={`text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </div>
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-white/5">
                            <div className="sm:hidden mb-6">
                              <span className="text-primary font-bold text-xl">{plan.price}</span>
                            </div>
                            
                            <p className="text-[#cbcdd4] text-base leading-relaxed mb-8 whitespace-pre-line">{plan.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                              {/* Included Features */}
                              <div>
                                <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">WHAT'S INCLUDED:</h4>
                                <ul className="space-y-3">
                                  {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-[#cbcdd4] text-sm">
                                      <span className="text-primary mr-3 mt-0.5">✓</span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              {/* Variants or Not Included */}
                              <div>
                                {plan.variants && plan.variants.length > 0 && (
                                  <>
                                    <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">PLANS / OPTIONAL:</h4>
                                    <ul className="space-y-3">
                                      {plan.variants.map((variant, idx) => (
                                        <li key={idx} className="flex items-start text-[#cbcdd4] text-sm">
                                          <span className="text-primary mr-3 mt-0.5">→</span>
                                          {variant}
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                )}
                                {plan.notIncluded && plan.notIncluded.length > 0 && (
                                  <>
                                    <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">NOT INCLUDED:</h4>
                                    <ul className="space-y-3">
                                      {plan.notIncluded.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-[#cbcdd4] text-sm opacity-60">
                                          <span className="text-white/50 mr-3 mt-0.5">✗</span>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                )}
                              </div>
                            </div>
                            
                            <a 
                              href="mailto:area23digital@gmail.com?subject=Servicio%20Individual"
                              className="inline-block bg-primary text-white hover:bg-pinkHover px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all active:scale-95 shadow-lg shadow-primary/25"
                            >
                              {plan.cta}
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Plans Grid */
                <div className={`grid grid-cols-1 ${section.plans.length === 1 ? 'max-w-md' : section.plans.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3 max-w-7xl'} gap-8 md:gap-10 mx-auto items-stretch justify-center`}>
                  {section.plans.map((plan, pIdx) => (
                    <div 
                      key={pIdx} 
                      className={`group relative p-8 md:p-10 rounded-[2rem] border transition-all duration-500 flex flex-col ${plan.highlighted 
                        ? 'bg-[#0f0f0f] border-primary shadow-[0_0_40px_rgba(255,0,69,0.15)] md:scale-105 z-10' 
                        : 'bg-[#050505] border-white/10 hover:border-white/20'}
                      `}
                    >
                      {/* Highlight Badge */}
                      {plan.highlighted && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[0.7rem] font-bold px-6 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/40">
                          {plan.highlightBadge || "RECOMMENDED"}
                        </div>
                      )}
  
                      <div className="flex-grow">
                        {/* Top Label */}
                        {plan.topLabel && (
                          <div className="text-primary text-[0.65rem] font-bold tracking-widest uppercase mb-2">
                            {plan.topLabel}
                          </div>
                        )}
                        
                        {/* Name */}
                        <h3 className="text-xl md:text-2xl font-black mb-2 text-white uppercase tracking-wide">{plan.name}</h3>
                        
                        {/* Price */}
                        <div className="mb-4">
                          <div className="flex flex-wrap items-baseline gap-1">
                             <div className="text-white font-black text-3xl md:text-4xl tracking-tight">
                                {plan.price}
                             </div>
                             {plan.period && (
                               <div className="text-white/40 font-medium text-xs">{plan.period}</div>
                             )}
                          </div>
                        </div>
  
                        {/* Headline */}
                        {plan.headline && (
                          <h4 className="text-white font-bold text-base mb-2">{plan.headline}</h4>
                        )}
  
                        {/* Description */}
                        {plan.description && (
                          <p className="text-secondary text-sm leading-relaxed mb-6 min-h-[40px]">
                            {plan.description}
                          </p>
                        )}
  
                        {/* Features */}
                        <div className="space-y-4 mb-10">
                          <ul className="space-y-3">
                            {plan.features.map((item, idx) => (
                              <li key={idx} className="flex items-start text-white/80 text-sm font-medium leading-snug">
                                <span className="text-primary mr-3 mt-0.5">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Button */}
                      <a 
                        href="mailto:area23digital@gmail.com?subject=Strategy%20Call"
                        className={`block text-center w-full py-4 rounded-lg font-bold text-sm uppercase tracking-wide transition-all active:scale-95 ${plan.highlighted 
                        ? 'bg-primary text-white hover:bg-pinkHover shadow-lg shadow-primary/25' 
                        : 'bg-white text-black hover:bg-gray-200'}`}>
                        {plan.cta}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className={`text-center max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-secondary/60 text-xs font-bold tracking-widest uppercase whitespace-pre-line">
            {t.footer.split(/\[(.*?)\]/).map((part, i) => {
              if (i % 2 === 1) {
                return (
                  <a key={i} href="mailto:area23digital@gmail.com?subject=Strategy%20Call" className="text-primary hover:text-pinkHover transition-colors border-b border-primary/30 hover:border-pinkHover pb-0.5 ml-1">
                    {part}
                  </a>
                );
              }
              return part;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
