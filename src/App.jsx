import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Skills from "./components/skills";




function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      </div>

  );
}

export default App;