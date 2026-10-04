'use client';

import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, Container, useScrollTrigger, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../Common/Logo';
import { RESUME_URL } from '../../../config/site';
import { colors } from '../../../theme';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

// Home page sections and the nav item each one highlights
const sectionToPath: Record<string, string> = {
  hero: '/',
  about: '/about',
  experience: '/about',
  projects: '/projects',
  skills: '/skills',
  education: '/about',
  contact: '/contact',
};

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 20 });
  const pathname = usePathname();

  // On the home page, highlight the nav item for the section crossing the middle of the viewport
  useEffect(() => {
    if (pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    Object.keys(sectionToPath).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const activePath = pathname === '/' ? sectionToPath[activeSection] : pathname;

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: trigger ? 'rgba(7, 9, 13, 0.85)' : 'rgba(7, 9, 13, 0.6)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${trigger ? colors.border : 'transparent'}`,
          transition: 'background-color .3s, border-color .3s',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 72 }}>
            <Logo />

            {/* Desktop Nav */}
            <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {navItems.map((item) => {
                const active = activePath === item.path;
                return (
                  <Button
                    key={item.label}
                    component={Link}
                    href={item.path}
                    aria-current={active ? 'page' : undefined}
                    sx={{
                      color: active ? colors.text : colors.muted,
                      fontWeight: 500,
                      px: 1.75,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 14,
                        right: 14,
                        bottom: 6,
                        height: '2px',
                        borderRadius: 2,
                        background: colors.gradient,
                        transform: active ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform .25s',
                      },
                      '&:hover': { color: colors.text, backgroundColor: 'transparent' },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
              {RESUME_URL && (
                <Button href={RESUME_URL} target="_blank" rel="noopener" variant="outlined" size="small" sx={{ ml: 1.5, py: 0.75 }}>
                  Resume
                </Button>
              )}
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              sx={{ display: { xs: 'inline-flex', md: 'none' }, color: colors.text }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        slotProps={{
          paper: {
            sx: { width: 280, backgroundColor: colors.bg, borderLeft: `1px solid ${colors.border}` },
          },
        }}
      >
        <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo size={1} />
          <IconButton aria-label="Close navigation menu" onClick={toggleDrawer} sx={{ color: colors.muted }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ px: 2.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {[{ label: 'Home', path: '/' }, ...navItems].map((item) => (
            <Button
              key={item.label}
              fullWidth
              onClick={toggleDrawer}
              component={Link}
              href={item.path}
              aria-current={activePath === item.path ? 'page' : undefined}
              sx={{
                justifyContent: 'flex-start',
                color: activePath === item.path ? colors.emerald : colors.text,
                fontSize: '1.05rem',
                py: 1.25,
              }}
            >
              {item.label}
            </Button>
          ))}
          {RESUME_URL && (
            <Button href={RESUME_URL} target="_blank" rel="noopener" variant="contained" color="primary" sx={{ mt: 2 }}>
              Download resume
            </Button>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
