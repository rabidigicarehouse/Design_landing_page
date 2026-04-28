import React from 'react';
import {
  Palette, MousePointer2, Globe, Layers, Smartphone,
  Sparkles, PenTool, Layout, Component, Eye, ShoppingBag
} from 'lucide-react';

export const servicesData = [
  {
    icon: <MousePointer2 className="w-8 h-8 text-primary" />,
    title: 'UI/UX Design',
    desc: 'Creating interfaces and experiences that are simple, consistent, and transparent.',
    details: 'The development of our custom graphic design services has made us the central focus of our UI/UX design, whereby every interface is designed to provide clarity, engagement, and smooth usability.',
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
    title: 'Brand Identity Design',
    desc: 'Developing visual identity systems such as logos, colors, and typographies to ensure brand consistency.',
    details: 'We develop powerful and memorable brand identities that perfectly match your online existence. In the USA, as part of our custom graphic design services.',
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
    title: 'Web Experiences Design',
    desc: 'Creating website interfaces and layouts that enhance usability and interaction.',
    details: 'We create interactive web layouts that are immersive and beyond traditional layouts. We are creative and tech-savvy to produce visually enriched, responsive, and SEO-friendly websites.',
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
    desc: 'Developing both mobile and web applications with usability in mind.',
    details: 'In the USA, we create user-friendly interfaces and performance-based interfaces, which make your application compatible with the current trends in the field of web and application development services.',
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
    desc: 'Incorporating interactivity and visual effects with the use of animations and transitions.',
    details: 'Motion design is the life of interfaces. Motion design is one of the essential components of our web development services in the USA to make digital products dynamic and interactive.',
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
    desc: 'Development of online shops with organized product layouts, navigation, and checkout.',
    details: 'We create converting e-commerce experiences that are visually appealing and user-friendly. Our e-commerce design services aim for easy navigation, safe checkout, and efficient product display.',
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
    desc: 'Designing focused pages that are aimed at a certain action that the user should take.',
    details: 'We create performance and conversion-based landing pages. Our landing pages are focused, fast-loading, and SEO-optimized to attract attention and take action, which is why they are an important component of our web development services in the USA.',
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
    title: 'Systems Design',
    desc: 'Designing systems to be consistent across digital products.',
    details: 'Our systems design methodology is favorable to both long-term growth and efficiency, and thus, you can more easily grow your digital productions through our site development service in the USA.',
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
    icon: <PenTool className="w-8 h-8 text-rose-400" />,
    title: 'Pitch Deck Design',
    desc: 'Creation of presentation slides so that ideas and information are clearly conveyed.',
    details: 'We create pitch decks that are visually attractive and convey your ideas most effectively. Our pitch deck design will elevate your storytelling, regardless of whether it is to investors or clients, and will supplement your overarching digital strategy in our web development work in the USA.',
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
    desc: 'Developing interfaces of blockchain and decentralized applications.',
    details: 'We develop decentralized platform-specific next-generation digital experiences. Our Web 3.0 design services are oriented towards innovation, interactivity, and future-ready solutions to keep your brand ahead in the changing landscape of web development services within the USA.',
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
    icon: <Component className="w-8 h-8 text-blue-400" />,
    title: 'UI Kit Design',
    desc: 'Designing reusable UI components to develop efficient and consistent designs.',
    details: 'Our design services offer reusable building blocks and design items, which accelerate development and ensure consistency. This is the necessary kit for scalable and efficient development of websites in the USA, so that you can be sure that each detail will correspond to your brand.',
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
    icon: <Smartphone className="w-8 h-8 text-violet-400" />,
    title: 'Vision Pro UX',
    desc: 'Designing spatial user experiences for mixed reality environments.',
    details: 'We create interactive user experiences on advanced systems such as Vision Pro. We are concentrating on a spatial design, intuitive interface, and futuristic usability, which are consistent with the state-of-the-art web development services in the USA.',
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
    desc: 'Designing simplified interfaces for wearable devices with limited screen space.',
    details: 'Our watch app UX design services deliver compact, efficient, and user-friendly interfaces tailored for wearable devices. We ensure smooth performance and usability, extending your digital presence through our comprehensive website development services in the USA.',
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
    title: 'Figma Experts Design',
    desc: 'Designing and maintaining design files, prototypes, and systems with the aid of Figma.',
    details: 'Our Figma experts create high-quality, collaborative design systems and prototypes. From wireframes to final UI, we use Figma to streamline workflows and deliver exceptional results as part of our website development services in the USA.',
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
