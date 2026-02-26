"use client";

import AnimatedSection from "./AnimatedSection";
import { experiences } from "@/data/experiences";

const currentlyExploring = [
  "AI integration in web applications",
  "Advanced Next.js patterns",
  "Application security",
  "System design fundamentals",
];

const skillGroups = [
  {
    category: "Frontend",
    skills: ["Next.js", "React.js", "React Native", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Laravel", "Django", "Symfony", "PHP", "ASP.NET"],
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "C++"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "Supabase", "Firebase", "Neo4j"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Figma", "WordPress", "JavaFX"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-paper-bg text-paper-text torn-edge paper-texture"
    >
      {/* Transition bar */}
      <div className="h-1 bg-gradient-to-r from-neon-pink via-neon-pink/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 sm:py-32">
        {/* Section title — editorial style */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-20">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper-muted">
              Section 03
            </span>
            <h2 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Experience
              <br />
              <span className="text-paper-accent">&amp; Community</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-paper-muted leading-relaxed border-l-2 border-paper-accent pl-4">
            Building technology is only half the mission — sharing knowledge and
            uplifting communities is the other.
          </p>
        </AnimatedSection>

        {/* Asymmetric editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left column — community involvement */}
          <div className="lg:col-span-7 space-y-8">
            {experiences.map((exp, i) => (
              <AnimatedSection
                key={`${exp.role}-${exp.organization}`}
                delay={0.1 * i}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative p-6 sm:p-8 bg-white border-l-4 border-paper-accent shadow-[4px_4px_0px_0px_rgba(236,101,141,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(236,101,141,0.3)] hover:border-l-[6px] ${
                    i % 2 !== 0 ? "sm:ml-12 lg:ml-20" : ""
                  }`}
                >
                  {/* Date stamp */}
                  <span className="absolute -top-3 right-6 bg-paper-bg px-3 py-0.5 font-mono text-[11px] text-paper-muted border border-paper-border">
                    {exp.period}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper-accent font-bold">
                    {exp.organization}
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="mt-3 text-sm text-paper-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right column — Currently Exploring + Skills */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.15} direction="right">
              <div className="lg:sticky lg:top-24">
                {/* Currently Exploring */}
                <div className="inline-block border-2 border-paper-text px-4 py-2 -rotate-2 mb-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold">
                    Currently Exploring
                  </span>
                </div>

                <div className="space-y-3">
                  {currentlyExploring.map((item) => (
                    <div key={item} className="flex items-start gap-4 group">
                      <div className="mt-1 h-3 w-3 rounded-full border-2 border-paper-accent bg-transparent group-hover:bg-paper-accent transition-colors shrink-0" />
                      <p className="font-bold text-sm uppercase tracking-wide">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="mt-12 border-t border-paper-border pt-8">
                  <div className="inline-block border-2 border-paper-text px-4 py-2 rotate-1 mb-8">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold">
                      Tech Stack
                    </span>
                  </div>

                  <div className="space-y-5">
                    {skillGroups.map((group) => (
                      <div key={group.category}>
                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper-accent font-bold mb-2">
                          {group.category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-sm bg-white px-2.5 py-1 text-[11px] font-mono text-paper-text border border-paper-border hover:border-paper-accent hover:text-paper-accent transition-colors duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
