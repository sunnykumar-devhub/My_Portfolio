import React from 'react';
import { Box, Container } from '@mui/material';
import { colors } from '../../theme';
import { RevealScope } from './Reveal';

type SectionProps = {
  id?: string;
  // Alternate (slightly lighter) background, used to separate neighbouring sections
  alt?: boolean;
  // First section of a standalone page: no divider line and less top padding under the header
  first?: boolean;
  children: React.ReactNode;
};

// Standard section wrapper: consistent vertical rhythm, alternating background, scroll offset for the fixed header
const Section: React.FC<SectionProps> = ({ id, alt, first, children }) => (
  <Box
    component="section"
    id={id}
    sx={{
      pt: first ? { xs: 6, md: 10 } : { xs: 10, md: 14 },
      pb: { xs: 10, md: 14 },
      backgroundColor: alt ? colors.bgAlt : colors.bg,
      borderTop: first ? 'none' : `1px solid ${colors.border}`,
      scrollMarginTop: '72px',
      position: 'relative',
    }}
  >
    <Container maxWidth="lg">
      <RevealScope onScroll={!first}>{children}</RevealScope>
    </Container>
  </Box>
);

export default Section;
