import type { Metadata } from 'next';
import ProjectsContainer from '../../src/Containers/ProjectsContainer';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A selection of full-stack and frontend applications built by Sunny Kumar with React, Node.js and TypeScript.',
  alternates: { canonical: '/projects' },
};

const ProjectsPage = () => {
  return <ProjectsContainer />;
};

export default ProjectsPage;
