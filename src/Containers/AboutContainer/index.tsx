'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import { focusAreas, profile } from '../../data/profile';
import { colors } from '../../theme';

const icons = [DashboardOutlinedIcon, StorageOutlinedIcon, LockOutlinedIcon, SpeedOutlinedIcon];

const About: React.FC = () => {
  return (
    <Section id="about">
      <SectionHeading index="01" eyebrow="about" title="Turning complex workflows into interfaces that feel simple." />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 8 } }}>
        <Reveal>
          {profile.summary.map((p) => (
            <Typography key={p.slice(0, 20)} sx={{ color: colors.muted, fontSize: '1.075rem', lineHeight: 1.85, mb: 2.5 }}>
              {p}
            </Typography>
          ))}
        </Reveal>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
          {focusAreas.map((f, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={f.title} delay={i * 0.08} style={{ height: '100%' }}>
                <Box
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: '16px',
                    border: `1px solid ${colors.border}`,
                    backgroundColor: colors.surface,
                    transition: 'border-color .25s, transform .25s',
                    '&:hover': { borderColor: 'rgba(52, 211, 153, 0.4)', transform: 'translateY(-3px)' },
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      mb: 2,
                      display: 'grid',
                      placeItems: 'center',
                      borderRadius: '10px',
                      color: colors.emerald,
                      backgroundColor: 'rgba(52, 211, 153, 0.08)',
                      border: '1px solid rgba(52, 211, 153, 0.2)',
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>{f.title}</Typography>
                  <Typography sx={{ color: colors.muted, fontSize: '0.92rem', lineHeight: 1.65 }}>{f.text}</Typography>
                </Box>
              </Reveal>
            );
          })}
        </Box>
      </Box>
    </Section>
  );
};

export default About;
