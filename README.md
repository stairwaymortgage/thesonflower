# thesonflower.com

Static website for The SonFlower and the Bear by James Blackburn.

---

## File Structure

```
/
├── index.html          → / (Home)
├── about.html          → /about
├── contact.html        → /contact
├── series.html         → /series
├── nine-doors.html     → /nine-doors
├── community.html      → /community
├── donate.html         → /donate
├── blog.html           → /blog
├── quiz.html           → /quiz
├── blog/
│   ├── lucid-dreaming-obe-astral.html   → /blog/lucid-dreaming-obe-astral
│   ├── wbtb-lucid-dreaming.html         → /blog/wbtb-lucid-dreaming
│   ├── monroe-institute-gateway.html    → /blog/monroe-institute-gateway
│   ├── jesus-life-after-death.html      → /blog/jesus-life-after-death
│   ├── spirituality-without-religion.html
│   ├── does-god-exist-atheist.html
│   ├── why-the-bear.html
│   ├── left-the-church.html
│   ├── tibetan-dream-yoga.html
│   ├── sin-missing-the-mark.html
│   └── nine-doors-guide.html
├── css/
│   └── style.css       ← ALL styles live here
├── js/
│   ├── components.js   ← ALL nav + footer live here
│   └── main.js         ← ALL JS logic lives here
└── vercel.json         ← Clean URL rewrites
```

---

## Deploy to Vercel

### Option 1 — Vercel CLI (recommended)
```bash
npm install -g vercel
cd thesonflower
vercel
```
Follow the prompts. On first deploy it will ask you to log in and create a project.

### Option 2 — Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and log in
2. Click **Add New → Project**
3. Upload this folder or connect a GitHub repo containing it
4. Vercel auto-detects static site — no build settings needed
5. Click **Deploy**

Clean URLs work automatically via `vercel.json`.

---

## Editing the Header & Footer

**Open `js/components.js`** — this is the only file you need to edit.

The nav, mobile menu, footer, and waitlist modal are all defined here as template literals (`NAV_HTML`, `FOOTER_HTML`, `MODAL_HTML`). Edit once and every page updates on the next deploy.

### To update a nav link:
Find the link in `NAV_HTML` and change the `href` or label text.

### To add a new nav item:
Add an `<a class="nav-link" href="/new-page">New Page</a>` inside the `.nav-links` div in `NAV_HTML`, and a matching `<a class="mobile-link" href="/new-page">New Page</a>` in the mobile menu section.

### To update the footer:
Edit `FOOTER_HTML` — same pattern.

---

## Editing Styles

**Open `css/style.css`** — all styles live here.

CSS variables are defined at the top of the file under `:root {}`. To change a brand color across the entire site, change it once here:

```css
:root {
  --gold: #F2A800;       /* sunflower gold */
  --cherry: #6B1728;     /* announcement bar */
  --purple-dark: #1A0A2E; /* nav background */
  --purple-mid: #2C1654;  /* cards, sections */
  --cream: #F5F0E8;       /* page background */
}
```

---

## Adding a New Page

1. Create `new-page.html` in the root folder
2. Use this template:
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Title — The SonFlower and the Bear</title>
<link rel="stylesheet" href="/css/style.css">
</head>
<body>
<div id="nav-placeholder"></div>
<div id="modal-placeholder"></div>

<!-- YOUR PAGE CONTENT HERE -->

<div id="footer-placeholder"></div>
<script src="/js/components.js"></script>
<script src="/js/main.js"></script>
</body>
</html>
```
3. Add a rewrite to `vercel.json`:
```json
{"source": "/new-page", "destination": "/new-page.html"}
```
4. Add a nav link in `js/components.js` if needed
5. Deploy

---

## Adding a New Blog Post

1. Create `blog/your-post-slug.html` using the blog post template structure
2. Add a rewrite to `vercel.json`:
```json
{"source": "/blog/your-post-slug", "destination": "/blog/your-post-slug.html"}
```
3. Add a post card to `blog.html`
4. Deploy

---

## Brand Colors Quick Reference

| Variable | Hex | Use |
|---|---|---|
| `--purple-dark` | `#1A0A2E` | Nav, hero backgrounds |
| `--purple-mid` | `#2C1654` | Cards, sections, buttons |
| `--purple-light` | `#9B7FD4` | Secondary text, labels |
| `--gold` | `#F2A800` | Primary accent, CTAs |
| `--cherry` | `#6B1728` | Announcement bar |
| `--cream` | `#F5F0E8` | Page background |

---

## Contact

James Blackburn · Fort Lauderdale, Florida  
thesonflower.com
