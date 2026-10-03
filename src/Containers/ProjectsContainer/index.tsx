'use client';

import React from 'react';
import { Box, Container, Typography, Paper, Stack, Chip, Button as MuiButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Project = {
  title: string;
  techStack: string[];
  description: string;
  link: string;
  // Optional: deployed URL. The "Live Demo" button is hidden until this is set.
  demoLink?: string;
  // Optional: screenshot placed in /public, e.g. '/projects/ssrstyles.png'
  image?: string;
};

const featuredProjects: Project[] = [
  {
    title: 'SSRStyles \u2013 E-commerce Platform',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer'],
    description: 'A full-stack e-commerce platform with JWT-based authentication, dynamic product listings, cart workflows and RESTful APIs built on Express and MongoDB. Integrated Multer for product image uploads.',
    link: 'https://github.com/sunnykumar-devhub/SSRStyles',
  },
  {
    title: 'Task Tracker Web Application',
    techStack: ['React.js', 'Redux Toolkit', 'React DnD', 'React Hook Form', 'Chart.js', 'JSON Server'],
    description: 'Role-based dashboards for Managers and Developers. Implemented drag-and-drop task workflows using React DnD, form handling with React Hook Form, and progress charts with Chart.js.',
    link: 'https://github.com/sunnykumar-devhub/TaskTracker',
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
  const pathname = usePathname();

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
          <Typography variant="h2" className="text-gradient" sx={{ fontWeight: 800, textAlign: 'center', mb: 2 }}>
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
                  {project.image && (
                    <Box
                      component="img"
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        aspectRatio: '16 / 9',
                        objectFit: 'cover',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        mb: 4,
                      }}
                    />
                  )}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ color: '#f8fafc', fontWeight: 800, mb: 2 }}>
                      {project.title}
                    </Typography>
                    
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
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

                  <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                    <MuiButton
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: '#f8fafc',
                        color: '#050505',
                        fontWeight: 600,
                        '&:hover': { backgroundColor: '#cbd5e1' }
                      }}
                    >
                      View Code
                    </MuiButton>
                    {project.demoLink && (
                    <MuiButton
                      variant="outlined"
                      startIcon={<OpenInNewIcon />}
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#f8fafc',
                        borderColor: 'rgba(255,255,255,0.2)',
                        fontWeight: 600,
                        '&:hover': { borderColor: '#f8fafc', backgroundColor: 'rgba(255,255,255,0.05)' }
                      }}
                    >
                      Live Demo
                    </MuiButton>
                    )}
                  </Stack>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </motion.div>

        {pathname !== '/projects' && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <MuiButton
            component={Link}
            href="/projects"
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
        )}
      </Container>
    </Box>
  );
};

export default Projects;
