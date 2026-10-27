import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

const SpotlightCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      className={`spotlight relative overflow-hidden rounded-3xl border border-border/70 bg-card ${className}`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
