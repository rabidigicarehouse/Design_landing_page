import React, { memo, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { companyPhoneHref } from '../data/contact';
import { handlePrimaryContactAction } from '../utils/contactActions';

import videoBrand from '../assets/Animated_gif/1.mp4';
import videoTransform from '../assets/Animated_gif/2.mp4';
import videoWeb from '../assets/Animated_gif/3.mp4';
import videoUI from '../assets/Animated_gif/4.mp4';
import { assetSrc } from '../utils/assetSrc';

const ensureVideoPlayback = (video) => {
  if (!video) return;
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.defaultPlaybackRate = 1.5;
  video.playbackRate = 1.5;

  const playPromise = video.play();
  if (playPromise?.catch) {
    playPromise.catch(() => {});
  }
};

const projects = [
  {
    title: 'Build A Brand',
    category: 'Full Identity',
    media: assetSrc(videoBrand),
    objectPosition: 'center center',
    accent: 'from-rose-200/50 via-fuchsia-200/25 to-transparent dark:from-rose-400/10 dark:via-fuchsia-400/8 dark:to-transparent',
  },
  {
    title: 'Build Experiences',
    category: 'UI/UX Mobile',
    media: assetSrc(videoUI),
    objectPosition: 'center center',
    accent: 'from-violet-200/45 via-sky-200/25 to-transparent dark:from-violet-400/10 dark:via-sky-400/8 dark:to-transparent',
  },
  {
    title: 'Make Your Brand Presentable',
    category: 'E-Commerce',
    media: assetSrc(videoTransform),
    objectPosition: 'center center',
    accent: 'from-indigo-200/45 via-blue-200/25 to-transparent dark:from-indigo-400/10 dark:via-blue-400/8 dark:to-transparent',
  },
  {
    title: 'Aura Creative Agency',
    category: 'Web Experience',
    media: assetSrc(videoWeb),
    objectPosition: 'center top',
    accent: 'from-cyan-200/45 via-slate-200/20 to-transparent dark:from-cyan-400/10 dark:via-slate-400/8 dark:to-transparent',
  },
];

const PortfolioCard = memo(function PortfolioCard({ project, index }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(index < 2);
  const [isActive, setIsActive] = useState(index < 2);

  useEffect(() => {
    if (shouldLoad || !cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '220px 0px' }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsActive(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.35 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoad || !video) return;

    const applyPlayback = () => ensureVideoPlayback(video);
    const restartPlayback = () => {
      video.currentTime = 0;
      ensureVideoPlayback(video);
    };

    const syncVisibilityPlayback = () => {
      if (document.visibilityState === 'visible' && isActive) {
        applyPlayback();
      } else {
        video.pause();
      }
    };

    if (video.readyState >= 2 && isActive) {
      applyPlayback();
    } else {
      video.addEventListener('loadedmetadata', syncVisibilityPlayback);
    }

    video.addEventListener('canplay', syncVisibilityPlayback);
    video.addEventListener('playing', syncVisibilityPlayback);
    video.addEventListener('waiting', syncVisibilityPlayback);
    video.addEventListener('stalled', syncVisibilityPlayback);
    video.addEventListener('ended', restartPlayback);
    document.addEventListener('visibilitychange', syncVisibilityPlayback);

    syncVisibilityPlayback();

    return () => {
      video.removeEventListener('loadedmetadata', syncVisibilityPlayback);
      video.removeEventListener('canplay', syncVisibilityPlayback);
      video.removeEventListener('playing', syncVisibilityPlayback);
      video.removeEventListener('waiting', syncVisibilityPlayback);
      video.removeEventListener('stalled', syncVisibilityPlayback);
      video.removeEventListener('ended', restartPlayback);
      document.removeEventListener('visibilitychange', syncVisibilityPlayback);
      video.pause();
    };
  }, [shouldLoad, isActive]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="cursor-video group relative aspect-[1.28/1] overflow-hidden rounded-[3.2rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.05)] dark:border-white/8 dark:bg-[#09090f]"
      style={{ contain: 'layout paint', transform: 'translateZ(0)' }}
    >
      <div className={`absolute inset-0 opacity-70 dark:opacity-100 bg-gradient-to-br ${project.accent}`} />

      {shouldLoad ? (
        <video
          ref={videoRef}
          src={project.media}
          className="absolute inset-0 h-full w-full scale-[1.005] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{
            objectPosition: project.objectPosition,
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
          autoPlay
          muted
          loop
          playsInline
          preload={index < 2 ? 'auto' : 'metadata'}
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback"
          aria-hidden="true"
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(226,232,240,0.68),rgba(241,245,249,0.92))] dark:bg-[linear-gradient(135deg,rgba(9,9,15,0.98),rgba(17,24,39,0.82),rgba(9,9,15,0.98))]" />
      )}

      <div className="absolute inset-0 dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.03)_36%,rgba(0,0,0,0)_58%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-transparent via-transparent to-transparent dark:from-[#09090f] dark:via-[#09090f]/86 dark:to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
        <div className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary shadow-[0_10px_30px_rgba(124,58,237,0.12)] dark:border-primary/30 dark:bg-primary/12 dark:text-white">
          {project.category}
        </div>
        <h3 className="font-heading w-full max-w-full text-[2.3rem] font-black uppercase leading-[0.88] tracking-tighter text-white md:text-[3rem]">
          {project.title}
        </h3>
      </div>
    </motion.article>
  );
});

const Portfolio = () => {
  return (
    <section className="section section-theme-rose overflow-hidden py-24 xl:py-28 2xl:py-32" id="work">
      <div className="container laptop-scale-section mx-auto px-6">
        <div className="mb-12 xl:mb-14 2xl:mb-16 flex flex-col gap-6 xl:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading title="Design That Speaks" subtitle="Selected Work" subtitleClassName="text-[#0A3967] dark:text-secondary" />
          <Button
            variant="outline"
            onClick={(e) => handlePrimaryContactAction(e, companyPhoneHref)}
            className="group self-start rounded-full border-primary/20 bg-primary/5 px-7 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-primary transition-all duration-500 hover:bg-primary/10"
          >
            Connect Us
            <ArrowUpRight className="ml-3 h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:gap-9 2xl:gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
