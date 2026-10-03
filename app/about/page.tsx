import type { Metadata } from 'next';
import AboutDetailedContainer from '../../src/Containers/AboutDetailedContainer';

export const metadata: Metadata = {
  title: 'About',
  description: 'Education, certifications and work experience of Sunny Kumar, a frontend engineer specializing in React, Next.js and TypeScript.',
  alternates: { canonical: '/about' },
};

const AboutPage = () => {
  return <AboutDetailedContainer />;
};

export default AboutPage;
