'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Dialog, InputBase, Snackbar, Alert, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EastIcon from '@mui/icons-material/East';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SocialIcon from '../Common/SocialIcon';
import { contactNav, navItems, pageRoutes } from '../../config/navigation';
import { CONTACT_EMAIL, RESUME_FILENAME, RESUME_URL } from '../../config/site';
import { socialLinks } from '../../data/profile';
import { colors } from '../../theme';

type Command = {
  id: string;
  group: 'Sections' | 'Pages' | 'Actions' | 'Links';
  label: string;
  // Extra words the search matches on, so "cv" finds the resume and "work" finds projects
  keywords?: string;
  icon: React.ReactNode;
  run: (ctx: { navigate: (href: string) => void; notify: (message: string) => void }) => void;
};

const openExternal = (href: string) => window.open(href, '_blank', 'noopener,noreferrer');

const commands: Command[] = [
  ...[{ label: 'Home', id: 'hero', href: '/' }, ...navItems, contactNav].map<Command>((item) => ({
    id: `section:${item.id}`,
    group: 'Sections',
    label: item.label,
    keywords: item.id === 'work' ? 'projects portfolio case studies' : undefined,
    icon: <EastIcon fontSize="small" />,
    run: ({ navigate }) => navigate(item.href),
  })),
  ...pageRoutes.map<Command>((route) => ({
    id: `page:${route.path}`,
    group: 'Pages',
    label: route.label,
    keywords: route.path,
    icon: <EastIcon fontSize="small" />,
    run: ({ navigate }) => navigate(route.path),
  })),
  {
    id: 'action:copy-email',
    group: 'Actions',
    label: 'Copy email address',
    keywords: `${CONTACT_EMAIL} mail contact`,
    icon: <ContentCopyIcon fontSize="small" />,
    run: ({ notify }) => {
      navigator.clipboard.writeText(CONTACT_EMAIL).then(
        () => notify('Email address copied'),
        () => notify(CONTACT_EMAIL)
      );
    },
  },
  ...(RESUME_URL
    ? [
        {
          id: 'action:resume',
          group: 'Actions',
          label: 'Download resume (PDF)',
          keywords: 'cv',
          icon: <DescriptionOutlinedIcon fontSize="small" />,
          run: () => {
            const a = document.createElement('a');
            a.href = RESUME_URL as string;
            a.download = RESUME_FILENAME;
            a.click();
          },
        } satisfies Command,
      ]
    : []),
  ...socialLinks
    .filter((link) => link.href.startsWith('http'))
    .map<Command>((link) => ({
      id: `link:${link.id}`,
      group: 'Links',
      label: link.label,
      keywords: link.handle,
      icon: <SocialIcon id={link.id} />,
      run: () => openExternal(link.href),
    })),
];

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

// ⌘K / Ctrl+K quick switcher: jump to a page or section, copy the email, open the resume or a profile
const CommandPalette: React.FC<Props> = ({ open, onOpenChange }) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onOpenChange]);

  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return commands.filter((cmd) => {
      const haystack = `${cmd.group} ${cmd.label} ${cmd.keywords ?? ''}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [query]);

  const close = () => {
    onOpenChange(false);
    setQuery('');
    setActiveIndex(0);
  };

  const runCommand = (cmd: Command) => {
    close();
    cmd.run({ navigate: (href) => router.push(href), notify: setNotice });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const step = e.key === 'ArrowDown' ? 1 : -1;
      setActiveIndex((i) => (results.length ? (i + step + results.length) % results.length : 0));
    } else if (e.key === 'Enter' && results[activeIndex]) {
      e.preventDefault();
      runCommand(results[activeIndex]);
    }
  };

  const activeId = results[activeIndex] ? `cmd-${results[activeIndex].id}` : undefined;

  return (
    <>
      <Dialog
        open={open}
        onClose={close}
        fullWidth
        maxWidth="sm"
        aria-label="Command palette"
        sx={{ '& .MuiDialog-container': { alignItems: 'flex-start' } }}
        slotProps={{
          paper: {
            sx: {
              mt: { xs: 8, md: '14vh' },
              mx: 2,
              width: 'calc(100% - 32px)',
              borderRadius: '16px',
              border: `1px solid ${colors.borderStrong}`,
              backgroundColor: colors.surface,
              boxShadow: '0 30px 90px rgba(0, 0, 0, 0.55)',
              overflow: 'hidden',
            },
          },
          backdrop: { sx: { backgroundColor: 'rgba(8, 8, 9, 0.7)' } },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2.5, borderBottom: `1px solid ${colors.border}` }}>
          <SearchIcon sx={{ color: colors.muted }} />
          <InputBase
            autoFocus
            fullWidth
            placeholder="Search pages, actions and links..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            inputProps={{
              role: 'combobox',
              'aria-label': 'Search commands',
              'aria-expanded': true,
              'aria-controls': 'command-list',
              'aria-activedescendant': activeId,
              'aria-autocomplete': 'list',
            }}
            sx={{ py: 2, fontSize: '1rem', color: colors.text }}
          />
          <Kbd>esc</Kbd>
        </Box>

        <Box id="command-list" role="listbox" aria-label="Commands" sx={{ maxHeight: 380, overflowY: 'auto', p: 1 }}>
          {results.length === 0 && (
            <Typography sx={{ color: colors.muted, textAlign: 'center', py: 5, fontSize: '0.95rem' }}>
              No results for &ldquo;{query}&rdquo;
            </Typography>
          )}
          {results.map((cmd, i) => {
            const showGroup = i === 0 || results[i - 1].group !== cmd.group;
            const active = i === activeIndex;
            return (
              <React.Fragment key={cmd.id}>
                {showGroup && (
                  <Typography
                    aria-hidden
                    className="mono"
                    sx={{ px: 1.5, pt: i === 0 ? 1 : 2, pb: 0.75, fontSize: '0.72rem', color: colors.subtle, letterSpacing: '0.04em' }}
                  >
                    {cmd.group.toLowerCase()}
                  </Typography>
                )}
                <Box
                  id={`cmd-${cmd.id}`}
                  role="option"
                  aria-selected={active}
                  onClick={() => runCommand(cmd)}
                  onMouseMove={() => setActiveIndex(i)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 1.5,
                    py: 1.25,
                    borderRadius: '10px',
                    cursor: 'pointer',
                    color: active ? colors.text : colors.muted,
                    backgroundColor: active ? colors.surfaceHover : 'transparent',
                    '& svg': { color: active ? colors.accent : colors.subtle },
                  }}
                >
                  {cmd.icon}
                  <Box component="span" sx={{ flex: 1, fontSize: '0.95rem' }}>
                    {cmd.label}
                  </Box>
                  {cmd.group === 'Links' && <NorthEastIcon sx={{ fontSize: 16 }} />}
                </Box>
              </React.Fragment>
            );
          })}
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            gap: 2,
            px: 2.5,
            py: 1.25,
            borderTop: `1px solid ${colors.border}`,
            color: colors.subtle,
            fontSize: '0.75rem',
          }}
        >
          <span>
            <Kbd>↑</Kbd> <Kbd>↓</Kbd> to navigate
          </span>
          <span>
            <Kbd>↵</Kbd> to select
          </span>
        </Box>
      </Dialog>

      <Snackbar
        open={notice !== null}
        autoHideDuration={3000}
        onClose={() => setNotice(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {notice ? (
          <Alert onClose={() => setNotice(null)} severity="success" variant="filled" sx={{ fontWeight: 600 }}>
            {notice}
          </Alert>
        ) : undefined}
      </Snackbar>
    </>
  );
};

export const Kbd: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    component="kbd"
    className="mono"
    sx={{
      display: 'inline-block',
      minWidth: 20,
      px: 0.75,
      py: '1px',
      fontSize: '0.7rem',
      lineHeight: 1.6,
      textAlign: 'center',
      color: colors.muted,
      borderRadius: '5px',
      border: `1px solid ${colors.borderStrong}`,
      backgroundColor: 'rgba(237, 232, 223, 0.04)',
    }}
  >
    {children}
  </Box>
);

export default CommandPalette;
