import Hero from '../HeroContainer';
import Projects from '../ProjectsContainer';
import Experience from '../ExperienceContainer';
import Skills from '../SkillsContainer';
import About from '../AboutContainer';
import Contact from '../ContactContainer';

// Recruiter reading order: who (hero), proof (work, experience), depth (skills, about), then how to reach out.
// Each section sets its own id, which the header nav links to.
const HomeContainer: React.FC = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </>
  );
};

export default HomeContainer;
