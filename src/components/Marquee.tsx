const items = [
  "NestJS",
  "Next.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "LLM integration",
  "OAuth 2.0",
];

const Marquee = () => (
  <div className="relative overflow-hidden border-y border-border/70 bg-card/40 py-5" aria-hidden>
    <div className="animate-marquee flex w-max gap-12">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="font-display flex items-center gap-12 whitespace-nowrap text-2xl font-bold uppercase text-muted-foreground">
          {item}
          <span className="h-2 w-2 rounded-full bg-primary" />
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
