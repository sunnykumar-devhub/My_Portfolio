'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import TechChip from '../../Components/Common/TechChip';
import Surface from '../../Components/Common/Surface';
import { skillGroups } from '../../data/profile';
import { colors } from '../../theme';

const Skills: React.FC = () => {
  return (
    <Section id="skills" alt>
      <SectionHeading
        eyebrow="skills"
        title="Tools I use every day"
        subtitle="The stack behind the apps above, from the component layer down to payments and real-time."
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.08} style={{ height: '100%' }}>
            <Surface sx={{ p: 3, borderRadius: '16px' }}>
              <Typography variant="h3" className="mono" sx={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: 0, color: colors.emerald, mb: 2 }}>
                {group.title.toLowerCase()}
              </Typography>
              <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, listStyle: 'none' }}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <TechChip label={skill} />
                  </li>
                ))}
              </Box>
            </Surface>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
};

export default Skills;
