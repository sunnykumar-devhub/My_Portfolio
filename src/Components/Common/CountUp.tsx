'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

// Counts a stat like "100K+" up from 0 when it scrolls into view. The server renders the final value,
// so the number is correct without JavaScript; values with no leading number ("Intern → SDE-I") stay as they are.
const CountUp: React.FC<{ value: string }> = ({ value }) => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : '';

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (target === null || !inView || reduceMotion) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (n) => setDisplay(`${Math.round(n)}${suffix}`),
    });
    return () => controls.stop();
  }, [target, suffix, inView, reduceMotion]);

  return <span ref={ref}>{display}</span>;
};

export default CountUp;
