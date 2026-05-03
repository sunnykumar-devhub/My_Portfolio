import React from 'react';
import { Box, Container, Typography, Stack, Button as MuiButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 10, // Account for fixed header
      }}
    >
      {/* Background Gradients */}
      <Box 
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.1) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box 
            sx={{ 
              display: 'inline-block',
              px: 3, 
              py: 1, 
              borderRadius: '999px', 
              border: '1px solid rgba(0, 242, 254, 0.3)',
              background: 'rgba(0, 242, 254, 0.05)',
              mb: 4
            }}
          >
            <Typography variant="body2" sx={{ color: '#00f2fe', fontWeight: 600, letterSpacing: '0.05em' }}>
              AVAILABLE FOR NEW OPPORTUNITIES
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' },
              lineHeight: 1.1,
              mb: 2,
              color: 'text.primary',
            }}
          >
            Hi, I'm <Box component="span" className="text-gradient">Sunny Kumar</Box>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              mb: 4,
              fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.25rem' }
            }}
          >
            Software Development Engineer-1 (Frontend)
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#94a3b8',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              fontSize: { xs: '1rem', sm: '1.125rem' },
              lineHeight: 1.8,
            }}
          >
            I build highly scalable, production-ready web applications using React.js, Next.js, and TypeScript.
            Currently shaping the future of digital experiences at Codebucket Solutions.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
            <MuiButton
              component={RouterLink}
              to="/projectpage"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: 'linear-gradient(to right, #00f2fe, #4facfe)',
                color: '#000',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: '12px',
                '&:hover': {
                  background: 'linear-gradient(to right, #4facfe, #00f2fe)',
                  boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)'
                }
              }}
            >
              View My Work
            </MuiButton>

            <MuiButton
              variant="outlined"
              size="large"
              startIcon={<DownloadIcon />}
              href="#" // Replace with actual resume link later
              sx={{
                color: '#f8fafc',
                borderColor: 'rgba(255,255,255,0.2)',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: '#00f2fe',
                  background: 'rgba(0, 242, 254, 0.05)',
                }
              }}
            >
              Download Resume
            </MuiButton>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
