# H.O.P.E.S.S. website

An Astro website for Homes of Personal Enrichment & Sobriety Services in Phoenix, Arizona.

## Local development

```sh
npm ci
npm run dev
```

Use the local address printed by Astro.

## Production build

```sh
npm run build
npm run preview
```

The build checks Astro and TypeScript, then generates the static website in `dist/`.

## Content

- `src/pages/`: homepage, treatment programs, admissions, insurance, referrals, and policy pages.
- `src/layouts/`: shared navigation, footer, and content layouts.
- `src/data/site.ts`: contact details and program information.
- `src/styles/`: shared styles and homepage design.
- `public/`: logos, photography, and insurance assets.

Intake links call the intake team directly. No online callback submission service is configured.

Local hosting metadata, dependencies, build output, and presentation files are excluded from source control. Pushing this repository does not deploy the website.
