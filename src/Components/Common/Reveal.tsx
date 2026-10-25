import React from 'react';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
};

// Fades content up once it scrolls into view. Pure markup: RevealObserver (in the root layout) flips
// data-revealed, and globals.css does the animation, so sections using this can stay Server Components.
// Inside the first section of a page (data-first) it plays a load-time entrance instead.
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, style, className }) => (
  <div data-reveal="" className={className} style={{ ...style, ...(delay && { ['--reveal-delay' as string]: `${delay}s` }) }}>
    {children}
  </div>
);

export default Reveal;
