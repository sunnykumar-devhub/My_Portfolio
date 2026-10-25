'use client';

import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { CONTACT_EMAIL } from '../../config/site';
import { colors } from '../../theme';

const CopyEmailButton: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure context or permissions): the address is still visible to select by hand
    }
  };

  return (
    <Tooltip title={copied ? 'Copied' : 'Copy email address'}>
      <IconButton
        onClick={copy}
        aria-label={copied ? 'Email address copied' : 'Copy email address'}
        sx={{
          width: 44,
          height: 44,
          border: `1px solid ${colors.borderStrong}`,
          color: copied ? colors.accent : colors.muted,
          '&:hover': { color: colors.text, borderColor: colors.text, backgroundColor: 'transparent' },
        }}
      >
        {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
};

export default CopyEmailButton;
