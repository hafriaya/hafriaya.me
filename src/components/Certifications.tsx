"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { certificates } from "@/data/certificates";

// Duplicate the list for seamless infinite loop
const duplicated = [...certificates, ...certificates];

export default function Certifications() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative bg-dark-bg py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-neon-pink" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-neon-pink">
              Credentials
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Certifications
          </h2>
        </AnimatedSection>
      </div>

      {/* Marquee slideshow — full width */}
      <AnimatedSection delay={0.2}>
        <div className="mt-14 relative">
          {/* Fade edges — stretched vertically to cover tooltip + hover lift */}
          <div className="pointer-events-none absolute left-0 -top-6 -bottom-6 w-16 sm:w-24 bg-gradient-to-r from-dark-bg to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 -top-6 -bottom-6 w-16 sm:w-24 bg-gradient-to-l from-dark-bg to-transparent z-10" />

          {/* Sliding track — top padding for tooltip above */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] pt-14">
            {duplicated.map((cert, i) => (
              <motion.a
                key={`${cert.name}-${i}`}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-shrink-0 mx-3 sm:mx-4 group"
                onMouseEnter={() => setHoveredId(i)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* White logo box */}
                <div className="relative h-24 w-32 sm:h-28 sm:w-36 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-sm transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-neon-pink/10 p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="max-h-full max-w-full object-contain text-gray-900 text-xs font-bold text-center"
                    style={{ color: "#111" }}
                  />
                </div>

                {/* Tooltip on hover */}
                <AnimatePresence>
                  {hoveredId === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-20 w-max max-w-[220px]"
                    >
                      <div className="rounded-lg bg-dark-surface border border-dark-border px-4 py-2.5 shadow-xl">
                        <p className="text-[13px] font-semibold text-white text-center leading-tight">
                          {cert.name}
                        </p>
                        <p className="mt-0.5 text-[11px] font-mono text-neon-pink text-center">
                          {cert.issuer}
                        </p>
                      </div>
                      {/* Tooltip arrow pointing down */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-dark-surface border-r border-b border-dark-border" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
