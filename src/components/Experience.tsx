
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Cybersecurity Researcher",
      company: "Independent Research",
      period: "2022 - Present",
      description: "Conducting independent security research, discovering vulnerabilities, and contributing to the cybersecurity community through responsible disclosure.",
      highlights: ["15+ CVEs discovered", "Multiple security advisories", "Bug bounty programs"]
    },
    {
      icon: Code,
      title: "Penetration Tester",
      company: "Security Consulting",
      period: "2021 - Present",
      description: "Performing comprehensive security assessments, penetration testing, and vulnerability assessments for various organizations.",
      highlights: ["Web application testing", "Network security assessments", "Security documentation"]
    },
    {
      icon: GraduationCap,
      title: "Cybersecurity Education",
      company: "Continuous Learning",
      period: "Ongoing",
      description: "Continuously expanding knowledge through certifications, training, and hands-on practice in cybersecurity domains.",
      highlights: ["Security certifications", "Research publications", "Community contributions"]
    }
  ];

  const skills = [
    "Vulnerability Research", "Penetration Testing", "Web Application Security",
    "Network Security", "Reverse Engineering", "Exploit Development",
    "Security Assessment", "Incident Response", "Threat Analysis",
    "Security Architecture", "Code Review", "Risk Assessment"
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Experience & Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey in cybersecurity, from vulnerability research to penetration testing and security consulting.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <exp.icon className="w-6 h-6 text-gray-700" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">{exp.company}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full font-medium hover:border-gray-300 hover:shadow-md transition-all duration-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
