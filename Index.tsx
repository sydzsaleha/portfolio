import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container max-w-5xl text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Saleha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
