# PLAN — Entre Tragos v2

## Objetivo del proyecto

Landing page profesional para **Entre Tragos**, una empresa de coctelería premium para eventos. El sitio funciona como carta de presentación digital, exhibiendo servicios, galería, menú de cócteles y un formulario de cotización. Incluye un backend liviano para procesar solicitudes de presupuesto.

---

## Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| **Frontend** | React 19 + TypeScript 6 + Vite 8 |
| **Estilos** | Tailwind CSS v4 |
| **Íconos** | lucide-react + SVGs inline |
| **Compilador React** | babel-plugin-react-compiler (via @rolldown/plugin-babel) |
| **Backend** | Node.js + Express (CommonJS) |
| **Formulario** | Formspree |
| **WhatsApp** | API wa.me |

---

## Estructura de carpetas

```
entre-tragos-v2/
├── index.html                      # Entry HTML (head, OG, fonts)
├── package.json                    # Frontend deps & scripts
├── vite.config.ts                  # Vite + Tailwind + React Compiler
├── tsconfig.json
├── eslint.config.js
├── src/
│   ├── main.tsx                    # React root mount
│   ├── App.tsx                     # Layout principal (sections + navbar + footer)
│   ├── index.css                   # Tailwind v4 @theme + custom animations
│   ├── types/
│   │   └── navigation.ts           # NAV_LINKS, NavLink type
│   └── app/
│       ├── types/
│       │   ├── contact.ts          # FormState, BAR_TYPES
│       │   └── services.ts         # ServiceCardProps, IconType
│       └── components/
│           ├── Navbar.tsx          # Fixed nav + mobile hamburger
│           ├── HeroSection.tsx     # Full-viewport hero con video Vimeo
│           ├── ServicesTray.tsx    # Grilla de servicios
│           ├── ServiceCard.tsx     # Card individual de servicio
│           ├── CocktailShowcase.tsx # Menú de cócteles con filtros
│           ├── Marquee.tsx         # Barra animada de texto
│           ├── AboutSection.tsx    # Sección "Nosotros"
│           ├── GallerySection.tsx  # Galería de fotos
│           ├── CtaSection.tsx      # Call to action
│           ├── FaqSection.tsx      # Acordeón de FAQ
│           ├── ContactForm.tsx     # Formulario + info de contacto
│           ├── Footer.tsx          # Footer 4 columnas
│           ├── FloatingWhatsApp.tsx # Botón flotante WhatsApp
│           ├── CustomSelect.tsx    # Select personalizado accesible
│           └── icons/
│               └── WhatsAppIcon.tsx
├── backend/
│   ├── server.js                   # Express app (CORS, routes)
│   ├── package.json
│   ├── routes/
│   │   └── quoteRoutes.js          # POST /api/quotes
│   ├── controllers/
│   │   └── quoteController.js      # Handler del request
│   └── services/
│       └── quoteService.js         # Validación + mock (in-memory)
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── dist/                           # Build output
```

---

## Funcionalidades implementadas

### Frontend
- [x] **Navbar** — Fija con blur, links de navegación, menú hamburguesa mobile con tecla Escape, CTA "Cotizar Evento"
- [x] **Hero** — Full viewport con video de fondo (Vimeo), overlay oscuro, doble CTA
- [x] **Servicios** — 4 cards: Clásica ($8,500), Premium ($15,000), Sin Alcohol ($6,500), A Medida (personalizado)
- [x] **Cócteles** — Filtro por categorías (5 categorías), 5 cócteles con ingredientes y tags
- [x] **Marquee** — Barra animada con términos clave
- [x] **Nosotros** — Sección 2-columnas con features
- [x] **Galería** — Grid de 4 columnas con hover labels
- [x] **CTA Section** — Gradiente animado + blobs flotantes
- [x] **FAQ** — Acordeón con 5 preguntas, animación CSS grid
- [x] **Contacto** — Formulario (nombre, email, teléfono, fecha, invitados, tipo de barra), validación, estado de éxito, envío a Formspree, WhatsApp integrado
- [x] **Footer** — 4 columnas: marca, nav, contacto, redes sociales
- [x] **WhatsApp flotante** — Botón fijo con pulso animado
- [x] **CustomSelect** — Dropdown accesible con ARIA combobox + teclado
- [x] **Responsive** — Mobile-first, adaptable a desktop
- [x] **Semántica HTML** — header, main, section, article, nav, footer con ARIA
- [x] **Accesibilidad** — focus-visible, aria-label, aria-expanded, aria-controls, escape-key, touch targets 44x44px
- [x] **TypeScript estricto** — Sin `any`, interfaces tipadas, `noUnusedLocals`

### Backend
- [x] **API REST** — Express con CORS, JSON parser
- [x] `POST /api/quotes` — Recibe solicitud de cotización, valida campos, responde mock
- [x] `GET /api/health` — Health check
- [x] **Arquitectura** — Controller-Service pattern

### UX/UI
- [x] Tema tipográfico: Inter (sans) + Instrument Serif (headings)
- [x] Paleta de colores: verde #2D5A27, madera #8B5A2B, fondo #F9F7F4
- [x] Botones pill (`rounded-full`), cards `rounded-2xl`, inputs `rounded-2xl`
- [x] Elementos superpuestos con `relative z-20` + `mt-[-4rem]`
- [x] Animaciones: pulso WhatsApp, float CTA, gradient-shift, marquee, moverMarron

---

## Funcionalidades pendientes

- [ ] **Formspree ID real** — Reemplazar `YOUR_FORM_ID` en ContactForm.tsx
- [ ] **Backend productivo** — Conexión a base de datos (ej. MongoDB, PostgreSQL, Supabase)
- [ ] **Autenticación** — Panel admin para ver cotizaciones recibidas
- [ ] **Imágenes reales** — Reemplazar placeholders con fotos reales de eventos
- [ ] **Video real** — Reemplazar video de Vimeo de prueba
- [ ] **PDF carta de cócteles** — Crear y alojar `/carta.pdf`
- [ ] **SEO** — Meta tags dinámicos, sitemap, structured data (JSON-LD)
- [ ] **Analytics** — Integrar Google Analytics / Meta Pixel
- [ ] **Tests** — Unit tests y/o e2e (Playwright, Vitest)
- [ ] **CI/CD** — Pipeline de deploy (Vercel, Netlify, Railway)
- [ ] **Variables de entorno** — Crear `.env` para Formspree ID, WhatsApp number, etc.
- [ ] **i18n** — Soporte multilingüe (es/en)
- [ ] **Performance** — Lazy loading de secciones, optimización de imágenes
- [ ] **PWA** — Service worker para offline
- [ ] **Cookies / GDPR** — Banner de consentimiento

---

## Decisiones de diseño importantes

1. **Single Page Application** — Sin routing; todas las secciones en una página con navegación por anclas (`#servicios`, `#carta`, etc.)
2. **Formspree en lugar de backend propio para el formulario** — El backend existe pero el formulario apunta a Formspree como servicio externo
3. **Backend in-memory** — Sin base de datos; quoteService.js usa mock con timeout de 1 segundo. Diseñado para ser reemplazado por una DB real
4. **Mobile-first** — Todas las secciones diseñadas primero para mobile, expandidas con `md:` y `lg:`
5. **Componentes autocontenidos** — Cada sección es un componente independiente sin props; los datos están hardcodeados dentro de cada uno
6. **Tailwind v4** — Usa la nueva sintaxis `@import "tailwindcss"` + `@theme` en vez del archivo `tailwind.config.js`
7. **React Compiler** — Habilitado via Babel plugin para optimizar re-renders automáticamente
8. **Sin dependencias de UI** — Sin shadcn, Material UI, etc. Todo el UI es custom con Tailwind
9. **TypeScript estricto** — `erasableSyntaxOnly`, `noUnusedLocals`, `noUnusedParameters` activados

---

## Checklist de tareas

- [x] Crear PLAN.md con análisis completo del proyecto
- [ ] Reemplazar Formspree ID placeholder (`YOUR_FORM_ID`)
- [ ] Reemplazar número de WhatsApp placeholder en FloatingWhatsApp
- [ ] Configurar variables de entorno (`.env`)
- [ ] Conectar backend a base de datos
- [ ] Subir imágenes reales de eventos
- [ ] Reemplazar video placeholder del Hero
- [ ] Generar y alojar PDF de carta de cócteles
- [ ] Agregar meta tags SEO + JSON-LD
- [ ] Agregar Google Analytics
- [ ] Escribir tests (Vitest + Playwright)
- [ ] Configurar CI/CD
- [ ] Desplegar frontend (Vercel/Netlify)
- [ ] Desplegar backend (Railway/Fly.io)
