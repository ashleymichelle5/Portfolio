import { source } from "framer-motion/client";
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
  ollama,
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
  memorygame,
  tech_insight,
  pic1,
  pic2,
  pic3,
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
  },
  {    name: "ollama",
       icon: ollama,
  },
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
      "I couldn't be happier. The site is clean, modern and perfectly reflects my brand. She was professional, responsive, and took the time to understand exactly what I needed.",
    name: "Joseph Lee",
    designation: "Realtor",
    company: "Lee Brothers Real Estate Group",
    image: pic1,
  },
  {
    testimonial:
      "Ashley transformed my website and it looks amazing! The new design is sleek, modern, and so much better than before. I'm thrilled with how it turned out!",
    name: "Santiago Guzman",
    designation: "Marketing Director",
    company: "Cárnicos Danisan",
    image: pic2,
  },
  {
    testimonial:
      "Ashley redesigned my jewelry website and it's absolutely beautiful. The elegant design and attention to detail were the perfect touch for showcasing my pieces. Highly recommend!",
    name: "Sara Morales",
    designation: "Owner",
    company: "Mar y Coral",
    image: pic3,
  },
  
];

const projects = [
  {
    name: "Real Estate",
    description:
      "A professional landing page showcasing real estate projects, portfolio work, and industry experience to attract potential clients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "web3forms",
        color: "pink-text-gradient",
      },
      {
        name: "toastify",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion ",
        color: "green-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/ashleymichelle5/Real-Estate",
  },
  {
    name: "Cárnicos Danisan",
    description:
      "A butcher company website featuring their product menu, mission, contact form for inquiries, and a gallery showcasing their quality meats.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "themifybuilder",
        color: "pink-text-gradient",
      },
    ],
    image: carnicosdanisan,
    source_code_link: "https://www.carnicosdanisan.com",
  },
  {
    name: "Mar y Coral",
    description:
      "A jewelry e-commerce site where customers can browse products, place orders online, and connect directly via WhatsApp for personalized assistance.",
    tags: [
      {
        name: "themifybuilder",
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
    ],
    image: marycoral_img,
    source_code_link: "https://marycoral.com.co",
  },
  {
    name: "Tech Insight",   
    description:
      "An electronics review platform where users can create accounts, upload product photos, and share detailed reviews of their tech purchases.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "authMiddleware",
        color: "blue-text-gradient",
      },
    ],
    image: tech_insight,
    source_code_link: "https://github.com/ashleymichelle5/review-app",

  },
  {
    name: "Budget Buddy",   
    description:
      "A comprehensive budget management app designed to help users take control of their finances. Track daily expenses, monitor spending habits, create custom budgets, and set achievable saving goals.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: tech_insight,
    source_code_link: "https://github.com/ashleymichelle5/BudgetBuddy",

  },
  {
    name: "Inside Out",
    description:
      "A memory game application that challenges kids to find matching pairs of cards, enhancing cognitive skills and providing entertainment.",
      tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: memorygame,
    source_code_link: "https://github.com/ashleymichelle5/memory-game",
  },
  
];

export { services, technologies, experiences, testimonials, projects };