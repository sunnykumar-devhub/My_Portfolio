import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import type { SocialId } from '../../data/profile';

const icons: Record<SocialId, typeof GitHubIcon> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  email: EmailIcon,
};

const SocialIcon: React.FC<{ id: SocialId }> = ({ id }) => {
  const Icon = icons[id];
  return <Icon fontSize="small" />;
};

export default SocialIcon;
