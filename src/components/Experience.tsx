"use client";

import AnimatedSection from "./AnimatedSection";

const communityItems = [
  {
    role: "Speaker & Workshop Lead",
    org: "Google Developer Group (GDG)",
    date: "2024",
    description:
      "Led hands-on technical workshops on AI integration and modern web development for the local developer community.",
    accent: true,
  },
  {
    role: "Ambassadress",
    org: "ANDD — 11th EMSI Enterprise Forum",
    date: "2024",
    description:
      "Represented the Association Nationale du Développement Digital, bridging the gap between digital innovation and enterprise strategy.",
    accent: false,
  },
];

const learningTopics = [
  { label: "K-means Clustering", area: "Machine Learning" },
  { label: "Data Smoothing", area: "Machine Learning" },
  { label: "VMware / ESXi", area: "Infrastructure" },
  { label: "Network Architecture", area: "Cybersecurity" },
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
            {communityItems.map((item, i) => (
              <AnimatedSection
                key={item.role}
                delay={0.1 * i}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative p-6 sm:p-8 ${
                    item.accent
                      ? "bg-white border-l-4 border-paper-accent shadow-[4px_4px_0px_0px_rgba(236,101,141,0.2)]"
                      : "bg-white/60 border border-paper-border"
                  } ${i === 1 ? "sm:ml-12 lg:ml-20" : ""}`}
                >
                  {/* Date stamp */}
                  <span className="absolute -top-3 right-6 bg-paper-bg px-3 py-0.5 font-mono text-[11px] text-paper-muted border border-paper-border">
                    {item.date}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper-accent font-bold">
                    {item.org}
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    {item.role}
                  </h3>
                  <p className="mt-3 text-sm text-paper-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right column — Continuous Learning */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.15} direction="right">
              <div className="lg:sticky lg:top-24">
                {/* "Stamp" style header */}
                <div className="inline-block border-2 border-paper-text px-4 py-2 -rotate-2 mb-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold">
                    Continuous Learning
                  </span>
                </div>

                <div className="space-y-4">
                  {learningTopics.map((topic) => (
                    <div key={topic.label} className="flex items-start gap-4 group">
                      <div className="mt-1 h-3 w-3 rounded-full border-2 border-paper-accent bg-transparent group-hover:bg-paper-accent transition-colors shrink-0" />
                      <div>
                        <p className="font-bold text-sm uppercase tracking-wide">
                          {topic.label}
                        </p>
                        <p className="font-mono text-[10px] text-paper-muted uppercase tracking-[0.15em]">
                          {topic.area}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative pull-quote */}
                <div className="mt-12 border-t border-paper-border pt-6">
                  <blockquote className="text-lg italic text-paper-muted leading-relaxed">
                    &ldquo;The best way to learn is to build, break, and share
                    what you discover.&rdquo;
                  </blockquote>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
