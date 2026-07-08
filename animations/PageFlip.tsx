"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function PageFlip({
  children,
  className = "",
}: Props) {
  return (
    <motion.section
      initial={{
        rotateX: -80,
        opacity: 0,
        y: 120,
      }}
      whileInView={{
        rotateX: 0,
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformPerspective: 1800,
        transformOrigin: "top center",
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}