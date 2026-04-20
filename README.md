# FgTech Landing Page - Simple Version

A lightweight, minimal React landing page for FgTech IoT for Farming. No backend, no database, no analytics - just pure React components.

## Features

- ✅ Pure React + TypeScript
- ✅ Tailwind CSS styling
- ✅ Bilingual support (English & Italian)
- ✅ Responsive design
- ✅ Zero dependencies (except React & Lucide icons)
- ✅ Easy to deploy anywhere

## Quick Start

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build

```bash
npm run build
```

The `dist/` folder is ready to deploy.

## Deployment

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### Vercel

```bash
npm run build
# Upload dist/ folder
```

### Any Static Host

Just upload the `dist/` folder contents to your hosting provider.

## Project Structure

```
src/
├── components/        # React components
├── translations.ts    # EN/IT content
├── App.tsx           # Main app
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Customization

### Change Content

Edit `src/translations.ts` to update text in English and Italian.

### Change Colors

Edit `src/index.css` and `tailwind.config.ts`:
- Primary: `#0B3B24` (dark green)
- Accent: `#00E676` (bright green)

### Add New Sections

1. Create a new component in `src/components/`
2. Import it in `src/App.tsx`
3. Add translations in `src/translations.ts`

## License

MIT
