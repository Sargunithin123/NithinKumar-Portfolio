# Nithin Kumar Sargu — Personal Portfolio

A modern, professional, fully responsive React portfolio website with glassmorphism, Framer Motion animations, dark/light mode, project filtering, typing animation, and scroll progress indicator.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
# → http://localhost:3000
```

---

## 🏗️ Project Structure

```
nithin-portfolio/
├── public/
│   └── index.html              # SEO-optimised HTML shell
│
├── src/
│   ├── index.js                # React entry point
│   ├── App.jsx                 # Root component — wires all sections
│   │
│   ├── data/
│   │   └── index.js            # ✏️  ALL portfolio content lives here
│   │
│   ├── hooks/
│   │   ├── useTyping.js        # Typing/deleting animation hook
│   │   ├── useScrollProgress.js# Scroll %, navbar state, back-to-top
│   │   └── useTheme.js         # Dark/light toggle + localStorage
│   │
│   ├── styles/
│   │   └── global.css          # CSS variables, resets, utility classes
│   │
│   └── components/
│       ├── Navbar.jsx          # Sticky nav + mobile drawer + progress bar
│       ├── Hero.jsx            # Hero section with orbs, typing, CTAs
│       ├── About.jsx           # Avatar, bio, stats grid
│       ├── Skills.jsx          # Animated skill cards with progress bars
│       ├── Projects.jsx        # Filterable project cards
│       ├── Education.jsx       # Education timeline card
│       ├── Certifications.jsx  # Certification grid
│       ├── Experience.jsx      # Timeline-based experience
│       ├── Achievements.jsx    # Achievement stat cards
│       ├── Resume.jsx          # Resume download section
│       ├── Contact.jsx         # Contact info + form
│       ├── Footer.jsx          # Footer with quick links
│       ├── BackToTop.jsx       # Floating back-to-top button
│       │
│       ├── ui/
│       │   ├── SectionTitle.jsx# Reusable section heading component
│       │   └── Tag.jsx         # Reusable tech tag pill
│       │
│       └── icons/
│           └── LeetCodeIcon.jsx# Custom LeetCode SVG icon
│
└── package.json
```

---

## ✏️ Customisation

All portfolio content is centralised in **`src/data/index.js`**. Edit there to update:

| Export           | What it controls               |
|------------------|-------------------------------|
| `ROLES`          | Typing animation strings      |
| `SKILLS_DATA`    | Skills & progress bars        |
| `PROJECTS`       | Project cards                 |
| `EDUCATION`      | Education entries             |
| `CERTIFICATIONS` | Certification cards           |
| `EXPERIENCE`     | Timeline entries              |
| `ACHIEVEMENTS`   | Achievement stat cards        |
| `SOCIAL_LINKS`   | GitHub / LinkedIn / LeetCode  |
| `CONTACT_INFO`   | Email, phone, location        |

---

## 🎨 Theme & Colours

CSS variables are declared in `src/styles/global.css`:

```css
:root {           /* dark theme (default) */
  --a1: #00e5ff;  /* cyan accent   */
  --a2: #a855f7;  /* purple accent */
  --a3: #f97316;  /* orange accent */
}
[data-theme="light"] {
  --a1: #0284c7;
  --a2: #9333ea;
  --a3: #ea580c;
}
```

---

## 📦 Dependencies

| Package          | Purpose                    |
|------------------|---------------------------|
| `react`          | UI library                |
| `framer-motion`  | Animations                |
| `lucide-react`   | Icon set                  |
| `react-scripts`  | CRA build tooling         |

---

## 🏷️ Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm start`   | Development server       |
| `npm run build` | Production build       |
| `npm test`    | Run tests                |

---

Built with ❤️ for **Nithin Kumar Sargu** — Full Stack Developer, Java Programmer, CSE Student 2026.
