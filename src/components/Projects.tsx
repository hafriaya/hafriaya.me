"use client";

import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Moraja3aAI",
    description:
      "A Next.js & Supabase application leveraging the Gemini API to generate practice exams and flashcards — making studying smarter with AI-driven content creation.",
    tags: ["Next.js", "Supabase", "Gemini API", "AI", "TypeScript"],
    color: "#ec658d",
    icon: "🧠",
  },
  {
    title: "Kids Story App",
    description:
      "A Next.js application featuring animated face-swapping and AI-driven story generation — turning children's photos into personalized, magical storybooks.",
    tags: ["Next.js", "AI", "Face Swap", "Animation", "React"],
    color: "#7c5cf7",
    icon: "📖",
  },
  {
    title: "Guelya Time",
    description:
      "A desktop film recommendation engine built with JavaFX and a Neo4j graph database — exploring movie relationships through an intuitive graph-based interface.",
    tags: ["JavaFX", "Neo4j", "Graph DB", "Desktop", "Java"],
    color: "#3ecf8e",
    icon: "🎬",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-dark-bg py-24 sm:py-32">
      {/* Section header */}
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
            These projects reflect my journey as a developer — exploring full-stack architecture, integrating AI, and building applications designed to solve real problems and improve everyday experiences.
          </p>
        </AnimatedSection>

        {/* Asymmetric Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large card */}
          <div className="md:col-span-7">
            <ProjectCard {...projects[0]} delay={0.1} className="h-full" />
          </div>
          {/* Stacked right column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <ProjectCard {...projects[1]} delay={0.2} />
            <ProjectCard {...projects[2]} delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
}
