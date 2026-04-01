import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Fingerprint, Sparkles } from 'lucide-react';
import ServiceForm from './ServiceForm';

const ServiceModal = ({ isOpen, onClose, service }) => {
  useEffect(() => {
    const scrollY = window.scrollY;

    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.paddingRight = '8px';
      window.lenis?.stop?.();
    } else {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.paddingRight = '0px';
      window.lenis?.start?.();
    }

    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.paddingRight = '0px';
      window.scrollTo(0, scrollY);
      window.lenis?.start?.();
    };
  }, [isOpen]);

  if (!service) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          key="service-modal-overlay"
          data-lenis-prevent="true"
          data-lenis-prevent-touch="true"
          className="fixed inset-0 z-[10000] flex items-start justify-center overflow-y-auto overscroll-contain p-2.5 sm:items-center sm:p-5 md:p-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[-1] cursor-pointer bg-slate-950/98 backdrop-blur-3xl"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            data-lenis-prevent="true"
            data-lenis-prevent-touch="true"
            className="relative z-[10001] mt-2 flex w-full max-w-[1180px] flex-col overflow-visible rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_0_100px_rgba(0,0,0,0.5)] dark:border-white/10 dark:bg-[#0c0c1d] sm:mt-0 sm:p-5 md:rounded-[2.5rem] md:p-10 lg:rounded-[4rem] lg:p-12"
            style={{ minHeight: 'min-content', isolation: 'isolate', touchAction: 'pan-y' }}
          >
            <div className="mb-6 flex shrink-0 flex-col items-start gap-4 pr-12 sm:pr-14 md:mb-8 md:flex-row md:gap-5 md:pr-20">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-2xl md:h-16 md:w-16">
                {React.cloneElement(service.icon, { size: 32 })}
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Fingerprint size={12} className="text-primary" />
                  <span className="text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase dark:text-gray-500">Strategic Design Protocol</span>
                </div>
                <h2 className="mb-1 font-heading text-3xl font-black tracking-tighter text-slate-950 uppercase italic leading-none dark:text-white md:text-5xl lg:text-6xl">
                  {service.title}
                </h2>
                <p className="max-w-2xl text-sm font-light leading-relaxed tracking-tight text-slate-500 dark:text-gray-400 md:text-base">Articulating your brand vision through high-fidelity visual engineering.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 items-start gap-5 overflow-visible md:gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
              <div className="flex min-h-0 flex-col py-1">
                <div className="space-y-5 md:space-y-6">
                  <div className="group">
                    <h4 className="mb-3 inline-block border-b border-primary/20 pb-1 text-[9px] font-black tracking-widest text-primary uppercase">Vision & Strategy</h4>
                    <p className="max-w-[32ch] text-[1.02rem] font-light leading-[1.45] tracking-[-0.015em] text-slate-700 dark:text-gray-300 sm:text-[1.1rem] md:text-[1.48rem]">
                      {service.details || service.desc}
                    </p>
                  </div>

                  <div className="relative flex min-h-[146px] flex-col justify-center overflow-hidden rounded-[1.6rem] border border-primary/10 bg-primary/5 p-5 sm:min-h-[156px] sm:p-6 md:min-h-[182px] md:rounded-[2rem] md:p-8">
                    <motion.div
                      animate={{ rotate: [0, 10, -12, 0], scale: [1, 1.08, 0.98, 1] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-5 right-5"
                    >
                      <Sparkles className="h-20 w-20 text-primary/20 md:h-24 md:w-24" />
                    </motion.div>
                    <h4 className="mb-2 text-[8px] font-black tracking-widest text-primary uppercase">The Artistic Edge</h4>
                    <p className="max-w-[34ch] text-[0.98rem] font-light italic leading-[1.6] tracking-tight text-slate-600 dark:text-gray-400 md:text-[1.14rem]">
                      {service.applicability || 'Precision-crafted tactical solutions for the elite corporate sphere.'}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5">
                  {service.features?.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-center gap-3.5">
                      <div className="h-9 w-9 shrink-0 rounded-xl border border-primary/10 bg-primary/10 text-primary flex items-center justify-center">
                        <Check size={14} />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-slate-700 uppercase dark:text-gray-300 md:text-[11px]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex min-h-0 flex-col overflow-visible rounded-[1.75rem] border border-black/5 bg-slate-50/60 p-4 dark:border-white/5 dark:bg-dark-bg/40 sm:p-5 md:rounded-[2rem] md:p-6 lg:rounded-[3rem]">
                <div className="mb-4 shrink-0">
                  <h4 className="mb-3 text-center font-heading text-[8px] font-black tracking-[0.2em] text-slate-400 uppercase dark:text-gray-500">Protocol Toolkit</h4>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-2.5">
                    {service.tech?.slice(0, 4).map((t, i) => (
                      <div
                        key={i}
                        className="group flex min-h-[84px] flex-col items-center justify-center rounded-2xl border border-black/5 bg-white px-2 py-3.5 shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.18)] dark:border-white/10 dark:bg-slate-900 md:min-h-[88px] md:py-4"
                      >
                        <span className="scale-[1.18] text-slate-500 transition-transform duration-500 group-hover:scale-[1.24] group-hover:text-primary dark:text-slate-300">
                          {t.icon}
                        </span>
                        <span className="mt-2 text-[7px] font-black tracking-widest text-slate-500 uppercase transition-colors duration-500 group-hover:text-primary dark:text-slate-400">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="min-h-0 overflow-visible">
                  <ServiceForm initialService={service.title} isMini={true} />
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="group absolute top-4 right-4 z-[10002] flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 shadow-2xl transition-all duration-500 hover:bg-primary hover:text-white dark:bg-white/5 md:top-8 md:right-8 md:h-12 md:w-12"
            >
              <X size={20} className="transition-transform duration-500 group-hover:rotate-180" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ServiceModal;
