# Phase 0 — Deploy to Vercel + Connect GoDaddy Domain

Project: `C:\Users\Admin\Projects\clothing-shop`

## Status

| Step | Status |
|---|---|
| Local dev (`npm run dev`) | Done — http://localhost:3000 |
| GitHub repo | Done — https://github.com/manishdev1107/clothing-shop |
| Vercel production | Done — https://clothing-shop-weld-rho.vercel.app |
| GoDaddy custom domain | **Pending DNS** — configure records in GoDaddy for `labelswaya.com` |

## Connect labelswaya.com in GoDaddy

Domains added in Vercel. Update DNS in GoDaddy:

1. Sign in at [godaddy.com](https://www.godaddy.com) → **My Products** → **DNS** for `labelswaya.com`.
2. **Remove or edit conflicting records** — delete old **A** records for `@` and `www` that point to GoDaddy parking (e.g. `Parked` or `WebsiteBuilder Site`).
3. **Add/update these records:**

| Type | Name | Value | TTL |
|---|---|---|---|
| **A** | `@` | `76.76.21.21` | 600 (or default) |
| **A** | `www` | `76.76.21.21` | 600 (or default) |

4. Save changes. DNS can take **5–60 minutes** (sometimes up to 48 hours).
5. Vercel will email you when the domain is verified and HTTPS is ready.

**Live URLs after DNS propagates:**
- https://labelswaya.com
- https://www.labelswaya.com

**Current Vercel URL (works now):** https://clothing-shop-weld-rho.vercel.app

## Useful commands

```bash
cd C:\Users\Admin\Projects\clothing-shop
npm run dev          # local development
vercel --prod --yes  # redeploy to production
git push             # push changes to GitHub
```

## Phase 0 complete when

- [x] `npm run dev` works on your machine
- [x] Code is on GitHub
- [x] Site loads on Vercel’s `.vercel.app` URL
- [x] Your GoDaddy domain added in Vercel (`labelswaya.com`, `www.labelswaya.com`)
- [ ] DNS records updated in GoDaddy → site opens at https://labelswaya.com

Next step: **Phase 1** — build the clothing catalog (Header, product pages, filters).
