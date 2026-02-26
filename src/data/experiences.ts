export type Experience = {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
};

export const experiences: Experience[] = [
  {
    role: "Web Dev Lead",
    organization: "GDG On Campus — EMSI Casablanca",
    period: "Oct 2025 — Present",
    location: "Casablanca, Morocco",
    description:
      "Lead web development initiatives, contribute to organizing technical workshops, and mentor students in modern web technologies.",
    skills: ["Next.js", "React", "Community Leadership", "Workshops"],
  },
  {
    role: "Ambassador",
    organization: "EMSI Career Center",
    period: "Jul 2025 — Present",
    location: "Casablanca, Morocco",
    description:
      "Represent the Career Center, support students in professional development, and contribute to organizing career and tech events.",
    skills: ["Communication", "Public Speaking", "Community"],
  },
  {
    role: "Web Developer Intern",
    organization: "Ministère de l'Éducation Nationale",
    period: "Jul 2025 — Aug 2025",
    location: "Casablanca, Morocco",
    description:
      "Developed Hikaya, a Progressive Web App for preschool reading tracking, with role-based dashboards and Firebase integration.",
    skills: ["Next.js", "Firebase", "PWA"],
  },
  {
    role: "Web Developer Intern",
    organization: "Grande Charte",
    period: "Mar 2024 — Apr 2024",
    location: "El Jadida, Morocco",
    description:
      "Built a WordPress back office, integrated frontend components, and performed functional testing.",
    skills: ["WordPress", "JavaScript", "PHP"],
  },
];
