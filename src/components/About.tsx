
import { GraduationCap, Heart, Code, Users } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { icon: Code, label: "Programming Languages", value: "7+", description: "JavaScript, Python, Java, HTML, C++, C#, SQL" },
    { icon: GraduationCap, label: "GPA (Running Start)", value: "4.0", description: "Bellevue College Computer Science Program" },
    { icon: Heart, label: "Healthcare Tech Focus", value: "Active", description: "Bridging medicine and technology" },
    { icon: Users, label: "Leadership Roles", value: "3", description: "Medicine Club, Coding Club, Newspaper Club Co-Leader" }
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "React", level: 85 },
    { name: "Healthcare Tech", level: 75 },
    { name: "Team Leadership", level: 90 }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate high school junior from Bellevue, WA, combining my love for technology with 
            healthcare innovation. Currently pursuing computer science through Running Start at Bellevue College 
            while gaining real-world experience through internships at leading tech companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My Focus Areas</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Healthcare Technology</h4>
                  <p className="text-gray-600">Developing solutions that improve patient care and clinical workflows</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Full-Stack Development</h4>
                  <p className="text-gray-600">Building scalable web applications with modern technologies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Leadership & Innovation</h4>
                  <p className="text-gray-600">Leading clubs and projects while driving technological innovation</p>
                </div>
              </div>
            </div>

            {/* Interactive Skills Section */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Skills & Expertise</h4>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                      <span className="group-hover:text-blue-600 transition-colors">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out hover:from-blue-600 hover:to-purple-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <stat.icon className="w-8 h-8 text-gray-700 mb-3 hover:text-blue-600 transition-colors" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                <div className={`text-xs text-gray-500 transition-all duration-300 ${
                  hoveredStat === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
