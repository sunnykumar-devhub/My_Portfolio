import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0a0a0a',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ fontWeight: 800, textAlign: 'center', mb: 8, className: 'text-gradient' }}>
            Experience
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative', maxWidth: '800px', mx: 'auto' }}>
          {/* Timeline line */}
          <Box 
            sx={{ 
              position: 'absolute', 
              left: { xs: '20px', md: '50%' }, 
              top: 0, 
              bottom: 0, 
              width: '2px', 
              backgroundColor: 'rgba(255,255,255,0.1)',
              transform: { xs: 'none', md: 'translateX(-50%)' }
            }} 
          />

          {/* Codebucket SDE-1 */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 6, position: 'relative' }}>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, pr: { md: 6 }, pl: { xs: 7, md: 0 }, pb: { xs: 2, md: 0 } }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%' }}
              >
                <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                  <Typography variant="h5" sx={{ color: '#f8fafc', fontWeight: 700 }}>Codebucket Solutions</Typography>
                  <Typography variant="body1" sx={{ color: '#00f2fe', fontWeight: 600, mb: 1 }}>SDE-1 (Frontend) &bull; Promoted from Intern</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Sep 2024 - Present | Patna, India</Typography>
                </Box>
              </motion.div>
            </Box>
            
            {/* Timeline Dot */}
            <Box 
              sx={{ 
                position: 'absolute', 
                left: { xs: '20px', md: '50%' }, 
                transform: { xs: 'translateX(-50%)', md: 'translateX(-50%)' }, 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                backgroundColor: '#00f2fe',
                border: '4px solid #050505',
                boxShadow: '0 0 10px #00f2fe',
                zIndex: 2,
                top: '6px'
              }} 
            />

            <Box sx={{ flex: 1, pl: { xs: 7, md: 6 } }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <Paper className="glass" sx={{ p: 4, borderRadius: '16px' }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.7 }}>
                    &bull; Design, develop, and maintain scalable, production-ready frontend applications using React.js, Next.js, and TypeScript.<br/>
                    &bull; Build reusable, component-driven UI architectures to improve scalability and maintainability.<br/>
                    &bull; Integrate RESTful APIs using Redux Toolkit and React Query with optimized state management and caching.<br/>
                    &bull; Optimize application performance using lazy loading, code splitting, and efficient rendering strategies.<br/>
                    &bull; Leverage AI-assisted tools (Copilot, Claude, Gemini) for faster debugging and development.
                  </Typography>
                </Paper>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
