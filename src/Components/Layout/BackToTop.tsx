'use client';

import React from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { colors } from '../../theme';

const BackToTop: React.FC = () => {
  const visible = useScrollTrigger({ disableHysteresis: true, threshold: 600 });

  return (
    <Zoom in={visible}>
      <Fab
        size="small"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{
          position: 'fixed',
          right: { xs: 16, md: 28 },
          bottom: { xs: 16, md: 28 },
          color: colors.text,
          backgroundColor: colors.surface,
          border: `1px solid ${colors.borderStrong}`,
          boxShadow: '0 10px 30px rgba(0,0,0,.45)',
          '&:hover': { backgroundColor: colors.surfaceHover, color: colors.emerald },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default BackToTop;
