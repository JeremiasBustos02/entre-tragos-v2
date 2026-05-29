# Entre Tragos — Project Context

## Stack
- React 19 + Vite 8 + TypeScript 6 + Tailwind CSS v4
- lucide-react (icons), React Compiler (babel plugin)
- Backend: Node.js + Express (separate `backend/` directory, CommonJS)

## Architecture
- Mobile-first, modular component architecture
- Each section is a self-contained component in `src/app/components/`
- Shared types in `src/app/types/` and `src/types/`
- Form submissions via Formspree (POST `https://formspree.io/f/YOUR_FORM_ID`)
- WhatsApp: opens `https://wa.me/?text={encoded message}` in new tab
- Backend follows Controller-Service pattern (Express, CORS on port 3001)

## Project Structure
```
src/
  App.tsx                          # Root layout: Navbar > main > Footer
  main.tsx                         # Entry point
  index.css                        # Tailwind v4 @theme + scroll-behavior
  types/
    navigation.ts                  # Shared NavLink type + NAV_LINKS array
  app/
    types/
      services.ts                  # IconType, ServiceCardProps
      contact.ts                   # FormState interface, BAR_TYPES
    components/
      Navbar.tsx                   # Semantic header/nav, mobile hamburger, CTA
      HeroSection.tsx              # Full-viewport hero with gradient bg
      ServicesTray.tsx             # Overlapping service cards grid (3 cols)
      ServiceCard.tsx              # Individual card with icon, title, price
      AboutSection.tsx             # 2-column layout, feature list
      GallerySection.tsx           # 4-col grid, 5 items, hover labels
      ContactForm.tsx              # Formspree + WhatsApp, success state
      Footer.tsx                   # 4-col footer, social icons, copyright
backend/
  server.js                        # Express app, CORS, routes
  package.json                     # CommonJS, express + cors + dotenv
  routes/
    quoteRoutes.js                 # POST /api/quotes
  controllers/
    quoteController.js             # Request handling (async)
  services/
    quoteService.js                # Validation + mock delay (1s)
```

## Design System

### Colors
- Green (Primary): `#2D5A27`
- Wood (Accent): `#8B5A2B`
- Page Background: `#FDFBF7` (light warm)
- Dashboard Tray: `#F4F1EB`
- Dark Section: `#EAE7E0`
- Footer Background: `#1A1A1A`
- WhatsApp: `#25D366`

### Typography
- **Sans-serif (body)**: Inter — weights 400, 500, 600, 700
  - Tailwind key: `font-sans`
  - Usage: body text, nav links, button labels
- **Serif (headings)**: Instrument Serif — regular + italic
  - Tailwind key: `font-serif`
  - Usage: h2 section headings, "Coctelería" hero accent

Configured in `index.css` via `@theme` block.

### Semantic HTML Rules
- `<header>` for Navbar
- `<main>` wraps all page content (not Navbar/Footer)
- `<section id="...">` for each page section with `aria-labelledby`
- `<article>` for ServiceCard
- `<nav>` for navigation
- `<footer role="contentinfo">` for Footer
- `<form>` with `noValidate` + `aria-busy` for ContactForm

### Accessibility (A11y)
- `focus-visible:ring-2 focus-visible:ring-[color] focus-visible:outline-none` on all interactive elements
- `aria-label` on icon-only links and buttons
- `aria-hidden="true"` on decorative icons
- `aria-expanded` + `aria-controls` on hamburger menu
- `role="menu"` + `role="menuitem"` on mobile nav dropdown
- All sections have `aria-labelledby` pointing to their heading
- Minimum touch target 44x44px (hamburger: `p-2.5`, social icons: `p-2`, nav links: `py-1`)
- Navbar escape-key handling for mobile menu

### Strict TypeScript Rules
- No `any` types allowed
- `verbatimModuleSyntax: true` — use `import type` for type-only imports
- `noUnusedLocals: true`, `noUnusedParameters: true`
- `erasableSyntaxOnly: true`
- All props strictly typed via interfaces

### UI Conventions
- Buttons/CTAs: `rounded-full` (pill shape)
- Cards: `rounded-2xl`
- Section containers: `rounded-3xl`
- Input fields: `rounded-2xl`, `bg-[#F4F1EB]`, `focus:ring-2 focus:ring-[#2D5A27]/50`
- Text sizes: prefer Tailwind scale (`text-sm`, `text-base`) over arbitrary values
- Overlapping elements use `mt-[-4rem]` or `mt-[-2rem]` with `relative z-20`

## Backend API
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/quotes` | Submit quote request |
| GET | `/api/health` | Health check |

## Commands
```bash
# Frontend
npm run dev          # Vite dev server (port 5173)
npm run build        # tsc -b && vite build
npm run lint         # ESLint

# Backend (in backend/)
npm run dev          # node --watch server.js (port 3001)
npm start            # node server.js
```
