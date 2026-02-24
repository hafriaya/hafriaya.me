"use client";

import AnimatedSection from "./AnimatedSection";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  color: string;
  icon: string;
  delay?: number;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  color,
  icon,
  delay = 0,
  className = "",
}: ProjectCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div
        className={`project-card group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-surface/60 backdrop-blur-sm transition-all duration-500 hover:border-neon-pink/30 hover:neon-border-glow ${className}`}
      >
        {/* Image / Visual area */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-dark-bg">
          {/* Gradient background with icon */}
          <div
            className="project-image absolute inset-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
            }}
          >
            <span className="text-6xl sm:text-7xl opacity-60 group-hover:opacity-90 transition-opacity duration-500">
              {icon}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="project-overlay absolute inset-0 flex items-center justify-center bg-dark-bg/80 backdrop-blur-sm">
            <span className="rounded-full border border-neon-pink/50 px-5 py-2 text-sm font-medium text-neon-pink">
              View Details →
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold text-white group-hover:text-neon-pink transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-dark-bg/80 px-2.5 py-1 text-[11px] font-mono text-gray-500 border border-dark-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
