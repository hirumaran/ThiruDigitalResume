
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Interested in collaborating on security research, discussing vulnerabilities, or exploring cybersecurity opportunities? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Professional Collaboration</h3>
            <p className="text-gray-300 mb-6">
              Open to security research collaborations, vulnerability disclosure discussions, and cybersecurity consulting opportunities.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/thirumaran-deepak-0772722b2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Research & Community</h3>
            <p className="text-gray-300 mb-6">
              Passionate about sharing knowledge, contributing to the cybersecurity community, and advancing security research.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-400 mb-4">
            "Security is not a product, but a process." - Bruce Schneier
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:contact@thirumaran.dev" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/thirumaran-deepak-0772722b2/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
