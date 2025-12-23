const skills = [
  { name: "Pre-Employment Screening", category: "Recruitment" },
  { name: "Hire-to-Retire Process", category: "Operations" },
  { name: "Workday", category: "HRIS" },
  { name: "Jobvite", category: "ATS" },
  { name: "End-to-End Recruitment", category: "Recruitment" },
  { name: "Talent Acquisition", category: "Recruitment" },
  { name: "Microsoft Office", category: "Tools" },
  { name: "Jira", category: "Tools" },
  { name: "Business Administration", category: "Management" },
  { name: "Recruitment and Selection", category: "Recruitment" },
  { name: "Employee Relations", category: "Operations" },
  { name: "HR Technology Systems", category: "HRIS" },
  { name: "Interpersonal Communication", category: "Soft Skills" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card px-6 py-3 rounded-full hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-default group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
