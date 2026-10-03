import React from 'react';
import { Box, Container, Typography, Button as MuiButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{ minHeight: '70vh', display: 'flex', alignItems: 'center', backgroundColor: '#050505' }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h1" className="text-gradient" sx={{ fontWeight: 800, fontSize: { xs: '5rem', md: '7rem' }, mb: 2 }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ color: '#f8fafc', fontWeight: 600, mb: 2 }}>
          Page not found
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5 }}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <MuiButton
          component={RouterLink}
          to="/"
          variant="contained"
          startIcon={<ArrowBackIcon />}
          sx={{
            background: 'linear-gradient(to right, #00f2fe, #4facfe)',
            color: '#000',
            fontWeight: 700,
            px: 4,
            py: 1.5,
            borderRadius: '12px',
            '&:hover': {
              background: 'linear-gradient(to right, #4facfe, #00f2fe)',
              boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)'
            }
          }}
        >
          Back to Home
        </MuiButton>
      </Container>
    </Box>
  );
};

export default NotFound;
