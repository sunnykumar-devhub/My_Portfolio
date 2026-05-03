import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Layout from './Components/Layout';
import AboutDetailed from './Pages/About'; 
import Home from './Pages/Home'; 
import ProjectPage from './Pages/Project';
import SkillsPage from './Pages/Skills'; 
import Contact from './Pages/Contact';

// Premium Dark Theme Configuration
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f2fe',
    },
    secondary: {
      main: '#4facfe',
    },
    background: {
      default: '#050505',
      paper: '#111111',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Outfit", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Outfit", sans-serif', fontWeight: 800 },
    h2: { fontFamily: '"Outfit", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Outfit", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 16,
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-detailed" element={<Layout><AboutDetailed /></Layout>} />
          <Route path="/projectpage" element={<Layout><ProjectPage /></Layout>} />
          <Route path="/SkillsPage" element={<Layout><SkillsPage/></Layout>} />
          <Route path="/contact" element={<Layout><Contact/></Layout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
