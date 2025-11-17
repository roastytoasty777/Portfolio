import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "NeoFit Fitness Tracking Web Application",
      description:
        "Full-stack fitness tracking application with comprehensive workout and nutrition management. Built with modern web technologies for optimal performance.",
      technologies: ["PHP", "SQL", "JavaScript", "HTML/CSS"],
      role: "Full Stack Developer",
      highlights: [
        "Front-end & back-end development",
        "Database schema design",
        "Data integrity management",
      ],
      color: "primary",
      image: "/neofit.jpg",
    },
    {
      title: "Rolex Yacht-Master Promotional Package",
      description:
        "Luxury brand promotional design featuring high-fidelity visuals and professional typography. Created realistic product presentations for marketing campaigns.",
      technologies: ["Adobe Photoshop", "Typography", "Color Theory"],
      role: "Graphic Designer",
      highlights: [
        "Banner & social media designs",
        "Luxury-grade visuals",
        "Advanced design techniques",
      ],
      color: "secondary",
      image: "/rolex.jpg",
    },
    {
      title: "More Projects",
      description: null,
      technologies: [],
      role: null,
      highlights: [],
      color: "accent",
      image: null,
      github: "https://github.com/roastytoasty777",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* IMAGE ONLY FOR FIRST TWO */}
              {project.image && (
                <div className="h-48 overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* CARD CONTENT */}
              {index !== 2 ? (
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                  <p className={`text-sm text-${project.color} mb-3`}>
                    {project.role}
                  </p>

                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className={`text-${project.color} mt-1`}>▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded-full text-xs bg-${project.color}/20 text-${project.color}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                /* REDESIGNED AND CENTERED THIRD CARD */
                <div className="flex flex-col items-center justify-center text-center py-20 h-full">
                  <Github className="h-14 w-14 text-accent mb-4" />

                  <h3 className="text-2xl font-bold mb-2">
                    Explore More Projects
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                    I have additional projects available on my GitHub profile.
                    Feel free to take a look!
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Visit My GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
