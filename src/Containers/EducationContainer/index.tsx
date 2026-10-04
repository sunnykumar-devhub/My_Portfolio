'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import { certifications, education } from '../../data/profile';
import { colors } from '../../theme';

const cardSx = {
  height: '100%',
  p: { xs: 3, md: 4 },
  borderRadius: '18px',
  border: `1px solid ${colors.border}`,
  backgroundColor: colors.surface,
};

const Education: React.FC = () => {
  return (
    <Section id="education">
      <SectionHeading index="05" eyebrow="education" title="Education & certifications" />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <Reveal style={{ height: '100%' }}>
          <Box sx={cardSx}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 3, color: colors.emerald }}>
              <SchoolOutlinedIcon fontSize="small" />
              <Typography sx={{ fontWeight: 700, color: colors.text }}>Education</Typography>
            </Box>
            {education.map((e, i) => (
              <Box key={e.degree} sx={{ pb: i === education.length - 1 ? 0 : 2.5, mb: i === education.length - 1 ? 0 : 2.5, borderBottom: i === education.length - 1 ? 'none' : `1px solid ${colors.border}` }}>
                <Typography sx={{ fontWeight: 600 }}>{e.degree}</Typography>
                <Typography sx={{ color: colors.muted, fontSize: '0.93rem' }}>{e.school}</Typography>
                <Typography className="mono" sx={{ color: colors.subtle, fontSize: '0.8rem', mt: 0.5 }}>
                  {e.period}
                  {e.detail && <Box component="span" sx={{ color: colors.emerald }}> · {e.detail}</Box>}
                </Typography>
              </Box>
            ))}
          </Box>
        </Reveal>

        <Reveal delay={0.1} style={{ height: '100%' }}>
          <Box sx={cardSx}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 3, color: colors.sky }}>
              <WorkspacePremiumOutlinedIcon fontSize="small" />
              <Typography sx={{ fontWeight: 700, color: colors.text }}>Certifications</Typography>
            </Box>
            <Box sx={{ display: 'grid', gap: 2 }}>
              {certifications.map((c) => (
                <Box key={c.name} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.97rem' }}>{c.name}</Typography>
                    <Typography sx={{ color: colors.muted, fontSize: '0.88rem' }}>{c.issuer}</Typography>
                  </Box>
                  <Typography className="mono" sx={{ color: colors.subtle, fontSize: '0.78rem', whiteSpace: 'nowrap', pt: 0.25 }}>
                    {c.date}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Section>
  );
};

export default Education;
