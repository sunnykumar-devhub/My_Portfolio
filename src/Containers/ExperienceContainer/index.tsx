'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import { experience } from '../../data/profile';
import { colors } from '../../theme';

const Experience: React.FC = () => {
  return (
    <Section id="experience" alt>
      <SectionHeading
        index="02"
        eyebrow="experience"
        title="Where I've worked"
        subtitle="Joined Codebucket Solutions as an intern and was promoted to SDE-I after 9 months."
      />

      <Box sx={{ position: 'relative', pl: { xs: 3.5, md: 5 } }}>
        {/* Timeline rail */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 7, md: 11 },
            top: 8,
            bottom: 8,
            width: '2px',
            background: `linear-gradient(to bottom, ${colors.emerald}, ${colors.sky} 60%, transparent)`,
            opacity: 0.5,
          }}
        />

        {experience.map((role, i) => (
          <Reveal key={role.title} delay={i * 0.1}>
            <Box sx={{ position: 'relative', mb: i === experience.length - 1 ? 0 : 4 }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: -34, md: -46 },
                  top: 26,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: colors.bgAlt,
                  border: `3px solid ${i === 0 ? colors.emerald : colors.sky}`,
                  boxShadow: i === 0 ? `0 0 14px ${colors.emerald}` : 'none',
                }}
              />
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: '18px',
                  border: `1px solid ${colors.border}`,
                  backgroundColor: colors.surface,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: 1,
                    mb: 0.5,
                  }}
                >
                  <Typography variant="h5" sx={{ fontSize: { xs: '1.15rem', md: '1.35rem' } }}>
                    {role.title}
                  </Typography>
                  <Typography className="mono" sx={{ fontSize: '0.82rem', color: colors.emerald }}>
                    {role.period}
                  </Typography>
                </Box>
                <Typography sx={{ color: colors.muted, mb: 2.5, fontSize: '0.95rem' }}>
                  {role.company} · {role.location} · {role.type}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', display: 'grid', gap: 1.25 }}>
                  {role.points.map((p) => (
                    <Box
                      component="li"
                      key={p}
                      sx={{
                        position: 'relative',
                        pl: 2.5,
                        color: colors.muted,
                        lineHeight: 1.7,
                        '&::before': {
                          content: '"▹"',
                          position: 'absolute',
                          left: 0,
                          color: colors.emerald,
                        },
                      }}
                    >
                      {p}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
};

export default Experience;
