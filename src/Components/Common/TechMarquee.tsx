import React from 'react';
import { Box } from '@mui/material';
import { marqueeTech } from '../../data/profile';
import { colors } from '../../theme';

// Infinite scrolling strip of technologies. The list is rendered twice and shifted by -50%,
// so the loop is seamless; it pauses on hover and stops entirely for reduced-motion users.
const TechMarquee: React.FC = () => (
  <Box
    aria-label="Technologies I work with"
    role="region"
    sx={{
      position: 'relative',
      overflow: 'hidden',
      py: 2.5,
      borderTop: `1px solid ${colors.border}`,
      borderBottom: `1px solid ${colors.border}`,
      backgroundColor: colors.bgAlt,
      maskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
      '&:hover .marquee-track': { animationPlayState: 'paused' },
    }}
  >
    <Box
      className="marquee-track mono"
      sx={{
        display: 'flex',
        width: 'max-content',
        animation: 'marquee 40s linear infinite',
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
      }}
    >
      {[0, 1].map((copy) => (
        <Box key={copy} component="ul" aria-hidden={copy === 1} sx={{ display: 'flex', listStyle: 'none' }}>
          {marqueeTech.map((tech) => (
            <Box
              component="li"
              key={tech}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                pr: 3,
                fontSize: '0.92rem',
                color: colors.muted,
                whiteSpace: 'nowrap',
                '&::after': { content: '"◆"', fontSize: '0.5rem', color: colors.emerald, opacity: 0.6 },
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  </Box>
);

export default TechMarquee;
