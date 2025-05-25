
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-300">
            <img 
              src="/lovable-uploads/c54d4415-315a-4c1d-a74e-2cb3e78e1cc3.png" 
              alt="Thirumaran Deepak"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
            Thirumaran Deepak
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            High School Junior | Software Developer | Healthcare Tech Innovator
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Passionate about bridging healthcare and technology through innovative software solutions. 
            Currently interning at Google while pursuing computer science education.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in delay-300">
          <button 
            onClick={scrollToAbout}
            className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          <button 
            onClick={scrollToContact}
            className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 hover:text-gray-900 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get In Touch
            </span>
          </button>
          <a 
            href="https://www.linkedin.com/in/thirumaran-deepak/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ArrowDown className="mx-auto text-gray-400 hover:text-gray-600 transition-colors" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
