import { createTheme } from '@mui/material';

// Palette matches the LinkedIn banner: charcoal background, emerald → sky accent
export const colors = {
  bg: '#07090d',
  bgAlt: '#0b0e14',
  surface: '#0f131a',
  surfaceHover: '#141922',
  border: 'rgba(240, 246, 252, 0.08)',
  borderStrong: 'rgba(240, 246, 252, 0.14)',
  text: '#e6edf3',
  muted: '#8b949e',
  subtle: '#6e7681',
  emerald: '#34d399',
  sky: '#60a5fa',
  gradient: 'linear-gradient(90deg, #34d399 0%, #60a5fa 100%)',
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: colors.emerald, contrastText: '#04130d' },
    secondary: { main: colors.sky },
    background: { default: colors.bg, paper: colors.surface },
    text: { primary: colors.text, secondary: colors.muted },
    divider: colors.border,
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'var(--font-inter), "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.035em' },
    h2: { fontWeight: 700, letterSpacing: '-0.03em' },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontWeight: 700, letterSpacing: '-0.02em' },
    h5: { fontWeight: 600, letterSpacing: '-0.01em' },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10, paddingInline: 20, paddingBlock: 10 },
        contained: {
          '&.MuiButton-colorPrimary': {
            background: colors.gradient,
            color: '#04130d',
            '&:hover': { background: colors.gradient, filter: 'brightness(1.08)' },
          },
        },
        outlined: {
          borderColor: colors.borderStrong,
          color: colors.text,
          '&:hover': { borderColor: colors.emerald, backgroundColor: 'rgba(52, 211, 153, 0.06)' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
  },
});
