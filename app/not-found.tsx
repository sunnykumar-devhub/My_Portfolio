import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from '../src/Components/Common/LinkButton';

const NotFound: React.FC = () => {
  return (
    <Box component="section" sx={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography className="mono" sx={{ color: 'primary.main', mb: 2 }}>
          error 404
        </Typography>
        <Typography variant="h2" component="h1" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, mb: 2 }}>
          This page doesn&apos;t exist.
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
          The link may be broken, or the page may have moved.
        </Typography>
        <LinkButton href="/" variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
          Back to home
        </LinkButton>
      </Container>
    </Box>
  );
};

export default NotFound;
