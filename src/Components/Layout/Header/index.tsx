'use client';

import React, { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, Container, useScrollTrigger, Stack, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../Common/Logo';
import SocialLinks from '../../Common/SocialLinks';
import CommandPalette from '../CommandPalette';
import { RESUME_FILENAME, RESUME_URL } from '../../../config/site';
import { contactNav, navItems, pageRoutes } from '../../../config/navigation';
import { colors } from '../../../theme';

// Show the shortcut the visitor's keyboard actually has; the server (and first paint) assume a Mac
const subscribeNoop = () => () => {};
const useIsApple = () => useSyncExternalStore(subscribeNoop, () => /Mac|iPhone|iPad/.test(navigator.platform), () => true);

const trackedSections = [...navItems, contactNav].map((item) => item.id);

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });
  const pathname = usePathname();
  const isApple = useIsApple();

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

    ['hero', ...trackedSections].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const current = pathname === '/' ? activeSection : pageRoutes.find((route) => route.path === pathname)?.section;

  const closeDrawer = () => setDrawerOpen(false);
  // Stable so the palette's keyboard listener isn't re-attached on every header render
  const handlePaletteChange = useCallback((open: boolean) => setPaletteOpen(open), []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(17, 18, 19, 0.94)' : colors.bg,
          borderBottom: `1px solid ${scrolled ? colors.border : 'transparent'}`,
          transition: 'background-color .3s, border-color .3s',
          // Own view-transition layer, so page content animating between routes passes under the header
          viewTransitionName: 'site-header',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64 }, height: 64, gap: 2 }}>
            <Logo />

            <Box component="nav" aria-label="Main" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navItems.map((item) => {
                const active = current === item.id;
                return (
                  <Box
                    key={item.id}
                    component={Link}
                    href={item.href}
                    aria-current={active ? 'location' : undefined}
                    sx={{
                      position: 'relative',
                      px: 1.5,
                      py: 1,
                      fontSize: '0.92rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      color: active ? colors.text : colors.muted,
                      transition: 'color .2s',
                      '&:hover': { color: colors.text },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 12,
                        right: 12,
                        bottom: 4,
                        height: '1px',
                        backgroundColor: colors.accent,
                        transform: active ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform .25s',
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}
            </Box>

            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Tooltip title={`Search (${isApple ? '⌘K' : 'Ctrl K'})`}>
                <IconButton
                  onClick={() => setPaletteOpen(true)}
                  aria-label="Search the site"
                  aria-keyshortcuts={isApple ? 'Meta+K' : 'Control+K'}
                  sx={{ color: colors.muted, '&:hover': { color: colors.text } }}
                >
                  <SearchIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              {RESUME_URL && (
                <Button
                  href={RESUME_URL}
                  download={RESUME_FILENAME}
                  variant="text"
                  size="small"
                  startIcon={<FileDownloadOutlinedIcon fontSize="small" />}
                  sx={{ display: { xs: 'none', md: 'inline-flex' } }}
                >
                  Resume
                </Button>
              )}
              <Button
                component={Link}
                href={contactNav.href}
                variant="contained"
                color="primary"
                size="small"
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                Contact
              </Button>
              <IconButton
                aria-label="Open menu"
                aria-expanded={drawerOpen}
                aria-controls="mobile-menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ display: { xs: 'inline-flex', md: 'none' }, color: colors.text }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile menu: MUI's Drawer traps focus while open, closes on Escape and returns focus to the menu button */}
      <Drawer
        id="mobile-menu"
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        slotProps={{
          paper: {
            component: 'nav',
            'aria-label': 'Mobile',
            sx: { width: 'min(320px, 86vw)', backgroundColor: colors.bg, borderLeft: `1px solid ${colors.border}`, display: 'flex' },
          },
        }}
      >
        <Box sx={{ px: 3, height: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${colors.border}` }}>
          <Logo />
          <IconButton aria-label="Close menu" onClick={closeDrawer} sx={{ color: colors.muted, mr: -1 }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box component="ul" sx={{ listStyle: 'none', px: 3, py: 2 }}>
          {[{ label: 'Home', id: 'hero', href: '/' }, ...navItems, contactNav].map((item) => {
            const active = current === item.id;
            return (
              <li key={item.id}>
                <Box
                  component={Link}
                  href={item.href}
                  onClick={closeDrawer}
                  aria-current={active ? 'location' : undefined}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    py: 1.5,
                    fontSize: '1.35rem',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    textDecoration: 'none',
                    color: active ? colors.text : colors.muted,
                    borderBottom: `1px solid ${colors.border}`,
                    '&:hover': { color: colors.text },
                  }}
                >
                  {item.label}
                  {active && <Box component="span" aria-hidden sx={{ width: 7, height: 7, mt: 1.5, borderRadius: '2px', backgroundColor: colors.accent }} />}
                </Box>
              </li>
            );
          })}
        </Box>
        <Stack spacing={1.5} sx={{ px: 3, mt: 'auto', pb: 4 }}>
          {RESUME_URL && (
            <Button href={RESUME_URL} download={RESUME_FILENAME} variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>
              Download resume
            </Button>
          )}
          <Button
            onClick={() => {
              closeDrawer();
              setPaletteOpen(true);
            }}
            variant="text"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
          <Box sx={{ pt: 1, display: 'flex', justifyContent: 'center' }}>
            <SocialLinks />
          </Box>
        </Stack>
      </Drawer>

      <CommandPalette open={paletteOpen} onOpenChange={handlePaletteChange} />
    </>
  );
};

export default Header;
