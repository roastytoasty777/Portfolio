import Reveal from "./Reveal";

const steps = [
  { when: "Now", title: "QA Engineer Intern", where: "3LM SOLUTIONS", note: "Responsible for auditing the existing code base, then analysing and optimising it." },
  { when: "Feb to Jun 2026", title: "Full-Stack Developer Intern", where: "Duality Agency", note: "Built MetaPro end to end (NestJS back end, Next.js interface, LLM integration) in 7 Scrum sprints. Presented as my final-year project." },
  { when: "2026 to 2029", title: "Engineering Cycle, Computer Science", where: "TEK-UP University, Ariana", note: "Currently in progress." },
  { when: "Aug 2023 to now", title: "Tutor, Web Development and Python", where: "Remote", note: "Teaching programming fundamentals, web basics, PHP with SQL and Python data structures." },
  { when: "2023 to 2026", title: "Bachelor in Computer Science, Computing and Multimedia", where: "ISITCOM, Sousse", note: "" },
];

const Journey = () => (
  <section id="journey" className="py-28">
    <div className="container mx-auto max-w-4xl px-4">
      <Reveal>
        <p className="font-mono-label mb-3 text-primary">Journey</p>
        <h2 className="font-display mb-14 text-4xl font-extrabold md:text-5xl">Experience and education.</h2>
      </Reveal>

      <ol className="relative border-l border-border pl-8">
        {steps.map((s, i) => (
          <li key={s.title} className="mb-12 last:mb-0">
            <Reveal delay={i * 0.05}>
              <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
              <p className="font-mono-label text-muted-foreground">{s.when}</p>
              <h3 className="font-display mt-2 text-2xl font-bold">{s.title}</h3>
              <p className="text-primary">{s.where}</p>
              {s.note && <p className="mt-3 max-w-2xl text-muted-foreground">{s.note}</p>}
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Journey;
