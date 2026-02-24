"use client";

import { motion } from "framer-motion";

/* ── Tag pills config: first is accented pink, rest are subdued gray ── */
const tags = [
  { label: "Full-Stack Developer", accent: true },
  { label: "AI Integrator", accent: false },
  { label: "Problem Solver", accent: false },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-dark-bg overflow-visible"
    >
      {/* ── Background grid ── */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Floating neon blurs ── */}
      <div className="absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-neon-pink/10 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-neon-pink/8 blur-[120px]" />

      {/* ════════════════════════════════════════════════════
          Main Content — Full-width, centered
          ════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-10 py-24 md:py-32 flex flex-col items-center overflow-visible">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-surface/50 px-4 py-1.5 text-xs font-mono text-gray-400">
            <span className="h-2 w-2 rounded-full bg-neon-pink animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════
            LUMINESCENT TOWN — Massive Typography Block
            ════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-visible select-none pb-16 sm:pb-18 md:pb-20"
        >
          {/* ── Massive Main Text ── */}
          <h1
            className="font-display font-black text-white text-center uppercase tracking-tighter"
            style={{
              fontSize: "clamp(5rem, 15vw, 14rem)",
              lineHeight: "0.8",
              textShadow:
                "0 8px 30px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.4)",
            }}
          >
            HAFRI AYA
          </h1>

          {/* ── Overlapping Cursive Text ── */}
          <span
            className="absolute z-20 font-cursive font-bold text-neon-pink -rotate-3 pointer-events-none"
            style={{
              fontSize: "clamp(4rem, 10vw, 9rem)",
              top: "20%",
              left: "30%",
              textShadow:
                "3px 3px 12px rgba(0,0,0,0.7), 0 0 30px rgba(236,101,141,0.3)",
            }}
          >
            Developer
          </span>
        </motion.div>

        {/* ════════════════════════════════════════════════════
            Tag Pills — Centered, larger, first pill accented
            ════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-14 flex flex-wrap gap-4 justify-center"
        >
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-full px-6 py-2.5 text-base font-medium transition-all ${tag.accent
                  ? "border border-neon-pink text-neon-pink bg-neon-pink/10 shadow-[0_0_20px_rgba(236,101,141,0.15)] hover:bg-neon-pink/20 hover:shadow-[0_0_28px_rgba(236,101,141,0.25)]"
                  : "border border-gray-600 text-gray-400 bg-transparent hover:border-gray-500 hover:text-gray-300"
                }`}
            >
              {tag.label}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-gray-400 leading-relaxed text-center"
        >
          I build modern web apps with clean design and smart functionality. Focused on full-stack development and AI integration, I turn ideas into real, useful products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-neon-pink px-6 py-3 text-sm font-semibold text-dark-bg transition-all hover:bg-neon-pink-dim hover:shadow-lg hover:shadow-neon-pink/20 active:scale-[0.97]"
          >
            View Projects
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-dark-border px-6 py-3 text-sm font-semibold text-gray-300 transition-all hover:border-neon-pink/40 hover:text-neon-pink active:scale-[0.97]"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* ── Side decorative line (desktop) ── */}
      <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-neon-pink/40 to-transparent" />
          <span className="font-mono text-[10px] text-neon-pink/60 rotate-90 whitespace-nowrap tracking-widest">
            SCROLL DOWN
          </span>
          <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-neon-pink/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
