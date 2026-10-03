import type { Metadata } from 'next';
import React from 'react';
import { Box } from '@mui/material';
import { inter, outfit } from '../src/lib/fonts';
import Providers from './providers';
import Header from '../src/Components/Layout/Header';
import Footer from '../src/Components/Layout/Footer';
import './globals.css';

const SITE_URL = 'https://my-portfolio-three-sigma-15.vercel.app';
const SITE_TITLE = 'Sunny.dev | Frontend Engineer';
const SITE_DESCRIPTION =
  'Sunny Kumar – Frontend engineer (SDE-1) building fast, role-based web apps with React, Next.js and TypeScript at Codebucket Solutions.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Sunny.dev',
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: 'Sunny Kumar' }],
  alternates: { canonical: '/' },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='25' fill='%23050505'/><text x='50' y='68' font-family='sans-serif' font-weight='900' font-size='50' fill='%2300f2fe' text-anchor='middle'>SK</text></svg>",
  },
  openGraph: {
    type: 'website',
    siteName: 'Sunny.dev',
    url: SITE_URL,
    title: 'Sunny Kumar | Frontend Engineer',
    description: 'Frontend engineer building fast, role-based web apps with React, Next.js and TypeScript.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sunny Kumar – Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sunnykumar_17',
    title: 'Sunny Kumar | Frontend Engineer',
    description: 'Frontend engineer building fast, role-based web apps with React, Next.js and TypeScript.',
    images: ['/og-image.png'],
  },
};

export const viewport = {
  themeColor: '#050505',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Providers>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1, pt: { xs: 8, md: 10 } }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
