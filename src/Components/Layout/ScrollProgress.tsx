'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { colors } from '../../theme';

// Thin gradient bar under the header that fills as the page scrolls
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: colors.gradient,
        zIndex: 1301,
      }}
    />
  );
};

export default ScrollProgress;
