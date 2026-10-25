import React from 'react';
import { Box, Typography } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import LocalTime from '../../Components/Common/LocalTime';
import CopyEmailButton from './CopyEmailButton';
import ContactForm from './ContactForm';
import { RESUME_FILENAME, RESUME_URL, WEB3FORMS_KEY } from '../../config/site';
import { getSocialLink } from '../../data/profile';
import { colors } from '../../theme';

type Row = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  download?: string;
  action?: React.ReactNode;
};

const email = getSocialLink('email');
const linkedin = getSocialLink('linkedin');
const github = getSocialLink('github');

const rows: Row[] = [
  { label: 'Email', value: email.handle, href: email.href, action: <CopyEmailButton /> },
  { label: 'LinkedIn', value: linkedin.handle, href: linkedin.href, external: true },
  { label: 'GitHub', value: github.handle, href: github.href, external: true },
  ...(RESUME_URL ? [{ label: 'Resume', value: 'Download PDF', href: RESUME_URL, download: RESUME_FILENAME }] : []),
];

const ContactRow: React.FC<{ row: Row }> = ({ row }) => {
  const Icon = row.download ? FileDownloadOutlinedIcon : NorthEastIcon;
  return (
    <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 2, borderBottom: `1px solid ${colors.border}` }}>
      <Box
        component="a"
        href={row.href}
        download={row.download}
        target={row.external ? '_blank' : undefined}
        rel={row.external ? 'noopener noreferrer' : undefined}
        // No aria-label: the visible label and value are the link's name, so voice-control users can say what they see
        sx={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          py: { xs: 2.5, md: 3 },
          color: colors.text,
          textDecoration: 'none',
          '& .contact-icon': { transition: 'transform .2s, color .2s', color: colors.subtle },
          '&:hover .contact-icon': { color: colors.accent, transform: row.download ? 'translateY(2px)' : 'translate(2px, -2px)' },
          '&:hover .contact-value': { color: colors.accent },
        }}
      >
        <Box sx={{ minWidth: 0 }}>
          <Typography className="mono" sx={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.subtle, mb: 0.5 }}>
            {row.label}
          </Typography>
          <Typography
            className="contact-value"
            sx={{ fontSize: { xs: '1.1rem', md: '1.35rem' }, fontWeight: 500, letterSpacing: '-0.02em', overflowWrap: 'anywhere', transition: 'color .2s' }}
          >
            {row.value}
            {row.external && <span className="visually-hidden"> (opens in a new tab)</span>}
          </Typography>
        </Box>
        <Icon className="contact-icon" aria-hidden />
      </Box>
      {row.action}
    </Box>
  );
};

const Contact: React.FC<{ standalone?: boolean }> = ({ standalone = false }) => {
  const hasForm = Boolean(WEB3FORMS_KEY);

  return (
    <Section id="contact" first={standalone}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 5fr) minmax(0, 6fr)' },
          gap: { xs: 2, md: 10 },
        }}
      >
        <div>
          <SectionHeading
            as={standalone ? 'h1' : 'h2'}
            eyebrow="Contact"
            title={
              <>
                Hiring for a frontend role? <span className="serif">Let&apos;s talk.</span>
              </>
            }
            subtitle={
              <>
                Email is the quickest way to reach me. I&apos;m based in Patna, India (local time{' '}
                <Box component="span" sx={{ color: colors.text }}>
                  <LocalTime />
                </Box>
                ).
              </>
            }
          />
        </div>

        <Reveal delay={0.1}>
          <Box component="ul" sx={{ listStyle: 'none', borderTop: `1px solid ${colors.border}`, mb: hasForm ? 6 : 0 }}>
            {rows.map((row) => (
              <ContactRow key={row.label} row={row} />
            ))}
          </Box>
          {hasForm && <ContactForm level={standalone ? 'h2' : 'h3'} />}
        </Reveal>
      </Box>
    </Section>
  );
};

export default Contact;
