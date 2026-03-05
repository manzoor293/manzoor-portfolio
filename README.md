# 🚀 Manzoor Ahmad — Portfolio Website

## Complete Setup & Deployment Guide

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── resume.pdf              ← Add your resume here
│   └── og-image.png            ← Social media preview image
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── hooks/
│   │   └── useIntersection.js  ← Custom scroll visibility hook
│   │
│   ├── data/
│   │   └── index.js            ← All static data (projects, skills, etc.)
│   │
│   ├── styles/
│   │   └── globals.css         ← Global CSS variables & keyframes
│   │
│   ├── App.jsx                 ← Root component (dark mode, routing)
│   └── main.jsx                ← Vite entry point
│
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ⚙️ Initial Setup

### 1. Create Vite + React Project

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
```

### 2. Install Dependencies

```bash
# Core styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Animations
npm install framer-motion

# Icons
npm install lucide-react

# Routing (optional, single-page)
npm install react-router-dom

# Email (for contact form)
npm install @emailjs/browser
```

### 3. Configure Tailwind

Update **`tailwind.config.js`**:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        cyan: { DEFAULT: "#22d3ee" },
        violet: { DEFAULT: "#a78bfa" },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 4s linear infinite",
      },
    },
  },
  plugins: [],
};
```

### 4. Update `src/index.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #07070f;
  --bg2: #0d0d1a;
  --cyan: #22d3ee;
  --violet: #a78bfa;
}
```

---

## 📬 Contact Form — EmailJS Integration

### Setup

1. Create account at [emailjs.com](https://emailjs.com)
2. Add an Email Service (Gmail recommended)
3. Create an Email Template
4. Copy your **Service ID**, **Template ID**, and **Public Key**

### Code

```bash
npm install @emailjs/browser
```

```jsx
import emailjs from "@emailjs/browser";

const handleSubmit = async () => {
  const result = await emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    "YOUR_PUBLIC_KEY",
  );
};
```

---

## ✨ Framer Motion — Enhanced Animations

Replace CSS animations with Framer Motion for production:

```jsx
import { motion } from "framer-motion";

// Section reveal
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* content */}
</motion.div>;

// Staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

<motion.div variants={container} initial="hidden" whileInView="show">
  {items.map((item) => (
    <motion.div
      key={item}
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>;
```

---

## 🖼️ Adding Real Project Images

Place images in `public/projects/`:

```
public/
└── projects/
    ├── job-portal.png
    ├── ar-nav.png
    ├── ecommerce.png
    └── portfolio.png
```

Reference in data:

```js
{ image: '/projects/job-portal.png', ... }
```

---

## 🌐 Deployment

### Option A — Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or connect GitHub repo at vercel.com
# Every push auto-deploys 🚀
```

Add `vercel.json` for SPA routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Option B — Netlify

```bash
# Build
npm run build

# Drag & drop the 'dist' folder at netlify.com/drop
# OR use CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Add `public/_redirects`:

```
/*    /index.html    200
```

---

## 🔍 SEO Optimization

Update `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO Meta Tags -->
  <title>Manzoor Ahmad | Full Stack Web Developer</title>
  <meta
    name="description"
    content="Full Stack Web Developer specializing in React, Node.js, and Next.js. Building scalable, modern web applications."
  />
  <meta
    name="keywords"
    content="Full Stack Developer, React Developer, MERN Stack, Pakistan, Web Developer"
  />
  <meta name="author" content="Manzoor Ahmad" />

  <!-- Open Graph (Social Sharing) -->
  <meta property="og:title" content="Manzoor Ahmad | Full Stack Developer" />
  <meta
    property="og:description"
    content="Crafting scalable web applications with React & Node.js"
  />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:url" content="https://manzoor.dev" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Manzoor Ahmad | Full Stack Developer" />
  <meta
    name="twitter:description"
    content="Crafting scalable web applications"
  />
  <meta name="twitter:image" content="/og-image.png" />
</head>
```

---

## 📦 Final Build

```bash
npm run build
# Output is in /dist — ready for deployment
```

---

## ✅ Feature Checklist

- [x] Hero with animated background + typewriter effect
- [x] Dark / Light mode toggle
- [x] Sticky navbar with active section highlight
- [x] Scroll-based section animations (IntersectionObserver)
- [x] Animated skill progress bars
- [x] Project cards with hover overlay (GitHub + Demo links)
- [x] Services section with CTA banner
- [x] Contact form with client-side validation
- [x] Scroll-to-top button
- [x] Fully responsive (mobile-first)
- [x] Glassmorphism card design
- [x] Gradient accents throughout
- [x] Google Fonts (Syne + DM Sans + JetBrains Mono)
- [x] SEO meta tags
- [x] Deploy-ready (Vercel / Netlify)
