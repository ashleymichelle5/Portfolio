# 🚀 Personal Portfolio

<div align="center">

![Portfolio-pic](./src/assets/screenshot-portfolio.png)

**A modern, interactive portfolio showcasing my projects and skills**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

[🌐 Live Demo](https://www.ashleymsanchez.com) • [📂 View Code](https://github.com/ashleymichelle5/Portfolio) • [📧 Contact Me](mailto:ashleymsanchez05@gmail.com)

</div>

---

## 📖 About This Project

This is my personal portfolio website, built to showcase my skills, projects, and professional journey as a developer. Featuring cutting-edge web technologies and stunning 3D graphics, this portfolio demonstrates my expertise in modern web development and interactive user experiences.

### 🎯 Purpose

- Present my professional experience and skills
- Showcase my best projects with detailed descriptions
- Demonstrate proficiency in modern web technologies
- Offer an easy way for potential employers and clients to contact me

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌟 **3D Graphics** - Interactive 3D elements powered by Three.js
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Fluid transitions using Framer Motion
- 🧭 **Easy Navigation** - Intuitive routing with React Router
- 💼 **Project Showcase** - Detailed project cards with links and descriptions
- 📊 **Skills Display** - Visual representation of technical skills
- 💬 **Contact Form** - Functional contact section for easy communication
- 🌌 **Animated Background** - Dynamic star canvas for visual appeal

---

## 🖥️ Screenshots

<div align="center">

### Hero Section
![Hero Section](./src/assets/hero.png)

### Projects Showcase
![Projects](./src/assets/projects.png)

### Experience Timeline
![Experience](./src/assets/experience.png)

### Contact Form
![Contact](./src/assets/contact.png)

</div>

---

## 🛠️ Built With

### Core Technologies

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Styling & Animation

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### 3D Graphics

![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)

### Routing

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.x | UI library for building components |
| `react-dom` | ^18.x | React rendering for web |
| `vite` | ^5.x | Next-generation frontend tooling |
| `tailwindcss` | ^3.x | Utility-first CSS framework |
| `three` | ^0.160.x | 3D graphics library |
| `@react-three/fiber` | ^8.x | React renderer for Three.js |
| `@react-three/drei` | ^9.x | Useful helpers for React Three Fiber |
| `framer-motion` | ^11.x | Production-ready animation library |
| `react-router-dom` | ^6.x | Routing library for React |
| `react-vertical-timeline-component` | ^3.x | Vertical timeline component |
| `react-tilt` | ^1.x | Parallax tilt effect for React |
| `emailjs-com` | ^3.x | Email service integration |

---


## 🏗️ Project Structure
```
portfolio/
├── public/
│   ├── desktop_pc/          # 3D model assets
│   ├── planet/
│   └── logo.svg
├── src/
│   ├── assets/              # Images, icons, and static files
│   │   ├── index.js
│   │   └── ...
│   ├── components/          # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Feedbacks.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   ├── Works.jsx
│   │   ├── canvas/
│   │   │   ├── StarsCanvas.jsx
│   │   │   ├── Ball.jsx
│   │   │   ├── Computers.jsx
│   │   │   └── Earth.jsx
│   │   └── index.js
│   ├── constants/           # Configuration and data
│   │   └── index.js
│   ├── hoc/                 # Higher-order components
│   │   ├── SectionWrapper.jsx
│   │   └── index.js
│   ├── utils/               # Utility functions
│   │   └── motion.js        # Framer Motion variants (fadeIn, etc.)
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   └── styles.js            # Tailwind style utilities
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎨 Component Overview

### Core Components

| Component | Description |
|-----------|-------------|
| `<Navbar />` | Responsive navigation bar with smooth scrolling links |
| `<Hero />` | Landing section with 3D computer model and introduction |
| `<About />` | Professional summary with animated service cards |
| `<Experience />` | Interactive vertical timeline of work experience |
| `<Tech />` | Animated tech stack showcase |
| `<Works />` | Project portfolio with tilt effects and links |
| `<Feedbacks />` | Testimonials section with client reviews |
| `<Contact />` | Functional contact form with EmailJS integration |

### Canvas Components (3D)

| Component | Description |
|-----------|-------------|
| `<StarsCanvas />` | Animated starfield background |
| `<ComputersCanvas />` | 3D computer model with lighting |
| `<BallCanvas />` | Tech stack spheres |
| `<EarthCanvas />` | Rotating 3D Earth model |

### Utility Functions

- `fadeIn(direction, type, delay, duration)` - Framer Motion animation variant
- `textVariant()` - Text animation configurations
- `slideIn()` - Slide-in animations
- `staggerContainer()` - Staggered children animations
- `zoomIn()` - Zoom animation effects

---

**Ashley Sanchez**

- 🌐 Portfolio: [ashleymsanchez.com](https://www.ashleymsanchez.com)
- 💼 LinkedIn: [Ashley Sanchez](https://www.linkedin.com/in/ashley-sanchez-029331390/)
- 🐙 GitHub: [@ashleymichelle5](https://github.com/ashleymichelle5)
- 📧 Email: ashleymsanchez05@gmail.com


---
