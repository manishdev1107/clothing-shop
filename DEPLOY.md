# Phase 0 — Deploy to Vercel + Connect GoDaddy Domain

Your project is ready at `C:\Users\Admin\Projects\clothing-shop`.

## 1. Run the site locally

Open a terminal in this folder and run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the default Next.js welcome page.

## 2. Push to GitHub

1. Create a free account at [github.com](https://github.com) if you do not have one.
2. Create a new **empty** repository named `clothing-shop` (do not add README or .gitignore — this project already has them).
3. In a terminal, set your Git identity once (replace with your name and email):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

4. Push this project:

```bash
cd C:\Users\Admin\Projects\clothing-shop
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/clothing-shop.git
git push -u origin main
```

## 3. Deploy on Vercel

1. Sign up at [vercel.com](https://vercel.com) (use “Continue with GitHub”).
2. Click **Add New → Project**.
3. Import your `clothing-shop` GitHub repository.
4. Leave default settings (Framework: Next.js) and click **Deploy**.
5. After deploy, Vercel gives you a URL like `https://clothing-shop-xyz.vercel.app`.

## 4. Connect your GoDaddy domain

1. In Vercel: **Project → Settings → Domains → Add** your domain (e.g. `yourshop.com` and `www.yourshop.com`).
2. Vercel shows DNS records to add (usually an **A** record and a **CNAME** for `www`).
3. In GoDaddy: **My Products → DNS** for your domain → add the records Vercel shows.
4. Wait 5–60 minutes for DNS to propagate. Vercel will issue HTTPS automatically.

## Phase 0 complete when

- [ ] `npm run dev` works on your machine
- [ ] Code is on GitHub
- [ ] Site loads on Vercel’s `.vercel.app` URL
- [ ] Your GoDaddy domain opens the site over HTTPS

Next step: **Phase 1** — build the clothing catalog (Header, product pages, filters).
