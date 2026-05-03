import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button as MuiButton } from '@mui/material';

const AboutSummary: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#050505',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, className: 'text-gradient' }}>
                About Me
              </Typography>
              <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 600, mb: 3 }}>
                Engineering robust digital experiences.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 3, lineHeight: 1.8 }}>
                I am a Software Development Engineer-1 (Frontend) with hands-on experience building scalable, production-ready web applications using <strong>React.js, Next.js, and TypeScript</strong>.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 4, lineHeight: 1.8 }}>
                Currently at <strong>Codebucket Solutions Private Limited</strong>, I contribute to role-based systems, reusable component architectures, and performance-optimized user interfaces. I actively leverage AI-assisted development tools to accelerate delivery while maintaining strict ownership of engineering decisions.
              </Typography>
              
              <MuiButton
                component={RouterLink}
                to="/about-detailed"
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: '#00f2fe',
                  borderColor: 'rgba(0, 242, 254, 0.5)',
                  px: 3,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    borderColor: '#00f2fe',
                    background: 'rgba(0, 242, 254, 0.05)'
                  }
                }}
              >
                Read Full Details
              </MuiButton>
            </motion.div>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {[
                  { number: '1+', label: 'Years Experience' },
                  { number: '10+', label: 'Projects Built' },
                  { number: '3', label: 'Frontend Frameworks' },
                  { number: '100%', label: 'Commitment' }
                ].map((stat, idx) => (
                  <Paper 
                    key={idx}
                    className="glass"
                    sx={{ 
                      p: 4, 
                      textAlign: 'center',
                      borderRadius: '16px',
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'translateY(-5px)' }
                    }}
                  >
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#f8fafc', mb: 1 }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#00f2fe', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {stat.label}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSummary;
