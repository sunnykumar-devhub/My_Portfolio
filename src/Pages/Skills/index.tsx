import React from 'react';
import { Box } from '@mui/material';
import Skills from '../../Containers/SkillsContainer';

const SkillsPage: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 8, md: 10 }, minHeight: '100vh', backgroundColor: '#050505' }}>
      <Skills />
    </Box>
  );
};

export default SkillsPage;
