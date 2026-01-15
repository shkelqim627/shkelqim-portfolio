import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="pt-20">
      <Hero />
      <Skills />
      <Projects limit={4} />
      <Education />
      <Contact />
    </main>
  );
};

export default Home;
