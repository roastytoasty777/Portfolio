import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const groups = [
  { title: "Languages", wide: true, items: ["TypeScript", "JavaScript", "Python", "SQL", "Java (OOP)"] },
  { title: "Backend", items: ["Node.js", "NestJS", "FastAPI", "REST + Swagger", "PostgreSQL", "Prisma", "SQLAlchemy", "Redis", "BullMQ"] },
  { title: "Frontend", items: ["React", "Next.js", "Angular", "Tailwind CSS", "HTML / CSS"] },
  { title: "AI and data", items: ["LLM APIs (Groq, OpenAI, Claude)", "Prompt design", "OCR", "Demand forecasting", "Python", "NumPy", "pandas", "Matplotlib", "SciPy", "scikit-image", "OpenCV", "Probability in Python", "Image processing in Python"] },
  { title: "Security and DevOps", items: ["JWT", "OAuth 2.0", "RBAC", "Git / GitHub", "Docker", "Docker Compose"] },
];

const Skills = () => (
  <section id="skills" className="py-28">
    <div className="container mx-auto px-4">
      <Reveal>
        <p className="font-mono-label mb-3 text-primary">Skills</p>
        <h2 className="font-display mb-14 max-w-3xl text-4xl font-extrabold md:text-5xl">What I work with.</h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06} className={g.wide ? "md:col-span-2" : ""}>
            <SpotlightCard className="h-full">
              <div className="p-8">
                <h3 className="font-display mb-5 text-2xl font-bold">{g.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 rounded-3xl border border-primary/40 bg-primary/5 p-8">
          <p className="font-mono-label mb-2 text-primary">Learning now</p>
          <p className="text-lg">
            Python for AI engineering and data science: RAG, agents and model deployment, practiced through a
            structured roadmap.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Skills;
