import About from '../AboutContainer';
import Experience from '../ExperienceContainer';
import Skills from '../SkillsContainer';
import Education from '../EducationContainer';

// The /about page: the full story without the hero and projects
const AboutDetailedContainer: React.FC = () => (
  <>
    <About />
    <Experience />
    <Skills />
    <Education />
  </>
);

export default AboutDetailedContainer;
