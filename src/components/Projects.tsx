"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const INITIAL_BIG = 4;
const BIG_ROW = 2;
const SMALL_ROW = 3;

const bigProjects = projects.filter((p) => p.featured).slice(0, 8);
const smallProjects = projects.filter((p) => !bigProjects.some((big) => big.id === p.id));

export default function Projects() {
  const [visibleBig, setVisibleBig] = useState(INITIAL_BIG);
  const [visibleSmall, setVisibleSmall] = useState(0);

  const visibleBigProjects = bigProjects.slice(0, visibleBig);
  const visibleSmallProjects = smallProjects.slice(0, visibleSmall);
  const canShowMore = visibleBig < bigProjects.length || visibleSmall < smallProjects.length;
  const canShowLess = visibleBig > INITIAL_BIG || visibleSmall > 0;

  const handleShowMore = () => {
    if (visibleBig < bigProjects.length) {
      setVisibleBig((count) => Math.min(count + BIG_ROW, bigProjects.length));
      return;
    }
    setVisibleSmall((count) => Math.min(count + SMALL_ROW, smallProjects.length));
  };

  const handleShowLess = () => {
    setVisibleBig(INITIAL_BIG);
    setVisibleSmall(0);
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="projects" className="relative bg-dark-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-neon-pink" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-neon-pink">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Projects
          </h2>
          <p className="mt-4 max-w-lg text-gray-400 leading-relaxed">
            Projects that reflect my experience in full-stack development, AI
            integration, and building real-world applications.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AnimatePresence initial={false}>
            {visibleBigProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.4,
                  delay: 0.08 * (i % BIG_ROW),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <ProjectCard project={project} delay={0} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleSmallProjects.length > 0 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence initial={false}>
              {visibleSmallProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.08 * (i % SMALL_ROW),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full"
                >
                  <ProjectCard project={project} compact delay={0} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {(canShowMore || canShowLess) && (
          <div className="mt-8 flex justify-center gap-4">
            {canShowMore && (
              <button
                onClick={handleShowMore}
                className="group inline-flex items-center gap-2 rounded-lg border border-dark-border px-6 py-3 text-sm font-semibold text-gray-300 transition-all hover:border-neon-pink/40 hover:text-neon-pink active:scale-[0.97]"
              >
                Show More
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
              </button>
            )}
            {canShowLess && (
              <button
                onClick={handleShowLess}
                className="group inline-flex items-center gap-2 rounded-lg border border-dark-border px-6 py-3 text-sm font-semibold text-gray-300 transition-all hover:border-neon-pink/40 hover:text-neon-pink active:scale-[0.97]"
              >
                Show Less
                <svg
                  className="h-4 w-4 rotate-180"
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
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
