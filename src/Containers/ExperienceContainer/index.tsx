'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import Surface from '../../Components/Common/Surface';
import BulletList from '../../Components/Common/BulletList';
import { experience } from '../../data/profile';
import { colors } from '../../theme';

const Experience: React.FC = () => {
  return (
    <Section id="experience" alt>
      <SectionHeading
        eyebrow="experience"
        title="Where I've worked"
        subtitle="Joined Codebucket Solutions as an intern and was promoted to SDE-I after 9 months."
      />

      <Box component="ol" sx={{ position: 'relative', listStyle: 'none', pl: { xs: 3.5, md: 5 }, display: 'grid', gap: 4 }}>
        {/* Timeline rail */}
        <Box
          aria-hidden
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

        {experience.map((role, i) => {
          const isCurrent = i === 0;
          return (
            <Box component="li" key={role.title} sx={{ position: 'relative' }}>
              <Reveal delay={i * 0.1}>
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    left: { xs: -34, md: -46 },
                    top: 26,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: colors.bgAlt,
                    border: `3px solid ${isCurrent ? colors.emerald : colors.sky}`,
                    boxShadow: isCurrent ? `0 0 14px ${colors.emerald}` : 'none',
                  }}
                />
                <Surface>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: 1, mb: 0.5 }}>
                    <Typography variant="h3" sx={{ fontSize: { xs: '1.15rem', md: '1.35rem' } }}>
                      {role.title}
                    </Typography>
                    <Typography className="mono" sx={{ fontSize: '0.82rem', color: colors.emerald }}>
                      {role.period}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: colors.muted, mb: 2.5, fontSize: '0.95rem' }}>
                    {role.company} · {role.location} · {role.type}
                  </Typography>
                  <BulletList items={role.points} />
                </Surface>
              </Reveal>
            </Box>
          );
        })}
      </Box>
    </Section>
  );
};

export default Experience;
