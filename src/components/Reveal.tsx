import { motion } from "framer-motion";
import type { ReactNode } from "react";

const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
