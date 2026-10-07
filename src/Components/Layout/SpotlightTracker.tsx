'use client';

import { useEffect } from 'react';

// One document-level listener feeds the pointer position to whichever .spotlight card is under the cursor,
// so cards can stay Server Components and need no per-card event handlers.
const SpotlightTracker: React.FC = () => {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>('.spotlight');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  return null;
};

export default SpotlightTracker;
