# CarLinx-IA

Public vehicle discovery PWA — part of the VTL Evosystem, powered by AppWow.

## Architecture

- **Framework**: Astro 4 (server output mode)
- **Adapter**: @astrojs/cloudflare (directory mode)
- **Deployment**: Cloudflare Pages
- **API**: vtl-platform-api (proxy via `src/lib/api.ts`)
- **PWA**: Full service worker at `/public/sw.js`

## Structure

```
src/
  pages/
    index.astro          ← Vehicle grid + search
    vehicle/[id].astro   ← Vehicle detail page
  components/
    VehicleCard.astro    ← Reusable listing card
    SearchPanel.astro    ← Full search form
  layouts/
    BaseLayout.astro     ← HTML shell, SW registration, offline banner
  lib/
    api.ts               ← API proxy helper (never call API directly)
    makes.ts             ← Complete global makes list
public/
  sw.js                  ← Service worker
  manifest.json          ← PWA manifest
  icons/                 ← All icon sizes (replace stubs with production assets)
```

## Commands

```bash
npm ci             # Install dependencies
npm run dev        # Local dev server
npm run build      # Production build
npm run preview    # Preview production build locally
```

## Deployment

Deploys automatically via Cloudflare Pages on push.
Cloudflare Pages project name: `carlinx-ia`

## API Endpoints Used

| Endpoint              | Purpose              |
|-----------------------|----------------------|
| `GET /api/vehicles`   | Paginated vehicle list with filters |
| `GET /api/vehicle/:id`| Single vehicle detail |

## PWA Offline Behaviour

1. Load site online → pages cached automatically
2. Navigate to vehicle list → cached
3. Open vehicle detail → cached
4. Go offline → cached pages remain accessible
5. Offline banner visible automatically
6. Reconnect → banner hides, fresh data loads

## Environment Variables

| Variable     | Description                |
|--------------|----------------------------|
| `VTL_API_URL`| VTL Platform API base URL  |

See `.env.example` for reference.
