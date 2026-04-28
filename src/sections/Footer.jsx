import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowUpRight, MapPin } from 'lucide-react';
import ServiceModal from '../components/ServiceModal';
import { servicesData } from '../data/services';
import { socialLinks, companyPhoneDisplay, companyPhoneHref } from '../data/contact';
import { handleScrollTo } from '../utils/scrollTo';

const Footer = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsDarkMode(root.classList.contains('dark'));

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const openService = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const currentLogo = isDarkMode ? '/assets/Digiicare_D.png' : '/assets/Digiicare.png';

  return (
    <footer className="footer-shell section-theme-rose flex items-start justify-start overflow-visible border-t border-black/5 pb-6 pt-12 text-slate-900 dark:border-white/5 dark:text-light max-[1280px]:pb-4 max-[1280px]:pt-9 xl:pb-8 xl:pt-14 2xl:pb-10 2xl:pt-16">
      <div className="container relative z-10 mx-auto flex w-full flex-col justify-start px-5 md:px-6 xl:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-10 border-b border-black/5 pb-12 dark:border-white/5 max-[1280px]:mb-8 max-[1280px]:gap-7 max-[1280px]:pb-8 lg:flex-row xl:mb-14 xl:gap-12 xl:pb-14 2xl:mb-16 2xl:gap-14 2xl:pb-16">
          <div className="w-full max-w-md">
            <a href="#" onClick={(e) => handleScrollTo(e, '#')} className="group mb-8 flex h-16 items-center gap-3 max-[1280px]:mb-6 max-[1280px]:h-12">
              <img src={currentLogo} alt="Digicare Design" className="h-full w-auto object-contain transition-transform group-hover:scale-105" />
            </a>
            <p className="mb-8 text-lg font-light leading-relaxed tracking-tight text-slate-600 dark:text-gray-400 max-[1280px]:mb-6 max-[1280px]:text-[15px] max-[1280px]:leading-7 xl:text-[1.05rem]">
              An elite UI/UX & Brand Development collective. We map user chaos into stunning digital order.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ label, href, image }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center transition-all duration-500 hover:-translate-y-1 md:h-16 md:w-16"
                >
                  <img src={image} alt={label} className="h-12 w-12 rounded-full object-cover shadow-md md:h-14 md:w-14" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,.8fr)_minmax(0,1fr)] lg:w-auto">
            <div className="min-w-0">
              <h4 className="mb-8 text-xs font-black uppercase tracking-widest text-slate-950/70 dark:text-white/70 max-[1280px]:mb-6 max-[1280px]:text-[10px]">Services</h4>
              <ul className="grid grid-cols-1 gap-x-10 gap-y-4 text-sm font-light max-[1280px]:gap-x-7 max-[1280px]:gap-y-3 max-[1280px]:text-[12px] sm:grid-cols-2">
                {servicesData.map((service) => (
                  <li key={service.title}>
                    <button onClick={() => openService(service)} className="inline-flex max-w-full text-left text-slate-800 transition-all duration-300 hover:text-primary dark:text-slate-300 font-bold uppercase tracking-tight leading-tight hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.28)]">
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-8 text-xs font-black uppercase tracking-widest text-slate-950/70 dark:text-white/70 max-[1280px]:mb-6 max-[1280px]:text-[10px]">Agency</h4>
              <ul className="flex flex-col gap-5 text-sm font-light max-[1280px]:gap-4 max-[1280px]:text-[12px]">
                <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="inline-flex max-w-full font-bold uppercase tracking-tighter text-slate-800 transition-all duration-300 hover:text-primary dark:text-slate-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.28)]">Our Experiments</a></li>
                <li><a href="#process" onClick={(e) => handleScrollTo(e, '#process')} className="inline-flex max-w-full font-bold uppercase tracking-tighter text-slate-800 transition-all duration-300 hover:text-primary dark:text-slate-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.28)]">Methodology</a></li>
                <li><a href="#our-work" onClick={(e) => handleScrollTo(e, '#our-work')} className="inline-flex max-w-full font-bold uppercase tracking-tighter text-slate-800 transition-all duration-300 hover:text-primary dark:text-slate-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.28)]">Our Work</a></li>
                <li><a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="inline-flex max-w-full font-bold uppercase tracking-tighter text-slate-800 transition-all duration-300 hover:text-primary dark:text-slate-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.28)]">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-2 xl:col-span-1">
              <h4 className="mb-8 text-xs font-black uppercase tracking-widest text-slate-950/70 dark:text-white/70 max-[1280px]:mb-6 max-[1280px]:text-[10px]">Agency Info</h4>
              <div className="flex flex-col gap-3 max-[1280px]:text-[12px]">
                <a href="https://maps.google.com/?q=BEST-CFO%2099%20Wallstreet%20New%20York%20NY%2010005" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm font-bold text-primary">
                  <MapPin size={18} /> BEST-CFO - 99 WALLSTREET, NEW YORK.NY 10005
                  <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                <a href="mailto:info@thedesignhands.com" className="group flex items-center gap-2 font-bold text-primary">
                  <Mail size={16} /> info@thedesignhands.com
                  <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                <a href={companyPhoneHref} className="group flex items-center gap-2 font-bold text-primary">
                  <Phone size={16} /> {companyPhoneDisplay}
                  <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-500 max-[1280px]:text-[10px] md:flex-row">
          <p>&copy; {new Date().getFullYear()} Design Hands.</p>
          <div className="mt-4 flex flex-wrap gap-6 md:mt-0">
            <span className="rounded-full border border-black/10 px-4 py-2 text-[10px] tracking-[0.18em] dark:border-white/10">Digital Privacy</span>
            <span className="rounded-full border border-black/10 px-4 py-2 text-[10px] tracking-[0.18em] dark:border-white/10">Client Terms</span>
          </div>
        </div>
      </div>

      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} service={selectedService} />
    </footer>
  );
};

export default Footer;
