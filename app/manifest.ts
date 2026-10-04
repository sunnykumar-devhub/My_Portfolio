import type { MetadataRoute } from 'next';

// Web app manifest: name, colours and icons used when the site is added to a phone's home screen
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sunny Kumar | Frontend Engineer',
    short_name: 'Sunny Kumar',
    description: 'Portfolio of Sunny Kumar, frontend engineer building React, Next.js and TypeScript web apps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07090d',
    theme_color: '#07090d',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
