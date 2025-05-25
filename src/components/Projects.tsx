
import { ExternalLink, Github, Code, Sparkles, Calculator } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "KevinGPT",
      description: "An AI-powered chatbot built with modern web technologies, featuring natural language processing capabilities and an intuitive user interface.",
      tech: ["JavaScript", "AI/ML", "Web APIs"],
      github: "https://github.com/hirumaran/KevinGPT",
      icon: Sparkles,
      highlights: ["Natural Language Processing", "Real-time Chat Interface", "AI Integration"]
    },
    {
      title: "Fractals Project",
      description: "Mathematical visualization project exploring fractal geometry through interactive web-based animations and computational graphics.",
      tech: ["JavaScript", "Canvas API", "Mathematical Computing"],
      github: "https://github.com/hirumaran/fractals-project",
      icon: Calculator,
      highlights: ["Mathematical Visualization", "Interactive Graphics", "Algorithmic Art"]
    },
    {
      title: "Code Explainer",
      description: "Educational tool that helps students understand complex code snippets through detailed explanations and interactive examples.",
      tech: ["JavaScript", "Educational Technology", "Code Analysis"],
      github: "https://github.com/hirumaran/CodeExplainer",
      icon: Code,
      highlights: ["Educational Technology", "Code Analysis", "Interactive Learning"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Personal Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of side projects that showcase my passion for coding, problem-solving, and continuous learning 
            in various domains of computer science and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <project.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors font-medium flex-1 justify-center py-2 border border-gray-200 rounded-lg hover:border-gray-300"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All projects are open source and available on GitHub. Feel free to explore, fork, and contribute!
          </p>
          <a 
            href="https://github.com/hirumaran"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
