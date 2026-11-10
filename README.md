# WebStudioLabs — Landing Page

A premium, SaaS-style single-page marketing site for **WebStudioLabs**, a software
studio that builds custom web apps, mobile apps, internal dashboards, client portals,
SaaS MVPs, and AI-powered automation systems.

Built with **Vite + React** and a hand-rolled CSS design system (Notion / Linear /
Vercel / Stripe DNA). One long-form landing page — no backend, auth, or payments yet.

## Run locally

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build → http://localhost:4173
npm run lint     # ESLint
```

## Project structure

```
index.html                  # homepage: title, canonical, Open Graph/Twitter tags, JSON-LD
privacy/index.html          # /privacy/ page
404.html                    # not-found page (Netlify serves it for unknown URLs)
public/
  work/                     # real project screenshots, captured from the live sites
  og-image.jpg              # 1200×630 link-preview image
  apple-touch-icon.png  favicon.svg  robots.txt  sitemap.xml
src/
  main.jsx  privacy.jsx  notfound.jsx   # one entry per page (see vite.config.js)
  App.jsx                   # composes the homepage
  pages/                    # PrivacyPage.jsx, NotFoundPage.jsx
  data/
    projects.js             # SUG World Tour, Voxian, Housing Navigator: role, status, capture date, copy
    site.js                 # shared business details (contact email)
  lib/prefill.js            # lets section CTAs preselect a contact-form category
  styles/
    theme.css               # design tokens, typography, buttons, cards, utilities
    landing.css             # section + responsive styles
  ui/                       # reusable primitives
    Icon.jsx  Logo.jsx  Reveal.jsx  SectionHead.jsx  Frames.jsx (screenshot frames)
    PageShell.jsx           # header + main + footer wrapper for secondary pages
  components/               # one file per page section
    Header.jsx  Hero.jsx  WorkSection.jsx
    ServicesSection.jsx  ServiceCard.jsx  CreatorPlatformsSection.jsx
    StudioProductsSection.jsx  StudioSection.jsx  ProcessStep.jsx
    ContactSection.jsx  ContactForm.jsx  Footer.jsx
  portal/                   # PLACEHOLDERS for a future client portal (not built, not imported)
    PortalPlaceholder.jsx  DashboardHome.jsx  ProjectOverview.jsx
    Roadmap.jsx  Messages.jsx  Files.jsx  Billing.jsx
    SupportRequests.jsx  Settings.jsx  README.md
```

## Page sections (top → bottom)

1. Header — Work · Services · Our Products · Studio · Start a Project
2. Hero — positioning, CTAs, and the SUG World Tour screenshot
3. Selected client work (`#work`) — SUG World Tour
4. Capabilities (`#services`) — three service categories
5. Creator & community platforms (`#creators`)
6. Studio products (`#products`) — Voxian and Housing Navigator
7. Studio & process (`#studio`) — intro, four steps, scoping note
8. Start a project (`#contact`) — inquiry form and email
9. Footer

Header and footer links use `/#section`, so they also work from `/privacy/` and the 404
page. The primary CTA is "Start a Project". The contact form submits to Formspree
(`VITE_FORMSPREE_ENDPOINT`, see `.env.example`), so inquiries are sent to the configured
Formspree inbox; a hidden `_gotcha` field is Formspree's honeypot for spam bots.

If the site starts using a new service (analytics, a different form provider, a chat
widget), update `src/pages/PrivacyPage.jsx` before it goes live.

When a project changes, update `src/data/projects.js` and recapture its screenshot so
the page only describes what is live. See `REBRAND_PLAN.md` for the rebrand roadmap.

## Not yet included (intentionally, pending approval)

Backend · authentication · client portal · payments/billing · database.
The `src/portal/` folder reserves structure for that future work.
