
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
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
        <div className="mb-8 animate-fade-in">
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
            className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View My Work
          </button>
          <a 
            href="https://www.linkedin.com/in/thirumaran-deepak/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 hover:text-gray-900 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" size={32} onClick={scrollToAbout} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
