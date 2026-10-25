import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import { certifications, education, profile } from '../../data/profile';
import { colors } from '../../theme';

const SideBlock: React.FC<{ title: string; level: 'h2' | 'h3'; children: React.ReactNode }> = ({ title, level, children }) => (
  <Box sx={{ py: 3, borderTop: `1px solid ${colors.border}` }}>
    <Typography
      variant="h3"
      component={level}
      className="mono"
      sx={{ fontSize: '0.72rem', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.subtle, mb: 1.5 }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const About: React.FC<{ standalone?: boolean }> = ({ standalone = false }) => {
  // One level below the section title, which is the page's h1 on /about
  const level = standalone ? 'h2' : 'h3';
  return (
    <Section id="about" alt first={standalone}>
      <SectionHeading
        as={standalone ? 'h1' : 'h2'}
        eyebrow="About"
        title={
          <>
            I start from the <span className="serif">workflow</span>, not the screen.
          </>
        }
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 7fr) minmax(0, 4fr)' },
          gap: { xs: 5, md: 10 },
          alignItems: 'start',
        }}
      >
        <Reveal>
          {profile.about.map((paragraph) => (
            <Typography key={paragraph} sx={{ color: colors.muted, fontSize: { xs: '1.05rem', md: '1.15rem' }, lineHeight: 1.8, mb: 3 }}>
              {paragraph}
            </Typography>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <SideBlock title="Based in" level={level}>
            <Typography>{profile.location}</Typography>
          </SideBlock>

          <SideBlock title="Education" level={level}>
            <Typography sx={{ fontWeight: 500 }}>{education.degree}</Typography>
            <Typography sx={{ color: colors.muted, fontSize: '0.95rem' }}>
              {education.school} · {education.university}
            </Typography>
            <Typography className="mono" sx={{ color: colors.subtle, fontSize: '0.8rem', mt: 0.75 }}>
              {education.period} · {education.detail}
            </Typography>
          </SideBlock>

          <SideBlock title="Certifications" level={level}>
            <Box component="ul" sx={{ listStyle: 'none', display: 'grid', gap: 1.5 }}>
              {certifications.map((cert) => (
                <Box component="li" key={cert.name} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                  <div>
                    <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.4 }}>{cert.name}</Typography>
                    <Typography sx={{ color: colors.muted, fontSize: '0.85rem' }}>{cert.issuer}</Typography>
                  </div>
                  <Typography className="mono" sx={{ color: colors.subtle, fontSize: '0.78rem', whiteSpace: 'nowrap', pt: 0.25 }}>
                    {cert.date}
                  </Typography>
                </Box>
              ))}
            </Box>
          </SideBlock>
        </Reveal>
      </Box>
    </Section>
  );
};

export default About;
