"use client";

import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  href: string;
};

export function MagneticLink({ children, className = "", ...props }: Props) {
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, { stiffness: 220, damping: 18, mass: 0.35 });
  const y = useSpring(targetY, { stiffness: 220, damping: 18, mass: 0.35 });

  return (
    <motion.a
      {...props}
      className={className}
      style={{ x, y }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        targetX.set((event.clientX - bounds.left - bounds.width / 2) * 0.14);
        targetY.set((event.clientY - bounds.top - bounds.height / 2) * 0.14);
      }}
      onPointerLeave={() => {
        targetX.set(0);
        targetY.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}