import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../theme';
import Reveal from './Reveal';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
};

const SectionHeading: React.FC<Props> = ({ eyebrow, title, subtitle }) => (
  <Reveal>
    <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 720 }}>
      <Typography className="mono" sx={{ color: colors.emerald, fontSize: '0.85rem', mb: 1.5, letterSpacing: '0.04em' }}>
        <Box component="span" sx={{ color: colors.subtle }}>
          {'// '}
        </Box>
        {eyebrow}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, lineHeight: 1.15, mb: subtitle ? 2 : 0 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ color: colors.muted, fontSize: { xs: '1rem', md: '1.075rem' }, lineHeight: 1.75 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  </Reveal>
);

export default SectionHeading;
