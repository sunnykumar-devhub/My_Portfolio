'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import Link from 'next/link';
import Logo from '../../Common/Logo';
import SocialLinks from '../../Common/SocialLinks';
import { navItems } from '../../../config/navigation';
import { profile } from '../../../data/profile';
import { colors } from '../../../theme';

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
              Frontend Engineer · {profile.location}
            </Typography>
          </Box>

          <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap' }}>
            {navItems.map((item) => (
              <Box
                key={item.label}
                component={Link}
                href={item.path}
                sx={{ color: colors.muted, textDecoration: 'none', fontSize: '0.92rem', '&:hover': { color: colors.text } }}
              >
                {item.label}
              </Box>
            ))}
          </Stack>

          <SocialLinks />
        </Box>

        <Typography className="mono" sx={{ color: colors.subtle, fontSize: '0.78rem', mt: 4 }}>
          {'©'} {new Date().getFullYear()} Sunny Kumar · Built with Next.js, TypeScript and Material UI
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
