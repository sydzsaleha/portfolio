import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "HR Operations Specialist",
    company: "Fluxtesk Solutions Inc.",
    location: "Chirala, A.P., India",
    duration: "Jan 2025 - May 2025",
    responsibilities: [
      "Creating Job Posts by gathering information from Stake Holders",
      "Managing candidate resume screening and shortlisting for interviews",
      "Managing complete Hire to Retire process",
      "Full-cycle recruitment including job postings, sourcing, interviewing, selection, and onboarding",
      "Assisting all employee queries",
      "Training, Learning and Development",
      "Employee Job changes: Transfers, Promotions, Location Changes, Terminations",
      "Performance management and candidate engagement",
      "Complete HR Operations from start to end",
      "Onboarding, offboarding, staff transfers, global mobility, HR reporting",
      "Sourcing and placing highly skilled employees with salary negotiations",
      "Day-to-day attendance and payroll processing",
    ],
  },
  {
    title: "Senior HR Executive / HR Shared Services Executive",
    company: "SMS Techsoft India Limited",
    location: "Bangalore, India",
    duration: "Sep 2022 - Dec 2024",
    responsibilities: [
      "Using procedures and policy manuals to assist employee/manager inquiries",
      "Complete Hire to Retire process management",
      "End-to-end recruitment using Workday Recruiting",
      "Partnering with HRIS and IT Teams for Workday Enhancements",
      "Collaborating with Hiring Managers to understand hiring needs",
      "Creating supervisory organizations, assigning roles, staffing models, job profiles",
      "HCM functionality configuration and business process maintenance",
      "Guiding employees through self-service functionality in Workday",
      "Supporting employee inquiries related to all HR programs",
      "Daily HR transactions including HRIS management and internal audit",
      "Monitoring daily service operations for quality assurance",
    ],
  },
  {
    title: "HR Executive / HR Shared Services Representative",
    company: "SMS Techsoft India Limited",
    location: "Bangalore, India",
    duration: "Aug 2020 - Aug 2022",
    responsibilities: [
      "Full cycle recruitment through ATS: pre-screening, tracking, scheduling interviews",
      "Processing employee status changes and HRIS data entry",
      "Managing onboarding process: background checks, welcome emails, I-9s, E-verify",
      "Responding to employee inquiries regarding PTO, payroll, and attendance policies",
      "Auditing/editing time cards for biweekly payroll processing",
      "Supporting HR department with metrics, reports, and onboarding guides",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-6">
      {/* Background accent */}
      <div className="floating-orb w-72 h-72 bg-secondary -right-36 top-1/4" style={{ animationDelay: '3s' }} />
      
      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Career Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary/80 font-medium mt-1">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground md:ml-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary/60" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary/60" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>
              
              <ul className="grid md:grid-cols-2 gap-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
