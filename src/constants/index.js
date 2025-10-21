import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  wordpress,
  framer,
  claude,
  mysql,
  postgresql,
  heroku,
  copilot,
  general_assembly,
  real_estate,
  carnicos,
  marycoral,
  realestate,
  threejs,
  redux,
  carnicosdanisan,
  marycoral_img,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: backend,
  },
  {
    title: "AI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: " Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "WordPress",
    icon: wordpress,
  }, 
  {
    name: "Copilot",
    icon: copilot,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "heroku",
    icon: heroku,
  },
  {
    name: "claude",
    icon: claude,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "framer",
    icon: framer,
  }
];

const experiences = [
  {
    title: "Real Estate Website",
    company_name: "Lee Brothers Real Estate Group",
    icon: real_estate,
    iconBg: "#ffffffff",
    date: "Oct 2025",
  },
  {
    title: "Cárnicos Danisan Website",
    company_name: "Cárnicos Danisan",
    icon: carnicos,
    iconBg: "#000000ff",
    date: "Jul 2025",
  },
  {
    title: "Mar y Coral Website",
    company_name: "Mar y Coral",
    icon: marycoral,
    iconBg: "#dab6adff",
    date: "Jul 2025",
  },
  {
    title: "Budget Buddy App",
    company_name: "General Assembly",
    icon: general_assembly,
    iconBg: "#ffffffff",
    date: "Feb 2025",
  },
  {
    title: "Tech Insight App",
    company_name: "General Assembly",
    icon: general_assembly,
    iconBg: "#ffffffff",
    date: "Nov 2024",
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  
];

const projects = [
  {
    name: "Real Estate",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cárnicos Danisan",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carnicosdanisan,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mar y Coral",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: marycoral_img,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };