import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Academic Background</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            <span className="text-gradient">Education</span>
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                  Bachelor of Business Management (BBM)
                </h3>
                <p className="text-muted-foreground">
                  Sri Harshini Degree College
                </p>
                <p className="text-sm text-muted-foreground">
                  Affiliated by Acharya Nagarjuna University
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full">
                    <span className="text-primary font-semibold">60%</span>
                    <span className="text-sm text-muted-foreground">Score</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
