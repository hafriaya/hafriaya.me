"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  delay?: number;
  compact?: boolean;
}

export default function ProjectCard({ project, delay = 0, compact = false }: ProjectCardProps) {
  const hasImage = Boolean(project.image);
  const hasUrl = Boolean(project.url);
  const hasLive = Boolean(project.liveUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div className="project-card group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-surface/60 backdrop-blur-sm transition-all duration-500 hover:border-neon-pink/30 hover:neon-border-glow h-full flex flex-col">
        {/* Screenshot */}
        <div className={`relative overflow-hidden bg-dark-bg ${compact ? "h-32 sm:h-36" : "h-52 sm:h-60"}`}>
          {hasImage ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover project-image transition-transform duration-600"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
              priority={project.featured}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
              <span className="px-6 text-center font-mono text-xs uppercase tracking-[0.22em] text-neon-pink/80">
                {project.title}
              </span>
            </div>
          )}

          {/* Hover overlay */}
          {(hasUrl || hasLive) && (
            <div className="project-overlay absolute inset-0 flex items-center justify-center gap-3 bg-dark-bg/80 backdrop-blur-sm">
              {hasUrl && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-neon-pink/50 px-5 py-2 text-sm font-medium text-neon-pink hover:bg-neon-pink/10 transition-colors"
                >
                  View Project →
                </a>
              )}
              {hasLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Live →
                </a>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`flex flex-col flex-1 ${compact ? "p-4" : "p-5 sm:p-6"}`}>
          <h3 className={`font-bold text-white group-hover:text-neon-pink transition-colors duration-300 ${compact ? "text-base" : "text-lg"}`}>
            {project.title}
          </h3>
          <p className={`mt-2 leading-relaxed text-gray-400 flex-1 ${compact ? "text-xs line-clamp-3" : "text-sm"}`}>
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

          {(hasUrl || hasLive) && (
            <div className={`flex flex-wrap items-center ${compact ? "mt-4 gap-x-4 gap-y-2" : "mt-5 gap-x-5 gap-y-2"}`}>
              {hasUrl && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neon-pink hover:text-neon-pink-dim transition-colors group/link"
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
              )}
              {hasLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  Live
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
