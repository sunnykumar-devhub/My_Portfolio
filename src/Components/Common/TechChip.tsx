import React from 'react';
import { Box } from '@mui/material';
import { colors } from '../../theme';

const TechChip: React.FC<{ label: string }> = ({ label }) => (
  <Box
    component="span"
    className="mono"
    sx={{
      display: 'inline-block',
      px: 1.25,
      py: 0.5,
      fontSize: '0.75rem',
      color: colors.text,
      borderRadius: '6px',
      border: `1px solid ${colors.border}`,
      backgroundColor: 'rgba(240, 246, 252, 0.03)',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </Box>
);

export default TechChip;
