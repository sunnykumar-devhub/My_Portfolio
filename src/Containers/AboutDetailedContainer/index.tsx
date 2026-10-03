'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button as MuiButton } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AboutDetailedContainer: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 10, minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        <Box sx={{ mb: 6 }}>
          <MuiButton
            component={Link}
            href="/"
            startIcon={<ArrowBackIcon />}
            sx={{ color: 'text.secondary', '&:hover': { color: '#00f2fe', background: 'transparent' } }}
          >
            Back to Home
          </MuiButton>
        </Box>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="h2" className="text-gradient" sx={{ fontWeight: 800, mb: 4 }}>
            My Journey
          </Typography>
          
          <Paper className="glass" sx={{ p: { xs: 4, md: 6 }, borderRadius: '24px', mb: 6 }}>
            <Typography variant="h5" sx={{ color: '#f8fafc', fontWeight: 600, mb: 3 }}>
              Who I Am
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
              I'm a frontend engineer who enjoys turning complex requirements into fast, intuitive interfaces. I work mainly with <strong>React.js, Next.js and TypeScript</strong>, and I care about clean component architecture, predictable state management and performance.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
              I joined Codebucket Solutions as an intern and was promoted to SDE-1, where I now build role-based systems and reusable UI used across production applications.
            </Typography>
          </Paper>

          <Paper className="glass" sx={{ p: { xs: 4, md: 6 }, borderRadius: '24px', mb: 6 }}>
            <Typography variant="h5" sx={{ color: '#f8fafc', fontWeight: 600, mb: 3 }}>
              Work Experience
            </Typography>
            <Box sx={{ borderLeft: '2px solid rgba(0, 242, 254, 0.5)', pl: 3 }}>
              <Typography variant="h6" sx={{ color: '#f8fafc', fontWeight: 600 }}>SDE-1 (Frontend) &bull; Promoted from Intern</Typography>
              <Typography variant="body1" sx={{ color: '#00f2fe', mb: 1 }}>Codebucket Solutions Private Limited, Patna</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>Sep 2024 {'\u2013'} Present</Typography>
              <Box component="ul" sx={{ color: 'text.secondary', pl: 2.5, lineHeight: 1.8, '& li': { mb: 0.5 } }}>
                <li>Build scalable, production-ready frontend applications with React.js, Next.js and TypeScript.</li>
                <li>Develop role-based systems and reusable, component-driven UI architectures.</li>
                <li>Integrate REST APIs with Redux Toolkit and React Query, including caching and optimized state.</li>
                <li>Improve performance with lazy loading, code splitting and efficient rendering.</li>
              </Box>
            </Box>
          </Paper>

          <Paper className="glass" sx={{ p: { xs: 4, md: 6 }, borderRadius: '24px', mb: 6 }}>
            <Typography variant="h5" sx={{ color: '#f8fafc', fontWeight: 600, mb: 3 }}>
              Education
            </Typography>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ borderLeft: '2px solid rgba(0, 242, 254, 0.5)', pl: 3 }}>
                  <Typography variant="h6" sx={{ color: '#f8fafc', fontWeight: 600 }}>Bachelor of Computer Applications (BCA)</Typography>
                  <Typography variant="body1" sx={{ color: '#00f2fe', mb: 1 }}>Presidency College, Bangalore</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>2021 {'\u2013'} 2024</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ borderLeft: '2px solid rgba(0, 242, 254, 0.5)', pl: 3 }}>
                  <Typography variant="h6" sx={{ color: '#f8fafc', fontWeight: 600 }}>Senior Secondary (12th Grade)</Typography>
                  <Typography variant="body1" sx={{ color: '#00f2fe', mb: 1 }}>DC College, Hajipur</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>2019 {'\u2013'} 2020</Typography>
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
