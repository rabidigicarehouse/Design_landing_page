import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../components/Button';
import { handleScrollTo } from '../utils/scrollTo';
import heroVideo from '../assets/Animated_gif/hero.mp4';

const sanitizePhone = (value) => {
  const cleaned = value.replace(/[^\d+]/g, '');
  if (!cleaned) return '';
  if (cleaned.startsWith('+')) {
    return `+${cleaned.slice(1).replace(/\+/g, '')}`;
  }
  return cleaned.replace(/\+/g, '');
};

const servicesOptions = [
  'UI/UX Design',
  'Brand Identity',
  'Web Experiences',
  'Design Strategy',
  'Other',
];

const budgetOptions = [
  '<$5000',
  '$5k - $15k',
  '$15k - $50k',
  '$50k+',
  'Other',
];

const Hero = () => {
  const recaptchaRef = useRef(null);
  const heroVideoRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isCustomBudget, setIsCustomBudget] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const syncPlayback = () => {
      video.defaultPlaybackRate = 2;
      video.playbackRate = 2;
      void video.play().catch(() => {});
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'user_phone' ? sanitizePhone(value) : value,
    });
  };

  const handleSelectChange = (e, field) => {
    const value = e.target.value;
    if (value === 'Other') {
      if (field === 'budget') setIsCustomBudget(true);
      setFormData({ ...formData, [field]: '' });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current?.getValue();

    if (!token) {
      alert('Please verify that you are human!');
      return;
    }

    setStatus('SENDING');

    try {
      const payload = {
        ...formData,
        landing_page: 'design',
        recaptcha_token: token,
      };

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ user_name: '', user_email: '', user_phone: '', service: '', budget: '', message: '' });
        setIsCustomBudget(false);
        recaptchaRef.current?.reset();
        setCaptchaValue(null);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setStatus('ERROR');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const inputClasses = 'hero-locked-field hero-dark-input w-full appearance-none rounded-xl border border-white/12 px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50';
  const heroFieldStyle = { backgroundColor: '#161022', color: '#ffffff', colorScheme: 'dark' };

  return (
    <section className="section !pt-[124px] sm:!pt-[145px] lg:!pt-[180px] pb-[90px] sm:pb-[120px] md:pb-[170px] flex min-h-screen items-center overflow-hidden" id="hero">
      <div className="cursor-video absolute inset-0 -z-20 overflow-hidden">
        <video
          ref={heroVideoRef}
          className="h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,16,0.58)_0%,rgba(7,4,16,0.42)_28%,rgba(7,4,16,0.66)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.14),transparent_32%),radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_42%)]" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px] opacity-25" />
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="hero-shape shape-triangle top-[10%] right-[15%] opacity-80"></div>
        <div className="hero-shape shape-circle top-[65%] left-[8%] opacity-75"></div>
        <div className="hero-shape shape-square top-[25%] right-[35%] opacity-70"></div>
        <div className="hero-shape shape-cross top-[45%] left-[25%] opacity-70"></div>
      </div>

      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-10 px-5 sm:gap-12 sm:px-6 lg:grid-cols-12 lg:gap-10 xl:gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', damping: 20 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/[0.04] px-3.5 py-2 backdrop-blur-xl sm:mb-8 sm:px-4"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="font-heading text-sm font-medium tracking-widest text-white uppercase">Open for Design Direction</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-full text-[2.95rem] font-black tracking-tight uppercase leading-[0.92] sm:mb-8 sm:text-6xl sm:leading-[0.9] md:text-8xl lg:text-[6.8rem] xl:text-8xl"
          >
            <span className="block text-white">Crafting</span>
            <span className="block text-gradient break-words">Artistic Brand</span>
            <span className="mt-2 inline-block max-w-full rounded-2xl bg-primary px-3.5 py-2 text-white shadow-2xl shadow-primary/20 break-words sm:px-6">
              Identity.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-8 max-w-xl lg:max-w-[34rem] xl:max-w-xl text-base font-light leading-relaxed tracking-tight text-white sm:mb-10 sm:text-lg md:text-xl"
          >
            We&apos;re a high-end design collective obsessed with sculpting premium visual journeys, stunning digital art, and brand systems that wowed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <a href="#work" onClick={(e) => handleScrollTo(e, '#work')} className="block w-full sm:w-auto">
              <Button variant="primary" className="w-full rounded-full px-10 py-5 text-sm font-black tracking-widest uppercase sm:w-auto">
                Explore Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="block w-full sm:w-auto">
              <Button variant="outline" className="hero-locked-outline w-full rounded-full px-10 py-5 text-sm font-black tracking-widest uppercase sm:w-auto">
                Consultation
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex w-full max-w-xl flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10"
          >
            <div>
              <div className="font-heading text-3xl font-black text-white sm:text-4xl">120+</div>
              <div className="text-[10px] font-black tracking-widest text-white/55 uppercase">Brands Defined</div>
            </div>
            <div>
              <div className="font-heading text-3xl font-black text-white sm:text-4xl">99%</div>
              <div className="text-[10px] font-black tracking-widest text-white/55 uppercase">Client Recall</div>
            </div>
            <div>
              <div className="font-heading text-3xl font-black text-white sm:text-4xl">6+</div>
              <div className="text-[10px] font-black tracking-widest text-white/55 uppercase">Design Awards</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="relative w-full lg:col-span-5"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 opacity-20 blur-[100px] dark:opacity-40" />

          <div className="relative overflow-visible rounded-[2rem] border border-primary/18 bg-[#140d24]/88 p-5 shadow-[0_50px_100px_rgba(0,0,0,0.42)] backdrop-blur-3xl sm:rounded-[2.5rem] sm:p-7 md:rounded-[3.5rem] md:p-12">
            {status === 'SUCCESS' ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[1.75rem] border border-emerald-500/20 bg-emerald-500/10 p-8 text-center md:min-h-[470px]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="text-white" size={32} />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">Request Received!</h3>
                <p className="font-light text-slate-600 dark:text-gray-400">
                  We&apos;ll get back to you regarding your design inquiry shortly.
                </p>
                <button onClick={() => setStatus('')} className="mt-8 rounded-full bg-transparent px-6 py-2 font-medium text-primary transition-all hover:bg-primary/10">
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 sm:mb-8">
                  <div className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[10px] font-black tracking-widest text-primary uppercase sm:mb-4 sm:px-4">Selective Intake</div>
                  <h2 className="font-heading text-2xl font-black tracking-tighter text-white uppercase leading-none sm:text-3xl">Elevate Your Presence</h2>
                </div>

                <form onSubmit={handleHeroSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <input required type="text" name="user_name" placeholder="Full Name" value={formData.user_name} onChange={handleChange} className={inputClasses} style={heroFieldStyle} disabled={status === 'SENDING'} />
                    <input required type="email" name="user_email" placeholder="Email Address" value={formData.user_email} onChange={handleChange} className={inputClasses} style={heroFieldStyle} disabled={status === 'SENDING'} />
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <input required type="tel" inputMode="tel" name="user_phone" placeholder="Phone Number" value={formData.user_phone} onChange={handleChange} className={inputClasses} style={heroFieldStyle} disabled={status === 'SENDING'} />
                    <div className="relative group/field">
                      {isCustomBudget ? (
                        <input required type="text" name="budget" placeholder="Type Budget..." value={formData.budget} onChange={handleChange} onBlur={(e) => { if (e.target.value.trim() === '') setIsCustomBudget(false); }} className={inputClasses} style={heroFieldStyle} autoFocus />
                      ) : (
                        <select required name="budget" value={formData.budget} onChange={(e) => handleSelectChange(e, 'budget')} style={heroFieldStyle} className={`${inputClasses} cursor-pointer`}>
                          <option value="" disabled>Design Budget</option>
                          {budgetOptions.map((opt) => <option key={opt} value={opt} className="bg-[#140d24] text-white">{opt}</option>)}
                        </select>
                      )}
                    </div>
                  </div>

                  <textarea required name="message" rows="3" placeholder="Tell us your visionary goals..." value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`} style={heroFieldStyle} disabled={status === 'SENDING'}></textarea>

                  <div className="w-full rounded-2xl border border-white/10 bg-[#0c0a17]/85 px-2.5 py-3 sm:px-4 sm:py-4">
                    <div className="recaptcha-shell">
                      <div className="recaptcha-frame">
                        <ReCAPTCHA
                          key="hero-captcha-dark"
                          ref={recaptchaRef}
                          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                          theme="dark"
                          onChange={(value) => setCaptchaValue(value)}
                          onExpired={() => {
                            setCaptchaValue(null);
                            recaptchaRef.current?.reset();
                          }}
                          onErrored={() => {
                            setCaptchaValue(null);
                            recaptchaRef.current?.reset();
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <Button variant="primary" type="submit" className={`w-full justify-center rounded-full py-5 text-xs font-black tracking-widest uppercase shadow-2xl shadow-primary/20 ${(status === 'SENDING' || !captchaValue) ? 'cursor-not-allowed opacity-70' : ''}`} disabled={status === 'SENDING' || !captchaValue}>
                    {status === '' && <><Send className="mr-3 h-4 w-4" /> Start Inquiry</>}
                    {status === 'SENDING' && <><Loader2 className="mr-3 h-4 w-4 animate-spin" /> Verifying...</>}
                    {status === 'ERROR' && <><AlertCircle className="mr-3 h-4 w-4" /> Failed</>}
                  </Button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
