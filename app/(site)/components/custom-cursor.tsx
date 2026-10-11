"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [label, setLabel] = useState("");
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 180, damping: 24, mass: 0.55 });
  const ringY = useSpring(dotY, { stiffness: 180, damping: 24, mass: 0.55 });

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: fine)");
    if (!pointer.matches) return;

    document.documentElement.classList.add("cursor-none");

    const move = (event: PointerEvent) => {
      dotX.set(event.clientX);
      dotY.set(event.clientY);
    };
    const over = (event: PointerEvent) => {
      const element = event.type === "pointerout" ? event.relatedTarget : event.target;
      const target = element instanceof Element ? element : null;
      const interactive = target?.closest("[data-cursor], a, button");
      setLabel(interactive?.getAttribute("data-cursor") ?? (interactive ? "OPEN" : ""));
    };
    const leave = () => setLabel("");

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerout", over, { passive: true });
    window.addEventListener("blur", leave);

    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerout", over);
      window.removeEventListener("blur", leave);
    };
  }, [dotX, dotY]);

  return (
    <>
      <motion.span className="cursor-dot" style={{ x: dotX, y: dotY }} aria-hidden="true" />
      <motion.span
        className={`cursor-ring${label ? " cursor-ring-active" : ""}`}
        style={{ x: ringX, y: ringY }}
        aria-hidden="true"
      >
        <span>{label}</span>
      </motion.span>
    </>
  );
}