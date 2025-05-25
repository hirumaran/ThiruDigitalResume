
import { Shield, Search, Award, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Shield, label: "CVEs Discovered", value: "15+" },
    { icon: Search, label: "Years Experience", value: "3+" },
    { icon: Award, label: "Security Research", value: "Active" },
    { icon: Users, label: "Community Impact", value: "High" }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated cybersecurity professional specializing in vulnerability research, 
            penetration testing, and security assessments. My passion lies in discovering and 
            responsibly disclosing security vulnerabilities to help organizations strengthen their defenses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Vulnerability Research</h4>
                  <p className="text-gray-600">Discovering and analyzing security flaws in software and systems</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Penetration Testing</h4>
                  <p className="text-gray-600">Comprehensive security assessments and ethical hacking</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Security Analysis</h4>
                  <p className="text-gray-600">Deep dive analysis of security architectures and implementations</p>
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
