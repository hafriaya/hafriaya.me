"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

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

        {/* Other Projects (toggled) */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    delay={0.1 * i}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show More / Show Less button */}
        {otherProjects.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="group inline-flex items-center gap-2 rounded-lg border border-dark-border px-6 py-3 text-sm font-semibold text-gray-300 transition-all hover:border-neon-pink/40 hover:text-neon-pink active:scale-[0.97]"
            >
              {showMore ? "Show Less" : "Show More"}
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  showMore ? "rotate-180" : ""
                }`}
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
          </div>
        )}
      </div>
    </section>
  );
}
