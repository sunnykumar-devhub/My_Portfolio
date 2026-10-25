import About from '../AboutContainer';
import Experience from '../ExperienceContainer';
import Skills from '../SkillsContainer';
import Contact from '../ContactContainer';

// The /about page: the full story without the hero and projects
const AboutDetailedContainer: React.FC = () => (
  <>
    <About standalone />
    <Experience />
    <Skills />
    <Contact />
  </>
);

export default AboutDetailedContainer;
