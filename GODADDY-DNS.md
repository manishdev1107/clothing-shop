# Finish Phase 0 — GoDaddy DNS for labelswaya.com

Your domain currently points to **GoDaddy parking** (wrong). It must point to **Vercel**.

## Current vs required

| Record | Current (wrong) | Required |
|--------|-----------------|----------|
| `@` A  | `76.223.105.230`, `13.248.243.5` | `76.76.21.21` |
| `www`  | CNAME → `labelswaya.com` (inherits wrong IP) | `76.76.21.21` (A record) |

## Steps in GoDaddy

1. Open: https://dcc.godaddy.com/control/dnsmanagement?domainName=labelswaya.com  
2. Sign in to your GoDaddy account.

### Edit `@` (root domain)

3. Find the **A** record where **Name** is `@`.
4. Click **Edit** (pencil icon).
5. Set **Value** / **Points to** → `76.76.21.21`
6. Save.

If there are **two** A records for `@`, edit both to `76.76.21.21`, or delete extras and keep one.

### Edit `www`

7. Find the **CNAME** or **A** record where **Name** is `www`.
8. If it is a **CNAME**: delete it, then click **Add** → type **A**:
   - Name: `www`
   - Value: `76.76.21.21`
   - TTL: 600 seconds (or 1 Hour)
9. Save.

### Remove conflicting records (if present)

Delete any of these if you see them:
- A `@` → GoDaddy Website Builder / Parked
- Forwarding that conflicts with A records

## Verify (after 5–60 minutes)

Run in PowerShell:

```powershell
Resolve-DnsName labelswaya.com -Type A
```

You should see `76.76.21.21`.

Then open https://labelswaya.com — it should show the same Next.js page as:
https://clothing-shop-weld-rho.vercel.app

## Phase 0 complete when

- [ ] DNS shows `76.76.21.21` for `@` and `www`
- [ ] https://labelswaya.com loads your Vercel site (not GoDaddy parking)
