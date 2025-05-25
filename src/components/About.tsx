
import { GraduationCap, Heart, Code, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Programming Languages", value: "7+" },
    { icon: GraduationCap, label: "GPA (Running Start)", value: "4.0" },
    { icon: Heart, label: "Healthcare Tech Focus", value: "Active" },
    { icon: Users, label: "Leadership Roles", value: "3" }
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My Focus Areas</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Healthcare Technology</h4>
                  <p className="text-gray-600">Developing solutions that improve patient care and clinical workflows</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Full-Stack Development</h4>
                  <p className="text-gray-600">Building scalable web applications with modern technologies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Leadership & Innovation</h4>
                  <p className="text-gray-600">Leading clubs and projects while driving technological innovation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <stat.icon className="w-8 h-8 text-gray-700 mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
