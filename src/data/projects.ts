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
    id: "driveops",
    title: "DriveOps",
    description:
      "A vehicle monitoring platform for telemetry processing, anomaly detection, and real-time alerts.",
    tech: ["Spring Boot", "Kafka", "PostgreSQL", "Next.js"],
    image: "/projects/driveOps.png",
    url: "",
    featured: true,
  },
  {
    id: "linkedin-cv-generator",
    title: "LinkedIn CV Generator",
    description:
      "A multi-agent system that analyzes LinkedIn profiles and job offers to generate tailored CVs.",
    tech: ["Google ADK", "Python"],
    image: "/projects/linkedin-cv-generator.png",
    url: "https://github.com/hafriaya/workshop-linkedin-cv-agent",
    featured: true,
  },
  {
    id: "ishara",
    title: "IsharaApp",
    description:
      "Real-time sign language recognition using the device camera and on-device machine learning.",
    tech: ["Java", "TensorFlow Lite", "Android"],
    image: "/projects/ishara.jpg",
    url: "https://github.com/hafriaya/detectorAI_signLanguage",
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
    id: "riwaya",
    title: "Riwaya",
    description:
      "An AI-powered face-swapping app for personalized children's stories.",
    tech: ["Next.js", "Firebase", "Tailwind"],
    image: "/projects/riwayaKids.png",
    url: "https://github.com/hafriaya/RiwayaKids",
    featured: true,
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support",
    description:
      "A Spring Boot storefront with a floating support chat and an agent inbox for human replies and takeover.",
    tech: ["Spring Boot", "Java"],
    image: "",
    url: "https://github.com/ChouraneBD/Ai_customer_support",
    featured: true,
  },
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
    id: "toora",
    title: "TOORA",
    description:
      "A smart electric bike rental mobile app built with React Native and Expo, featuring real-time availability and modern mobile UI.",
    tech: ["React.js", "Laravel", "MySQL"],
    image: "/projects/toora.png",
    url: "https://github.com/Badreddine-Chourane/toora",
    featured: true,
  },
  {
    id: "toora-mobile",
    title: "TOORA Mobile",
    description:
      "A React Native bike rental app allowing users to locate, reserve, and manage rentals in real time.",
    tech: ["React Native", "Expo", "Node.js", "Express"],
    image: "/projects/toora-mobile.png",
    url: "https://github.com/ChouraneBD/toora-mobile",
    featured: false,
  },

  // OTHER PROJECTS (VISIBLE AFTER CLICKING "SHOW MORE")
  {
    id: "factora",
    title: "Factora",
    description:
      "A billing web app for managing clients, invoices, and articles, with role-based access and PDF export.",
    tech: ["React", "Express", "PostgreSQL", "JWT"],
    image: "",
    url: "https://github.com/ChouraneBD/facturation-platform",
    featured: false,
  },
  {
    id: "guelya-time",
    title: "Guelya Time",
    description:
      "A movie recommendation desktop app using JavaFX and Neo4j graph database to explore relationships between movies, actors, and genres.",
    tech: ["JavaFX", "Neo4j", "Graph Database", "Java"],
    image: "/projects/guelya-time.png",
    url: "https://github.com/hafriaya/Guelya_time",
    featured: false,
  },
  {
    id: "appel-moi",
    title: "Appel Moi",
    description:
      "A contact management web app built with ASP.NET Core featuring photos, QR sharing, and CSV import/export.",
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
    url: "https://github.com/hafriaya/Food.ma",
    featured: false,
  },
  {
    id: "sitbib",
    title: "siTbib",
    description:
      "A medical appointment booking web app built with React, allowing users to schedule and manage doctor visits.",
    tech: ["React", "JavaScript"],
    image: "/projects/siTbib.png",
    url: "https://github.com/hafriaya/siTbib",
    featured: false,
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
    url: "https://github.com/hafriaya/WP_watch",
    featured: false,
  },
  {
    id: "sberdilty",
    title: "Sberdilty",
    description:
      "A shoes e-commerce website with an attractive user interface and dynamic product management.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/projects/sberdilty.png",
    url: "https://github.com/hafriaya/Sberdilty",
    featured: false,
  },
  {
    id: "kricar-v2",
    title: "KriCar v2",
    description:
      "A car rental platform with dynamic database integration, allowing users to browse and reserve vehicles easily.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/projects/kricar.png",
    url: "https://github.com/hafriaya/kriCar-v2",
    featured: false,
  },
];
