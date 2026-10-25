import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';

// Self-hosted by Next (downloaded at build time, no runtime request to Google Fonts)
export const sans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Italic serif for the few emphasised words in headings
export const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-serif',
  display: 'swap',
});
