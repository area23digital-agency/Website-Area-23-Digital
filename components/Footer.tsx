
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
    { id: 'x',  url: 'https://x.com/area23digital' }
  ];

  const quickLinks = [
    { label: 'Home',        href: '#home' },
    { label: 'Services',    href: '#services' },
    { label: 'How We Work', href: '#approach' },
    { label: 'Results',     href: '#results' },
    { label: 'Contact',     href: '#contact' }
  ];

  const serviceLinks = [
    { label: 'Paid Media',            href: '#services' },
    { label: 'Growth Strategy',        href: '#services' },
    { label: 'Automation & Systems',   href: '#services' },
    { label: 'Web & CRO',             href: '#services' }
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-10 md:py-24">
      <div className="container mx-auto px-5 sm:px-6">

        {/* Main grid — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 mb-8 md:mb-24">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1 mb-2 md:mb-0">
            <div className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-8 tracking-tighter">
              Area 23 <span className="text-primary italic font-serif">Digital</span>
            </div>
            <p className="text-secondary font-serif italic mb-6 md:mb-10 text-base md:text-xl opacity-70">
              "{t.tagline}"
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.id}
                  className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-300 hover:border-primary hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-[-4px] rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-primary via-pinkHover to-primary opacity-0 group-hover:opacity-100 transition-opacity animate-[spin_3s_linear_infinite]" />
                  <div className="absolute inset-[1px] rounded-full bg-[#050505] z-0" />
                  <span className="relative z-10 text-[0.6rem] uppercase font-black tracking-widest group-hover:text-primary transition-colors">{social.id}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black mb-5 md:mb-10 uppercase tracking-[0.2em] text-[0.6rem] opacity-50">{t.links.titles.quick}</h4>
            <ul className="space-y-3 md:space-y-5 text-secondary text-xs sm:text-sm font-bold">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="group flex items-center hover:text-white transition-all">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black mb-5 md:mb-10 uppercase tracking-[0.2em] text-[0.6rem] opacity-50">{t.links.titles.services}</h4>
            <ul className="space-y-3 md:space-y-5 text-secondary text-xs sm:text-sm font-bold">
              {serviceLinks.map(service => (
                <li key={service.label}>
                  <a href={service.href} className="group flex items-center hover:text-white transition-all">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-black mb-5 md:mb-10 uppercase tracking-[0.2em] text-[0.6rem] opacity-50">{t.links.titles.contact}</h4>
            <ul className="space-y-3 md:space-y-6 text-secondary text-xs sm:text-sm font-bold">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#ff0045] flex-shrink-0" />
                <a href={`mailto:${t.contactInfo.email}`} className="hover:text-primary transition-colors break-all">
                  {t.contactInfo.email}
                </a>
              </li>
              <li>{t.contactInfo.phone}</li>
              <li>{t.contactInfo.hours}</li>
              <li className="pt-4 md:pt-6 border-t border-white/5 text-white font-black tracking-tight flex flex-col gap-2">
                <span className="text-[0.6rem] uppercase tracking-widest text-secondary/60">{t.links.titles.global}</span>
                {t.contactInfo.locations}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="text-secondary/60 text-[0.6rem] font-black uppercase tracking-widest text-center sm:text-left">{t.copyright}</div>
          <div className="flex space-x-8 text-secondary/60 text-[0.6rem] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">{t.legal.privacy}</a>
            <a href="#" className="hover:text-primary transition-colors">{t.legal.terms}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
