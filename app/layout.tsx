import type { Metadata } from 'next';
import React from 'react';
import { Box } from '@mui/material';
import { inter, mono } from '../src/lib/fonts';
import { SITE_URL } from '../src/config/site';
import Providers from './providers';
import Header from '../src/Components/Layout/Header';
import Footer from '../src/Components/Layout/Footer';
import ScrollProgress from '../src/Components/Layout/ScrollProgress';
import BackToTop from '../src/Components/Layout/BackToTop';
import { personJsonLd } from '../src/lib/structuredData';
import './globals.css';

const SITE_TITLE = 'Sunny Kumar | Frontend Engineer (React, Next.js)';
const SITE_DESCRIPTION =
  'Sunny Kumar is a frontend engineer (SDE-I) at Codebucket Solutions building role-based SaaS, EdTech and GovTech web apps with React, Next.js, TypeScript and Redux Toolkit.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Sunny Kumar',
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: 'Sunny Kumar' }],
  alternates: { canonical: '/' },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='%2334d399'/><stop offset='1' stop-color='%2360a5fa'/></linearGradient></defs><rect width='100' height='100' rx='24' fill='%2307090d'/><text x='50' y='67' font-family='monospace' font-weight='700' font-size='46' fill='url(%23g)' text-anchor='middle'>SK</text></svg>",
  },
  openGraph: {
    type: 'website',
    siteName: 'Sunny Kumar',
    url: SITE_URL,
    title: 'Sunny Kumar | Frontend Engineer',
    description: 'Frontend engineer (SDE-I) building role-based SaaS, EdTech and GovTech web apps with React, Next.js and TypeScript.',
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
    description: 'Frontend engineer (SDE-I) building role-based SaaS, EdTech and GovTech web apps with React, Next.js and TypeScript.',
    images: ['/og-image.png'],
  },
};

export const viewport = {
  themeColor: '#07090d',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // Escape "<" so the JSON can never close the script tag early
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Providers>
          <ScrollProgress />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" id="main-content" tabIndex={-1} sx={{ flexGrow: 1, pt: '72px', outline: 'none' }}>
              {children}
            </Box>
            <Footer />
          </Box>
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
