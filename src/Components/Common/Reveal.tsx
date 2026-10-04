'use client';

import React, { createContext, useContext } from 'react';
import { motion } from 'framer-motion';

// Content inside a scope with scroll reveals disabled (the first section of a page) uses a plain CSS entrance
// instead, so it is visible as soon as the HTML arrives rather than waiting for hydration.
const RevealOnScrollContext = createContext(true);

export const RevealScope: React.FC<{ onScroll: boolean; children: React.ReactNode }> = ({ onScroll, children }) => (
  <RevealOnScrollContext.Provider value={onScroll}>{children}</RevealOnScrollContext.Provider>
);

type RevealProps = { children: React.ReactNode; delay?: number; style?: React.CSSProperties };

// Fades content up once it scrolls into view
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, style }) => {
  const onScroll = useContext(RevealOnScrollContext);

  if (!onScroll) {
    return <div style={{ ...style, animation: `fade-up 0.55s ease-out ${delay}s both` }}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
