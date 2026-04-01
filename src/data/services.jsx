import React from 'react';
import {
  Palette, MousePointer2, Globe, Layers, Smartphone,
  Sparkles, PenTool, Layout, Component, Eye, ShoppingBag
} from 'lucide-react';

export const servicesData = [
  {
    icon: <MousePointer2 className="w-8 h-8 text-primary" />,
    title: 'UI/UX Design',
    desc: 'Award-winning interfaces that captivate users and crush conversion goals.',
    details: 'Our approach to UI/UX design merges aesthetics with behavioral psychology. We create frictionless user journeys that transform passive visitors into loyal customers through pixel-perfect precision and empathetic design systems.',
    applicability: 'Best for complex SaaS platforms, high-traffic consumer web apps, and any digital product where user retention is the primary success metric.',
    features: ['User Journey Mapping', 'High-Fidelity Prototyping', 'Design Systems (Figma)', 'Accessibility Audits'],
    tech: [
      { name: 'Figma', icon: <Layers size={20} /> },
      { name: 'Adobe XD', icon: <PenTool size={20} /> },
      { name: 'ProtoPie', icon: <Smartphone size={20} /> },
      { name: 'Framer', icon: <Sparkles size={20} /> }
    ]
  },
  {
    icon: <Palette className="w-8 h-8 text-pink-500" />,
    title: 'Brand Identity',
    desc: 'Memorable brand guidelines, bold typography, and strategic visual systems.',
    details: 'We build brands that tell stories. From custom logo marks and color theory to comprehensive brand books and tone-of-voice guidelines, we ensure your agency leaves a lasting impression in the saturated digital marketplace.',
    applicability: 'Best for startups looking for a competitive edge, established brands undergoing a refresh, and companies requiring a unified visual language.',
    features: ['Logo Typography', 'Color Theory Strategy', 'Brand Guidelines', 'Marketing Collateral'],
    tech: [
      { name: 'Illustrator', icon: <PenTool size={20} /> },
      { name: 'Photoshop', icon: <Eye size={20} /> },
      { name: 'InDesign', icon: <Layout size={20} /> },
      { name: 'After Effects', icon: <Sparkles size={20} /> }
    ]
  },
  {
    icon: <Globe className="w-8 h-8 text-indigo-400" />,
    title: 'Web Experiences',
    desc: 'WebGL heavy, GSAP animated smooth scrolling websites that stand out.',
    details: 'We blend the line between art and technology. Our interactive web experiences utilize advanced shader languages, physics-based animations, and fluid typography to create digital architecture that wows your audience.',
    applicability: 'Best for luxury brand portfolios, creative agencies, and product launches that require a "wow" factor beyond standard layouts.',
    features: ['GSAP & Three.js', 'WebGL Shaders', 'Immersive Storytelling', 'Micro-interactions'],
    tech: [
      { name: 'Three.js', icon: <Globe size={20} /> },
      { name: 'GSAP', icon: <Sparkles size={20} /> },
      { name: 'React', icon: <Layers size={20} /> },
      { name: 'Tailwind CSS', icon: <Layout size={20} /> }
    ]
  },
  {
    icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
    title: 'App Design',
    desc: 'Mobile-first design systems centered around gesture, motion, and tactility.',
    details: 'Designing for the palm of the hand requires a different DNA. We focus strictly on thumb-zone aesthetics, native gesture flows, and satisfying tactile feedback to make your mobile application feel like an extension of the user.',
    applicability: 'Best for iOS and Android applications, fitness trackers, social networks, and real-time mobile tools.',
    features: ['Haptic Feedback Maps', 'Gesture Control Design', 'Mobile Components', 'Navigation Patterns'],
    tech: [
      { name: 'Figma Mobile', icon: <Smartphone size={20} /> },
      { name: 'Zeplin', icon: <Component size={20} /> },
      { name: 'Maze UX', icon: <Eye size={20} /> },
      { name: 'Principle', icon: <Sparkles size={20} /> }
    ]
  },
  {
    icon: <Sparkles className="w-8 h-8 text-orange-400" />,
    title: 'Motion Design',
    desc: 'Dynamic animations that breathe life into static interfaces and brands.',
    details: 'Motion is the heartbeat of modern design. We craft sophisticated motion languages from loading sequences to interactive UI state changes that guide the user and provide a premium, alive feel to every interaction.',
    applicability: 'Best for software marketing videos, complex data visualization, and websites that want to feel high-end and interactive.',
    features: ['Lottie Animations', 'SVG Morphing', 'Keyframe Precision', 'Video Production'],
    tech: [
      { name: 'After Effects', icon: <Sparkles size={20} /> },
      { name: 'Lottie', icon: <Component size={20} /> },
      { name: 'Blender', icon: <Globe size={20} /> },
      { name: 'Premiere', icon: <Eye size={20} /> }
    ]
  },
  {
    icon: <Layout className="w-8 h-8 text-yellow-400" />,
    title: 'E-Commerce Design',
    desc: 'Conversion-optimized storefronts that turn browsing into shopping.',
    details: 'E-commerce is a science of trust. We design checkout flows, product galleries, and cart experiences that remove every ounce of friction, focusing on high-resolution visuals and psychological triggers that drive sales.',
    applicability: 'Best for Shopify Plus retailers, high-end fashion brands, and direct-to-consumer (D2C) marketplaces.',
    features: ['Checkout UX Audit', 'Product Storytelling', 'Cart Interaction', 'Mobile Commerce'],
    tech: [
      { name: 'Shopify Plus', icon: <ShoppingBag size={20} /> },
      { name: 'Klaviyo Design', icon: <PenTool size={20} /> },
      { name: 'Analytics Design', icon: <Layers size={20} /> },
      { name: 'Storefront UX', icon: <Layout size={20} /> }
    ]
  },
  {
    icon: <Layout className="w-8 h-8 text-sky-400" />,
    title: 'Landing Page Design',
    desc: 'High-converting campaign pages crafted to turn attention into qualified demand.',
    details: 'We design landing pages that blend brand storytelling, conversion psychology, and sharp visual hierarchy. Every section is shaped to guide the visitor toward one clear action without friction.',
    applicability: 'Best for product launches, paid ad funnels, lead generation campaigns, and service businesses that need focused high-performance pages.',
    features: ['Hero Conversion Design', 'Offer Positioning', 'Lead Capture UX', 'A/B Ready Layouts'],
    tech: [
      { name: 'Figma', icon: <Layers size={20} /> },
      { name: 'Framer', icon: <Sparkles size={20} /> },
      { name: 'Webflow', icon: <Globe size={20} /> },
      { name: 'Analytics', icon: <Eye size={20} /> }
    ]
  },
  {
    icon: <Component className="w-8 h-8 text-cyan-400" />,
    title: 'Design Systems',
    desc: 'Scalable UI kits and foundations that keep products consistent as they grow.',
    details: 'We build robust design systems with reusable components, typography rules, spacing logic, interaction patterns, and governance guidance so product teams can move faster with consistency.',
    applicability: 'Best for growing SaaS products, multi-team organizations, and redesign projects that need structure before scale.',
    features: ['Component Libraries', 'Token Architecture', 'Usage Guidelines', 'Cross-Team Consistency'],
    tech: [
      { name: 'Figma Tokens', icon: <Layers size={20} /> },
      { name: 'Storybook', icon: <Component size={20} /> },
      { name: 'Docs Flow', icon: <Layout size={20} /> },
      { name: 'Audit Systems', icon: <Eye size={20} /> }
    ]
  },
  {
    icon: <Component className="w-8 h-8 text-blue-400" />,
    title: 'UI Kit Design',
    desc: 'Polished component libraries and interface kits built for fast product execution.',
    details: 'We create versatile UI kits that combine consistency, speed, and visual quality. From buttons and cards to modular dashboards and mobile patterns, every element is crafted to feel cohesive and production-ready.',
    applicability: 'Best for product teams building fast, agencies handing off to developers, and founders needing a reliable design foundation.',
    features: ['Reusable UI Blocks', 'Atomic Components', 'Responsive Patterns', 'Developer-Friendly Handoff'],
    tech: [
      { name: 'Figma Libraries', icon: <Layers size={20} /> },
      { name: 'Variants', icon: <Component size={20} /> },
      { name: 'Auto Layout', icon: <Layout size={20} /> },
      { name: 'Specs', icon: <Eye size={20} /> }
    ]
  },
  {
    icon: <PenTool className="w-8 h-8 text-rose-400" />,
    title: 'Pitch Deck Design',
    desc: 'Investor and sales decks that turn complex ideas into persuasive visual narratives.',
    details: 'We translate raw information into presentation systems that feel premium, persuasive, and easy to follow. The result is a deck that supports confidence in the room and clarity on the screen.',
    applicability: 'Best for startups raising capital, founders pitching partnerships, and agencies presenting strategy or campaign concepts.',
    features: ['Narrative Flow', 'Data Storytelling', 'Slide Systems', 'Presentation Polish'],
    tech: [
      { name: 'Keynote', icon: <Layout size={20} /> },
      { name: 'PowerPoint', icon: <Component size={20} /> },
      { name: 'Illustrator', icon: <PenTool size={20} /> },
      { name: 'Motion Slides', icon: <Sparkles size={20} /> }
    ]
  },
  {
    icon: <Globe className="w-8 h-8 text-fuchsia-400" />,
    title: 'Web 3.0 Design',
    desc: 'Future-facing digital experiences for blockchain, NFT, and tokenized product ecosystems.',
    details: 'We design immersive Web3 interfaces that balance innovation with clarity. Wallet flows, token dashboards, launch pages, and community-first ecosystems are shaped to feel advanced without confusing users.',
    applicability: 'Best for NFT projects, blockchain startups, metaverse concepts, and crypto products that need trust and visual sophistication.',
    features: ['Wallet UX', 'Token Dashboards', 'Community Landing Pages', 'NFT Showcase Design'],
    tech: [
      { name: 'Web3 UI', icon: <Globe size={20} /> },
      { name: 'Motion Systems', icon: <Sparkles size={20} /> },
      { name: 'Figma', icon: <Layers size={20} /> },
      { name: 'Prototype Flow', icon: <Component size={20} /> }
    ]
  },
  {
    icon: <Smartphone className="w-8 h-8 text-violet-400" />,
    title: 'Vision Pro UX',
    desc: 'Spatial interface concepts designed for immersive next-generation product experiences.',
    details: 'We explore spatial navigation, depth-aware interaction patterns, and immersive content framing to create interface systems suited for emerging mixed-reality platforms.',
    applicability: 'Best for innovation labs, future-product concepts, premium demos, and brands exploring spatial computing experiences.',
    features: ['Spatial Journeys', 'Depth UI Patterns', 'Immersive Prototypes', 'VisionOS Concepts'],
    tech: [
      { name: 'VisionOS', icon: <Smartphone size={20} /> },
      { name: 'Spline', icon: <Globe size={20} /> },
      { name: 'Proto Models', icon: <Component size={20} /> },
      { name: 'Motion UX', icon: <Sparkles size={20} /> }
    ]
  },
  {
    icon: <Smartphone className="w-8 h-8 text-lime-400" />,
    title: 'Watch App UX',
    desc: 'Compact wearable flows optimized for glanceability, speed, and tap efficiency.',
    details: 'We design watch experiences around ultra-clear hierarchy, quick actions, and micro-interactions that feel native on the wrist while still carrying strong brand character.',
    applicability: 'Best for fitness products, health tools, utility apps, and brands building connected mobile-plus-wearable ecosystems.',
    features: ['Glanceable Screens', 'Quick Actions', 'Complication Design', 'Wearable Flows'],
    tech: [
      { name: 'Watch UI', icon: <Smartphone size={20} /> },
      { name: 'Figma', icon: <Layers size={20} /> },
      { name: 'Prototype', icon: <Component size={20} /> },
      { name: 'Motion States', icon: <Sparkles size={20} /> }
    ]
  },
  {
    icon: <Layers className="w-8 h-8 text-amber-400" />,
    title: 'Figma Experts',
    desc: 'High-speed expert Figma support for redesigns, systems, product polish, and team handoff.',
    details: 'When teams need advanced Figma execution, we step in with high-precision file structure, scalable components, prototype logic, and cleanup that makes collaboration smoother across design and development.',
    applicability: 'Best for fast-moving startups, overloaded internal teams, and agencies that need senior-level Figma execution support.',
    features: ['File Cleanup', 'Prototype Logic', 'Component Optimization', 'Team Handoff'],
    tech: [
      { name: 'Figma', icon: <Layers size={20} /> },
      { name: 'Variables', icon: <Component size={20} /> },
      { name: 'Prototyping', icon: <Sparkles size={20} /> },
      { name: 'Dev Mode', icon: <Eye size={20} /> }
    ]
  }
];
