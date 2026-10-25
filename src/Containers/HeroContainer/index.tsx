import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SocialLinks from '../../Components/Common/SocialLinks';
import LinkButton from '../../Components/Common/LinkButton';
import LocalTime from '../../Components/Common/LocalTime';
import { RESUME_FILENAME, RESUME_URL } from '../../config/site';
import { highlights, profile } from '../../data/profile';
import { colors } from '../../theme';

// Staggered CSS entrance (globals.css), so the hero is visible as soon as the HTML arrives
const enter = (delay: number) => ({ className: 'enter', style: { animationDelay: `${delay}s` } });

const Hero: React.FC = () => {
  const [lead, emphasis, tail] = ['I build reliable, ', 'intuitive', ' web applications.'];

  return (
    <Box component="section" id="hero" aria-labelledby="hero-title" sx={{ pt: { xs: 5, md: 7 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            // minmax(0, …) lets the tracks shrink on narrow screens instead of widening the page
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 7fr) minmax(0, 4fr)' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box>
            <div {...enter(0)}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.25,
                  mb: { xs: 3, md: 4 },
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 999,
                  border: `1px solid ${colors.border}`,
                  color: colors.muted,
                  fontSize: '0.85rem',
                }}
              >
                <Box component="span" aria-hidden sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: colors.accent }} />
                {profile.shortRole} at {profile.company}
              </Box>
            </div>

            <Typography
              {...enter(0.08)}
              variant="h1"
              id="hero-title"
              sx={{ fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.4rem' }, lineHeight: 1.02, mb: 3 }}
            >
              <Box
                component="span"
                sx={{ display: 'block', mb: { xs: 1.5, md: 2 }, fontSize: { xs: '1.15rem', md: '1.35rem' }, letterSpacing: '-0.02em', lineHeight: 1.3 }}
              >
                {profile.name}
                <Box component="span" sx={{ color: colors.muted, fontWeight: 400 }}>
                  , frontend engineer.
                </Box>
              </Box>
              {lead}
              <Box component="span" className="serif" sx={{ color: colors.accent, fontSize: '1.08em' }}>
                {emphasis}
              </Box>
              {tail}
            </Typography>

            <Typography
              {...enter(0.16)}
              sx={{ color: colors.muted, fontSize: { xs: '1.05rem', md: '1.15rem' }, lineHeight: 1.7, maxWidth: 600, mb: 4.5 }}
            >
              {profile.intro}
            </Typography>

            <Stack {...enter(0.24)} direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 4.5 }}>
              <LinkButton href="/#work" variant="contained" color="primary" size="large" endIcon={<ArrowDownwardIcon />}>
                View my work
              </LinkButton>
              {RESUME_URL && (
                <Button href={RESUME_URL} download={RESUME_FILENAME} variant="outlined" size="large" startIcon={<FileDownloadOutlinedIcon />}>
                  Download resume
                </Button>
              )}
            </Stack>

            <div {...enter(0.32)}>
              <SocialLinks ids={['github', 'linkedin', 'email']} variant="outlined" />
            </div>
          </Box>

          <Box {...enter(0.2)} component="figure" sx={{ maxWidth: { xs: 360, md: 'none' }, width: '100%', justifySelf: { xs: 'start', md: 'stretch' } }}>
            <Box
              sx={{
                position: 'relative',
                aspectRatio: '4 / 5',
                borderRadius: '18px',
                overflow: 'hidden',
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.surface,
              }}
            >
              <Image
                src="/sunny.png"
                alt="Portrait of Sunny Kumar"
                fill
                priority
                sizes="(max-width: 900px) 360px, 400px"
                style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
              />
            </Box>
            <Box
              component="figcaption"
              sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, pt: 1.75, fontSize: '0.82rem', color: colors.subtle }}
              className="mono"
            >
              <span>Patna, India</span>
              <LocalTime />
            </Box>
          </Box>
        </Box>

        <Box
          {...enter(0.4)}
          component="dl"
          sx={{
            mt: { xs: 8, md: 7 },
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' },
            columnGap: { xs: 3, md: 5 },
            rowGap: 4,
            borderTop: `1px solid ${colors.border}`,
            pt: 4,
          }}
        >
          {highlights.map((item) => (
            <Box key={item.value} sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
              <Typography component="dt" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
                {item.value}
              </Typography>
              <Typography component="dd" sx={{ color: colors.muted, fontSize: '0.9rem', lineHeight: 1.5 }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
