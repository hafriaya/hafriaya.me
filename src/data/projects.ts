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
    tech: ["React.js", "Laravel", "MySQL"],
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
    image: "/projects/guelya-time.png",
    url: "https://github.com/hafriaya/Guelya_time",
    featured: true,
  },

  // OTHER PROJECTS (VISIBLE AFTER CLICKING "SHOW MORE")
  {
    id: "appel-moi",
    title: "Appel Moi",
    description:
      "A comprehensive contact management web application built with ASP.NET Core that allows users to manage contacts with photos, generate QR codes for easy sharing, import/export CSV files, and purchase premium features through an integrated shop.",
    tech: ["ASP.NET Core", "Entity Framework", "SQLite", "QR Code", "MVC"],
    image: "/projects/appel-moi.png",
    url: "https://github.com/hafriaya/appel_moi",
    featured: false,
  },
  {
    id: "foodma",
    title: "Food.ma",
    description:
      "A Django web app that suggests recipes based on ingredients available in your fridge.",
    tech: ["Django", "Python"],
    image: "/projects/foodma.png",
    url: "https://github.com/hafriaya/Recettes_project",
    featured: false,
  },
  {
    id: "sitbib",
    title: "SitBib",
    description:
      "A medical appointment booking web app built with React, allowing users to schedule and manage doctor visits.",
    tech: ["React", "JavaScript"],
    image: "/projects/siTbib.png",
    url: "https://github.com/hafriaya/doctor_appointment",
    featured: false,
  },
  {
    id: "toora-mobile",
    title: "TOORA Mobile",
    description:
      "A cross-platform electric bike rental mobile application built with React Native and Expo. Users can view available bikes on a real-time map, make reservations, and manage rentals through an intuitive mobile interface.",
    tech: ["React Native", "Expo", "Node.js", "Express"],
    image: "/projects/toora-mobile.png",
    url: "https://github.com/hafriaya/toora",
    featured: false
  },
  {
    id: "bookify",
    title: "Bookify",
    description:
      "An online bookstore built with Symfony featuring structured backend architecture and database-driven content.",
    tech: ["Symfony", "PHP", "MySQL"],
    image: "/projects/bookify.png",
    url: "https://github.com/hafriaya/bookify",
    featured: false,
  },
  {
    id: "watches",
    title: "Watches",
    description:
      "An e-commerce watches website with a customized WordPress back-office for product and order management.",
    tech: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
    image: "/projects/wp_watches.png",
    url: "https://github.com/hafriaya/watches",
    featured: false,
  },
  {
    id: "sberdilty",
    title: "Sberdilty",
    description:
      "A shoes e-commerce website with an attractive user interface and dynamic product management.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/projects/sberdilty.png",
    url: "https://github.com/hafriaya/sberdilty",
    featured: false,
  },
  {
    id: "kricar-v2",
    title: "KriCar v2",
    description:
      "A car rental platform with dynamic database integration, allowing users to browse and reserve vehicles easily.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/projects/kricar.png",
    url: "https://github.com/hafriaya/kricar-v2",
    featured: false,
  },
];
