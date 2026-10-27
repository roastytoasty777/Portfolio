import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip">
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Projects />
          <About />
          <Skills />
          <Certifications />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default Index;
