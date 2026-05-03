import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
        }}
      />

      <Box sx={{ position: 'relative', width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Outer Rotating Ring */}
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderTop: '2px solid #00f2fe',
            borderRight: '2px solid rgba(0, 242, 254, 0.1)',
          }}
        />

        {/* Inner Pulsing Monogram */}
        <Box
          component={motion.div}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 0.8],
            opacity: 1
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: { duration: 0.5 }
          }}
          sx={{
            position: 'relative',
            zIndex: 2,
            width: 50,
            height: 50,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 2,
              background: '#050505',
              borderRadius: '10px',
              zIndex: 1,
            }
          }}
        >
          <Typography
            sx={{
              position: 'relative',
              zIndex: 2,
              fontWeight: 900,
              fontSize: '1.2rem',
              background: 'linear-gradient(to right, #00f2fe, #4facfe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-1px'
            }}
          >
            SK
          </Typography>
        </Box>
      </Box>

      {/* Loading Text */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        sx={{ mt: 4 }}
      >
        <Typography
          variant="overline"
          sx={{
            color: '#f8fafc',
            fontWeight: 700,
            letterSpacing: '0.3em',
            opacity: 0.5,
          }}
        >
          Loading Sunny.dev
        </Typography>
      </Box>
    </Box>
  );
};

export default Loader;
