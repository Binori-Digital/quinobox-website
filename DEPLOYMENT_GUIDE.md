# Quinobox.com.my Deployment Guide

## ✅ Completed
- ✓ Astro website fully built with 6 pages
- ✓ Minimalist luxury design (dark navy + gold accent)
- ✓ All code pushed to GitHub: https://github.com/Binori-Digital/quinobox
- ✓ Public CNAME file configured for quinobox.com.my

## 🔧 Final Setup Steps (Manual Configuration)

### Step 1: Enable GitHub Pages

1. Go to https://github.com/Binori-Digital/quinobox
2. Click **Settings** (gear icon)
3. Scroll left sidebar to **Pages**
4. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `master` and `/root` folder
   - Click **Save**

**GitHub will now:**
- Automatically build and deploy on each push
- Host at: `binori-digital.github.io/quinobox` (temporary)
- Support custom domain (next step)

### Step 2: Add Custom Domain in GitHub

1. Still in **Settings → Pages**
2. Under "Custom domain":
   - Enter: `quinobox.com.my`
   - Click **Save**

GitHub will create a DNS verification

### Step 3: Update Cloudflare DNS

1. Go to **Cloudflare Dashboard** → Your account
2. Add domain `quinobox.com.my` (if not already there)
3. Navigate to **DNS** → **Records**
4. **Delete** any existing A records pointing to old hosting
5. **Add** this CNAME record:
   - Type: **CNAME**
   - Name: **@** (or `quinobox.com.my`)
   - Target: **binori-digital.github.io**
   - TTL: Auto
   - Proxy status: **Proxied** (orange cloud)

6. Click **Save**

### Step 4: Verify DNS Propagation

DNS propagation typically takes **5-15 minutes**, but can take up to 48 hours.

**Test domain:**
```bash
# Check DNS resolution
nslookup quinobox.com.my
# or
dig quinobox.com.my

# Or just visit in browser (after propagation)
https://quinobox.com.my
```

### Step 5: Enable HTTPS

Once DNS propagates and GitHub Pages recognizes the custom domain:

1. Return to **GitHub → Settings → Pages**
2. Check **"Enforce HTTPS"** checkbox
3. Wait 5-10 minutes for SSL certificate to provision

---

## 📋 Website Structure

```
quinobox.com.my/
├── /                    Homepage - Hero, services highlight, portfolio preview
├── /services            Full service offerings (3 main services)
├── /portfolio           Project gallery and case studies
├── /about               Company story and values
├── /contact             Contact form and business info
└── /quote               Quote request form (main conversion page)
```

## 🎨 Design Details

**Color Scheme:**
- Primary: #1a1a1a (Dark Navy)
- Accent: #c9a961 (Warm Gold)
- Background: #ffffff (White)

**Typography:**
- Display: Playfair Display (serif) - Headlines
- Body: Source Sans Pro (sans-serif) - Text

**Features:**
- Sticky navigation with mobile-responsive menu
- WhatsApp floating button (💬)
- Minimalist luxury aesthetic
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Accessible (ARIA labels, semantic HTML)

## 🚀 Going Live

After DNS propagates:

1. Visit https://quinobox.com.my
2. Verify all pages load correctly
3. Test mobile responsiveness
4. Check links and forms
5. Submit to Google Search Console

## 📝 Important Notes

- **GitHub Actions:** The deploy workflow was removed due to token scope limitations. GitHub will auto-deploy when you push to `master` branch (after enabling Pages).
- **Sitemap:** Can be manually created or generated using a tool after site goes live
- **SEO:** Add to Google Search Console and submit sitemap for indexing
- **Email:** Update contact form backend integration (currently shows success message)

## 🔄 Future Updates

To update the site:

1. Edit Astro files locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Commit and push: `git push origin master`
5. GitHub Pages auto-deploys within 1-2 minutes

---

**Created:** 2026-04-14
**Website:** https://quinobox.com.my
**Repository:** https://github.com/Binori-Digital/quinobox
