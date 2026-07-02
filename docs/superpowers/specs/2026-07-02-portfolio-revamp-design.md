# Portfolio Revamp — Design Spec

**Date:** 2026-07-02
**Owner:** Madhav Manohar Suresh

## Goal

Replace the borrowed Bedimcode "Alexa" template (generic marketing copy that doesn't match the owner) with a clean, custom, single-page portfolio tailored to a senior software engineer specializing in data-intensive platforms for commodities & energy trading.

## Decisions (approved)

- **Approach:** Rebuild from scratch. Drop the Bedimcode template, Swiper, and Unicons dependencies.
- **Aesthetic:** Minimal / technical. Dark-first, terminal-adjacent. Near-black background, one restrained accent color, generous whitespace. Monospace (JetBrains Mono / IBM Plex Mono) for labels/accents + clean sans (Inter) for prose. Subtle scroll motion; respects `prefers-reduced-motion`.
- **Emphasis:** Impact & experience (Experience is the centerpiece).
- **Profile photo:** Yes — small photo in hero (`assets/img/profile.jpg`).
- **CV download:** Yes — "Download CV" button linking to `assets/pdf/Madhav-CV.pdf`.
- **Keep from current setup:** favicons, `site.webmanifest`, light/dark theme toggle (rebuilt cleanly).

## Tech

- Single `index.html` + new custom `assets/css/styles.css` + small vanilla `assets/js/main.js`.
- Google Fonts (Inter + a monospace). No Swiper, no Unicons. Inline SVG or a lightweight icon approach for social icons.
- Responsive, accessible (semantic HTML, keyboard-navigable, focus states, alt text, reduced-motion).

## Sections (in order)

1. **Nav** — sticky, minimal; anchor links (About, Experience, Skills, Education, Contact); theme toggle.
2. **Hero** — Name; title "Software Engineer — data-intensive platforms for commodities & energy trading"; London; one-line summary; social links (LinkedIn, GitHub, Medium, email); Download CV button; small profile photo. Optional monospace status-line flourish.
3. **About** — 6-years summary, tightened to 2–3 sentences.
4. **Experience** (centerpiece) — Timeline of all 4 roles with role/company/dates, one-line context, impact bullets from resume, and a tech-tag row per role:
   - **Hartree Partners** — Application Developer (Jul 2025 – Present). Risk & Pricing. Position Service ETL (Python/Airflow) consolidating 8+ ETRMs; historical-simulation VaR engine migration + risk controls; production reliability of morning risk jobs; interactive position viewer; risk-operations console; pre-built report tables. Tech: Python, Pandas, Apache Airflow, Ray, AWS (Athena, S3, EKS), Kubernetes, PostgreSQL, Svelte.
   - **Centrica Plc** — Software Developer (Oct 2023 – Jun 2025). Front Office / power trading desk. REMIT + grid capacity/outage capture (producer–curator); data-curation platform (canonical view); algo-trading compliance alerting; ~10 TB PostgreSQL→ClickHouse migration with reconciliation; data-staleness/quality monitoring; Conda env setup tool. Tech: Python, PostgreSQL, ClickHouse, AWS (ECS, AppSync, Lambda, EC2, CloudWatch, EventBridge, SQS, SNS, S3), Kafka.
   - **Tata Consultancy Services** — Systems Engineer (Jan 2019 – Jan 2022). Micro Widget: micro-frontend platform; CLI bundler; client bus; widget state persistence; 12–15% load-time improvement. Tech: HTML5, JS, Web Components, TypeScript, Node, React, JSS, Webpack 5, Federated Modules, Jest.
   - **InApp Information Technologies** — Programmer Trainee (Jul 2018 – Dec 2018). Full-stack Python knowledge-graph app; performance analysis and fixes. Tech: Django, Python, SQLite, JavaScript, HTML5, Java, JSP.
5. **Skills** — Grouped chips: Languages (Python, TypeScript/JavaScript, SQL, Java); Data & Storage (PostgreSQL, ClickHouse, Pandas, ETL); Cloud & Infra (AWS, Kubernetes, Airflow, Ray, Kafka); Frameworks/Tools (Svelte, React, Node, Webpack, Django, Jest, Conda).
6. **Education** — Master's, Computing & ICT, University of East London (Jan 2022 – May 2023); Bachelor's, Electronics & Communication, University of Kerala (Aug 2014 – Jul 2018).
7. **Footer / Contact** — Email CTA (madhavmanohar.s@gmail.com) + socials + copyright.

## Success criteria

- No borrowed placeholder copy remains; all content traces to the resume.
- Accurate role details, dates, and tech stacks.
- Loads with no external JS/CSS beyond Google Fonts; no console errors.
- Responsive from mobile to desktop; theme toggle persists via `localStorage`.
- Passes a keyboard + reduced-motion sanity check.

## Out of scope

- Blog, project case-study pages, contact form backend, analytics.
- Reworking favicons/manifest (kept as-is).
