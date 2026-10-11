"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const experience = [
  {
    role: "Software R&D Intern",
    organization: "ViTrox",
    period: "Jun 2026 — Aug 2026",
    detail:
      "Worked on automated board inspection in the Advanced X-Ray Inspection business unit. Ported serial algorithms for X-ray image reconstruction to NVIDIA CUDA, AdaptiveCPP SYCL, and AVX-512, reported around 5× performance improvement for ZFP image compression, and resolved customer issues in FFT and filtered back projection.",
    tag: "CUDA · SYCL · AVX-512",
  },
  {
    role: "Food & Beverage Assistant",
    organization: "Maldron Hotel Oranmore",
    period: "Sep 2025 — May 2026",
    detail:
      "Built teamwork, time-management, and customer-service skills while working in a fast-paced hotel environment.",
    tag: "Teamwork · Service",
  },
  {
    role: "Technical Trainee",
    organization: "Phifer Electronics Engineering",
    period: "Jun 2025 — Aug 2025",
    detail:
      "Tested PCBs, completed soldering repairs and part replacements, and diagnosed faults on site in a manufacturing environment.",
    tag: "PCB testing · Repair",
  },
  {
    role: "Founder & Chairperson",
    organization: "ATU Software Development Society",
    period: "Sep 2025 — Present",
    detail:
      "Established a 50-member student tech community, organizing coding workshops, workplace visits, and collaborative projects.",
    tag: "Leadership · Community",
  },
  {
    role: "Junior Associate, Finance Division",
    organization: "ICMS UK Division",
    period: "Sep 2025 — Sep 2026",
    detail:
      "Helped plan budgets and event strategy, and presented a fundraising proposal to the council.",
    tag: "Planning · Finance",
  },
  {
    role: "International Student Ambassador",
    organization: "Atlantic Technological University",
    period: "Sep 2024 — Sep 2025",
    detail:
      "Helped coordinate campus events including Global Week and Chinese New Year celebrations, supporting cultural engagement across the university.",
    tag: "Volunteering · Campus",
  },
];

export function ExperienceTimeline() {
  const [open, setOpen] = useState(0);

  return (
    <div className="timeline">
      {experience.map((item, index) => {
        const expanded = open === index;
        return (
          <div className={`timeline-item${expanded ? " timeline-item-open" : ""}`} key={item.role}>
            <button
              className="timeline-trigger"
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              <span className="timeline-marker" aria-hidden="true" />
              <span className="timeline-main">
                <span className="timeline-title">{item.role}</span>
                <span className="timeline-subtitle">{item.organization}</span>
              </span>
              <span className="timeline-aside">
                <span className="timeline-period">{item.period}</span>
                <ChevronDown size={16} className={expanded ? "chevron-open" : ""} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  className="timeline-detail"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{item.detail}</p>
                  <span className="timeline-tag">{item.tag}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}