'use client';

import React from 'react';
import { IconButton, Stack } from '@mui/material';
import SocialIcon from './SocialIcon';
import { socialLinks, type SocialId } from '../../data/profile';
import { colors } from '../../theme';

type Props = {
  ids?: SocialId[];
  // "outlined" draws a bordered square around each icon (hero); "plain" is icon-only (footer)
  variant?: 'outlined' | 'plain';
};

const isExternal = (href: string) => href.startsWith('http');

const SocialLinks: React.FC<Props> = ({ ids, variant = 'plain' }) => {
  const links = ids ? socialLinks.filter((l) => ids.includes(l.id)) : socialLinks;

  return (
    <Stack direction="row" spacing={variant === 'outlined' ? 1 : 0.5} sx={{ alignItems: 'center' }}>
      {links.map((link) => (
        <IconButton
          key={link.id}
          component="a"
          href={link.href}
          target={isExternal(link.href) ? '_blank' : undefined}
          rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
          aria-label={link.label}
          sx={[
            { color: colors.muted, '&:hover': { color: colors.emerald } },
            variant === 'outlined' && {
              border: `1px solid ${colors.border}`,
              borderRadius: '10px',
              '&:hover': { color: colors.emerald, borderColor: colors.emerald },
            },
          ]}
        >
          <SocialIcon id={link.id} />
        </IconButton>
      ))}
    </Stack>
  );
};

export default SocialLinks;
