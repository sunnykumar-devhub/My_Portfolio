'use client';

import React from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { colors } from '../../theme';

const BackToTop: React.FC = () => {
  const visible = useScrollTrigger({ disableHysteresis: true, threshold: 900 });

  return (
    <Zoom in={visible}>
      <Fab
        size="small"
        aria-label="Back to top"
        onClick={() => {
          window.scrollTo({ top: 0 });
          document.getElementById('main-content')?.focus({ preventScroll: true });
        }}
        sx={{
          position: 'fixed',
          right: { xs: 16, md: 28 },
          bottom: { xs: 16, md: 28 },
          color: colors.text,
          backgroundColor: colors.surface,
          border: `1px solid ${colors.borderStrong}`,
          boxShadow: 'none',
          '&:hover': { backgroundColor: colors.surfaceHover },
        }}
      >
        <ArrowUpwardIcon fontSize="small" />
      </Fab>
    </Zoom>
  );
};

export default BackToTop;
