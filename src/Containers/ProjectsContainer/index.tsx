import React from 'react';
import { Box, Container, Typography, Paper, Stack, Chip, Button as MuiButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

const featuredProjects = [
  {
    title: 'SSRStyles â€“ E-commerce Platform',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    description: 'A full-stack e-commerce platform with secure JWT-based authentication. Features dynamic product listings, cart workflows, and RESTful APIs. Integrated Multer for image uploads and CryptoJS for password encryption.',
    link: 'https://github.com/sunnykumar-devhub/ssrstyles', // placeholder
    demoLink: '#',
  },
  {
    title: 'Task Tracker Web Application',
    techStack: ['React.js', 'Tailwind CSS', 'React DnD', 'JSON Server'],
    description: 'Role-based dashboards for Managers and Developers. Implemented drag-and-drop task workflows using React DnD. Built authentication flows and responsive UI with Tailwind CSS.',
    link: 'https://github.com/sunnykumar-devhub/task-tracker', // placeholder
    demoLink: '#',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 100 }
  }
};

const Projects: React.FC = () => {
  return (
    <Box
      id="projects"
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
          <Typography variant="h2" sx={{ fontWeight: 800, textAlign: 'center', mb: 2, className: 'text-gradient' }}>
            Featured Work
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 8, maxWidth: '600px', mx: 'auto' }}>
            A selection of complex applications I've built, showcasing my expertise in modern frontend frameworks and full-stack integration.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Stack spacing={6}>
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Paper 
                  className="glass"
                  sx={{ 
                    p: { xs: 4, md: 6 }, 
                    borderRadius: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ color: '#f8fafc', fontWeight: 800, mb: 2 }}>
                      {project.title}
                    </Typography>
                    
                    <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                      {project.techStack.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(0, 242, 254, 0.1)',
                            color: '#00f2fe',
                            fontWeight: 600,
                            borderRadius: '6px',
                            border: '1px solid rgba(0, 242, 254, 0.2)'
                          }}
                        />
                      ))}
                    </Stack>

                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                      {project.description}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={2} mt="auto">
                    <MuiButton
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      href={project.link}
                      target="_blank"
                      sx={{
                        backgroundColor: '#f8fafc',
                        color: '#050505',
                        fontWeight: 600,
                        '&:hover': { backgroundColor: '#cbd5e1' }
                      }}
                    >
                      View Code
                    </MuiButton>
                    <MuiButton
                      variant="outlined"
                      startIcon={<OpenInNewIcon />}
                      href={project.demoLink}
                      target="_blank"
                      sx={{
                        color: '#f8fafc',
                        borderColor: 'rgba(255,255,255,0.2)',
                        fontWeight: 600,
                        '&:hover': { borderColor: '#f8fafc', backgroundColor: 'rgba(255,255,255,0.05)' }
                      }}
                    >
                      Live Demo
                    </MuiButton>
                  </Stack>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </motion.div>

        <Box display="flex" justifyContent="center" mt={8}>
          <MuiButton
            component={RouterLink}
            to="/projectpage"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: '#00f2fe',
              borderColor: 'rgba(0, 242, 254, 0.5)',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              borderRadius: '8px',
              '&:hover': {
                borderColor: '#00f2fe',
                background: 'rgba(0, 242, 254, 0.05)'
              }
            }}
          >
            View All Projects
          </MuiButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
