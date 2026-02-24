// /data/projects.ts

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  url: string; // GitHub repository link
  featured: boolean;
};

export const projects: Project[] = [
  // FEATURED PROJECTS (VISIBLE FIRST)
  {
    id: "hikaya",
    title: "Hikaya",
    description:
      "A reading platform built with Next.js and Firebase that allows teachers to manage students, assign stories, and track reading progress through a responsive dashboard.",
    tech: ["Next.js", "Firebase", "PWA", "Tailwind"],
    image: "/projects/hikaya.png",
    url: "https://github.com/hafriaya/hikaya",
    featured: true,
  },
  {
    id: "moraja3aai",
    title: "Moraja3aAI",
    description:
      "An AI-powered study platform that generates practice exams and flashcards using Gemini API, helping students revise more efficiently.",
    tech: ["Next.js", "Supabase", "Gemini API", "TypeScript"],
    image: "/projects/moraja3aai.png",
    url: "https://github.com/hafriaya/Moraja3aAI",
    featured: true,
  },
  {
    id: "toora",
    title: "TOORA",
    description:
      "A smart electric bike rental mobile app built with React Native and Expo, featuring real-time availability and modern mobile UI.",
    tech: ["React Native", "Expo", "TypeScript", "Node.js"],
    image: "/projects/toora.png",
    url: "https://github.com/hafriaya/toora",
    featured: true,
  },
  {
    id: "guelya-time",
    title: "Guelya Time",
    description:
      "A movie recommendation desktop app using JavaFX and Neo4j graph database to explore relationships between movies, actors, and genres.",
    tech: ["JavaFX", "Neo4j", "Graph Database", "Java"],
    image: "/projects/guelya-time.svg",
    url: "https://github.com/hafriaya/Guelya_time",
    featured: true,
  },

  // OTHER PROJECTS (VISIBLE AFTER CLICKING "SHOW MORE")
  {
    id: "sitbib",
    title: "SitBib",
    description:
      "A medical appointment booking web app built with React, allowing users to schedule and manage doctor visits.",
    tech: ["React", "JavaScript"],
    image: "/projects/sitbib.svg",
    url: "https://github.com/hafriaya/sitbib",
    featured: false,
  },
  {
    id: "bookify",
    title: "Bookify",
    description:
      "An online bookstore built with Symfony featuring structured backend architecture and database-driven content.",
    tech: ["Symfony", "PHP", "MySQL"],
    image: "/projects/bookify.svg",
    url: "https://github.com/hafriaya/bookify",
    featured: false,
  },
  {
    id: "foodma",
    title: "Food.ma",
    description:
      "A Django web app that suggests recipes based on ingredients available in your fridge.",
    tech: ["Django", "Python"],
    image: "/projects/foodma.svg",
    url: "https://github.com/hafriaya/food.ma",
    featured: false,
  },
];
