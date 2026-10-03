import { Inter, Outfit } from 'next/font/google';

// Self-hosted by Next (downloaded at build time, no runtime request to Google Fonts)
export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-outfit',
  display: 'swap',
});
