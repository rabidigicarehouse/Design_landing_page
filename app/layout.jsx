import './globals.css';

export const metadata = {
  title: 'Custom Graphic Design Services | Creative Designs',
  description:
    'Get custom graphic design services for logos, branding, and social media. Creative, high-quality designs to grow your brand.',
  keywords: [
    'Custom Graphic Design Services',
    'graphic design services',
    'custom logo design',
    'branding services',
    'social media design',
    'creative designs',
    'high-quality graphic design',
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'DigiCareHouse' }],
  openGraph: {
    type: 'website',
    siteName: 'The Design Hands',
    title: 'Custom Graphic Design Services | Creative Designs',
    description:
      'Get custom graphic design services for logos, branding, and social media. Creative, high-quality designs to grow your brand.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200',
      },
    ],
    url: 'https://design-landing-page-six.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Graphic Design Services | Creative Designs',
    description:
      'Get custom graphic design services for logos, branding, and social media. Creative, high-quality designs to grow your brand.',
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
