import type { Metadata } from 'next';
import ProjectsContainer from '../../src/Containers/ProjectsContainer';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Production apps built by Sunny Kumar: an influencer marketing SaaS, an LMS and government portals, plus personal projects.',
  alternates: { canonical: '/projects' },
};

const ProjectsPage = () => {
  return <ProjectsContainer full />;
};

export default ProjectsPage;
