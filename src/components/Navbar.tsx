import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 200) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
      <div className="glass-card flex items-center justify-between rounded-full px-5 py-2.5">
        <button onClick={() => go("home")} className="font-display text-lg font-extrabold">
          MS<span className="text-primary">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                active === item.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="glass-card animate-fade-in-up mt-2 flex flex-col rounded-3xl p-3 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`rounded-2xl px-4 py-3 text-left ${
                active === item.id ? "bg-primary text-primary-foreground" : "text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
