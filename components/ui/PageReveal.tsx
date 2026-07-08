"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  background?: string;
}

export default function PageReveal({
  children,
  background = "#FFFDF8",
}: Props) {
  return (
    <motion.div
      className="relative rounded-[32px]"
      initial={{
        opacity: 0,
        rotateX: -18,
        y: 120,
      }}
      whileInView={{
        opacity: 1,
        rotateX: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        background,
        transformOrigin: "top center",
        transformStyle: "preserve-3d",
        perspective: 2000,
      }}
    >
      {/* Paper Shadow */}
      <div
        className="
          page-shadow
          absolute
          inset-0
          -z-10
          rounded-[32px]
          pointer-events-none
        "
      />

      {children}
    </motion.div>
  );
}