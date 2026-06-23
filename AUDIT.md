# Codebase Audit — Entre Tragos v2

**Date:** 2026-06-22
**Stack:** React 19 + TypeScript 6 + Vite 8 + Tailwind CSS v4 + React Compiler

---

## CRITICAL — Security & Functionality

| # | Issue | Location | Detail |
|---|-------|----------|--------|
| 1 | Placeholder API key | `ContactForm.tsx:34` | `FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'` — form submissions go nowhere |
| 2 | Hardcoded WhatsApp number | Navbar, ContactForm, FloatingWhatsApp, CtaSection, Footer | `5492235000000` appears in 5+ files with no centralization |
| 3 | No input sanitization | `ContactForm.tsx` | Form values sent directly to Formspree with no validation or sanitization |
| 4 | No CSP or security headers | `index.html` | No Content-Security-Policy, no X-Frame-Options, no referrer-policy |
| 5 | Missing robots meta | `index.html` | No robots tag — defaults to indexable, but no sitemap either |

## HIGH — Performance

| # | Issue | Location | Detail |
|---|-------|----------|--------|
| 6 | No lazy loading on any image | ALL components | Zero `loading="lazy"` attributes. Hero, gallery, cocktail images all load eagerly |
| 7 | No code splitting / lazy loading | `App.tsx` | All 18 section components imported eagerly. No `React.lazy()`, no `Suspense` |
| 8 | Inline style tags recreated every render | `HeroSection.tsx:19-23`, `Preloader.tsx:19-26` | Both inject `<style>` tags with keyframes on every render |
| 9 | Duplicate IntersectionObserver logic | `ServicesTray.tsx:10-39`, `CtaSection.tsx:11-40` | Both create their own observer instead of using the existing `useReveal` hook |
| 10 | Unused template assets | `src/assets/react.svg`, `src/assets/vite.svg` | Vite template leftovers shipped in bundle |
| 11 | Unused types | `src/types/navigation.ts`, `src/app/types/contact.ts` | Types exist but are never imported by components |

## HIGH — Accessibility

| # | Issue | Location | Detail |
|---|-------|----------|--------|
| 12 | Broken aria-labelledby | `FaqSection.tsx:66` | References `faq-question-${index}` but FAQ buttons have no matching `id` |
| 13 | Empty onKeyDown handler | `CustomSelect.tsx:93` | `<li onKeyDown={() => {}}>` — keyboard navigation non-functional |
| 14 | No skip-to-content link | `index.html`, `App.tsx` | Keyboard users must tab through entire navbar |
| 15 | FAQ buttons lack aria-expanded | `FaqSection.tsx:67-76` | No `aria-expanded` or `aria-controls` on accordion trigger |
| 16 | Hamburger menu lacks aria-label | `Navbar.tsx:346` | Button has no accessible name |
| 17 | Gallery images lack alt text | `GallerySection.tsx` | All use `alt="Galería"` — not descriptive |
| 18 | Cocktail images lack alt text | `CocktailShowcase.tsx:116` | Generic alt text, all share same image file |
| 19 | Social links lack accessible names | `Footer.tsx:155-185` | SVG-only links with no `aria-label` |
| 20 | Color contrast may fail | `index.css` | `#706C64` on `#F5F4F0` = ~3.5:1 (fails WCAG AA for normal text) |

## MEDIUM — Code Quality

| # | Issue | Location | Detail |
|---|-------|----------|--------|
| 21 | Massive inline styles | ALL components | `style={{fontFamily, fontSize, color, padding}}` instead of Tailwind |
| 22 | JS hover handlers instead of CSS | `ServiceCard.tsx`, `ServiceInclusions.tsx`, `GallerySection.tsx` | `onMouseEnter`/`onMouseLeave` for hover effects |
| 23 | Inconsistent component sizes | — | `ContactForm.tsx` is 563 lines (should be split) |
| 24 | No shared constants/config | Multiple files | WhatsApp number, Formspree URL, social links all hardcoded independently |
| 25 | No error boundaries | `App.tsx` | Any component crash takes down entire app |
| 26 | No TypeScript strict mode | `tsconfig.app.json` | `"strict"` is not set |
| 27 | Mixed file organization | `src/types/` vs `src/app/types/` | Types split across two locations |

## LOW — UX & Polish

| # | Issue | Location | Detail |
|---|-------|----------|--------|
| 28 | All cocktail images identical | `CocktailShowcase.tsx:43-68` | All 5 cocktails reference same image — placeholder |
| 29 | Marquee content hardcoded in App.tsx | `App.tsx:25-29` | Should be extracted to config |
| 30 | No favicon format optimization | `public/favicon.svg` | No `.ico` fallback for older browsers |
| 31 | No noscript fallback | `index.html` | App unusable without JS |
| 32 | SessionStorage preloader check | `App.tsx:20` | No way to skip preloader for testing |

---

## Summary

| Category | Count |
|----------|-------|
| Critical | 5 |
| High (Performance) | 6 |
| High (Accessibility) | 9 |
| Medium | 7 |
| Low | 5 |
| **Total** | **32** |
