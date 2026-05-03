import React from 'react';
import Footer from './Footer'; 
import Header from './Header';
import { Box } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
      <Header />
        <Box sx={{ flexGrow: 1, pt: { xs: 8, md: 10 } }}>
          {children}
        </Box>
      <Footer />
    </Box>
  );
};
export default Layout;
