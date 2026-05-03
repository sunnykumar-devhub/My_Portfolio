import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Core',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3']
  },
  {
    title: 'State & Data',
    skills: ['Redux Toolkit', 'React Query', 'Context API', 'REST APIs', 'Axios', 'JSON Server']
  },
  {
    title: 'UI & Styling',
    skills: ['Material UI', 'Tailwind CSS', 'Bootstrap', 'CSS Grid', 'Flexbox', 'Framer Motion']
  },
  {
    title: 'Performance & Architecture',
    skills: ['Lazy Loading', 'Code Splitting', 'Reusable Components', 'Component-Driven Design']
  },
  {
    title: 'Forms & State',
    skills: ['React Hook Form', 'Formik']
  },
  {
    title: 'Tools & Practices',
    skills: ['Git & GitHub', 'VS Code', 'Chrome DevTools', 'NPM/Yarn', 'ESLint', 'Prettier', 'Jira', 'Agile/Scrum']
  },
  {
    title: 'AI-Assisted Development',
    skills: ['ChatGPT', 'GitHub Copilot', 'Claude', 'Gemini', 'Perplexity']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 100 }
  }
};

const Skills: React.FC = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#050505',
        position: 'relative',
      }}
    >
      {/* Background Glow */}
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.05) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ fontWeight: 800, textAlign: 'center', mb: 2, className: 'text-gradient' }}>
            Technical Arsenal
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 8, maxWidth: '600px', mx: 'auto' }}>
            A comprehensive overview of the tools, technologies, and practices I use to build scalable web applications.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <motion.div variants={itemVariants} style={{ height: '100%' }}>
                  <Paper 
                    className="glass" 
                    sx={{ 
                      p: 4, 
                      height: '100%', 
                      borderRadius: '16px',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': { 
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px -10px rgba(0, 242, 254, 0.2)'
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ color: '#f8fafc', fontWeight: 700, mb: 3 }}>
                      {category.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          sx={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            color: '#00f2fe',
                            border: '1px solid rgba(0, 242, 254, 0.2)',
                            fontWeight: 500,
                            borderRadius: '8px',
                            '&:hover': {
                              backgroundColor: 'rgba(0, 242, 254, 0.1)',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
