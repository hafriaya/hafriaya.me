import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />

      {/* ── Dark Theme Sections ── */}
      <Hero />
      <Projects />

      {/* ── Paper Theme Sections ── */}
      <Experience />

      {/* ── Dark Theme — Certifications ── */}
      <Certifications />

      {/* ── Paper Theme — Contact ── */}
      <Contact />
    </>
  );
}
