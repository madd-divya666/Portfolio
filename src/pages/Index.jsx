import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
import Achievements from "../components/Achievements.jsx";
import Contact from "../components/Contact.jsx";

const Index = () => (
  <>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />
      <Hero />

      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  </>
);

export default Index;
