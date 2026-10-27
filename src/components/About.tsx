import Reveal from "./Reveal";

const stats = [
  { value: "20+", label: "Backend modules shipped (MetaPro + Wadhah)" },
  { value: "3", label: "LLM providers integrated" },
  { value: "3", label: "Languages: FR, EN, AR" },
];

const About = () => (
  <section id="about" className="py-28">
    <div className="container mx-auto grid items-center gap-14 px-4 lg:grid-cols-[1fr_1.3fr]">
      <Reveal>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/40 via-transparent to-secondary/40 blur-2xl" />
          <img
            src="/image.jpg"
            alt="Mustapha Sghaier"
            className="relative aspect-[4/5] w-full rotate-[-3deg] rounded-[2rem] border border-border object-cover transition-transform duration-500 hover:rotate-0"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="font-mono-label mb-3 text-primary">About</p>
        <h2 className="font-display mb-6 text-4xl font-extrabold md:text-5xl">
          I build the whole product, from the database to the interface.
        </h2>
        <p className="mb-4 text-lg text-muted-foreground">
          I'm an engineering student at TEK-UP University and a full-stack developer working in TypeScript and
          Python. During my internship at Duality Agency I built MetaPro, a multi-tenant SaaS with an LLM assistant,
          and I'm building Wadhah, an ERP for Tunisian SMEs.
        </p>
        <p className="mb-10 text-lg text-muted-foreground">
          I'm now following a Python roadmap toward AI engineering and data science, and I'm looking for a first
          experience inside a real team.
        </p>

        <dl className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card/60 p-5">
              <dt className="font-display text-4xl font-extrabold text-gradient">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
);

export default About;
