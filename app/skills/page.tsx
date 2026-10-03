import type { Metadata } from 'next';
import SkillsContainer from '../../src/Containers/SkillsContainer';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Technical skills of Sunny Kumar: React, Next.js, TypeScript, state management, UI/styling and tooling.',
  alternates: { canonical: '/skills' },
};

const SkillsPage = () => {
  return <SkillsContainer />;
};

export default SkillsPage;
