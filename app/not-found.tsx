'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound: React.FC = () => {
  return (
    <Box component="section" sx={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography className="mono" sx={{ color: 'primary.main', mb: 2 }}>
          error 404
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, mb: 2 }}>
          This page doesn&apos;t exist.
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
          The link may be broken, or the page may have moved.
        </Typography>
        <Button component={Link} href="/" variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
          Back to home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;
