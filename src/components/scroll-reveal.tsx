"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  id?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  id,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion || direction === "none") {
    return <div id={id} className={className}>{children}</div>;
  }

  const offset = 28;
  const initialVariants = {
    up: { opacity: 0, y: offset },
    left: { opacity: 0, x: -offset },
    right: { opacity: 0, x: offset },
    none: { opacity: 0 },
  };

  return (
    <motion.div
      id={id}
      initial={initialVariants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
