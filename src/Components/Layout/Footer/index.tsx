'use client';

import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import XIcon from '@mui/icons-material/X';
import Link from 'next/link';
import Logo from '../../Common/Logo';
import { profile } from '../../../data/profile';
import { colors } from '../../../theme';

const links = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

const socials = [
  { label: 'GitHub', href: profile.socials.github, icon: <GitHubIcon fontSize="small" /> },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: <LinkedInIcon fontSize="small" /> },
  { label: 'X (formerly Twitter)', href: profile.socials.x, icon: <XIcon fontSize="small" /> },
  { label: 'Email', href: `mailto:${profile.email}`, icon: <EmailIcon fontSize="small" /> },
];

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: colors.bg, borderTop: `1px solid ${colors.border}`, py: 5, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 3,
          }}
        >
          <Box>
            <Logo size={1} />
            <Typography sx={{ color: colors.muted, fontSize: '0.9rem', mt: 1 }}>
              {profile.role} · {profile.company}
            </Typography>
          </Box>

          <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap' }}>
            {links.map((l) => (
              <Box
                key={l.label}
                component={Link}
                href={l.href}
                sx={{ color: colors.muted, textDecoration: 'none', fontSize: '0.92rem', '&:hover': { color: colors.text } }}
              >
                {l.label}
              </Box>
            ))}
          </Stack>

          <Stack direction="row" spacing={0.5}>
            {socials.map((s) => (
              <IconButton
                key={s.label}
                component="a"
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                sx={{ color: colors.muted, '&:hover': { color: colors.emerald } }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>

        <Typography className="mono" sx={{ color: colors.subtle, fontSize: '0.78rem', mt: 4 }}>
          {'©'} {new Date().getFullYear()} Sunny Kumar · Built with Next.js, TypeScript & MUI
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
