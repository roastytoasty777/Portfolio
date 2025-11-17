import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Computer Science Student • Web Developer • Graphic Designer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Photo Placeholder */}
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl font-bold text-gradient">
                <img
                  src="/image.png"
                  alt="Mustapha Sghaier"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-in-left">
            Hi, I'm <span className="text-gradient">Mustapha Sghaier</span>
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Proactive Computer Science student passionate about creating beautiful web experiences
            and stunning visual designs. Let's build something amazing together!
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up">
            <Button 
              size="lg" 
              className="gradient-hero text-white border-0 hover:scale-105 transition-transform duration-300 glow-primary" asChild
            >
              <a href="/cv/Mustapha_Sghaier_CV.pdf" 
              download="Mustapha_Sghaier_CV.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in-up">
            <a
              href="https://www.linkedin.com/in/mustapha-sghaier/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all glow-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/roastytoasty777"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all glow-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:mustapha.sghaier777@gmail.com"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all glow-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
