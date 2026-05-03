import Hero from '../HeroContainer';
import About from '../AboutContainer'; 
import Experience from '../ExperienceContainer';
import Projects from '../ProjectsContainer';
import Skills from '../SkillsContainer';
import Contact from '../ContactContainer';

const HomeContainer: React.FC = () => {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default HomeContainer;
