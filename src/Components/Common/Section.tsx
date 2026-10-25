import React from 'react';
import { Box, Container } from '@mui/material';
import { colors } from '../../theme';

type SectionProps = {
  id?: string;
  // Slightly lighter background, used to separate neighbouring sections
  alt?: boolean;
  // First section of a standalone page: less top padding under the header, and reveals play on load
  first?: boolean;
  children: React.ReactNode;
};

// Standard section wrapper: consistent vertical rhythm and a hairline between sections
const Section: React.FC<SectionProps> = ({ id, alt, first, children }) => (
  <Box
    component="section"
    id={id}
    data-first={first ? '' : undefined}
    sx={{
      pt: first ? { xs: 6, md: 10 } : { xs: 10, md: 15 },
      pb: { xs: 10, md: 15 },
      backgroundColor: alt ? colors.bgAlt : colors.bg,
      borderTop: first ? 'none' : `1px solid ${colors.border}`,
    }}
  >
    <Container maxWidth="lg">{children}</Container>
  </Box>
);

export default Section;
