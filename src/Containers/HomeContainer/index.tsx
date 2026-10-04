import Hero from '../HeroContainer';
import TechMarquee from '../../Components/Common/TechMarquee';
import About from '../AboutContainer';
import Experience from '../ExperienceContainer';
import Projects from '../ProjectsContainer';
import Skills from '../SkillsContainer';
import Education from '../EducationContainer';
import Contact from '../ContactContainer';

// Each section sets its own id (hero, about, experience, ...), so no wrapper ids here
const HomeContainer: React.FC = () => {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
};

export default HomeContainer;
