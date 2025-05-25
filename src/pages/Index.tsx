
import Hero from "@/components/Hero";
import About from "@/components/About";
import CVESection from "@/components/CVESection";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />
      <Hero />
      <About />
      <CVESection />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
