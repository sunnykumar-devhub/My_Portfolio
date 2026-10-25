import type { Metadata, Viewport } from 'next';
import React, { ViewTransition } from 'react';
import { Box } from '@mui/material';
import { mono, sans, serif } from '../src/lib/fonts';
import { SITE_URL } from '../src/config/site';
import Providers from './providers';
import Header from '../src/Components/Layout/Header';
import Footer from '../src/Components/Layout/Footer';
import BackToTop from '../src/Components/Layout/BackToTop';
import RevealObserver from '../src/Components/Layout/RevealObserver';
import { personJsonLd } from '../src/lib/structuredData';
import './globals.css';

const SITE_TITLE = 'Sunny Kumar | Frontend Engineer (React, Next.js, TypeScript)';
const SITE_DESCRIPTION =
  'Sunny Kumar is a frontend engineer (SDE-I) at Codebucket Solutions in Patna, building reliable, role-based web apps for SaaS, EdTech and GovTech with React, Next.js, TypeScript and Redux Toolkit.';
const SHARE_DESCRIPTION = 'Frontend engineer (SDE-I) building reliable, role-based web apps with React, Next.js and TypeScript.';

// The Open Graph / Twitter image itself comes from app/opengraph-image.tsx and app/twitter-image.tsx
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Sunny Kumar',
  },
  description: SITE_DESCRIPTION,
  applicationName: 'Sunny Kumar',
  authors: [{ name: 'Sunny Kumar', url: SITE_URL }],
  creator: 'Sunny Kumar',
  keywords: ['Sunny Kumar', 'Frontend Engineer', 'React developer', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Patna'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    firstName: 'Sunny',
    lastName: 'Kumar',
    siteName: 'Sunny Kumar',
    locale: 'en_IN',
    url: SITE_URL,
    title: 'Sunny Kumar | Frontend Engineer',
    description: SHARE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thesunnyk',
    creator: '@thesunnyk',
    title: 'Sunny Kumar | Frontend Engineer',
    description: SHARE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#111213',
  colorScheme: 'dark',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
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
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" id="main-content" tabIndex={-1} sx={{ flexGrow: 1, pt: 'var(--header-h)', outline: 'none' }}>
              {/* Route changes run as transitions, so this animates each page in (see .page in globals.css) */}
              <ViewTransition default="page">{children}</ViewTransition>
            </Box>
            <Footer />
          </Box>
          <BackToTop />
          <RevealObserver />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
