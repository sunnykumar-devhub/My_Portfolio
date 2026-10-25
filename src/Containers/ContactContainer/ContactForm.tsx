'use client';

import React, { useState } from 'react';
import { Box, Typography, Snackbar, Alert, TextField, Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { CONTACT_EMAIL, WEB3FORMS_KEY } from '../../config/site';
import { colors } from '../../theme';

type FormValues = { name: string; email: string; message: string };
type Notice = { message: string; severity: 'success' | 'error' } | null;

const EMPTY_FORM: FormValues = { name: '', email: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: colors.bg,
    '& fieldset': { borderColor: colors.borderStrong },
    '&:hover fieldset': { borderColor: colors.muted },
    '&.Mui-focused fieldset': { borderColor: colors.accent },
  },
  '& .MuiInputLabel-root.Mui-focused': { color: colors.accent },
};

const sendWithWeb3Forms = async (values: FormValues) => {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `Portfolio message from ${values.name}`,
      from_name: values.name,
      ...values,
    }),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.message || 'Request failed');
};

// Only rendered when a Web3Forms key is configured (see ContactContainer), so every submit really sends.
// `level` is one below the section title, which is the page's h1 on /contact.
const ContactForm: React.FC<{ level: 'h2' | 'h3' }> = ({ level }) => {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [notice, setNotice] = useState<Notice>(null);
  const [sending, setSending] = useState(false);

  const emailInvalid = values.email !== '' && !EMAIL_PATTERN.test(values.email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailInvalid) return;

    // Honeypot: the hidden "botcheck" box is invisible to people, so a tick means a spam bot filled the form
    if (new FormData(e.currentTarget).get('botcheck')) {
      setValues(EMPTY_FORM);
      return;
    }

    setSending(true);
    try {
      await sendWithWeb3Forms(values);
      setNotice({ message: 'Thanks for reaching out. Your message is on its way.', severity: 'success' });
      setValues(EMPTY_FORM);
    } catch {
      setNotice({ message: `Sorry, the message couldn't be sent. Please email ${CONTACT_EMAIL} instead.`, severity: 'error' });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        aria-labelledby="contact-form-title"
        sx={{ display: 'grid', gap: 2.5, p: { xs: 3, md: 4 }, borderRadius: '16px', border: `1px solid ${colors.border}`, backgroundColor: colors.surface }}
      >
        <Typography id="contact-form-title" variant="h3" component={level} sx={{ fontSize: '1.25rem' }}>
          Or send a message
        </Typography>
        <Box component="input" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden sx={{ display: 'none' }} />
        <TextField label="Your name" name="name" autoComplete="name" value={values.name} onChange={handleChange} fullWidth required sx={fieldSx} />
        <TextField
          label="Your email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          fullWidth
          required
          error={emailInvalid}
          helperText={emailInvalid ? 'Enter a valid email address' : undefined}
          sx={fieldSx}
        />
        <TextField
          label="Message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Tell me about the role or project"
          fullWidth
          multiline
          minRows={4}
          required
          sx={fieldSx}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          endIcon={<EastIcon />}
          disabled={sending || emailInvalid || !values.name.trim() || !values.message.trim()}
          sx={{ justifySelf: 'start' }}
        >
          {sending ? 'Sending…' : 'Send message'}
        </Button>
      </Box>

      <Snackbar open={notice !== null} autoHideDuration={6000} onClose={() => setNotice(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        {notice ? (
          <Alert onClose={() => setNotice(null)} severity={notice.severity} variant="filled" sx={{ width: '100%', fontWeight: 500 }}>
            {notice.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </>
  );
};

export default ContactForm;
