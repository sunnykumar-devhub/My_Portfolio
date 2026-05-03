import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Snackbar,
  Alert,
  Paper,
  TextField,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSnackbarMessage('Thank you for reaching out! I will get back to you soon.');
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#050505',
        position: 'relative',
      }}
    >
      {/* Background glow */}
      <Box 
        sx={{
          position: 'absolute',
          bottom: '0%',
          right: '50%',
          transform: 'translateX(50%)',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.05) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            className="glass"
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: '24px',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                className: 'text-gradient'
              }}
            >
              Let's Connect
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              Have a project in mind or want to discuss opportunities? Send me a message!
            </Typography>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <TextField
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                fullWidth
                variant="outlined"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                    '&.Mui-focused fieldset': { borderColor: '#00f2fe' },
                  }
                }}
              />

              <TextField
                label="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                type="email"
                fullWidth
                variant="outlined"
                required
                error={formData.email !== '' && !formData.email.includes('@')}
                helperText={
                  formData.email !== '' && !formData.email.includes('@')
                    ? 'Enter a valid email address'
                    : ''
                }
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                    '&.Mui-focused fieldset': { borderColor: '#00f2fe' },
                  }
                }}
              />

              <TextField
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                    '&.Mui-focused fieldset': { borderColor: '#00f2fe' },
                  }
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                fullWidth
                sx={{
                  background: 'linear-gradient(to right, #00f2fe, #4facfe)',
                  color: '#000',
                  fontWeight: 700,
                  py: 1.5,
                  borderRadius: '12px',
                  mt: 2,
                  '&:hover': {
                    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
                    boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)'
                  }
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </motion.div>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            variant="filled"
            sx={{ width: '100%', backgroundColor: '#00f2fe', color: '#000', fontWeight: 600 }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
