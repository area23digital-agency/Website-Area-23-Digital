
import React, { useState, useEffect } from 'react';
import { Language, Translation } from '../types';

interface NavbarProps {
  t: Translation['nav'];
  language: Language;
  onLanguageToggle: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ t, language, onLanguageToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setIsMenuOpen(false); // Close first
      // Small timeout to allow menu to close visually before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const menuLinks = [
    { href: "#approach", label: t.howWeWork }, // Using howWeWork label but pointing to unified approach
    { href: "#results", label: t.results },
    { href: "#about", label: t.about },
    { href: "#pricing", label: t.pricing },
    { href: "#faq", label: t.faq },
    { href: "#contact", label: t.contact }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
        ? 'py-4 bg-[#020202]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50' 
        : 'py-6 bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-white tracking-tight cursor-pointer group"
          >
            Area 23 <span className="text-primary italic font-serif group-hover:brightness-110 transition-all">Digital</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-accent hover:text-primary transition-colors text-sm font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Actions (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Toggle */}
            <div className="relative flex bg-white/5 border border-white/10 p-1 rounded-full overflow-hidden w-28 h-9 hover:border-primary/50 transition-all duration-300">
              <div 
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  language === 'es' ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'
                }`}
              ></div>
              <button
                onClick={() => onLanguageToggle('en')}
                className={`relative z-10 flex-1 text-xs font-bold transition-colors ${language === 'en' ? 'text-white' : 'text-accent hover:text-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageToggle('es')}
                className={`relative z-10 flex-1 text-xs font-bold transition-colors ${language === 'es' ? 'text-white' : 'text-accent hover:text-white'}`}
              >
                ES
              </button>
            </div>
            
            <a 
              href="mailto:area23digital@gmail.com?subject=Strategy%20Call&body=Estoy%20listo%20para%20agendar%20mi%20llamada%20estrategica"
              className="relative overflow-hidden bg-primary hover:bg-pinkHover text-white px-6 py-2 rounded-lg font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 group active:scale-95"
            >
              <span className="relative z-10">{t.cta}</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </div>

          {/* Mobile Hamburger (Only opens) */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col animate-in fade-in duration-200">
          
          {/* Header with Logo and Close Button (X) */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="text-2xl font-bold text-white tracking-tight">
              Area 23 <span className="text-primary italic font-serif">Digital</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col">
            <div className="flex flex-col space-y-6 mb-8">
              {menuLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-3xl font-bold text-white hover:text-primary transition-colors block"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto flex flex-col space-y-6">
              <div className="h-px bg-white/10 w-full"></div>
              
              {/* Mobile Language Toggle */}
              <div className="relative flex bg-white/5 border border-white/10 p-1 rounded-full w-full h-14">
                <div 
                  className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full transition-transform duration-300 ${
                    language === 'es' ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'
                  }`}
                ></div>
                <button
                  onClick={() => onLanguageToggle('en')}
                  className={`relative z-10 flex-1 text-sm font-bold ${language === 'en' ? 'text-white' : 'text-accent'}`}
                >
                  English
                </button>
                <button
                  onClick={() => onLanguageToggle('es')}
                  className={`relative z-10 flex-1 text-sm font-bold ${language === 'es' ? 'text-white' : 'text-accent'}`}
                >
                  Español
                </button>
              </div>

              {/* Mobile CTA */}
              <a 
                href="mailto:area23digital@gmail.com?subject=Strategy%20Call&body=Estoy%20listo%20para%20agendar%20mi%20llamada%20estrategica"
                className="bg-primary w-full py-4 rounded-xl font-bold text-center text-xl shadow-lg shadow-primary/20 text-white active:scale-95 transition-transform"
              >
                {t.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
