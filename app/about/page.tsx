import type { Metadata } from 'next';
import AboutDetailedContainer from '../../src/Containers/AboutDetailedContainer';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Sunny Kumar, a frontend engineer in Patna: approach, experience at Codebucket Solutions, skills, education and certifications.',
  alternates: { canonical: '/about' },
};

const AboutPage = () => {
  return <AboutDetailedContainer />;
};

export default AboutPage;
