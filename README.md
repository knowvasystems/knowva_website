# Knowva Systems — Enterprise IT Solutions

A modern, high-performance landing page for **Knowva Systems** built with **React 18**, **Vite 6**, and **Tailwind CSS v4**.

---

## 🚀 Recent Implementations & Features

- **Webflow Tech-128 Scroll Text Transitions**:
  - Scroll-triggered text reveal (`.reveal-text` with exponential ease-out bezier `cubic-bezier(0.16, 1, 0.3, 1)` and staggered `.delay-*` utilities).
  - Signature dark statement section (`ScrollStatement.jsx`) with dynamic scroll-scrubbed text word illumination.
  - Staggered hero entrance animation (`slideInUp`) for heading, eyebrow badge, subtext, and CTA elements.
- **Knowledge Burst Nova Animated Logo** (`Nav.jsx`):
  - Multi-layered animated SVG featuring an energetic nucleus, dual orbiting electrons, and concentric pulsing shockwave ripples.
- **Interactive Service Cards** (`Solutions.jsx`):
  - Dynamic focus state shifting on hover with elevated transitions (`scale-[1.02] -translate-y-2`) and benchmark metrics strip.
- **Portfolio Showcase** (`Projects.jsx`):
  - Filterable case studies and technical deployments by IT category.
- **Engineering Framework & Accordion** (`Process.jsx`):
  - 4-stage engineering lifecycle alongside an interactive FAQ accordion.
- **Consultation Form** (`ContactForm.jsx`):
  - Free consultation booking flow with interactive feedback, client track-record metric rings, and NDA assurance.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) + Custom keyframes & tokens in `src/index.css`
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)

### Installation & Execution

```powershell
# Install dependencies
npm.cmd install

# Start local development server (runs at http://localhost:5172)
npm.cmd run dev

# Compile production bundle
npm.cmd run build

# Preview production build locally
npm.cmd run preview
```

> **Note for Windows PowerShell**: Use `npm.cmd` rather than `npm` to ensure execution succeeds regardless of PowerShell's script execution policy.

---

## 🤖 Agent Customization & Skill

This repository includes an agent skill located at:
- [`.agents/skills/frontend/SKILL.md`](.agents/skills/frontend/SKILL.md)

It contains architectural patterns, component layouts, motion guidelines, and critical engineering rules (such as React VDOM reconciliation with imperative scroll observer classes).
