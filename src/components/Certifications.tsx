import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const certifications = [
  { title: "Introduction to Object-Oriented Programming in Java", issuer: "DataCamp", hours: "4 hrs", date: "Oct 2025", image: "/certs/java-oop.png" },
  { title: "Intermediate SQL", issuer: "DataCamp", hours: "4 hrs", date: "Sep 2025", image: "/certs/intermediate-sql.png" },
  { title: "Image Processing in Python", issuer: "DataCamp", hours: "4 hrs", date: "May 2025", image: "/certs/image-processing.png" },
  { title: "Foundations of Probability in Python", issuer: "DataCamp", hours: "5 hrs", date: "Dec 2024", image: "/certs/probability.png" },
  { title: "Intermediate Python", issuer: "DataCamp", hours: "4 hrs", date: "Dec 2024", image: "/certs/intermediate-python.png" },
];

const Certifications = () => (
  <section id="certifications" className="py-28">
    <div className="container mx-auto px-4">
      <Reveal>
        <p className="font-mono-label mb-3 text-primary">Certifications</p>
        <h2 className="font-display mb-14 max-w-3xl text-4xl font-extrabold md:text-5xl">Always learning.</h2>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <SpotlightCard className="h-full">
              <a href={c.image} target="_blank" rel="noreferrer" className="flex h-full flex-col gap-4 p-4">
                <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="w-full rounded-lg border border-white/10 object-cover" />
                <div className="px-2 pb-2">
                  <p className="font-mono-label text-muted-foreground">{c.issuer} / {c.date}</p>
                  <h3 className="font-display mt-2 text-lg font-bold">{c.title}</h3>
                </div>
              </a>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
