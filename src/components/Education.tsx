import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "ISITCOM",
      fullName: "Higher Institute of Computer Science and Communication Technologies",
      location: "Sousse",
      degree: "Computer Science",
      period: "2023 – 2026 (Expected)",
      color: "primary",
    },
    {
      institution: "Med Ali Annabi High School",
      fullName: "",
      location: "Bizerte",
      degree: "Computer Science Baccalaureate",
      period: "2019 – 2023",
      color: "secondary",
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 rounded-2xl hover:scale-[1.02] transition-transform animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className={`w-16 h-16 rounded-full bg-${edu.color}/20 flex items-center justify-center flex-shrink-0`}>
                  <GraduationCap className={`h-8 w-8 text-${edu.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{edu.institution}</h3>
                  {edu.fullName && (
                    <p className="text-muted-foreground text-sm mb-2">{edu.fullName}</p>
                  )}
                  <p className={`text-lg text-${edu.color} mb-2`}>{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </span>
                    <span>📍 {edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
