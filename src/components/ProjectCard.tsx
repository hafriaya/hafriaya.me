"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-card group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-surface/60 backdrop-blur-sm transition-all duration-500 hover:border-neon-pink/30 hover:neon-border-glow h-full flex flex-col">
        {/* Screenshot */}
        <div className="relative h-52 sm:h-60 overflow-hidden bg-dark-bg">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover project-image transition-transform duration-600"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Hover overlay */}
          <div className="project-overlay absolute inset-0 flex items-center justify-center bg-dark-bg/80 backdrop-blur-sm">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neon-pink/50 px-5 py-2 text-sm font-medium text-neon-pink hover:bg-neon-pink/10 transition-colors"
            >
              View Project →
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-white group-hover:text-neon-pink transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-400 flex-1">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-dark-bg/80 px-2.5 py-1 text-[11px] font-mono text-gray-500 border border-dark-border"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Project button */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neon-pink hover:text-neon-pink-dim transition-colors group/link"
          >
            View Project
            <svg
              className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
