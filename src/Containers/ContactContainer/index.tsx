'use client';

import React, { useState } from 'react';
import { Box, Typography, Snackbar, Alert, TextField, Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import Surface from '../../Components/Common/Surface';
import SocialIcon from '../../Components/Common/SocialIcon';
import { CONTACT_EMAIL, WEB3FORMS_KEY } from '../../config/site';
import { getSocialLink, profile } from '../../data/profile';
import { colors } from '../../theme';

type FormValues = { name: string; email: string; message: string };
type Notice = { message: string; severity: 'success' | 'error' } | null;

const EMPTY_FORM: FormValues = { name: '', email: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: colors.bg,
    '& fieldset': { borderColor: colors.border },
    '&:hover fieldset': { borderColor: colors.borderStrong },
    '&.Mui-focused fieldset': { borderColor: colors.emerald },
  },
};

const channels = (['email', 'linkedin', 'github'] as const).map(getSocialLink);

const ChannelCard: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = ({ icon, label, value, href }) => {
  const isExternal = href?.startsWith('http');
  return (
    <Surface
      {...(href && {
        component: 'a',
        href,
        target: isExternal ? '_blank' : undefined,
        rel: isExternal ? 'noopener noreferrer' : undefined,
      })}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2,
        borderRadius: '12px',
        color: colors.text,
        textDecoration: 'none',
        transition: 'border-color .2s',
        ...(href && { '&:hover': { borderColor: 'rgba(52, 211, 153, 0.45)' } }),
      }}
    >
      <Box sx={{ color: colors.emerald, display: 'grid', placeItems: 'center' }}>{icon}</Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ fontSize: '0.78rem', color: colors.subtle }}>{label}</Typography>
        <Typography sx={{ fontSize: '0.95rem', overflowWrap: 'anywhere' }}>{value}</Typography>
      </Box>
    </Surface>
  );
};

// Opens the visitor's mail client with the message prefilled; used when no form service key is configured
const openMailClient = ({ name, email, message }: FormValues) => {
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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

const Contact = () => {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [notice, setNotice] = useState<Notice>(null);
  const [sending, setSending] = useState(false);

  const emailInvalid = values.email !== '' && !EMAIL_PATTERN.test(values.email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInvalid) return;

    if (!WEB3FORMS_KEY) {
      openMailClient(values);
      return;
    }

    setSending(true);
    try {
      await sendWithWeb3Forms(values);
      setNotice({ message: 'Thank you for reaching out! I will get back to you soon.', severity: 'success' });
      setValues(EMPTY_FORM);
    } catch {
      setNotice({ message: `Sorry, your message could not be sent. Please email me at ${CONTACT_EMAIL}.`, severity: 'error' });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" alt>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' }, gap: { xs: 4, md: 8 } }}>
        <Box>
          <SectionHeading
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
              {channels.map((link) => (
                <ChannelCard key={link.id} icon={<SocialIcon id={link.id} />} label={link.label} value={link.handle} href={link.href} />
              ))}
              <ChannelCard icon={<PlaceOutlinedIcon fontSize="small" />} label="Location" value={profile.location} />
            </Stack>
          </Reveal>
        </Box>

        <Reveal delay={0.1}>
          <Surface
            component="form"
            onSubmit={handleSubmit}
            aria-labelledby="contact-form-title"
            sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, borderRadius: '20px', height: 'auto' }}
          >
            <Typography id="contact-form-title" variant="h3" sx={{ fontSize: '1.4rem', mb: 0.5 }}>
              Send a message
            </Typography>
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
              helperText={emailInvalid ? 'Enter a valid email address' : ' '}
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
              rows={5}
              required
              sx={fieldSx}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<SendIcon />}
              disabled={sending || emailInvalid || !values.name.trim() || !values.message.trim()}
              sx={{ py: 1.4 }}
            >
              {sending ? 'Sending...' : 'Send message'}
            </Button>
          </Surface>
        </Reveal>
      </Box>

      <Snackbar
        open={notice !== null}
        autoHideDuration={6000}
        onClose={() => setNotice(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {notice ? (
          <Alert onClose={() => setNotice(null)} severity={notice.severity} variant="filled" sx={{ width: '100%', fontWeight: 600 }}>
            {notice.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </Section>
  );
};

export default Contact;
