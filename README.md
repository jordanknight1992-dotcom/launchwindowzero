# Launch Window Zero — Author Website

A cinematic, production-ready author website for the science fiction novel *Launch Window Zero*.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## Project Structure

```
lwz-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── chapter-one/
│   │   └── page.tsx        # Full Chapter One reading experience
│   └── archive/
│       └── page.tsx        # Hidden fictional research logs
├── components/
│   ├── Navigation.tsx      # Fixed header with scroll detection
│   ├── Starfield.tsx       # Animated canvas star background
│   ├── FadeIn.tsx          # Reusable scroll-triggered animation
│   ├── Hero.tsx            # Hero section with book cover
│   ├── Discovery.tsx       # Story premise section
│   ├── Crew.tsx            # Character cards
│   ├── Universe.tsx        # Worldbuilding concepts
│   ├── Book.tsx            # Book description and status
│   ├── Signup.tsx          # Email capture form
│   ├── Author.tsx          # Author bio and photo
│   └── Footer.tsx          # Site footer
├── content/
│   ├── site.ts             # All site copy (edit here)
│   ├── chapter-one.ts      # Chapter One full text
│   └── archive.ts          # Fictional telemetry logs
├── public/
│   └── images/
│       ├── starfield.jpeg  # Hero background
│       ├── viewport.png    # Book cover image
│       └── author.png      # Author photo
├── styles/
│   └── globals.css         # Global styles and Tailwind
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

---

## Run Locally

1. **Install dependencies:**

```bash
npm install
```

2. **Start the dev server:**

```bash
npm run dev
```

3. **Open in browser:**

Visit `http://localhost:3000`

---

## Deploy to Vercel

### Option A: Vercel CLI

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. From the project root, run:

```bash
vercel
```

3. Follow the prompts. Vercel will auto-detect Next.js.

### Option B: GitHub Integration

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel auto-detects Next.js and deploys.

---

## Editing Content

All site text lives in the `/content` folder:

- **`content/site.ts`** — Hero text, section copy, character descriptions, author bio
- **`content/chapter-one.ts`** — Full Chapter One text
- **`content/archive.ts`** — Fictional telemetry log entries

Edit these files and the changes will reflect across the site.

---

## Email Integration

The signup form in `components/Signup.tsx` currently shows a confirmation message on submit. To connect it to a real email service:

1. Replace the `handleSubmit` function with an API call to your provider (Mailchimp, ConvertKit, Buttondown, etc.)
2. Or create an API route at `app/api/subscribe/route.ts` to handle submissions server-side.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/chapter-one` | Full Chapter One reading experience |
| `/archive` | Hidden page with fictional research logs |

---

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Google Fonts**: Cormorant Garamond (display), Outfit (body), JetBrains Mono (system readouts)
