'use client';

import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import { colors } from '../../theme';

// Typographic identity: the name, with a small accent square as the only mark
const Logo: React.FC = () => (
  <Box
    component={Link}
    href="/"
    aria-label="Sunny Kumar, home"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1.25,
      textDecoration: 'none',
      color: colors.text,
      fontWeight: 600,
      fontSize: '1.05rem',
      letterSpacing: '-0.02em',
      '&:hover span': { transform: 'rotate(45deg)' },
    }}
  >
    <Box
      component="span"
      aria-hidden
      sx={{ width: 9, height: 9, borderRadius: '2px', backgroundColor: colors.accent, transition: 'transform .3s' }}
    />
    Sunny Kumar
  </Box>
);

export default Logo;
