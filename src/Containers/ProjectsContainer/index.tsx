'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import Surface from '../../Components/Common/Surface';
import TechChip from '../../Components/Common/TechChip';
import { moreWork, personalProjects, workProjects, type Project, type ProjectDomain } from '../../data/profile';
import { colors } from '../../theme';

// Artwork for each project domain: an icon plus the two colours of the card's glow
const domainArt: Record<ProjectDomain, { Icon: typeof CodeOutlinedIcon; from: string; to: string }> = {
  martech: { Icon: CampaignOutlinedIcon, from: '#f472b6', to: '#a78bfa' },
  edtech: { Icon: SchoolOutlinedIcon, from: '#60a5fa', to: '#34d399' },
  govtech: { Icon: AccountBalanceOutlinedIcon, from: '#fbbf24', to: '#34d399' },
  web: { Icon: LanguageOutlinedIcon, from: '#38bdf8', to: '#818cf8' },
  personal: { Icon: CodeOutlinedIcon, from: '#34d399', to: '#60a5fa' },
};

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => {
  if (!project.code && !project.live) {
    return (
      <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center', color: colors.subtle }}>
        <LockOutlinedIcon sx={{ fontSize: 15 }} />
        <Typography className="mono" sx={{ fontSize: '0.75rem' }}>
          Company project · private codebase
        </Typography>
      </Stack>
    );
  }
  return (
    <Stack direction="row" spacing={1}>
      {project.code && (
        <Button size="small" variant="outlined" startIcon={<GitHubIcon />} href={project.code} target="_blank" rel="noopener noreferrer">
          Code
        </Button>
      )}
      {project.live && (
        <Button size="small" variant="outlined" startIcon={<OpenInNewIcon />} href={project.live} target="_blank" rel="noopener noreferrer">
          Live site
        </Button>
      )}
    </Stack>
  );
};

const StackChips: React.FC<{ stack: string[] }> = ({ stack }) => (
  <Box component="ul" aria-label="Tech stack" sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, listStyle: 'none' }}>
    {stack.map((tech) => (
      <li key={tech}>
        <TechChip label={tech} />
      </li>
    ))}
  </Box>
);

// Decorative banner at the top of a featured card: domain glow, faint grid and the domain icon
const CardArt: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { Icon, from, to } = domainArt[project.domain];
  return (
    <Box
      aria-hidden
      sx={{
        position: 'relative',
        height: { xs: 120, md: 140 },
        mx: { xs: -3, md: -4 },
        mt: { xs: -3, md: -4 },
        mb: 3,
        overflow: 'hidden',
        borderBottom: `1px solid ${colors.border}`,
        background: `radial-gradient(120% 140% at 0% 0%, ${from}33, transparent 55%),
                     radial-gradient(120% 140% at 100% 100%, ${to}2e, transparent 55%), ${colors.bgAlt}`,
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, #000, transparent)',
        },
      }}
    >
      <Box
        className="card-art-icon"
        sx={{
          position: 'absolute',
          left: { xs: 24, md: 32 },
          bottom: 20,
          zIndex: 1,
          width: 52,
          height: 52,
          display: 'grid',
          placeItems: 'center',
          borderRadius: '14px',
          color: colors.text,
          background: `linear-gradient(135deg, ${from}, ${to})`,
          boxShadow: `0 12px 30px ${from}40`,
          transition: 'transform .3s',
        }}
      >
        <Icon />
      </Box>
      <Typography
        className="mono"
        sx={{ position: 'absolute', right: { xs: 24, md: 32 }, top: 18, zIndex: 1, fontSize: '0.8rem', color: colors.subtle }}
      >
        {String(index + 1).padStart(2, '0')}
      </Typography>
    </Box>
  );
};

const FeaturedCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <Surface
    component="article"
    interactive
    sx={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      borderRadius: '20px',
      '&:hover .card-art-icon': { transform: 'translateY(-4px) rotate(-4deg)' },
    }}
  >
    <CardArt project={project} index={index} />

    <Typography className="mono" sx={{ fontSize: '0.75rem', color: colors.emerald, mb: 1 }}>
      {project.category}
    </Typography>
    <Typography variant="h3" sx={{ fontSize: { xs: '1.35rem', md: '1.6rem' }, mb: 1.5 }}>
      {project.title}
    </Typography>
    <Typography sx={{ color: colors.muted, lineHeight: 1.75, mb: 2.5 }}>{project.description}</Typography>

    {project.highlights.length > 0 && (
      <Box component="ul" sx={{ listStyle: 'none', display: 'grid', gap: 1, mb: 3 }}>
        {project.highlights.map((highlight) => (
          <Box component="li" key={highlight} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start', fontSize: '0.95rem' }}>
            <CheckIcon aria-hidden sx={{ fontSize: 18, mt: '3px', color: colors.emerald }} />
            <span>{highlight}</span>
          </Box>
        ))}
      </Box>
    )}

    <Box sx={{ mt: 'auto' }}>
      <StackChips stack={project.stack} />
      <Box sx={{ mt: 3, pt: 2.5, borderTop: `1px solid ${colors.border}` }}>
        <ProjectLinks project={project} />
      </Box>
    </Box>
  </Surface>
);

const CompactCard: React.FC<{ project: Project }> = ({ project }) => (
  <Surface component="article" interactive sx={{ display: 'flex', flexDirection: 'column', p: 3, borderRadius: '16px' }}>
    <Typography className="mono" sx={{ fontSize: '0.75rem', color: colors.sky, mb: 1 }}>
      {project.category}
    </Typography>
    <Typography variant="h3" sx={{ fontSize: '1.2rem', mb: 1 }}>
      {project.title}
    </Typography>
    <Typography sx={{ color: colors.muted, fontSize: '0.93rem', lineHeight: 1.7, mb: 2 }}>{project.description}</Typography>
    <Box sx={{ mt: 'auto', display: 'grid', gap: 2.5 }}>
      <StackChips stack={project.stack} />
      <ProjectLinks project={project} />
    </Box>
  </Surface>
);

const ProjectGroup: React.FC<{ title: string; projects: Project[] }> = ({ title, projects }) => (
  <Box sx={{ mt: { xs: 8, md: 10 } }}>
    <Typography variant="h2" sx={{ fontSize: '1.5rem', mb: 3 }}>
      {title}
    </Typography>
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
      {projects.map((project) => (
        <Reveal key={project.title} style={{ height: '100%' }}>
          <CompactCard project={project} />
        </Reveal>
      ))}
    </Box>
  </Box>
);

const Projects: React.FC<{ full?: boolean }> = ({ full = false }) => {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="work"
        title="Production apps I've built"
        subtitle="Enterprise applications I've delivered frontend features for at Codebucket, used by real brands, schools, government boards and citizens."
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        {workProjects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1} style={{ height: '100%' }}>
            <FeaturedCard project={project} index={i} />
          </Reveal>
        ))}
      </Box>

      {full ? (
        <>
          <ProjectGroup title="More work at Codebucket" projects={moreWork} />
          <ProjectGroup title="Personal projects" projects={personalProjects} />
        </>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button component={Link} href="/projects" variant="outlined" size="large" endIcon={<ArrowForwardIcon />}>
            See all projects
          </Button>
        </Box>
      )}
    </Section>
  );
};

export default Projects;
