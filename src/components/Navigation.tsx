"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  /* ── Scroll detection (navbar bg) ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Scroll-spy: track which section is in view ── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsOpen(false);
    },
    []
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/90 backdrop-blur-md border-b border-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#about"
            onClick={(e) => scrollTo(e, "#about")}
            className="font-mono text-lg font-bold tracking-tight text-white"
          >
            <span className="text-neon-pink">&lt;</span>
            portfolio
            <span className="text-neon-pink">/&gt;</span>
          </a>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-neon-pink"
                      : "text-gray-300 hover:text-neon-pink"
                  } group`}
                >
                  {/* Wrap active link in </> tags */}
                  {isActive && (
                    <span className="text-neon-pink/60">&lt;</span>
                  )}
                  {link.label}
                  {isActive && (
                    <span className="text-neon-pink/60">/&gt;</span>
                  )}

                  {/* Underline — always visible when active, animates on hover */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-neon-pink transition-all duration-300 ${
                      isActive
                        ? "w-3/4"
                        : "w-0 group-hover:w-3/4"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden ${
              isOpen ? "hamburger-open" : ""
            }`}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line block h-[2px] w-6 bg-white" />
            <span className="hamburger-line block h-[2px] w-6 bg-white" />
            <span className="hamburger-line block h-[2px] w-6 bg-white" />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-dark-bg/98 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className={`text-3xl font-bold transition-colors ${
                    isActive
                      ? "text-neon-pink"
                      : "text-white hover:text-neon-pink"
                  }`}
                >
                  {isActive && (
                    <span className="text-neon-pink/60">&lt;</span>
                  )}
                  {link.label}
                  {isActive && (
                    <span className="text-neon-pink/60">/&gt;</span>
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
