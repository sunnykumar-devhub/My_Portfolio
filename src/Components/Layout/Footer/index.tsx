import { Box, Typography, Stack, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#f8fafc',
        py: 6,
        px: { xs: 2, sm: 6 },
        textAlign: 'center',
        mt: 'auto',
      }}
    >
      <Box maxWidth="xl" mx="auto" display="flex" flexDirection="column" alignItems="center">
        {/* Footer Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Box 
            sx={{
              width: 36,
              height: 36,
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.3)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 2,
                background: '#050505',
                borderRadius: '8px',
                zIndex: 1,
              }
            }}
          >
            <Typography 
              sx={{ 
                position: 'relative', 
                zIndex: 2, 
                fontWeight: 900, 
                fontSize: '1rem',
                background: 'linear-gradient(to right, #00f2fe, #4facfe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.5px'
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
              '& span': {
                color: '#00f2fe',
              }
            }}
          >
            Sunny<span>.</span>
          </Typography>
        </Box>

        {/* Subtitle */}
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 400 }}>
          Software Development Engineer-1 (Frontend)
        </Typography>

        {/* Navigation Links */}
        <Stack direction="row" spacing={{ xs: 2, md: 4 }} justifyContent="center" sx={{ mb: 4, flexWrap: 'wrap', gap: 2 }}>
          <RouterLink to="/" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Home</RouterLink>
          <RouterLink to="/about-detailed" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>About</RouterLink>
          <RouterLink to="/SkillsPage" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Skills</RouterLink>
          <RouterLink to="/projectpage" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Projects</RouterLink>
          <RouterLink to="/contact" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Contact</RouterLink>
        </Stack>

        {/* Social Media Icons */}
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 4 }}>
          <IconButton
            component="a"
            href="https://github.com/sunnykumar-devhub"
            target="_blank"
            rel="noopener"
            sx={{ color: 'text.secondary', '&:hover': { color: '#00f2fe', transform: 'translateY(-2px)', transition: 'all 0.2s' } }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/sunnykumar91728"
            target="_blank"
            rel="noopener"
            sx={{ color: 'text.secondary', '&:hover': { color: '#00f2fe', transform: 'translateY(-2px)', transition: 'all 0.2s' } }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/sunnykumar_17"
            target="_blank"
            rel="noopener"
            sx={{ color: 'text.secondary', '&:hover': { color: '#00f2fe', transform: 'translateY(-2px)', transition: 'all 0.2s' } }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:sunnykumar91728@gmail.com"
            sx={{ color: 'text.secondary', '&:hover': { color: '#00f2fe', transform: 'translateY(-2px)', transition: 'all 0.2s' } }}
          >
            <EmailIcon />
          </IconButton>
        </Stack>

        <Divider sx={{ width: '100%', borderColor: 'rgba(255,255,255,0.05)', mb: 3 }} />

        {/* Copyright */}
        <Typography variant="body2" sx={{ color: '#64748b' }}>
          Â© {new Date().getFullYear()} Sunny Kumar. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
