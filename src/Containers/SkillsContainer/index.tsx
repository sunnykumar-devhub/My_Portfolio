import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import { skillGroups } from '../../data/profile';
import { colors } from '../../theme';

const Skills: React.FC<{ standalone?: boolean }> = ({ standalone = false }) => {
  return (
    <Section id="skills" first={standalone}>
      <SectionHeading
        as={standalone ? 'h1' : 'h2'}
        eyebrow="Skills"
        title={
          <>
            The stack I work in <span className="serif">every day</span>
          </>
        }
        subtitle="Grouped by where each one shows up in my work. Everything listed is used in production apps or in my public projects."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' },
          columnGap: { sm: 4, md: 5 },
          rowGap: 6,
        }}
      >
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <Box sx={{ borderTop: `1px solid ${colors.accent}`, pt: 2.5 }}>
              <Typography variant="h3" component={standalone ? 'h2' : 'h3'} sx={{ fontSize: '1.05rem', mb: 2 }}>
                {group.title}
              </Typography>
              {/* Two columns per group on phones, where the groups stack */}
              <Box component="ul" sx={{ listStyle: 'none', display: 'grid', gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', sm: 'minmax(0, 1fr)' }, columnGap: 2 }}>
                {group.skills.map((skill) => (
                  <Box
                    component="li"
                    key={skill}
                    sx={{ py: 1.1, color: colors.muted, fontSize: '0.95rem', borderBottom: `1px solid ${colors.border}` }}
                  >
                    {skill}
                  </Box>
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
