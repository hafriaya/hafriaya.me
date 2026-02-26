export type Certificate = {
  name: string;
  issuer: string;
  logo: string;
  link: string;
};

export const certificates: Certificate[] = [
  // Reordered so same issuers are never adjacent
  {
    name: "React Native",
    issuer: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    link: "CERTIFICATE_URL",
  },
  {
    name: "Using Python to Access Web Data",
    issuer: "University of Michigan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/University_of_Michigan_Logo.png",
    link: "CERTIFICATE_URL",
  },
  {
    name: "HTML",
    issuer: "Sololearn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/SoloLearn_logo.svg",
    link: "CERTIFICATE_URL",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
    link: "CERTIFICATE_URL",
  },
  {
    name: "React Basics",
    issuer: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    link: "CERTIFICATE_URL",
  },
  {
    name: "Introduction à la programmation orientée objet (C++)",
    issuer: "EPFL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logo_EPFL_2019.svg",
    link: "CERTIFICATE_URL",
  },
  {
    name: "CSS",
    issuer: "Sololearn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/SoloLearn_logo.svg",
    link: "CERTIFICATE_URL",
  },
  {
    name: "Software Engineering",
    issuer: "Hong Kong University of Science and Technology",
    logo: "https://www.logo.wine/logo/Hong_Kong_University_of_Science_and_Technology",
    link: "CERTIFICATE_URL",
  },
  {
    name: "Courses via Coursera",
    issuer: "Coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
    link: "CERTIFICATE_URL",
  },
];
