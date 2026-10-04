'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import TechChip from '../../Components/Common/TechChip';
import { moreWork, personalProjects, workProjects, type Project } from '../../data/profile';
import { colors } from '../../theme';

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

const FeaturedCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <Box
    sx={{
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      p: { xs: 3, md: 4 },
      borderRadius: '20px',
      border: `1px solid ${colors.border}`,
      backgroundColor: colors.surface,
      overflow: 'hidden',
      transition: 'border-color .25s, transform .25s',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: colors.gradient,
        opacity: 0,
        transition: 'opacity .25s',
      },
      '&:hover': { borderColor: colors.borderStrong, transform: 'translateY(-4px)' },
      '&:hover::before': { opacity: 1 },
    }}
  >
    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
      <Typography
        className="mono"
        sx={{
          fontSize: '0.75rem',
          color: colors.emerald,
          px: 1.25,
          py: 0.5,
          borderRadius: '6px',
          backgroundColor: 'rgba(52, 211, 153, 0.08)',
          border: '1px solid rgba(52, 211, 153, 0.2)',
        }}
      >
        {project.category}
      </Typography>
      <Typography className="mono" sx={{ fontSize: '0.8rem', color: colors.subtle }}>
        {String(index + 1).padStart(2, '0')}
      </Typography>
    </Stack>

    <Typography variant="h4" sx={{ fontSize: { xs: '1.35rem', md: '1.6rem' }, mb: 1.5 }}>
      {project.title}
    </Typography>
    <Typography sx={{ color: colors.muted, lineHeight: 1.75, mb: 2.5 }}>{project.description}</Typography>

    {project.highlights.length > 0 && (
      <Box component="ul" sx={{ listStyle: 'none', display: 'grid', gap: 1, mb: 3 }}>
        {project.highlights.map((h) => (
          <Box component="li" key={h} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start', fontSize: '0.95rem' }}>
            <CheckIcon sx={{ fontSize: 18, mt: '3px', color: colors.emerald }} />
            <span>{h}</span>
          </Box>
        ))}
      </Box>
    )}

    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3, mt: 'auto' }}>
      {project.stack.map((t) => (
        <TechChip key={t} label={t} />
      ))}
    </Box>

    <Box sx={{ pt: 2.5, borderTop: `1px solid ${colors.border}` }}>
      <ProjectLinks project={project} />
    </Box>
  </Box>
);

const CompactCard: React.FC<{ project: Project }> = ({ project }) => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      p: 3,
      borderRadius: '16px',
      border: `1px solid ${colors.border}`,
      backgroundColor: colors.surface,
      transition: 'border-color .25s',
      '&:hover': { borderColor: colors.borderStrong },
    }}
  >
    <Typography className="mono" sx={{ fontSize: '0.75rem', color: colors.sky, mb: 1 }}>
      {project.category}
    </Typography>
    <Typography variant="h6" sx={{ mb: 1 }}>
      {project.title}
    </Typography>
    <Typography sx={{ color: colors.muted, fontSize: '0.93rem', lineHeight: 1.7, mb: 2 }}>{project.description}</Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2.5, mt: 'auto' }}>
      {project.stack.map((t) => (
        <TechChip key={t} label={t} />
      ))}
    </Box>
    <ProjectLinks project={project} />
  </Box>
);

const Projects: React.FC<{ full?: boolean }> = ({ full = false }) => {
  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        eyebrow="work"
        title="Production apps I've built"
        subtitle="Enterprise applications I've delivered frontend features for at Codebucket, used by real brands, schools, government boards and citizens."
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        {workProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1} style={{ height: '100%' }}>
            <FeaturedCard project={p} index={i} />
          </Reveal>
        ))}
      </Box>

      {full ? (
        <>
          <Typography variant="h5" sx={{ mt: 10, mb: 3 }}>
            More work at Codebucket
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {moreWork.map((p) => (
              <Reveal key={p.title} style={{ height: '100%' }}>
                <CompactCard project={p} />
              </Reveal>
            ))}
          </Box>

          <Typography variant="h5" sx={{ mt: 8, mb: 3 }}>
            Personal projects
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {personalProjects.map((p) => (
              <Reveal key={p.title} style={{ height: '100%' }}>
                <CompactCard project={p} />
              </Reveal>
            ))}
          </Box>
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
