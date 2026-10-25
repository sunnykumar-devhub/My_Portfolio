import React from 'react';
import { Box } from '@mui/material';
import { colors } from '../../theme';

const BulletList: React.FC<{ items: string[]; dense?: boolean }> = ({ items, dense }) => (
  <Box component="ul" sx={{ listStyle: 'none', display: 'grid', gap: dense ? 1 : 1.5 }}>
    {items.map((item) => (
      <Box
        component="li"
        key={item}
        sx={{
          position: 'relative',
          pl: 2.75,
          color: colors.muted,
          lineHeight: 1.65,
          fontSize: dense ? '0.95rem' : '1rem',
          // A text dash rather than a 1px box, which anti-aliases to grey at fractional positions
          '&::before': { content: '"–"', position: 'absolute', left: 0, color: colors.accent },
        }}
      >
        {item}
      </Box>
    ))}
  </Box>
);

export default BulletList;
