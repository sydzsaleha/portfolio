import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      {/* Background accent */}
      <div className="floating-orb w-80 h-80 bg-primary -left-40 bottom-0" style={{ animationDelay: '1s' }} />
      
      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Get Connected</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ready to bring my HR expertise to your organization. 
            Feel free to reach out for opportunities or collaborations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a 
            href="tel:8074047771"
            className="glass-card p-6 rounded-2xl text-center hover:border-primary/50 hover:scale-105 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">8074047771</p>
          </a>
          
          <a 
            href="mailto:sydzsaleha@gmail.com"
            className="glass-card p-6 rounded-2xl text-center hover:border-primary/50 hover:scale-105 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">sydzsaleha@gmail.com</p>
          </a>
          
          <div className="glass-card p-6 rounded-2xl text-center hover:border-primary/50 hover:scale-105 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">Hyderabad, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
