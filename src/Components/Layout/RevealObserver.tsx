'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// One IntersectionObserver for every <Reveal> on the page; re-scans after each client-side navigation
const RevealObserver: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-revealed', '');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('[data-reveal]:not([data-revealed])').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default RevealObserver;
