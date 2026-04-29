
import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import UnifiedGrowthSystem from './components/UnifiedGrowthSystem';
import Stats from './components/Stats';
import CaseStudies from './components/CaseStudies';
import IdealClient from './components/IdealClient';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'es') ? saved as Language : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-white">
      <BackgroundEffects />
      
      <Navbar t={t.nav} language={language} onLanguageToggle={toggleLanguage} />
      
      <main className="relative z-10">
        <Hero t={t.hero} />
        <Problem t={t.problem} />
        <UnifiedGrowthSystem tMethodology={t.hundredKPages} tServices={t.services} />
        <Stats t={t.stats} />
        <CaseStudies t={t.caseStudies} testimonials={t.testimonials} />
        <IdealClient t={t.idealClient} />
        <Pricing t={t.pricing} />
        <FAQ t={t.faq} />
        <FinalCTA t={t.finalCta} />
      </main>

      <Footer t={t.footer} />
    </div>
  );
};

export default App;
