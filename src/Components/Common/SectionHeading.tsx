import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../theme';
import Reveal from './Reveal';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  // Render the title as the page's h1 (standalone pages) instead of a section h2
  as?: 'h1' | 'h2';
  id?: string;
};

const SectionHeading: React.FC<Props> = ({ eyebrow, title, subtitle, as = 'h2', id }) => (
  <Reveal>
    <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: 760 }}>
      <Typography
        className="mono"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          color: colors.muted,
          fontSize: '0.78rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          mb: 2.5,
          '&::before': { content: '""', width: 24, height: '1px', backgroundColor: colors.accent },
        }}
      >
        {eyebrow}
      </Typography>
      <Typography
        variant="h2"
        component={as}
        id={id}
        sx={{ fontSize: { xs: '2.1rem', sm: '2.6rem', md: '3.1rem' }, lineHeight: 1.08, mb: subtitle ? 2.5 : 0 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ color: colors.muted, fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.7, maxWidth: 640 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  </Reveal>
);

export default SectionHeading;
