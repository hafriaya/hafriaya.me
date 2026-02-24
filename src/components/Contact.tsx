"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire this to an API route or service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative bg-paper-bg text-paper-text paper-texture"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — heading */}
          <AnimatedSection direction="left">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper-muted">
              Section 04
            </span>
            <h2 className="mt-2 text-5xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Let&apos;s
              <br />
              <span className="text-paper-accent">Connect</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm text-paper-muted leading-relaxed">
              Have a project in mind, want to collaborate, or just want to say
              hello? Drop me a message and I&apos;ll get back to you.
            </p>

            {/* Editorial footnote links */}
            <div className="mt-12 space-y-3 border-t border-paper-border pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-muted mb-4">
                Find me elsewhere
              </p>
              <a
                href="https://github.com/hafriaya"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-paper-text hover:text-paper-accent transition-colors"
              >
                <span className="font-mono text-[10px] text-paper-muted">
                  [01]
                </span>
                <span className="font-medium group-hover:underline underline-offset-4">
                  GitHub
                </span>
                <svg
                  className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
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
              <a
                href="https://linkedin.com/in/hafriaya"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-paper-text hover:text-paper-accent transition-colors"
              >
                <span className="font-mono text-[10px] text-paper-muted">
                  [02]
                </span>
                <span className="font-medium group-hover:underline underline-offset-4">
                  LinkedIn
                </span>
                <svg
                  className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
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
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-[11px] uppercase tracking-[0.15em] text-paper-muted mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-b-2 border-paper-border bg-transparent py-3 text-paper-text placeholder-paper-muted/50 transition-colors focus:border-paper-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-[11px] uppercase tracking-[0.15em] text-paper-muted mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border-b-2 border-paper-border bg-transparent py-3 text-paper-text placeholder-paper-muted/50 transition-colors focus:border-paper-accent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-[11px] uppercase tracking-[0.15em] text-paper-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none border-b-2 border-paper-border bg-transparent py-3 text-paper-text placeholder-paper-muted/50 transition-colors focus:border-paper-accent"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center gap-2 bg-paper-text text-paper-bg px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-paper-accent hover:shadow-[4px_4px_0px_0px_rgba(236,101,141,0.3)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                {submitted ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    Send Message
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <div className="mt-24 border-t border-paper-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-paper-muted tracking-wide">
            © {new Date().getFullYear()} — Aya Hafri — Designed & Built with care.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="font-mono text-[11px] text-paper-muted hover:text-paper-accent transition-colors tracking-wide uppercase"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
