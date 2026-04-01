import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Sparkles, ArrowRight, Palette, Rocket, Gem, Building2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const pricingData = [
  {
    name: 'Foundation',
    icon: <Palette className="h-9 w-9 text-primary" />,
    tagline: 'Essential brand DNA for bold startups',
    monthly: 3500,
    annual: 2800,
    features: [
      { text: 'Custom Logo Architecture', included: true },
      { text: 'Core Brand Palette', included: true },
      { text: 'Typography Strategy', included: true },
      { text: '3 High-Fidelity UI Templates', included: true },
      { text: '2 Rounds of Artistic Revisions', included: true },
      { text: 'Mobile-First Design System', included: true },
      { text: 'Full Motion Brand Guidelines', included: false },
    ],
  },
  {
    name: 'Evolution',
    icon: <Rocket className="h-9 w-9 text-secondary" />,
    tagline: 'Strategic visual systems for scaled growth',
    monthly: 7500,
    annual: 6000,
    features: [
      { text: 'Everything in Foundation', included: true },
      { text: 'Complete Visual Identity', included: true },
      { text: 'Artistic UI Journey (10 pgs)', included: true },
      { text: 'Interactive Micro-Animations', included: true },
      { text: 'Custom Iconography Library', included: true },
      { text: 'Unlimited Cinematic Revisions', included: true },
    ],
  },
  {
    name: 'Masterpiece',
    icon: <Gem className="h-9 w-9 text-teal" />,
    tagline: 'Total digital transformation for luxury brands',
    monthly: 15000,
    annual: 12000,
    popular: true,
    features: [
      { text: 'Everything in Evolution', included: true },
      { text: 'Immersive WebGL Experiences', included: true },
      { text: 'High-End Motion Storytelling', included: true },
      { text: 'Custom Shader Art direction', included: true },
      { text: '3D Product Visualization', included: true },
      { text: 'Dedicated Design Director', included: true },
    ],
  },
  {
    name: 'Visionary',
    icon: <Building2 className="h-9 w-9 text-slate-500 dark:text-slate-300" />,
    tagline: 'Enterprise-grade design ecosystems',
    monthly: 'Custom',
    annual: 'Custom',
    features: [
      { text: 'Global Design Retainer', included: true },
      { text: 'Campaign Master-Direction', included: true },
      { text: 'Full Creative Suite Dev', included: true },
      { text: 'VR / AR Interface Design', included: true },
      { text: 'State-of-the-Art Prototyping', included: true },
      { text: '90-Day Post-Launch QA', included: true },
    ],
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="section overflow-hidden bg-slate-50 py-32 dark:bg-dark-bg" id="pricing">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-24 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <SectionHeading title="Design Investments" subtitle="Strategic Tiers" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-center gap-4 rounded-full border border-black/5 bg-black/5 p-3 shadow-lg backdrop-blur-3xl dark:border-white/10 dark:bg-white/5"
          >
            <button onClick={() => setIsAnnual(false)} className={`rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-500 ${!isAnnual ? 'bg-primary text-white' : 'opacity-40 hover:opacity-100'}`}>
              Standard
            </button>
            <button onClick={() => setIsAnnual(true)} className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-500 ${isAnnual ? 'bg-primary text-white' : 'opacity-40 hover:opacity-100'}`}>
              Annual <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">-20%</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8, ease: 'easeOut' }}
              className={`relative flex flex-col rounded-[4rem] border p-10 transition-all duration-700 hover:-translate-y-6 ${
                plan.popular
                  ? 'z-10 scale-105 border-primary/40 bg-white shadow-2xl dark:bg-dark-card'
                  : 'border-black/5 bg-white shadow-xl hover:border-primary/20 dark:border-white/5 dark:bg-dark-card/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-primary px-6 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg">
                  <Sparkles className="h-4 w-4" /> Lab Choice
                </div>
              )}

              <div className="mb-12">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-black/5 bg-slate-50 shadow-sm transition-transform duration-700 group-hover:rotate-12 dark:border-white/10 dark:bg-white/5">
                  {plan.icon}
                </div>
                <h3 className="font-heading mb-4 text-3xl font-black uppercase leading-none tracking-tighter text-slate-950 dark:text-white">{plan.name}</h3>
                <p className="text-xs font-light leading-relaxed tracking-tight text-slate-600 dark:text-gray-400">{plan.tagline}</p>
              </div>

              <div className="mb-12 h-20">
                <span className="flex items-baseline gap-2 text-5xl font-black uppercase leading-none tracking-tighter text-slate-950 dark:text-white">
                  {typeof plan.monthly === 'number' && <span className="text-lg font-light tracking-widest text-primary">$</span>}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.5 }}
                    >
                      {isAnnual ? plan.annual : plan.monthly}
                    </motion.span>
                  </AnimatePresence>
                  {typeof plan.monthly === 'number' && <span className="text-xs font-light tracking-[0.2em] opacity-40">/ Project</span>}
                </span>
              </div>

              <ul className="mb-12 flex flex-grow flex-col gap-5">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className={`flex items-start gap-4 text-xs font-medium tracking-tight ${feature.included ? 'text-slate-700 dark:text-slate-300' : 'opacity-20'}`}>
                    {feature.included ? <Check className="h-4 w-4 shrink-0 text-primary" /> : <X className="h-4 w-4 shrink-0" />}
                    <span className={feature.included ? '' : 'line-through'}>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.popular ? 'primary' : 'outline'} className={`group/btn w-full justify-center rounded-full py-5 text-sm font-black uppercase tracking-widest shadow-xl ${plan.popular ? 'bg-primary' : 'border-primary text-primary hover:bg-primary/5'}`}>
                {plan.name === 'Visionary' ? 'Consultation' : 'Reserve Lab'}
                <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
