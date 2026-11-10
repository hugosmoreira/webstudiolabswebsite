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
src/
  main.jsx                  # entry — imports the design-system CSS + mounts <App/>
  App.jsx                   # composes the full long-form page
  styles/
    theme.css               # design tokens, typography, buttons, cards, utilities
    landing.css             # section + responsive styles
  ui/                       # reusable primitives
    Icon.jsx  Logo.jsx  Reveal.jsx  SectionHead.jsx
    Avatar.jsx  charts.jsx  (Sparkline / BarChart / Donut / Progress)
  components/               # one file per page section
    Header.jsx  Hero.jsx  HeroDashboard.jsx  TrustBar.jsx
    ProblemSection.jsx  SolutionSection.jsx
    ServicesSection.jsx  ServiceCard.jsx
    UseCasesSection.jsx  ClientPortalPreview.jsx
    ProcessSection.jsx  ProcessStep.jsx
    ComparisonSection.jsx  WorkSection.jsx
    EngagementModels.jsx  PricingCard.jsx
    CTASection.jsx  ContactSection.jsx  ContactForm.jsx  Footer.jsx
  portal/                   # PLACEHOLDERS for a future client portal (not built)
    PortalPlaceholder.jsx  DashboardHome.jsx  ProjectOverview.jsx
    Roadmap.jsx  Messages.jsx  Files.jsx  Billing.jsx
    SupportRequests.jsx  Settings.jsx  README.md
```

## Page sections (top → bottom)

1. Sticky header / navigation
2. Hero
3. Problem
4. Solution
5. Capabilities / services
6. Use cases
7. How we work (process)
8. Why custom (comparison)
9. Example builds (illustrative, not client case studies)
10. Engagement models
11. Final CTA
12. Contact form
13. Footer

All nav links and CTA buttons scroll smoothly to in-page sections; the primary CTA is
"Start a Project" and points to the contact section. The contact form submits to
Formspree (`VITE_FORMSPREE_ENDPOINT`, see `.env.example`), so inquiries are sent to the
configured Formspree inbox.

`HeroDashboard.jsx`, `TrustBar.jsx`, and `ClientPortalPreview.jsx` are no longer rendered.
See `REBRAND_PLAN.md` for the rebrand roadmap.

## Not yet included (intentionally, pending approval)

Backend · authentication · client portal · payments/billing · database.
The `src/portal/` folder reserves structure for that future work.
