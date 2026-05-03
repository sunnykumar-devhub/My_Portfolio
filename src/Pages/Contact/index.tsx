import React from 'react';
import { Box } from '@mui/material';
import ContactSection from '../../Containers/ContactContainer';

const ContactPage: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 8, md: 10 }, minHeight: '100vh', backgroundColor: '#050505' }}>
      <ContactSection />
    </Box>
  );
};

export default ContactPage;
