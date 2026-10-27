import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const Scene3D = lazy(() => import("./Scene3D"));

const Word = ({ children, delay, className = "" }: { children: string; delay: number; className?: string }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const reduceMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32">
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <Scene3D reduceMotion={reduceMotion} />
        </Suspense>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.p
          className="font-mono-label mb-6 inline-flex items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          Open to internships, available now
        </motion.p>

        <h1 className="font-display text-[clamp(2.2rem,8.4vw,9rem)] font-extrabold uppercase leading-[0.88]">
          <Word delay={0.3}>Mustapha</Word>
          <Word delay={0.45} className="text-gradient">
            Sghaier
          </Word>
        </h1>

        <motion.div
          className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            Full-stack developer in <span className="text-foreground">TypeScript</span> and{" "}
            <span className="text-foreground">Python</span>, building products end to end and moving into AI
            engineering.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              See my work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="/cv/Mustapha_Sghaier_CV.pdf"
              download="Mustapha_Sghaier_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-medium backdrop-blur-xl transition-colors hover:border-primary"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
