import { Code2, Database, Palette, Globe, MessageSquare, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      color: "text-primary",
      skills: ["Python", "C", "C++", "Java"],
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "text-secondary",
      skills: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-accent",
      skills: ["SQL", "MongoDB"],
    },
    {
      title: "Frameworks & Tools",
      icon: Palette,
      color: "text-primary",
      skills: ["Spring Boot", "JEE", "Angular", "Adobe Photoshop"],
    },
    {
      title: "Languages",
      icon: MessageSquare,
      color: "text-secondary",
      skills: ["English - Fluent", "French - Fluent", "Arabic - Native"],
    },
    {
      title: "Strengths",
      icon: TrendingUp,
      color: "text-accent",
      skills: ["Team Player", "Fast Learner", "Adaptive", "Challenge-Oriented"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-card flex items-center justify-center ${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        skillIndex % 3 === 0
                          ? "bg-primary/20 text-primary"
                          : skillIndex % 3 === 1
                          ? "bg-secondary/20 text-secondary"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
