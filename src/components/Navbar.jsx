import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Bot, Code2 } from 'lucide-react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/Digiicare.png';
import { handleScrollTo } from '../utils/scrollTo';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [realmOpen, setRealmOpen] = useState(false);
  const realmRef = useRef(null);
  const aiPageUrl = import.meta.env.VITE_AI_PAGE_URL || 'https://ai-automation-landing-page-sigma.vercel.app/';
  const developmentPageUrl = import.meta.env.VITE_DEVELOPMENT_PAGE_URL || 'http://localhost:5175';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (realmRef.current && !realmRef.current.contains(event.target)) {
        setRealmOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'dark:bg-dark-bg/80 bg-white/80 backdrop-blur-3xl py-4 shadow-xl border-b border-black/5 dark:border-white/5' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-5 sm:px-6 flex items-center justify-between">
        
        {/* Brand Identity */}
        <a href="#" onClick={(e) => handleScrollTo(e, '#')} className="flex items-center gap-3 group relative h-11 sm:h-12">
          <img src={logo} alt="DigiCareHouse" className="h-full w-auto object-contain transition-all duration-700 group-hover:scale-105" />
        </a>

        {/* Agency Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="group relative text-[10px] font-black uppercase tracking-[0.2em] dark:text-gray-400 text-slate-600 dark:hover:text-primary hover:text-primary transition-all duration-500 overflow-hidden"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-500">{link.name}</span>
              <span className="absolute top-full left-0 block text-primary transition-transform duration-500 group-hover:-translate-y-full">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Action Center */}
        <div className="flex items-center gap-4">
           <ThemeToggle />
           <div className="hidden lg:block border-l border-black/10 dark:border-white/10 h-6 mx-2" />
           <div ref={realmRef} className="relative hidden lg:block">
             <motion.button
               whileHover={{ y: -2 }}
               whileTap={{ scale: 0.98 }}
               onClick={() => setRealmOpen((prev) => !prev)}
               className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-primary/15 bg-white/85 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-800 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-primary/35 hover:shadow-[0_0_30px_rgba(124,58,237,0.18)] dark:bg-white/[0.04] dark:text-white"
             >
               <span className="absolute inset-0 bg-[linear-gradient(115deg,rgba(124,58,237,0.12),rgba(236,72,153,0.14),rgba(45,212,191,0.12))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
               <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(124,58,237,0.22)]">
                 <Sparkles className="h-4 w-4" />
               </span>
               <span className="relative flex flex-col items-start leading-none">
                 <span className="text-[9px] font-black tracking-[0.28em] text-primary/80">Switch To</span>
                 <span className="mt-1 text-[10px] font-black tracking-[0.22em] text-slate-800 dark:text-white">Creative Realms</span>
               </span>
               <ArrowUpRight className={`relative h-4 w-4 text-primary transition-transform duration-500 ${realmOpen ? 'rotate-45' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
             </motion.button>

             <AnimatePresence>
               {realmOpen && (
                 <motion.div
                   initial={{ opacity: 0, y: 14, scale: 0.96 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: 12, scale: 0.97 }}
                   transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                   className="absolute right-0 top-[calc(100%+16px)] w-[320px] rounded-[2rem] border border-primary/15 bg-white/95 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:bg-[#07101d]/95"
                 >
                   <div className="mb-3 flex items-center gap-2 px-2">
                     <div className="h-px flex-1 bg-gradient-to-r from-primary/0 via-primary/35 to-primary/0" />
                     <span className="text-[9px] font-black uppercase tracking-[0.35em] text-primary">Linked Worlds</span>
                     <div className="h-px flex-1 bg-gradient-to-r from-primary/0 via-primary/35 to-primary/0" />
                   </div>

                   <div className="grid gap-3">
                     <a
                       href={aiPageUrl}
                       className="group flex items-center justify-between rounded-[1.5rem] border border-black/5 bg-slate-50/90 px-4 py-4 transition-all duration-500 hover:border-primary/25 hover:bg-primary/5 dark:border-white/8 dark:bg-white/[0.03]"
                     >
                       <span className="flex items-center gap-3">
                         <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[0_0_22px_rgba(124,58,237,0.12)]">
                           <Bot className="h-5 w-5" />
                         </span>
                         <span className="flex flex-col">
                           <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white">The Intelligent Orbit</span>
                           <span className="text-[11px] font-medium tracking-[0.08em] text-slate-500 dark:text-gray-400">AI systems, agents, and automation</span>
                         </span>
                       </span>
                       <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                     </a>

                     <a
                       href={developmentPageUrl}
                       className="group flex items-center justify-between rounded-[1.5rem] border border-black/5 bg-slate-50/90 px-4 py-4 transition-all duration-500 hover:border-primary/25 hover:bg-primary/5 dark:border-white/8 dark:bg-white/[0.03]"
                     >
                       <span className="flex items-center gap-3">
                         <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary shadow-[0_0_22px_rgba(236,72,153,0.12)]">
                           <Code2 className="h-5 w-5" />
                         </span>
                         <span className="flex flex-col">
                           <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white">The Tech Syndicate</span>
                           <span className="text-[11px] font-medium tracking-[0.08em] text-slate-500 dark:text-gray-400">Products, engineering, and delivery</span>
                         </span>
                       </span>
                       <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                     </a>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>
           <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hidden sm:block">
             <Button variant="primary" className="text-[10px] font-black tracking-widest uppercase px-8 py-3 rounded-full hover:scale-110 shadow-lg shadow-primary/20 group">
               Connect Us <ArrowUpRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
             </Button>
           </a>
           
           {/* Mobile Menu Trigger */}
           <button
             className="lg:hidden flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white/80 text-slate-700 shadow-lg backdrop-blur-2xl transition-all hover:border-primary/20 hover:text-primary active:scale-90 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
           >
             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>

      {/* Cinematic Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 left-0 z-[100] h-screen w-full bg-white p-4 dark:bg-dark-bg lg:hidden"
          >
            <div className="mx-auto flex h-full w-full max-w-sm flex-col rounded-[2rem] border border-black/5 bg-white px-6 pb-8 pt-20 shadow-[0_30px_80px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-[#07101d]">
            <div className="absolute top-7 right-7">
               <button onClick={() => setMobileMenuOpen(false)} className="flex h-14 w-14 items-center justify-center rounded-full border border-black/5 bg-slate-100/90 text-slate-700 shadow-lg transition-all hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-white"><X size={30} /></button>
            </div>

            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">Navigate</span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
            </div>

            <div className="flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="group flex items-center justify-between rounded-[1.4rem] border border-black/5 bg-slate-50/90 px-5 py-4 text-[2.15rem] font-black font-heading tracking-tighter uppercase text-slate-950 transition-all hover:border-primary/20 hover:bg-primary/5 hover:text-primary dark:border-white/8 dark:bg-white/[0.03] dark:text-white dark:hover:text-primary"
                  onClick={(e) => { handleScrollTo(e, link.href); setMobileMenuOpen(false); }}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-6 w-6 translate-x-0 opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>

            <a href="#contact" onClick={(e) => { handleScrollTo(e, '#contact'); setMobileMenuOpen(false); }} className="mt-6 block sm:hidden">
              <Button variant="primary" className="w-full justify-center rounded-full px-8 py-4 text-[10px] font-black tracking-[0.24em] uppercase">
                Connect Us <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <div className="mt-4 grid gap-3 lg:hidden">
              <a href={aiPageUrl} className="group flex items-center justify-between rounded-[1.35rem] border border-black/5 bg-slate-50/90 px-4 py-4 text-slate-900 transition-all duration-500 hover:border-primary/20 hover:text-primary dark:border-white/8 dark:bg-white/[0.03] dark:text-white">
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Bot className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.18em]">The Intelligent Orbit</span>
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a href={developmentPageUrl} className="group flex items-center justify-between rounded-[1.35rem] border border-black/5 bg-slate-50/90 px-4 py-4 text-slate-900 transition-all duration-500 hover:border-primary/20 hover:text-primary dark:border-white/8 dark:bg-white/[0.03] dark:text-white">
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <Code2 className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.18em]">The Tech Syndicate</span>
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            <div className="mt-auto flex flex-col gap-4 border-t border-black/5 pt-7 dark:border-white/5">
               <a href="tel:+18483843773" className="text-2xl font-black tracking-tight text-primary">+1 (848) 384 3773</a>
               <p className="max-w-[20rem] text-sm font-light leading-relaxed text-slate-500 dark:text-gray-500">Available for artistic direction globally.</p>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
