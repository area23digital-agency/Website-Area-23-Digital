
import React from 'react';
import { Translation } from '../types';

interface FooterProps {
  t: Translation['footer'];
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const socialLinks = [
    { id: 'ln', url: 'https://linkedin.com/company/area23digital' },
    { id: 'ig', url: 'https://instagram.com/area23digital' },
    { id: 'fb', url: 'https://facebook.com/area23digital' },
    { id: 'x', url: 'https://x.com/area23digital' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How We Work', href: '#approach' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' }
  ];

  const serviceLinks = [
    { label: 'Paid Media', href: '#services' },
    { label: 'Growth Strategy', href: '#services' },
    { label: 'Automation & Systems', href: '#services' },
    { label: 'Web & CRO', href: '#services' }
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 mb-12 md:mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl md:text-3xl font-black text-white mb-6 md:mb-8 tracking-tighter">
              Area 23 <span className="text-primary italic font-serif">Digital</span>
            </div>
            <p className="text-secondary font-serif italic mb-8 md:mb-10 text-lg md:text-xl opacity-70">
              "{t.tagline}"
            </p>
            <div className="flex space-x-5">
              {socialLinks.map(social => (
                <a 
                  key={social.id} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.id}
                  className="group relative w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-300 hover:border-primary hover:-translate-y-2 cursor-pointer overflow-hidden"
                >
                  {/* Rotating social border */}
                  <div className="absolute inset-[-4px] rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-primary via-pinkHover to-primary opacity-0 group-hover:opacity-100 transition-opacity animate-[spin_3s_linear_infinite]"></div>
                  <div className="absolute inset-[1px] rounded-full bg-[#050505] z-0"></div>
                  <span className="relative z-10 text-[0.65rem] uppercase font-black tracking-widest group-hover:text-primary transition-colors">{social.id}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 md:mb-10 uppercase tracking-[0.2em] text-[0.65rem] opacity-50">{t.links.quick}</h4>
            <ul className="space-y-4 md:space-y-5 text-secondary text-sm font-bold">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="group flex items-center hover:text-white transition-all hover:translate-x-2">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-4 group-hover:mr-3 transition-all"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 md:mb-10 uppercase tracking-[0.2em] text-[0.65rem] opacity-50">{t.links.services}</h4>
            <ul className="space-y-4 md:space-y-5 text-secondary text-sm font-bold">
              {serviceLinks.map(service => (
                <li key={service.label}>
                  <a href={service.href} className="group flex items-center hover:text-white transition-all hover:translate-x-2">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-4 group-hover:mr-3 transition-all"></span>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 md:mb-10 uppercase tracking-[0.2em] text-[0.65rem] opacity-50">{t.links.contact}</h4>
            <ul className="space-y-4 md:space-y-6 text-secondary text-sm font-bold">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#ff0045]"></span>
                <a href={`mailto:${t.contactInfo.email}`} className="hover:text-primary transition-colors break-all">
                  {t.contactInfo.email}
                </a>
              </li>
              <li>{t.contactInfo.phone}</li>
              <li>{t.contactInfo.hours}</li>
              <li className="pt-6 border-t border-white/5 text-white font-black tracking-tight flex flex-col gap-2">
                <span className="text-[0.65rem] uppercase tracking-widest text-secondary/60">{t.links.titles.global}</span>
                {t.contactInfo.locations}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-secondary/60 text-[0.65rem] font-black uppercase tracking-widest text-center md:text-left">{t.copyright}</div>
          <div className="flex space-x-10 text-secondary/60 text-[0.65rem] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">{t.legal.privacy}</a>
            <a href="#" className="hover:text-primary transition-colors">{t.legal.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
