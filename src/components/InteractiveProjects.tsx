
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { useState } from "react";

const InteractiveProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      name: "KevinGPT",
      description: "An AI-powered chatbot built with advanced natural language processing capabilities. Features real-time conversation handling and intelligent response generation.",
      tech: ["Python", "AI/ML", "NLP"],
      github: "https://github.com/hirumaran/KevinGPT",
      stars: 15,
      forks: 3,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Fractals Project",
      description: "Interactive mathematical visualization tool for exploring fractal patterns. Implements complex mathematical algorithms with beautiful visual representations.",
      tech: ["JavaScript", "Canvas API", "Mathematics"],
      github: "https://github.com/hirumaran/fractals-project",
      stars: 8,
      forks: 2,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "CodeExplainer",
      description: "Educational tool that breaks down complex code into understandable explanations. Helps students and developers understand code structure and logic.",
      tech: ["Python", "Code Analysis", "Education"],
      github: "https://github.com/hirumaran/CodeExplainer",
      stars: 12,
      forks: 4,
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Personal Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my side projects and hobby developments that showcase my passion for coding, 
            problem-solving, and continuous learning outside of my professional work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-blue-600 transition-all duration-300">
                    {project.name}
                  </h3>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                        hoveredProject === index
                          ? `bg-gradient-to-r ${project.color} text-white shadow-lg`
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interactive element */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/hirumaran"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProjects;
