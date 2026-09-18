# Shaik Abid — portfolio

## Create the project

```bash
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*"
cd portfolio
npm install lucide-react clsx tailwind-merge
```

Then copy these files over the generated ones.

Optional — if you later want real shadcn/ui components:

```bash
npx shadcn@latest init
```

Its CLI writes to `components/ui/`, which is what the `@/components/ui/...`
alias already resolves to here, so nothing has to move.

## File map

```
app/
  layout.tsx      fonts, metadata, no-flash theme script
  page.tsx        composes the sections
  globals.css     design tokens
components/
  ui/             navbar, theme-toggle, blur-text
  sections/       hero  (about, skills, projects… land here next)
lib/
  site-config.ts  all content — edit this, not the components
  utils.ts        cn() helper
public/
  profile.jpg     add your photo here
tailwind.config.ts
```

## Before it looks finished

- Drop `profile.jpg` into `public/`. Until then the hero shows an "SA"
  placeholder rather than a stock photo of a stranger.
- Fill in the empty `blurb`, `stack`, `repo` and `demo` fields in
  `lib/site-config.ts`. Empty links stay hidden.

## Things fixed from the original 21st.dev component

- Added `"use client"` — the original breaks as an App Router server component.
- Theme now runs off a single `dark` class plus CSS variables. The original
  mixed inline colour styles with Tailwind `dark:` variants and always reset
  to dark on refresh; this one persists the choice and doesn't flash.
- `BlurText` cleanup no longer reads a stale `ref.current`, and disconnects
  after revealing so it can't replay.
- Removed the unused inlined `Button`.
- Fonts load via `next/font` instead of a `<link>` inside JSX.
- Menu closes on Escape and returns focus; nav highlights the current section.
- `prefers-reduced-motion` is respected — the blur reveal is skipped entirely.
- Accessible text: the hero name renders as a real `h1` for screen readers
  while the animated per-letter spans are hidden from them.
