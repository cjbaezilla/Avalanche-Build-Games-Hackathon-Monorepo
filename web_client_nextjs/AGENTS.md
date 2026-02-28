# Vibe2Wizard - Implementation Guide

## Overview

This project uses **Next.js 15** with **Tailwind CSS**, **shadcn/ui components**, **Radix UI**, and **Framer Motion** for animations.

---

## Installed Packages

### Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `framer-motion` | ^12.34.3 | Animation library |
| `@radix-ui/react-slot` | ^1.2.4 | Radix UI - Slot component for composition |
| `class-variance-authority` | ^0.7.1 | CVA - variant props for components |
| `clsx` | ^2.1.1 | Conditional classNames utility |
| `tailwind-merge` | ^3.5.0 | Tailwind class merge utility |
| `lucide-react` | ^0.575.0 | Icon library |

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | ^4.2.1 | CSS framework |
| `postcss` | ^8.5.6 | CSS post-processing |
| `autoprefixer` | ^10.4.27 | Vendor prefixer |

---

## Configuration Files

### tailwind.config.js

Located at project root. Contains shadcn/ui color tokens using CSS variables:

```javascript
// Key color tokens:
- --background, --foreground
- --primary, --primary-foreground
- --secondary, --secondary-foreground
- --muted, --muted-foreground
- --accent, --accent-foreground
- --destructive, --destructive-foreground
- --border, --input, --ring
- --card, --card-foreground
- --popover, --popover-foreground
- --chart-1 through --chart-5
```

Dark mode is enabled via `darkMode: ["class"]`.

### postcss.config.js

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### tsconfig.json

Added path alias:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### next.config.js

Added webpack alias for `@` path:

```javascript
config.resolve.alias = {
  ...config.resolve.alias,
  '@': require('path').resolve(__dirname, 'src'),
};
```

---

## Project Structure

```
src/
├── components/
│   └── ui/              # shadcn/ui components
│       └── button.tsx
├── lib/
│   └── utils.ts         # Utility functions (cn())
├── styles/
│   └── globals.css      # Tailwind + CSS variables
├── pages/               # Next.js pages (Pages Router)
└── wagmi.ts             # RainbowKit/Wagmi config
```

---

## Utility Functions

### cn() - Class Name Merger

Located at `src/lib/utils.ts`

```typescript
import { cn } from "@/lib/utils";

// Usage:
cn("px-2 py-1", condition && "bg-red-500", className)
```

Merges clsx and tailwind-merge for proper Tailwind class handling.

---

## UI Components

### Button

Located at `src/components/ui/button.tsx`

```typescript
import { Button } from "@/components/ui/button";

// Variants
<Button>Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>

// As Child (polymorphic)
<Button asChild>
  <Link href="/page">Link as Button</Link>
</Button>
```

### Adding More Components

Manual installation:

```bash
# Install component dependencies
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu ...

# Copy component to src/components/ui/
```

---

## Framer Motion Usage

### Basic Animation

```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

### Variants

```typescript
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
>
  Content
</motion.div>
```

### Stagger Children

```typescript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { y: 20 },
  visible: { y: 0 }
};

<motion.div variants={container} initial="hidden" animate="visible">
  <motion.div variants={item}>Child 1</motion.div>
  <motion.div variants={item}>Child 2</motion.div>
</motion.div>
```

---

## Tailwind CSS Usage

### Using Theme Colors

```html
<!-- Background colors -->
<div class="bg-background">Background</div>
<div class="bg-card">Card</div>
<div class="bg-popover">Popover</div>

<!-- Foreground colors -->
<p class="text-foreground">Text</p>
<p class="text-muted-foreground">Muted text</p>

<!-- Brand colors -->
<button class="bg-primary text-primary-foreground">Primary</button>
<button class="bg-secondary text-secondary-foreground">Secondary</button>
<button class="bg-accent text-accent-foreground">Accent</button>

<!-- Semantic colors -->
<button class="bg-destructive text-destructive-foreground">Destructive</button>

<!-- Border colors -->
<div class="border border-border">Bordered</div>
<input class="bg-input" />

<!-- Ring -->
<button class="focus-visible:ring-2 focus-visible:ring-ring">Focus</button>
```

### Using Radius

```html
<div class="rounded-lg">Large radius</div>
<div class="rounded-md">Medium radius</div>
<div class="rounded-sm">Small radius</div>
```

### Dark Mode

Add `dark` class to `<html>` or `<body>` element to enable dark mode:

```html
<html class="dark">
  <!-- Dark theme colors applied -->
</html>
```

---

## Global Styles

The `src/styles/globals.css` file contains:

1. **Tailwind directives** - `@tailwind base`, `@tailwind components`, `@tailwind utilities`
2. **CSS variables** - shadcn/ui design tokens for both light and dark modes
3. **Base layer** - Global body styles

---

## Running the Project

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm run start
```

---

## Notes

- This project uses **Pages Router** (not App Router), so file structure is in `src/pages/`
- RainbowKit and Wagmi are already configured in `src/wagmi.ts`
- The `cn()` utility handles Tailwind class merging conflicts automatically
