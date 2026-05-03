import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button as MuiButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AboutDetailedContainer: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 10, minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        <Box sx={{ mb: 6 }}>
          <MuiButton
            component={RouterLink}
            to="/"
            startIcon={<ArrowBackIcon />}
            sx={{ color: 'text.secondary', '&:hover': { color: '#00f2fe', background: 'transparent' } }}
          >
            Back to Home
          </MuiButton>
        </Box>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, className: 'text-gradient' }}>
            My Journey
          </Typography>
          
          <Paper className="glass" sx={{ p: { xs: 4, md: 6 }, borderRadius: '24px', mb: 6 }}>
            <Typography variant="h5" sx={{ color: '#f8fafc', fontWeight: 600, mb: 3 }}>
              Education
            </Typography>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ borderLeft: '2px solid rgba(0, 242, 254, 0.5)', pl: 3 }}>
                  <Typography variant="h6" sx={{ color: '#f8fafc', fontWeight: 600 }}>Bachelor of Computer Applications (BCA)</Typography>
                  <Typography variant="body1" sx={{ color: '#00f2fe', mb: 1 }}>Presidency College, Bangalore</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>2021 – 2024</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ borderLeft: '2px solid rgba(0, 242, 254, 0.5)', pl: 3 }}>
                  <Typography variant="h6" sx={{ color: '#f8fafc', fontWeight: 600 }}>Senior Secondary (12th Grade)</Typography>
                  <Typography variant="body1" sx={{ color: '#00f2fe', mb: 1 }}>DC College, Hajipur</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>2019 – 2020</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <Paper className="glass" sx={{ p: { xs: 4, md: 6 }, borderRadius: '24px' }}>
            <Typography variant="h5" sx={{ color: '#f8fafc', fontWeight: 600, mb: 3 }}>
              Certifications & Training
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
              <Box sx={{ p: 3, borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
                <Typography variant="body1" sx={{ color: '#f8fafc', fontWeight: 500 }}>Leading in the Age of Generative AI</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Infosys Springboard</Typography>
              </Box>
              <Box sx={{ p: 3, borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
                <Typography variant="body1" sx={{ color: '#f8fafc', fontWeight: 500 }}>Artificial Intelligence</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>LinkedIn Learning</Typography>
              </Box>
              <Box sx={{ p: 3, borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
                <Typography variant="body1" sx={{ color: '#f8fafc', fontWeight: 500 }}>Common Internship Test</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Internship Studio</Typography>
              </Box>
              <Box sx={{ p: 3, borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
                <Typography variant="body1" sx={{ color: '#f8fafc', fontWeight: 500 }}>IoT Certification</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>General</Typography>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutDetailedContainer;
