'use client';

import React from 'react';
import { IconButton, Stack } from '@mui/material';
import SocialIcon from './SocialIcon';
import { socialLinks, type SocialId } from '../../data/profile';
import { colors } from '../../theme';

type Props = {
  ids?: SocialId[];
  // "outlined" draws a round border around each icon (hero); "plain" is icon-only (footer, menu)
  variant?: 'outlined' | 'plain';
};

const isExternal = (href: string) => href.startsWith('http');

const SocialLinks: React.FC<Props> = ({ ids = ['github', 'linkedin', 'x', 'email'], variant = 'plain' }) => {
  const links = ids.map((id) => socialLinks.find((l) => l.id === id)!).filter(Boolean);

  return (
    <Stack component="ul" direction="row" spacing={variant === 'outlined' ? 1 : 0.5} sx={{ alignItems: 'center', listStyle: 'none' }}>
      {links.map((link) => (
        <li key={link.id}>
          <IconButton
            component="a"
            href={link.href}
            target={isExternal(link.href) ? '_blank' : undefined}
            rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
            aria-label={isExternal(link.href) ? `${link.label} (opens in a new tab)` : `${link.label}: ${link.handle}`}
            sx={[
              { color: colors.muted, '&:hover': { color: colors.text, backgroundColor: 'transparent' } },
              variant === 'outlined' && {
                width: 40,
                height: 40,
                border: `1px solid ${colors.borderStrong}`,
                '&:hover': { color: colors.text, borderColor: colors.text, backgroundColor: 'transparent' },
              },
            ]}
          >
            <SocialIcon id={link.id} />
          </IconButton>
        </li>
      ))}
    </Stack>
  );
};

export default SocialLinks;
