import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Section from '../../Components/Common/Section';
import SectionHeading from '../../Components/Common/SectionHeading';
import Reveal from '../../Components/Common/Reveal';
import BulletList from '../../Components/Common/BulletList';
import { caseStudies, moreWork, type CaseStudy, type SmallProject } from '../../data/profile';
import { colors } from '../../theme';

const Label: React.FC<{ children: React.ReactNode; component?: React.ElementType }> = ({ children, component = 'p' }) => (
  <Typography
    component={component}
    className="mono"
    sx={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.subtle, mb: 1.25 }}
  >
    {children}
  </Typography>
);

const StackList: React.FC<{ stack: string[]; label: string }> = ({ stack, label }) => (
  <Box component="ul" aria-label={label} sx={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', columnGap: 1.5, rowGap: 0.5 }}>
    {stack.map((tech) => (
      <Box component="li" key={tech} className="mono" sx={{ fontSize: '0.8rem', color: colors.muted }}>
        {tech}
      </Box>
    ))}
  </Box>
);

// Heading levels shift up by one on /projects, where the section title is the page's h1
type Level = 'h2' | 'h3';
const below = (level: Level) => (level === 'h2' ? 'h3' : 'h4');

const CaseStudyArticle: React.FC<{ study: CaseStudy; index: number; level: Level }> = ({ study, index, level }) => {
  const titleId = `case-${study.slug}`;
  return (
    <Box
      component="article"
      aria-labelledby={titleId}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 4fr) minmax(0, 7fr)' },
        gap: { xs: 4, md: 8 },
        py: { xs: 6, md: 8 },
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <Box sx={{ position: { md: 'sticky' }, top: { md: 96 }, alignSelf: 'start' }}>
        <Typography className="mono" sx={{ color: colors.accent, fontSize: '0.85rem', mb: 2 }}>
          {String(index + 1).padStart(2, '0')}
        </Typography>
        <Typography variant="h3" component={level} id={titleId} sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, lineHeight: 1.15, mb: 1 }}>
          {study.title}
        </Typography>
        <Typography sx={{ color: colors.muted, mb: 3.5 }}>{study.kind}</Typography>

        <Label>Built for</Label>
        <Box component="ul" aria-label="User roles" sx={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3.5 }}>
          {study.roles.map((role) => (
            <Box
              component="li"
              key={role}
              sx={{ px: 1.25, py: 0.4, fontSize: '0.82rem', color: colors.text, borderRadius: '6px', border: `1px solid ${colors.borderStrong}` }}
            >
              {role}
            </Box>
          ))}
        </Box>

        <Label>Stack</Label>
        <StackList stack={study.stack} label="Tech stack" />

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mt: 3.5, color: colors.subtle }}>
          <LockOutlinedIcon sx={{ fontSize: 15 }} aria-hidden />
          <Typography sx={{ fontSize: '0.82rem' }}>Built at Codebucket · code is private</Typography>
        </Stack>
      </Box>

      <Box sx={{ display: 'grid', gap: 4.5 }}>
        <div>
          <Label>The problem</Label>
          <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.6, letterSpacing: '-0.01em' }}>{study.problem}</Typography>
        </div>
        <div>
          <Label>What I built</Label>
          <BulletList items={study.built} />
        </div>
        {study.outcome && (
          <Box sx={{ pl: 2.5, borderLeft: `2px solid ${colors.accent}` }}>
            <Label>Outcome</Label>
            <Typography sx={{ color: colors.text, lineHeight: 1.65 }}>{study.outcome}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const MoreWorkRow: React.FC<{ project: SmallProject; level: 'h3' | 'h4' }> = ({ project, level }) => (
  <Box
    component="li"
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 4fr) minmax(0, 5fr) minmax(0, 2fr)' },
      gap: { xs: 1.5, md: 5 },
      py: 3.5,
      borderTop: `1px solid ${colors.border}`,
    }}
  >
    <div>
      <Typography variant="h4" component={level} sx={{ fontSize: '1.15rem', mb: 0.5 }}>
        {project.title}
      </Typography>
      <Typography className="mono" sx={{ fontSize: '0.78rem', color: colors.subtle }}>
        {project.kind}
      </Typography>
    </div>
    <div>
      <Typography sx={{ color: colors.muted, lineHeight: 1.65, mb: 1.5 }}>{project.description}</Typography>
      <StackList stack={project.stack} label={`${project.title} tech stack`} />
    </div>
    <Box component="ul" sx={{ listStyle: 'none', display: 'flex', flexDirection: { xs: 'row', md: 'column' }, flexWrap: 'wrap', gap: { xs: 2.5, md: 1 }, alignItems: { md: 'flex-end' } }}>
      {project.links.length === 0 ? (
        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: colors.subtle, fontSize: '0.85rem' }}>
          <LockOutlinedIcon sx={{ fontSize: 15 }} aria-hidden />
          Office project · private
        </Box>
      ) : (
        project.links.map((link) => (
          <li key={link.href}>
            <Box
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}: ${link.label} (opens in a new tab)`}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                color: colors.text,
                fontSize: '0.92rem',
                fontWeight: 500,
                textDecoration: 'none',
                '& svg': { transition: 'transform .2s' },
                '&:hover': { color: colors.accent },
                '&:hover svg': { transform: 'translate(2px, -2px)' },
              }}
            >
              {link.label}
              <NorthEastIcon sx={{ fontSize: 15 }} aria-hidden />
            </Box>
          </li>
        ))
      )}
    </Box>
  </Box>
);

const Projects: React.FC<{ standalone?: boolean }> = ({ standalone = false }) => {
  const level: Level = standalone ? 'h2' : 'h3';
  return (
    <Section id="work" first={standalone}>
      <SectionHeading
        as={standalone ? 'h1' : 'h2'}
        eyebrow="Selected work"
        title={
          <>
            Production apps I&apos;ve <span className="serif">helped ship</span>
          </>
        }
        subtitle="Four enterprise products I built frontend features for at Codebucket Solutions. Their code and internal screens are confidential, so each one is written up as a short case study instead of screenshots."
      />

      {caseStudies.map((study, i) => (
        <Reveal key={study.slug}>
          <CaseStudyArticle study={study} index={i} level={level} />
        </Reveal>
      ))}

      <Reveal>
        <Box sx={{ mt: { xs: 8, md: 10 } }}>
          <Typography variant="h3" component={level} sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, mb: 1 }}>
            More work and personal projects
          </Typography>
          <Typography sx={{ color: colors.muted, mb: 4 }}>Smaller company builds, and projects with public code.</Typography>
          <Box component="ul" sx={{ listStyle: 'none', borderBottom: `1px solid ${colors.border}` }}>
            {moreWork.map((project) => (
              <MoreWorkRow key={project.title} project={project} level={below(level)} />
            ))}
          </Box>
        </Box>
      </Reveal>
    </Section>
  );
};

export default Projects;
