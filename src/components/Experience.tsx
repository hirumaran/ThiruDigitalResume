
import { Briefcase, GraduationCap, Users, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Software Developer Intern",
      company: "Google",
      period: "Oct 2024 - Present",
      description: "Leading full-stack development of a security bulletin board website that processes 1000+ CVEs using Gemini AI and osv.dev API, automating vulnerability analysis and reducing engineers' manual review time by 40%.",
      highlights: ["Gemini AI Integration", "CVE Processing", "Full-Stack Development", "API Development"]
    },
    {
      icon: Briefcase,
      title: "Student Intern",
      company: "Lakehills Orthodontics",
      period: "Sep 2023 - Jun 2024",
      description: "Designed a patient progress-tracking system using Microsoft Dynamics 365, standardizing data collection and reducing clinical workflow delays by 25%.",
      highlights: ["Microsoft Dynamics 365", "Healthcare Technology", "Data Management", "Workflow Optimization"]
    },
    {
      icon: Code,
      title: "App Development Intern",
      company: "Quadrant Technologies",
      period: "Nov 2022 - Jun 2023",
      description: "Built a Python/JavaScript app to streamline patient data management, reducing retrieval time by 30% and hospital staff workload.",
      highlights: ["Python Development", "JavaScript", "Healthcare Apps", "Data Management"]
    }
  ];

  const education = [
    {
      school: "Bellevue College (Running Start)",
      location: "Bellevue, WA",
      period: "2024 - 2026 (Expected)",
      gpa: "4.0",
      courses: "CS101, CS210, CS211"
    },
    {
      school: "Bellevue Big Picture High School",
      location: "Bellevue, WA", 
      period: "2022 - 2026 (Expected)",
      gpa: "3.9",
      courses: ""
    }
  ];

  const leadership = [
    { role: "Co-Leader", organization: "Medicine Club" },
    { role: "Co-Leader", organization: "Coding Club" },
    { role: "Co-Leader & Article Editor", organization: "Newspaper Club" },
    { role: "Community Volunteer", organization: "Salvation Army" }
  ];

  const skills = [
    "JavaScript", "Python", "Java", "HTML", "C++", "C#", "SQL",
    "React", "Microsoft Dynamics 365", "Azure Cloud Services", "Git",
    "Team Leadership", "Critical Thinking", "Project Management", "Cross-Cultural Communication"
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey combining technology and healthcare, along with my academic pursuits and leadership activities.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <exp.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                      <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                    </div>
                    <h5 className="text-lg font-semibold text-gray-700 mb-3">{exp.company}</h5>
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
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{edu.school}</h4>
                    <p className="text-gray-600 mb-2">{edu.location}</p>
                    <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-semibold text-gray-900">GPA: {edu.gpa}</span>
                      {edu.courses && <span className="text-sm text-gray-600">{edu.courses}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Activities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership & Activities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-700" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{activity.role}</h4>
                    <p className="text-gray-600 text-sm">{activity.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical & Soft Skills</h3>
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
