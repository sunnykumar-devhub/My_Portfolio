'use client';

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { MotionConfig } from 'framer-motion';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { darkTheme } from '../src/theme';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* Skip framer-motion animations for visitors who ask their OS to reduce motion */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Providers;
