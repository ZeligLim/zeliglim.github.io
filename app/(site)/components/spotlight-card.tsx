"use client";

import type { CSSProperties, ReactNode } from "react";

type SpotlightStyle = CSSProperties & {
  "--spot-x": string;
  "--spot-y": string;
};

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`spotlight-card ${className}`}
      style={{ "--spot-x": "50%", "--spot-y": "50%" } as SpotlightStyle}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
        event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
      }}
    >
      {children}
    </article>
  );
}