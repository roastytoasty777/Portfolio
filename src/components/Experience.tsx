import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Tutor",
      subtitle: "Web Development & Python",
      location: "Remote",
      period: "August 2023 – Present",
      color: "primary",
      responsibilities: [
        "Teach programming fundamentals and best practices",
        "Web basics: HTML, CSS, JavaScript",
        "Backend development with PHP + SQL",
        "Python basics (data structures, algorithms)",
        "Create structured learning materials and lessons",
      ],
    },
    {
      title: "Web Developer",
      subtitle: "NeoFit ISITCOM",
      location: "Sousse",
      period: "Feb 2025 – April 2025",
      color: "secondary",
      responsibilities: [
        "Developed front-end and back-end of fitness tracking web app",
        "Designed and modeled the database schema",
        "Ensured data integrity and smooth data flow",
        "Collaborated with team during various development stages",
      ],
    },
    {
      title: "Graphic Designer",
      subtitle: "Rolex Yacht-Master Promotional Design",
      location: "ISITCOM",
      period: "Nov 2024 – Dec 2024",
      color: "accent",
      responsibilities: [
        "Produced banner + social media promotional designs",
        "High-fidelity visuals using Adobe Photoshop",
        "Applied advanced typography and color theory",
        "Delivered luxury-grade, realistic product presentation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
           <span className="text-gradient">Experience</span> and <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 rounded-2xl hover:scale-[1.02] transition-transform animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-${exp.color}/20 flex items-center justify-center flex-shrink-0`}>
                  <Briefcase className={`h-6 w-6 text-${exp.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className={`text-lg text-${exp.color} mb-2`}>{exp.subtitle}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span>📍 {exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 ml-0 md:ml-16">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                    <span className={`text-${exp.color} mt-1`}>▸</span>
                    <span>{resp}</span>
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
