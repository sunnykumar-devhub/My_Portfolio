import React from 'react';
import { Box } from '@mui/material';
import { colors } from '../../theme';

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <Box component="ul" sx={{ listStyle: 'none', display: 'grid', gap: 1.25 }}>
    {items.map((item) => (
      <Box
        component="li"
        key={item}
        sx={{
          position: 'relative',
          pl: 2.5,
          color: colors.muted,
          lineHeight: 1.7,
          '&::before': { content: '"▹"', position: 'absolute', left: 0, color: colors.emerald },
        }}
      >
        {item}
      </Box>
    ))}
  </Box>
);

export default BulletList;
