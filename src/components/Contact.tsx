
import { Mail, Linkedin, Github, MessageSquare, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Interested in collaborating on tech projects, discussing internship opportunities, or connecting about healthcare innovation? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Professional Opportunities</h3>
            <p className="text-gray-300 mb-6">
              Open to internship opportunities, tech collaborations, and mentorship in software development and healthcare technology.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/thirumaran-deepak/" 
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
            <h3 className="text-xl font-bold mb-4">Projects & Learning</h3>
            <p className="text-gray-300 mb-6">
              Passionate about sharing knowledge, learning from others, and contributing to open source projects in the tech community.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/hirumaran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
          <h3 className="text-xl font-bold mb-6">Contact Information</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-gray-300" />
              <p className="text-gray-300">Bellevue, WA</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-gray-300" />
              <p className="text-gray-300">(425) 591-1475</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-gray-300" />
              <div className="text-gray-300">
                <p className="text-sm">s-deepakt@bsd405.org</p>
                <p className="text-sm">thirumaran.dk@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-400 mb-4">
            "The best way to predict the future is to create it." - Peter Drucker
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:thirumaran.dk@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/thirumaran-deepak/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/hirumaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
