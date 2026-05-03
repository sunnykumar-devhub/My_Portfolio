import React from 'react';
import { Box } from '@mui/material';
import Projects from '../../Containers/ProjectsContainer';

const ProjectPage: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 8, md: 10 }, minHeight: '100vh', backgroundColor: '#050505' }}>
      <Projects />
    </Box>
  );
};

export default ProjectPage;
