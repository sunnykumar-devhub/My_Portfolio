import type { Metadata } from 'next';
import ProjectsContainer from '../../src/Containers/ProjectsContainer';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Case studies of production apps Sunny Kumar built frontend features for (Influency, Education Connect, the BSSB portal and Bhumi Rupantaran), plus personal projects with public code.',
  alternates: { canonical: '/projects' },
};

const ProjectsPage = () => {
  return <ProjectsContainer standalone />;
};

export default ProjectsPage;
