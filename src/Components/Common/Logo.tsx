'use client';

import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import { colors } from '../../theme';

// Wordmark: "sunny.k" in mono, with the brand gradient on the dot
const Logo: React.FC<{ size?: number }> = ({ size = 1.15 }) => (
  <Box
    component={Link}
    href="/"
    aria-label="Sunny Kumar, home"
    className="mono"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: colors.text,
      fontWeight: 600,
      fontSize: `${size}rem`,
      letterSpacing: '-0.02em',
    }}
  >
    <Box component="span" sx={{ color: colors.emerald, mr: 0.75 }}>{'<'}</Box>
    <span>sunny</span>
    <Box component="span" className="text-gradient">.k</Box>
    <Box component="span" sx={{ color: colors.emerald, ml: 0.75 }}>{'/>'}</Box>
  </Box>
);

export default Logo;
