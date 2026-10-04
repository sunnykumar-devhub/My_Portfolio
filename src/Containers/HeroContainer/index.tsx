'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/FileDownloadOutlined';
import SocialLinks from '../../Components/Common/SocialLinks';
import { RESUME_URL } from '../../config/site';
import { profile, stats } from '../../data/profile';
import { colors } from '../../theme';

// Plain CSS entrance (keyframes in globals.css) so the hero is visible as soon as the HTML arrives,
// instead of waiting for hydration like a framer-motion `initial` state would
const fadeUp = (delay: number) => ({
  style: { animation: `fade-up 0.6s ease-out ${delay}s both` },
});

// Decorative "code editor" card next to the photo; hidden from screen readers since the same facts are in the text
const CodeCard: React.FC = () => (
  <Box
    aria-hidden
    sx={{
      borderRadius: '14px',
      border: `1px solid ${colors.borderStrong}`,
      backgroundColor: 'rgba(13, 17, 23, 0.92)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
      overflow: 'hidden',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, height: 36, borderBottom: `1px solid ${colors.border}` }}>
      {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
        <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: c }} />
      ))}
      <Typography className="mono" sx={{ ml: 1.5, fontSize: '0.75rem', color: colors.muted }}>
        sunny.ts
      </Typography>
    </Box>
    <Box
      component="pre"
      className="mono"
      sx={{
        m: 0,
        px: 2.5,
        py: 2,
        fontSize: { xs: '0.75rem', sm: '0.82rem' },
        lineHeight: 1.75,
        color: '#c9d1d9',
        overflowX: 'auto',
        '& .k': { color: '#ff7b72' },
        '& .t': { color: '#ffa657' },
        '& .v': { color: '#d2a8ff' },
        '& .s': { color: '#a5d6ff' },
        '& .p': { color: '#79c0ff' },
      }}
    >
      <span className="k">const</span> <span className="v">sunny</span>: <span className="t">Engineer</span> = {'{'}
      {'\n'}  <span className="p">role</span>: <span className="s">&quot;SDE-I (Frontend)&quot;</span>,
      {'\n'}  <span className="p">stack</span>: [<span className="s">&quot;React&quot;</span>, <span className="s">&quot;Next.js&quot;</span>, <span className="s">&quot;TypeScript&quot;</span>],
      {'\n'}  <span className="p">state</span>: [<span className="s">&quot;Redux Toolkit&quot;</span>, <span className="s">&quot;RTK Query&quot;</span>],
      {'\n'}  <span className="p">domains</span>: [<span className="s">&quot;SaaS&quot;</span>, <span className="s">&quot;EdTech&quot;</span>, <span className="s">&quot;GovTech&quot;</span>],
      {'\n'}{'}'};
    </Box>
  </Box>
);

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 10 },
        // Faint engineering grid that fades out toward the bottom
        backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 60% 50% at 70% 35%, rgba(96,165,250,0.10), transparent 70%),
                       radial-gradient(ellipse 50% 45% at 20% 40%, rgba(52,211,153,0.10), transparent 70%),
                       linear-gradient(to bottom, transparent 55%, ${colors.bg} 100%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
            minHeight: { md: 'calc(100vh - 260px)' },
          }}
        >
          {/* Left: intro */}
          <Box>
            <div {...fadeUp(0)}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.5,
                  py: 0.75,
                  mb: 3,
                  borderRadius: '999px',
                  border: `1px solid ${colors.borderStrong}`,
                  backgroundColor: 'rgba(15, 19, 26, 0.8)',
                }}
              >
                <Box aria-hidden sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: colors.emerald, boxShadow: `0 0 10px ${colors.emerald}` }} />
                <Typography className="mono" sx={{ fontSize: '0.78rem', color: colors.muted }}>
                  {profile.shortRole} @ {profile.company}
                </Typography>
              </Box>
            </div>

            <div {...fadeUp(0.1)}>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: '2.75rem', sm: '3.75rem', md: '4.5rem' }, lineHeight: 1.04, mb: 2.5 }}
              >
                Hi, I&apos;m Sunny.
                <br />
                <Box component="span" className="text-gradient">
                  Frontend Engineer.
                </Box>
              </Typography>
            </div>

            <div {...fadeUp(0.2)}>
              <Typography sx={{ color: colors.muted, fontSize: { xs: '1.05rem', md: '1.2rem' }, lineHeight: 1.7, maxWidth: 560, mb: 4 }}>
                {profile.tagline}
              </Typography>
            </div>

            <div {...fadeUp(0.3)}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 4 }}>
                <Button component={Link} href="/projects" variant="contained" color="primary" size="large" endIcon={<ArrowForwardIcon />}>
                  View my work
                </Button>
                {RESUME_URL && (
                  <Button variant="outlined" size="large" startIcon={<DownloadIcon />} href={RESUME_URL} target="_blank" rel="noopener">
                    Resume
                  </Button>
                )}
              </Stack>

              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', flexWrap: 'wrap', rowGap: 1 }}>
                <SocialLinks ids={['github', 'linkedin', 'email']} variant="outlined" />
                <Typography className="mono" sx={{ fontSize: '0.8rem', color: colors.subtle }}>
                  {profile.location}
                </Typography>
              </Stack>
            </div>
          </Box>

          {/* Right: photo + code card */}
          <div {...fadeUp(0.25)}>
            <Box sx={{ position: 'relative', maxWidth: 420, mx: 'auto', pb: { xs: 10, sm: 12 } }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  p: '2px',
                  background: colors.gradient,
                  boxShadow: '0 30px 80px rgba(52, 211, 153, 0.12)',
                }}
              >
                <Box sx={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: '22px', overflow: 'hidden', backgroundColor: colors.surface }}>
                  <Image
                    src="/sunny.png"
                    alt="Sunny Kumar"
                    fill
                    priority
                    sizes="(max-width: 900px) 90vw, 420px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
              <Box sx={{ position: 'absolute', left: { xs: -8, sm: -48 }, right: { xs: -8, sm: 24 }, bottom: 0 }}>
                <CodeCard />
              </Box>
            </Box>
          </div>
        </Box>

        {/* Stats strip */}
        <div {...fadeUp(0.4)}>
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              border: `1px solid ${colors.border}`,
              borderRadius: '16px',
              backgroundColor: 'rgba(15, 19, 26, 0.7)',
              backdropFilter: 'blur(8px)',
              overflow: 'hidden',
            }}
          >
            {stats.map((s, i) => (
              <Box
                key={s.label}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderLeft: { xs: i % 2 ? `1px solid ${colors.border}` : 'none', md: i ? `1px solid ${colors.border}` : 'none' },
                  borderTop: { xs: i > 1 ? `1px solid ${colors.border}` : 'none', md: 'none' },
                }}
              >
                <Typography sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', mb: 0.5 }}>
                  {s.value}
                </Typography>
                <Typography sx={{ color: colors.muted, fontSize: '0.85rem', lineHeight: 1.4 }}>{s.label}</Typography>
              </Box>
            ))}
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default Hero;
