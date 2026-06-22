# Nusantara Journey Card — Frontend (NJC-FE)

The frontend for **Nusantara Journey Card**, a digital shipment-receipt experience for Pos Indonesia (POSIND). Users land on `/resi/[resi]` to track a package with a modern, mobile-friendly, shareable receipt UI.

## About the project

`/resi/[resi]` is the core surface: a single-page receipt with the shipment number, status timeline, an illustrated live-location banner (animated truck + globe), sender/recipient details, an action row (Salin / Unduh / Bagikan), and a vertical history feed. Users can download the receipt as a PNG or share it via the Web Share API.

The rest of the app supports the surrounding flow: a shipment intake form (single + batch via Excel), an admin surface, result pages, and a couple of long-form article pages.

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript 5** — strict mode with `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, `noPropertyAccessFromIndexSignature`
- **Tailwind CSS 3.4** (custom theme tokens — `posBlue`, `posDarkBlue`, `posOrange`, etc.)
- **Lucide React** — icon set
- **html2canvas** — PNG export of the receipt
- **qrcode.react** — QR codes in the Download App CTA
- **xlsx** — Excel import for batch form

## Project structure

```
app/
├── page.tsx                # Landing page
├── layout.tsx              # Root layout
├── globals.css             # Tailwind entry
├── resi/[resi]/            # The main receipt page
│   ├── page.tsx
│   └── dummy-data.ts       # Local dev data
├── form/, form-batch/      # Shipment intake
├── result/, result-batch/  # Result listings
├── article/, article-2/    # Long-form content
├── admin/                  # Admin surface
└── api/send-wa/route.ts    # WhatsApp dispatch endpoint

components/
├── CopyButton.tsx          # Copy-link button (icon + full variants)
├── DownloadButton.tsx      # PNG download button (html2canvas)
├── ShareButton.tsx         # Web Share / fallback download button
├── Receipt.tsx             # Receipt page orchestrator
└── receipt/                # Receipt subcomponents
    ├── TopBanner.tsx
    ├── StatusOverview.tsx  # Includes MapBanner with truck + globe
    ├── DetailKirmanDetails.tsx
    ├── DetailKirmanActions.tsx
    ├── RiwayatPengiriman.tsx
    ├── DownloadAppCTA.tsx
    ├── ArticleCard.tsx
    └── ArticleGrid.tsx
```

## Running locally

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Environment variables

Create `.env.local`:

```env
API_KEY=...                 # optional, used by the resi page in production
```

If `API_KEY` is unset, `/resi/[resi]` falls back to dummy data — so local development works without it.

### Development

```bash
npm run dev
```

Default port: `3000`.

### Production build

```bash
npm run build
npm run start
```

`npm run start` serves the compiled output. Bind to the VPS port:

```bash
npm run start -- -p 14022
```

Or with `HOSTNAME`:

```bash
HOSTNAME=0.0.0.0 PORT=14022 npm run start
```

### Lint & typecheck

```bash
npm run lint      # ESLint (strict rules, 0 errors expected)
npx tsc --noEmit  # TypeScript strict check
```


Keep both `API_KEY` (and any future backend secrets) out of source — set them in the VPS environment before starting the server.

## Code conventions

- **Strict TypeScript**: no `any`, no `as any`, no `// @ts-ignore`. Use the brand-aware index signature options enabled in `tsconfig.json`.
- **Tailwind only**: no inline styles for layout. Component-local motion uses `tailwind.config.js` keyframes (`spinSlow`, `slideFadeLoop`).
- **Responsive first**: every receipt section is laid out mobile-first with `md:` / `lg:` upgrades. Test desktop, tablet, and mobile.
- **Strict lint**: `npm run lint` must report `0 errors`. Warnings are tolerated; fix them in follow-ups.
- **No new dependencies** without an explicit reason — pull from what's already in `package.json`.

## License

Private — Pos Indonesia / Nusantara Journey Card.
