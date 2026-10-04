import React from 'react';
import { Box, Container } from '@mui/material';
import { colors } from '../../theme';

// Standard section wrapper: consistent vertical rhythm, alternating background, scroll offset for the fixed header
const Section: React.FC<{ id?: string; alt?: boolean; children: React.ReactNode }> = ({ id, alt, children }) => (
  <Box
    component="section"
    id={id}
    sx={{
      py: { xs: 10, md: 14 },
      backgroundColor: alt ? colors.bgAlt : colors.bg,
      borderTop: `1px solid ${colors.border}`,
      scrollMarginTop: '72px',
      position: 'relative',
    }}
  >
    <Container maxWidth="lg">{children}</Container>
  </Box>
);

export default Section;
