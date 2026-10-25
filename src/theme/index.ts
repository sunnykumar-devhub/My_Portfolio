import { createTheme } from '@mui/material';

// Restrained dark palette: warm charcoal surfaces, warm off-white text and a single emerald accent
// (the emerald of the SK app icon). Mirrored as CSS variables in app/globals.css.
export const colors = {
  bg: '#111213',
  bgAlt: '#151618',
  surface: '#1a1b1e',
  surfaceHover: '#202125',
  border: 'rgba(237, 232, 223, 0.09)',
  borderStrong: 'rgba(237, 232, 223, 0.16)',
  text: '#ede8df',
  muted: '#aaa59c',
  subtle: '#8b877f',
  accent: '#34d399',
  accentSoft: 'rgba(52, 211, 153, 0.1)',
  onAccent: '#06140e',
};

export const fonts = {
  sans: 'var(--font-sans), "Helvetica Neue", Arial, sans-serif',
  mono: 'var(--font-mono), ui-monospace, Menlo, monospace',
  serif: 'var(--font-serif), Georgia, serif',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: colors.accent, contrastText: colors.onAccent },
    background: { default: colors.bg, paper: colors.surface },
    text: { primary: colors.text, secondary: colors.muted },
    divider: colors.border,
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: fonts.sans,
    h1: { fontWeight: 600, letterSpacing: '-0.04em' },
    h2: { fontWeight: 600, letterSpacing: '-0.035em' },
    h3: { fontWeight: 600, letterSpacing: '-0.02em' },
    h4: { fontWeight: 600, letterSpacing: '-0.015em' },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 500, letterSpacing: 0 },
  },
  components: {
    MuiButtonBase: {
      // The global :focus-visible outline in globals.css replaces the ripple as the focus indicator
      defaultProps: { disableRipple: true },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
          paddingBlock: 9,
          fontSize: '0.95rem',
          transition: 'background-color .2s, border-color .2s, color .2s, transform .2s',
          '& .MuiButton-endIcon': { transition: 'transform .2s' },
          '&:hover .MuiButton-endIcon': { transform: 'translateX(3px)' },
        },
        sizeLarge: { paddingInline: 24, paddingBlock: 11, fontSize: '1rem' },
        sizeSmall: { paddingInline: 14, paddingBlock: 5, fontSize: '0.85rem' },
        contained: {
          '&.MuiButton-colorPrimary': {
            backgroundColor: colors.accent,
            color: colors.onAccent,
            '&:hover': { backgroundColor: '#5ee0ab' },
          },
        },
        outlined: {
          borderColor: colors.borderStrong,
          color: colors.text,
          '&:hover': { borderColor: colors.text, backgroundColor: 'transparent' },
        },
        text: {
          color: colors.muted,
          '&:hover': { color: colors.text, backgroundColor: 'transparent' },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { transition: 'color .2s, background-color .2s, border-color .2s' },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: { backgroundColor: colors.text, color: colors.bg, fontSize: '0.78rem', fontWeight: 500 },
      },
    },
  },
});
