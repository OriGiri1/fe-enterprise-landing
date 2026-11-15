# NexaFlow AI Enterprise Landing Page — Task Plan

## Goal
Build a high-performance, responsive React + Vite + Tailwind CSS landing page for **NexaFlow AI**, fulfilling 100% of client requirements and demonstrating all 6 required React Hooks.

## Phases & Tasks

- [x] Phase 0: Project Scaffolding & Setup
  - [x] Create `package.json` with React 18, Vite, Tailwind CSS, Lucide React
  - [x] Create `DESIGN.md` specification
  - [x] Run `npm install`
  - [x] Configure `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, and `index.html`

- [x] Phase 1: Mock Data Architecture
  - [x] Create `src/data/mockData.js` with `companyInfo`, `categories`, `servicesData` (6 items), `faqsData` (5 items)

- [x] Phase 2: Component Architecture (8 Modular Components)
  - [x] `src/components/Navbar.jsx` — Scroll blur effect + cleanup, theme switcher, bookmark count badge, mobile menu
  - [x] `src/components/Hero.jsx` — Headline, value proposition, 2 CTA buttons, 4 stats cards
  - [x] `src/components/ServiceCatalog.jsx` — Category tabs + search query with `useMemo`, bookmarking, card grid, empty state
  - [x] `src/components/ServiceModal.jsx` — Detail dialog, body scroll-lock + cleanup, Esc key listener + cleanup, "Chọn giải pháp" CTA
  - [x] `src/components/SavedDrawer.jsx` — Quick drawer for saved solutions, remove/view action, direct contact CTA
  - [x] `src/components/FaqAccordion.jsx` — Accordion with single-open toggle state, smooth transitions, chevron rotation
  - [x] `src/components/ContactForm.jsx` — Controlled inputs, field validation, async 1.5s simulation, disabled spinner, success toast
  - [x] `src/components/Footer.jsx` — Comprehensive enterprise footer with branding, links, and system status indicator

- [x] Phase 3: Application Integration & LocalStorage Sync
  - [x] `src/App.jsx` — Root orchestration: theme persistence (`nexaflow_theme`), bookmark persistence (`nexaflow_bookmarks`), selected service propagation to contact form, saved drawer visibility
  - [x] `src/index.css` — Tailwind directives, custom scrollbars, dark/light transitions

- [x] Phase 4: Verification & Polish
  - [x] Build verification (`npm run build` executed successfully in 1.87s with 0 errors)
  - [x] Comprehensive `README.md` with Hooks matrix & setup guide
  - [x] `.gitignore` setup for clean GitHub repository pushing
