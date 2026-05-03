import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import Loader from '../Components/Loader';

// Lazy load pages for optimization
const Home = lazy(() => import('../Pages/Home'));
const AboutDetailed = lazy(() => import('../Pages/About'));
const ProjectPage = lazy(() => import('../Pages/Project'));
const SkillsPage = lazy(() => import('../Pages/Skills'));
const Contact = lazy(() => import('../Pages/Contact'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><AboutDetailed /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectPage /></Layout>} />
        <Route path="/skills" element={<Layout><SkillsPage /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
