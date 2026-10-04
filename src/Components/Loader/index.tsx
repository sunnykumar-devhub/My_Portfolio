'use client';

import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { colors } from '../../theme';

// Shown by app/loading.tsx during route transitions
const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: colors.bg,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Box sx={{ width: 160, height: 3, borderRadius: 2, backgroundColor: colors.border, overflow: 'hidden' }}>
        <Box
          component={motion.div}
          animate={{ x: ['-100%', '160%'] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          sx={{ width: '60%', height: '100%', background: colors.gradient, borderRadius: 2 }}
        />
      </Box>
    </Box>
  );
};

export default Loader;
