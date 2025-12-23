import { Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Floating orbs background */}
      <div className="floating-orb w-96 h-96 bg-primary top-20 -left-48" />
      <div className="floating-orb w-80 h-80 bg-secondary top-40 right-0" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-64 h-64 bg-primary bottom-20 left-1/3" style={{ animationDelay: '4s' }} />
      
      <div className="container relative z-10 max-w-5xl">
        <div className="text-center space-y-8">
          {/* Profile Photo */}
          <div className="relative inline-block opacity-0 animate-fade-in-up">
            {/* Decorative rotating ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary animate-spin-slow" style={{ padding: '3px', animationDuration: '8s' }}>
              <div className="w-full h-full rounded-full bg-background" />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 blur-xl animate-pulse" />
            {/* Photo container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-r from-primary via-secondary to-primary">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-background">
                <img 
                  src={profilePhoto} 
                  alt="Saleha - HR Operations Specialist" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full opacity-0 animate-fade-in-up animation-delay-200">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to Opportunities</span>
          </div>
          
          {/* Name */}
          <h1 className="font-display text-6xl md:text-8xl font-bold opacity-0 animate-fade-in-up animation-delay-400">
            <span className="text-gradient">Saleha</span>
          </h1>
          
          {/* Title */}
          <p className="text-2xl md:text-3xl text-muted-foreground font-light opacity-0 animate-fade-in-up animation-delay-600">
            HR Operations Specialist
          </p>
          
          {/* Objective */}
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up animation-delay-800">
            Results-driven HR professional with 4.8 years of experience in onboarding, 
            recruiting, HRIS, and process implementation. Dedicated to excelling in 
            fast-paced environments with excellent problem-solving and analytical skills.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 opacity-0 animate-fade-in-up animation-delay-800">
            <a 
              href="tel:8074047771" 
              className="flex items-center gap-2 glass-card px-6 py-3 rounded-full hover:border-primary/50 transition-all duration-300 group"
            >
              <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm">8074047771</span>
            </a>
            <a 
              href="mailto:sydzsaleha@gmail.com" 
              className="flex items-center gap-2 glass-card px-6 py-3 rounded-full hover:border-primary/50 transition-all duration-300 group"
            >
              <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm">sydzsaleha@gmail.com</span>
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-6 opacity-0 animate-fade-in-up animation-delay-1000">
            <a 
              href="#experience" 
              className="bg-gradient-primary px-8 py-4 rounded-xl font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
            >
              View Experience
            </a>
            <a 
              href="#contact" 
              className="glass-card px-8 py-4 rounded-xl font-semibold hover:border-primary/50 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
