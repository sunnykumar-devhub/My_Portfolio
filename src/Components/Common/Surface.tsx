import React from 'react';
import { Box, type BoxProps } from '@mui/material';
import { colors } from '../../theme';

type SurfaceProps = BoxProps & {
  // Lifts and brightens the border on hover, for cards that invite interaction
  interactive?: boolean;
};

// The bordered card used across every section, so spacing, radius and hover stay consistent
const Surface: React.FC<SurfaceProps> = ({ interactive = false, className, sx, children, ...rest }) => (
  <Box
    {...rest}
    className={className ? `spotlight ${className}` : 'spotlight'}
    sx={[
      {
        height: '100%',
        p: { xs: 3, md: 4 },
        borderRadius: '18px',
        border: `1px solid ${colors.border}`,
        backgroundColor: colors.surface,
      },
      interactive && {
        transition: 'border-color .25s, transform .25s',
        '&:hover': { borderColor: colors.borderStrong, transform: 'translateY(-4px)' },
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    {children}
  </Box>
);

export default Surface;
