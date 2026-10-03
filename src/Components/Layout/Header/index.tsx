import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, Container, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
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
  contact: '/contact',
};

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 20 });
  const location = useLocation();

  // On the home page, highlight the nav item for the section crossing the middle of the viewport
  useEffect(() => {
    if (location.pathname !== '/') return;

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
  }, [location.pathname]);

  const activePath = location.pathname === '/' ? sectionToPath[activeSection] : location.pathname;

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          // Always opaque enough that scrolled content never shows through the nav
          backgroundColor: trigger ? 'rgba(5, 5, 5, 0.85)' : 'rgba(5, 5, 5, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: trigger ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', height: 80 }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Box 
                component={RouterLink} 
                to="/"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5, 
                  textDecoration: 'none' 
                }}
              >
                <Box 
                  component={motion.div}
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 2,
                      background: '#050505',
                      borderRadius: '10px',
                      zIndex: 1,
                    }
                  }}
                >
                  <Typography 
                    sx={{ 
                      position: 'relative', 
                      zIndex: 2, 
                      fontWeight: 900, 
                      fontSize: '1.2rem',
                      background: 'linear-gradient(to right, #00f2fe, #4facfe)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      letterSpacing: '-1px'
                    }}
                  >
                    SK
                  </Typography>
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 800, 
                    letterSpacing: '-0.02em',
                    color: '#f8fafc',
                    display: { xs: 'none', sm: 'block' },
                    '& span': {
                      color: '#00f2fe',
                    }
                  }}
                >
                  Sunny<span>.</span>
                </Typography>
              </Box>
            </motion.div>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item, index) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Button 
                    component={RouterLink} 
                    to={item.path}
                    aria-current={activePath === item.path ? 'page' : undefined}
                    sx={{
                      color: activePath === item.path ? '#00f2fe' : 'text.secondary',
                      fontWeight: 600,
                      px: 2,
                      '&:hover': {
                        color: '#f8fafc',
                        backgroundColor: 'rgba(255,255,255,0.05)'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              sx={{ display: { xs: 'block', md: 'none' }, color: 'text.primary' }}
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
            sx: {
              backgroundColor: '#050505',
              backgroundImage: 'none',
              borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
            }
          }
        }}
      >
        <Box sx={{ width: 250, padding: 3, display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
          {navItems.map((item) => (
            <Button 
              key={item.label}
              fullWidth 
              onClick={toggleDrawer} 
              component={RouterLink} 
              to={item.path}
              aria-current={activePath === item.path ? 'page' : undefined}
              sx={{
                justifyContent: 'flex-start',
                color: activePath === item.path ? '#00f2fe' : 'text.secondary',
                fontSize: '1.1rem',
                py: 1.5,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
