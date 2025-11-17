import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mustapha-sghaier/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/roastytoasty777",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:mustapha.sghaier777@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-8 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} <span className="text-gradient font-semibold">Mustapha Sghaier</span>. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with passion and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
