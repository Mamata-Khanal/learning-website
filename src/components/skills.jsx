import { FaReact, FaNodeJs, FaDatabase, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPython,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, level: 90 },
  { name: "JavaScript", icon: <FaJs />, level: 85 },
  { name: "Node.js", icon: <FaNodeJs />, level: 80 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 75 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
  { name: "MongoDB", icon: <SiMongodb />, level: 70 },
  { name: "Python", icon: <SiPython />, level: 65 },
  { name: "SQL", icon: <FaDatabase />, level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Skills & Technologies
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl text-primary mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 mt-2">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
