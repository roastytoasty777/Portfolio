import { GraduationCap, Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science Student",
      subtitle: "ISITCOM",
      color: "text-primary",
    },
    {
      icon: Code,
      title: "Web Developer",
      subtitle: "Full Stack",
      color: "text-secondary",
    },
    {
      icon: Palette,
      title: "Graphic Designer",
      subtitle: "Adobe Expert",
      color: "text-accent",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      subtitle: "Always Growing",
      color: "text-primary",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl mb-12 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proactive <span className="text-primary font-semibold">Computer Science student</span> skilled in{" "}
              <span className="text-secondary font-semibold">Web Development</span>,{" "}
              <span className="text-accent font-semibold">Data Analysis</span>, and{" "}
              <span className="text-primary font-semibold">Graphic Design</span>. Proven ability to lead and
              collaborate, demonstrated through executive board experience and service management roles.
              Seeking a development internship to apply technical expertise and a challenge-oriented
              mindset to real-world projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform cursor-pointer group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-card flex items-center justify-center ${highlight.color} group-hover:glow-primary transition-all`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
