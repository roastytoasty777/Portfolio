import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cry2g5r", // Your Service ID
        "template_803z81f", // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "T3bosP0AsHRWeLnpj" // Your Public Key
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mustapha.sghaier777@gmail.com",
      href: "mailto:mustapha.sghaier777@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 52 310 179",
      href: "tel:+21652310179",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sousse, Tunisia",
      href: "#",
      color: "text-accent",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mustapha-sghaier/",
      label: "LinkedIn",
      color: "hover:text-primary",
    },
    {
      icon: Github,
      href: "https://github.com/roastytoasty777",
      label: "GitHub",
      color: "hover:text-secondary",
    },
    {
      icon: Mail,
      href: "mailto:mustapha.sghaier777@gmail.com",
      label: "Email",
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-card flex items-center justify-center ${info.color} group-hover:glow-primary transition-all`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </a>
              );
            })}

            <div
              className="glass-card p-6 rounded-2xl animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="font-semibold mb-4">Connect with me:</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center ${social.color} hover:scale-110 transition-all glow-primary`}
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-2xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-background/50 border-border"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-background/50 border-border"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="bg-background/50 border-border resize-none"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
