'use client';

import React, { useState } from 'react';
import { Box, Typography, Snackbar, Alert, TextField, Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import { CONTACT_EMAIL, WEB3FORMS_KEY } from '../../config/site';
import { profile } from '../../data/profile';
import { colors } from '../../theme';

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: colors.bg,
    '& fieldset': { borderColor: colors.border },
    '&:hover fieldset': { borderColor: colors.borderStrong },
    '&.Mui-focused fieldset': { borderColor: colors.emerald },
  },
};

const channels = [
  { icon: <EmailIcon fontSize="small" />, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: <LinkedInIcon fontSize="small" />, label: 'LinkedIn', value: 'in/sunnykumar-devhub', href: profile.socials.linkedin },
  { icon: <GitHubIcon fontSize="small" />, label: 'GitHub', value: 'sunnykumar-devhub', href: profile.socials.github },
  { icon: <PlaceOutlinedIcon fontSize="small" />, label: 'Location', value: profile.location },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const notify = (message: string, severity: 'success' | 'error') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // No form service configured yet: hand off to the visitor's mail client so the message still reaches me
    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\n${formData.name} (${formData.email})`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Request failed');

      notify('Thank you for reaching out! I will get back to you soon.', 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      notify(`Sorry, your message could not be sent. Please email me at ${CONTACT_EMAIL}.`, 'error');
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" alt>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' }, gap: { xs: 4, md: 8 } }}>
        <Box>
          <SectionHeading
            index="06"
            eyebrow="contact"
            title={
              <>
                Let&apos;s build something <Box component="span" className="text-gradient">great</Box>.
              </>
            }
            subtitle="Hiring for a frontend role, or want to talk React, Next.js or dashboards? My inbox is open."
          />
          <Reveal>
            <Stack spacing={1.5}>
              {channels.map((c) => {
                const inner = (
                  <>
                    <Box sx={{ color: colors.emerald, display: 'grid', placeItems: 'center' }}>{c.icon}</Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography sx={{ fontSize: '0.78rem', color: colors.subtle }}>{c.label}</Typography>
                      <Typography sx={{ fontSize: '0.95rem', overflowWrap: 'anywhere' }}>{c.value}</Typography>
                    </Box>
                  </>
                );
                const sx = {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  borderRadius: '12px',
                  border: `1px solid ${colors.border}`,
                  backgroundColor: colors.surface,
                  color: colors.text,
                  textDecoration: 'none',
                  transition: 'border-color .2s',
                };
                return c.href ? (
                  <Box
                    key={c.label}
                    component="a"
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    sx={{ ...sx, '&:hover': { borderColor: 'rgba(52, 211, 153, 0.45)' } }}
                  >
                    {inner}
                  </Box>
                ) : (
                  <Box key={c.label} sx={sx}>
                    {inner}
                  </Box>
                );
              })}
            </Stack>
          </Reveal>
        </Box>

        <Reveal delay={0.1}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
              p: { xs: 3, md: 4 },
              borderRadius: '20px',
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.surface,
            }}
          >
            <Typography variant="h5" sx={{ mb: 0.5 }}>
              Send a message
            </Typography>
            <TextField label="Your name" name="name" value={formData.name} onChange={handleChange} fullWidth required sx={fieldSx} />
            <TextField
              label="Your email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              error={formData.email !== '' && !formData.email.includes('@')}
              helperText={formData.email !== '' && !formData.email.includes('@') ? 'Enter a valid email address' : ''}
              sx={fieldSx}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about the role or project"
              fullWidth
              multiline
              rows={5}
              required
              sx={fieldSx}
            />
            <Button type="submit" variant="contained" color="primary" size="large" endIcon={<SendIcon />} disabled={sending} sx={{ py: 1.4 }}>
              {sending ? 'Sending...' : 'Send message'}
            </Button>
          </Box>
        </Reveal>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} variant="filled" sx={{ width: '100%', fontWeight: 600 }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Section>
  );
};

export default Contact;
