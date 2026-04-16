import './globals.css';

export const metadata = {
  title: 'The Design Hands | DigiCareHouse UI/UX & Brand Agency',
  description:
    'The Design Hands by DigiCareHouse is a premium UI/UX, branding, and digital design agency crafting bold web experiences, product design, and identity systems.',
  keywords: [
    'The Design Hands',
    'DigiCareHouse',
    'UI UX agency',
    'brand agency',
    'landing page design',
    'app design',
    'web experiences',
    'motion design',
    'design systems',
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'DigiCareHouse' }],
  openGraph: {
    type: 'website',
    siteName: 'The Design Hands',
    title: 'The Design Hands | DigiCareHouse UI/UX & Brand Agency',
    description:
      'Premium UI/UX, brand identity, landing page, app, and web experience design systems by The Design Hands.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200',
      },
    ],
    url: 'https://design-landing-page-six.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Design Hands | DigiCareHouse UI/UX & Brand Agency',
    description:
      'Premium UI/UX, branding, and interactive digital design by The Design Hands.',
    images: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200',
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" href="/favicon.png?v=2" />
        <link rel="apple-touch-icon" href="/favicon.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-slate-50 overflow-x-hidden font-sans antialiased text-slate-900 selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
