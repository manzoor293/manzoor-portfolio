import { Layout, Server, Code2, Rocket } from "lucide-react";

export const NAV_LINKS = ["Home", "About", "Projects", "Services", "Contact"];

export const SKILLS = [
  { name: "HTML & CSS", icon: "🌐", level: 95 },
  { name: "Bootstrap 5", icon: "🅱️", level: 90 },
  { name: "Tailwind CSS", icon: "🎨", level: 92 },
  { name: "JavaScript ES6+", icon: "⚡", level: 88 },
  { name: "React.js", icon: "⚛️", level: 87 },
  { name: "Node.js", icon: "🟢", level: 80 },
  { name: "Next.js", icon: "▲", level: 78 },
  { name: "MongoDB", icon: "🍃", level: 75 },
];

export const TECH_BADGES = [
  "HTML5",
  "CSS3",
  "Bootstrap 5",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "REST API",
  "Git/GitHub",
  "MongoDB",
  "Supabase",
  "Vercel",
];

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    desc: "Full-featured online store with cart, payment gateway, admin panel, inventory management and order tracking.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    color: "#fbbf24",
    icon: "🛒",
    github: "https://github.com/manzoor293/E-COMMERCE",
    demo: "https://e-commerce-gules-omega-84.vercel.app/",
  },
  {
    title: "Mahsood Tyre Manager",
    desc: "Offline-first desktop app I built and delivered for a tyre shop. It covers sales and POS, inventory, purchases, customer and supplier payments, returns, expenses, reports, and printable A4 invoices, all stored locally in SQLite with backup and restore.",
    tags: [
      "Electron",
      "React",
      "SQLite",
      "Material UI",
      "Tailwind CSS",
      "Vite",
    ],
    color: "#dc2626",
    icon: "🛞",
    logo: "/projects/mahsood-tyres-logo.png",
    type: "Desktop Application",
    status: "Delivered to client",
    highlights: [
      "Sales/POS with stock checks and invoice printing, plus PDF export",
      "Inventory ledger with append-only stock movements, so quantities can't be edited directly",
      "Purchases, returns, and customer/supplier payments handled in atomic SQLite transactions",
      "Dashboard and 8 reports covering sales, profit, receivables, and payables",
      "Local administrator login with scrypt password hashing, plus validated backup and restore",
      "Security-hardened Electron setup: context isolation, sandboxing, and a narrow preload API",
      "Automated tests for the database, IPC, and UI flows",
    ],
    github: "https://github.com/manzoor293/mahsood-tyres-manager",
    demo: null,
  },
  {
    title: "Developer Portfolio",
    desc: "Modern, responsive portfolio website with dark/light mode, smooth animations, and optimized performance metrics.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    color: "#34d399",
    icon: "💼",
    github: "https://github.com/manzoor293/manzoor-portfolio",
    demo: "https://manzoor-portfolio.vercel.app/",
  },
  // {
  //   title: "AI-Powered Job Portal",
  //   desc: "Intelligent job matching platform with AI recommendations, resume parsing, and real-time notifications. Built with Next.js, Node.js and MongoDB.",
  //   tags: ["Next.js", "Node.js", "MongoDB", "AI/ML", "REST API"],
  //   color: "#22d3ee",
  //   icon: "🤖",
  //   github: "#",
  //   demo: "#",
  // },
  // {
  //   title: "AR Navigation App",
  //   desc: "Augmented Reality indoor navigation system using MERN stack with WebAR integration for real-time spatial guidance.",
  //   tags: ["React", "Node.js", "MongoDB", "AR.js", "Three.js"],
  //   color: "#a78bfa",
  //   icon: "🧭",
  //   github: "#",
  //   demo: "#",
  // },
];

export const SERVICES = [
  {
    icon: <Layout size={26} />,
    title: "UI/UX Development",
    desc: "Pixel-perfect, responsive interfaces with modern design principles, accessibility standards, and delightful micro-interactions.",
    color: "#22d3ee",
  },
  {
    icon: <Server size={26} />,
    title: "REST API Development",
    desc: "Scalable, secure RESTful APIs with proper authentication, rate limiting, error handling, and comprehensive documentation.",
    color: "#a78bfa",
  },
  {
    icon: <Code2 size={26} />,
    title: "Full Stack Engineering",
    desc: "End-to-end web applications using MERN stack with clean architecture, reusable components, and optimized performance.",
    color: "#fbbf24",
  },
  {
    icon: <Rocket size={26} />,
    title: "Deployment & DevOps",
    desc: "Streamlined CI/CD pipelines, cloud deployments on Vercel/Netlify/AWS, environment configuration and monitoring setup.",
    color: "#34d399",
  },
];
