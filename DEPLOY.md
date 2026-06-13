# Phase 0 — Deploy to Vercel + Connect GoDaddy Domain

Project: `C:\Users\Admin\Projects\clothing-shop`

## Status

| Step | Status |
|---|---|
| Local dev (`npm run dev`) | Done — http://localhost:3000 |
| GitHub repo | Done — https://github.com/manishdev1107/clothing-shop |
| Vercel production | Done — https://clothing-shop-weld-rho.vercel.app |
| GoDaddy custom domain | **Pending** — need your domain name |

## Connect your GoDaddy domain (last step)

1. Tell your agent your exact domain (e.g. `myclothshop.com`).
2. In [Vercel → clothing-shop → Settings → Domains](https://vercel.com/manish-dev-s-projects/clothing-shop/settings/domains), add:
   - `yourdomain.com`
   - `www.yourdomain.com`
3. Vercel shows DNS records (usually **A** `@` → `76.76.21.21` and **CNAME** `www` → `cname.vercel-dns.com`).
4. In GoDaddy: **My Products → DNS** → add/update those records.
5. Wait 5–60 minutes for DNS propagation. Vercel issues HTTPS automatically.

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
- [ ] Your GoDaddy domain opens the site over HTTPS

Next step: **Phase 1** — build the clothing catalog (Header, product pages, filters).
