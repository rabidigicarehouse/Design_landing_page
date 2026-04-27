import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import ServiceForm from '../components/ServiceForm';
import { handleScrollTo } from '../utils/scrollTo';

const stats = [
  { label: 'Brands Defined', value: '120+' },
  { label: 'Client Recall', value: '99%' },
  { label: 'Design Awards', value: '6+' },
];

const Hero = () => {
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const syncPlayback = () => {
      video.defaultPlaybackRate = 2;
      video.playbackRate = 2;
      void video.play().catch(() => { });
    };

    const resumePlayback = () => {
      if (document.visibilityState === 'visible') {
        syncPlayback();
      }
    };

    video.addEventListener('loadedmetadata', syncPlayback);
    video.addEventListener('canplay', syncPlayback);
    video.addEventListener('playing', syncPlayback);
    video.addEventListener('waiting', syncPlayback);
    video.addEventListener('stalled', syncPlayback);
    document.addEventListener('visibilitychange', resumePlayback);

    return () => {
      video.removeEventListener('loadedmetadata', syncPlayback);
      video.removeEventListener('canplay', syncPlayback);
      video.removeEventListener('playing', syncPlayback);
      video.removeEventListener('waiting', syncPlayback);
      video.removeEventListener('stalled', syncPlayback);
      document.removeEventListener('visibilitychange', resumePlayback);
    };
  }, []);

  return (
    <section id="hero" className="section relative flex min-h-screen items-center overflow-hidden pb-[90px] pt-[216px] sm:pb-[120px] sm:pt-[145px] md:pb-[150px] lg:pt-[98px] xl:pt-[106px] 2xl:pt-[180px] lg:pb-[52px] xl:pb-[62px] 2xl:pb-[170px]">
      <div className="cursor-video absolute inset-0 -z-20 overflow-hidden">
        <video
          ref={heroVideoRef}
          className="h-full w-full object-cover"
          src="/assets/Animated_gif/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,16,0.45)_0%,rgba(7,4,16,0.25)_28%,rgba(7,4,16,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.14),transparent_32%),radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_42%)]" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px] opacity-25" />
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="hero-shape shape-triangle top-[10%] right-[15%] opacity-80" />
        <div className="hero-shape shape-circle top-[65%] left-[8%] opacity-75" />
        <div className="hero-shape shape-square top-[25%] right-[35%] opacity-70" />
        <div className="hero-shape shape-cross top-[45%] left-[25%] opacity-70" />
      </div>

      <div className="container laptop-scale-hero mx-auto grid w-full grid-cols-1 items-center gap-10 px-5 sm:gap-12 sm:px-6 lg:grid-cols-12 lg:gap-0 lg:pl-10 lg:pr-6 xl:gap-1 xl:pl-12 xl:pr-7 2xl:gap-12 2xl:px-6 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left lg:col-span-6 lg:ml-2 lg:pr-3 xl:ml-3 xl:pr-5 2xl:col-span-7"
        >
          <div className="pt-12 sm:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-[#140d24]/88 px-5 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:mb-8"
            >
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-white/90">Open For Design Direction</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="mb-5 max-w-full text-[2.95rem] font-black uppercase leading-[0.92] tracking-tight text-white sm:mb-8 sm:text-6xl sm:leading-[0.9] md:text-8xl lg:text-[3.15rem] xl:text-[3.55rem] 2xl:text-8xl"
            >
              <span className="block">Crafting</span>
              <span className="block text-gradient break-words">Artistic Brand</span>
              <span className="mt-2 inline-block max-w-full rounded-2xl bg-primary px-3.5 py-2 text-white shadow-2xl shadow-primary/20 break-words sm:px-6">
                Identity.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.16 }}
              className="mb-5 max-w-xl text-base font-light leading-relaxed tracking-tight text-white sm:mb-10 sm:text-lg lg:max-w-[22rem] lg:text-[0.86rem] xl:mb-7 xl:max-w-[24rem] xl:text-[0.92rem] 2xl:max-w-xl 2xl:text-xl"
            >
              The Design Hands sculpt premium visual journeys, stunning digital art, and brand systems that leave a lasting impression.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.24 }}
              className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
            >
              <a href="#work" onClick={(e) => handleScrollTo(e, '#work')} className="block w-full sm:w-auto">
                <Button variant="primary" className="group w-full rounded-full px-10 py-5 text-sm font-black uppercase tracking-widest shadow-[0_0_24px_rgba(255,122,24,0.24)] hover:shadow-[0_0_38px_rgba(255,61,129,0.34)] sm:w-auto">
                  Explore Work <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="block w-full sm:w-auto">
                <Button variant="outline" className="w-full rounded-full border-white/20 bg-white/[0.02] px-10 py-5 text-sm font-black tracking-widest text-white uppercase hover:border-primary hover:text-primary sm:w-auto">
                  Consultation
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-4 grid w-full max-w-xl grid-cols-3 gap-x-4 gap-y-4 border-t border-white/10 pt-6 sm:mt-16 sm:gap-x-8 sm:pt-10 lg:mt-1 lg:gap-x-3 lg:pt-3 xl:mt-3 xl:gap-x-4 xl:pt-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <div className="font-heading text-[2rem] font-black leading-none text-white sm:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/50 sm:text-[10px] sm:tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="relative w-full mx-auto lg:mx-0 lg:col-span-6 lg:max-w-[39rem] lg:justify-self-end xl:max-w-[41rem] xl:justify-self-end 2xl:col-span-5 2xl:max-w-[32rem] 2xl:justify-self-end">
          <div className="absolute -inset-10 -z-10 rounded-full bg-primary/20 blur-[100px] opacity-20" />
          <ServiceForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
