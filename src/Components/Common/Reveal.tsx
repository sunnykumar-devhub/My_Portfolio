'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Fades content up once it scrolls into view
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; style?: React.CSSProperties }> = ({
  children,
  delay = 0,
  style,
}) => (
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

export default Reveal;
