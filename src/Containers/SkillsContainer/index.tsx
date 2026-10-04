'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import TechChip from '../../Components/Common/TechChip';
import { skillGroups } from '../../data/profile';
import { colors } from '../../theme';

const Skills: React.FC = () => {
  return (
    <Section id="skills" alt>
      <SectionHeading
        index="04"
        eyebrow="skills"
        title="Tools I use every day"
        subtitle="The stack behind the apps above, from the component layer down to payments and real-time."
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.08} style={{ height: '100%' }}>
            <Box
              sx={{
                height: '100%',
                p: 3,
                borderRadius: '16px',
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.surface,
              }}
            >
              <Typography className="mono" sx={{ fontSize: '0.8rem', color: colors.emerald, mb: 2 }}>
                {g.title.toLowerCase()}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {g.skills.map((s) => (
                  <TechChip key={s} label={s} />
                ))}
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
};

export default Skills;
