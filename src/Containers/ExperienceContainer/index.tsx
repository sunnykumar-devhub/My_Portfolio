import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import BulletList from '../../Components/Common/BulletList';
import { experience } from '../../data/profile';
import { colors } from '../../theme';

const Experience: React.FC = () => {
  return (
    <Section id="experience" alt>
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Intern to SDE-I in <span className="serif">nine months</span>
          </>
        }
        subtitle="Both roles at Codebucket Solutions in Patna, building frontends for enterprise products."
      />

      <Box component="ol" sx={{ listStyle: 'none' }}>
        {experience.map((role, i) => {
          const isCurrent = !role.end;
          const isLast = i === experience.length - 1;
          return (
            <Box
              component="li"
              key={role.title}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '16px minmax(0, 1fr)', md: 'minmax(0, 3fr) 16px minmax(0, 8fr)' },
                columnGap: { xs: 2.5, md: 4 },
              }}
            >
              {/* Dates: own column on desktop, above the title on mobile */}
              <Box sx={{ display: { xs: 'none', md: 'block' }, pt: 0.5 }}>
                <DateBlock period={role.period} start={role.start} end={role.end} />
                <Typography sx={{ color: colors.subtle, fontSize: '0.88rem', mt: 0.75 }}>
                  {role.type} · {role.location}
                </Typography>
              </Box>

              {/* Timeline rail and marker */}
              <Box aria-hidden sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                {!isLast && <Box sx={{ position: 'absolute', top: 14, bottom: 0, width: '1px', backgroundColor: colors.borderStrong }} />}
                <Box
                  sx={{
                    position: 'relative',
                    mt: 0.75,
                    width: 11,
                    height: 11,
                    borderRadius: '50%',
                    backgroundColor: isCurrent ? colors.accent : colors.bgAlt,
                    border: `1px solid ${isCurrent ? colors.accent : colors.subtle}`,
                    boxShadow: `0 0 0 5px ${colors.bgAlt}`,
                  }}
                />
              </Box>

              <Reveal style={{ paddingBottom: isLast ? 0 : 56 }}>
                <Box sx={{ display: { md: 'none' }, mb: 1 }}>
                  <DateBlock period={role.period} start={role.start} end={role.end} />
                </Box>
                <Typography variant="h3" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, mb: 0.5 }}>
                  {role.title}
                </Typography>
                <Typography sx={{ color: colors.muted, mb: 2.5 }}>
                  {role.company}
                  <Box component="span" sx={{ display: { md: 'none' } }}>
                    {' '}
                    · {role.type}
                  </Box>
                </Typography>
                <BulletList items={role.points} />
              </Reveal>
            </Box>
          );
        })}
      </Box>
    </Section>
  );
};

const DateBlock: React.FC<{ period: string; start: string; end?: string }> = ({ period, start, end }) => {
  const [from, to] = period.split(' – ');
  return (
    <Typography className="mono" sx={{ fontSize: '0.85rem', color: end ? colors.muted : colors.accent }}>
      <time dateTime={start}>{from}</time> – {end ? <time dateTime={end}>{to}</time> : to}
    </Typography>
  );
};

export default Experience;
