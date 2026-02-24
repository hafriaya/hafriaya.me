"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

const BATCH_SIZE = 3;

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(0);

  const visibleOthers = otherProjects.slice(0, visibleCount);
  const hasMoreToShow = visibleCount < otherProjects.length;
  const isExpanded = visibleCount > 0;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, otherProjects.length));
  };

  const handleShowLess = () => {
    setVisibleCount(0);
  };

  return (
    <section id="projects" className="relative bg-dark-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
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

        {/* Featured Projects Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={0.1 * i} />
          ))}
        </div>

        {/* Other Projects (revealed in batches) */}
        <AnimatePresence>
          {visibleOthers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {visibleOthers.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 * (i % BATCH_SIZE),
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full"
                    >
                      <ProjectCard project={project} delay={0} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show More / Show Less buttons */}
        {otherProjects.length > 0 && (
          <div className="mt-12 flex justify-center gap-4">
            {hasMoreToShow && (
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
            {isExpanded && (
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
