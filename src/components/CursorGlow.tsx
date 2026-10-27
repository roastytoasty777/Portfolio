import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const tick = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (ref.current) ref.current.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full opacity-60 md:block"
      style={{ background: "radial-gradient(circle, hsl(22 100% 58% / 0.12), transparent 65%)" }}
    />
  );
};

export default CursorGlow;
