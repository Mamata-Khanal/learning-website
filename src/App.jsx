import Navbar from "./components/navbar/navbar";
import Hero from "./components/navbar/hero";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import "../src/styles/global.css";


function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects />
      <Skills />
      <Contact />
      </div>

  );
}

export default App;