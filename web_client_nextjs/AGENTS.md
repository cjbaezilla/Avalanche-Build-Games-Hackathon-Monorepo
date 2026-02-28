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

## Color Theme

The project uses a dramatic red/black/silver color scheme inspired by a mystical wizard theme.

### Color Tokens

| Token | Color | Usage |
|-------|-------|-------|
| `background` | Pure black (#0a0a0a) | Page backgrounds |
| `foreground` | Silver/light grey | Main text |
| `primary` | Bright fiery red | CTAs, highlights, magical elements |
| `primary-foreground` | White | Text on primary buttons |
| `secondary` | Dark grey (#262626) | Cards, containers |
| `secondary-foreground` | Silver | Text on secondary |
| `accent` | Bright red | Accent highlights |
| `muted` | Dark charcoal | Subtle backgrounds |
| `muted-foreground` | Grey | Secondary text |
| `border` | Dark grey | Borders |
| `ring` | Bright red | Focus rings |

### Using Theme Colors

```html
<!-- Background colors -->
<div class="bg-background">Pure black background</div>
<div class="bg-card">Dark card background</div>
<div class="bg-secondary">Metallic grey</div>

<!-- Text colors -->
<p class="text-foreground">Silver text</p>
<p class="text-muted-foreground">Grey text</p>

<!-- Brand colors (red/black theme) -->
<button class="bg-primary text-primary-foreground">Fiery red button</button>
<button class="bg-secondary text-secondary-foreground">Grey button</button>

<!-- Borders -->
<div class="border border-border">Dark grey border</div>

<!-- Focus ring -->
<button class="focus-visible:ring-2 focus-visible:ring-ring">Red focus ring</button>
```

### Direct Tailwind Colors

For colors not in the theme tokens:

```html
<!-- Reds -->
<div class="bg-red-500">Bright red</div>
<div class="bg-red-600">Medium red</div>
<div class="bg-red-700">Dark red / crimson</div>
<div class="bg-red-800">Deep maroon</div>

<!-- Silvers/Greys -->
<div class="text-slate-300">Light silver</div>
<div class="text-slate-400">Medium grey</div>
<div class="text-slate-500">Dark grey</div>
<div class="bg-zinc-800">Charcoal</div>
<div class="bg-zinc-900">Near black</div>
```

### Dark Mode

Dark mode is enabled by default via the `dark` class on `<html>` in `_document.tsx`. All theme colors are designed for the dark theme.

---

## Global Styles

The `src/styles/globals.css` file contains:

1. **Tailwind directives** - `@tailwind base`, `@tailwind components`, `@tailwind utilities`
2. **CSS variables** - shadcn/ui design tokens for the red/black/silver dark theme
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

---

## Internationalization (i18n)

### Overview

The project uses a custom i18n system with React Context. All user-facing text is stored in language files and accessed via hooks.

### File Structure

```
src/i18n/
├── en.ts          # English translations
├── es.ts          # Spanish translations
└── index.tsx      # i18n provider and hooks
```

### Usage

Wrap your app with the provider:

```tsx
import { I18nProvider } from "@/i18n";

function MyApp() {
  return (
    <I18nProvider>
      <YourApp />
    </I18nProvider>
  );
}
```

Use translations in components:

```tsx
import { useI18n } from "@/i18n";

function MyComponent() {
  const { t, toggleLanguage, language } = useI18n();
  
  return (
    <div>
      <h1>{t.onboarding.title}</h1>
      <button onClick={toggleLanguage}>
        {t.onboarding.languageToggle}
      </button>
    </div>
  );
}
```

### Translation Keys Structure

Translations are organized by feature:

```typescript
{
  onboarding: {
    title: string;
    subtitle: string;
    startButton: string;
    backButton: string;
    nextButton: string;
    skipButton: string;
    stepIndicator: string;  // Use {{current}} and {{total}} as placeholders
    languageToggle: string;
    
    steps: {
      intro: { title, description, highlight };
      background: { title, description, funFact, highlight };
      wallets: { title, description, metaphor, highlight };
      walletTypes: { title, description, types: {...}, highlight };
      recommended: { title, description, wallets: {...}, highlight };
      installation: { title, description, steps: {...}, tip, highlight };
      connection: { title, description, instruction, connectButton, ... };
      signature: { title, description, instruction, signButton, ... };
      celebration: { title, description, reward: {...}, message, continueButton };
    };
    
    errors: { noWallet, connectionFailed, signatureFailed };
  };
  
  common: { loading, error, retry, cancel, confirm, close };
}
```

### Adding New Translations

1. Add keys to `src/i18n/en.ts` (English is the source)
2. Add same keys to `src/i18n/es.ts` with Spanish translations
3. Use the keys in components via `useI18n()` hook

---

## Onboarding System

### Overview

The onboarding is a 9-step wizard designed to help users without wallets get set up. It includes educational content about Web3, wallet types, and culminates in connecting a wallet and signing a message.

### File Structure

```
src/components/onboarding/
├── index.ts                      # Exports all components
├── OnboardingLayout.tsx          # Main layout with progress bar
├── StepContent.tsx               # Reusable step UI components
└── steps/
    ├── IntroStep.tsx             # Welcome screen
    ├── BackgroundStep.tsx        # Web2 vs Web3 explanation
    ├── WalletsStep.tsx           # What are wallets
    ├── WalletTypesStep.tsx       # Different wallet types
    ├── RecommendedWalletsStep.tsx # Avalanche, MetaMask, Rabby
    ├── InstallationStep.tsx      # How to install
    ├── ConnectionStep.tsx        # Connect wallet
    ├── SignatureStep.tsx        # Sign message
    └── CelebrationStep.tsx       # Completion + confetti

src/pages/
└── onboarding.tsx                # Main onboarding page
```

### Onboarding Steps

| Step | Component | Description |
|------|-----------|-------------|
| 1 | IntroStep | Welcome message |
| 2 | BackgroundStep | Web2 vs Web3 story |
| 3 | WalletsStep | What are crypto wallets |
| 4 | WalletTypesStep | Paper, mobile, extension, hardware |
| 5 | RecommendedWalletsStep | Avalanche Core, MetaMask, Rabby |
| 6 | InstallationStep | Installation guide |
| 7 | ConnectionStep | Connect wallet (requires wallet) |
| 8 | SignatureStep | Sign message verification |
| 9 | CelebrationStep | Confetti + NFT reward |

### Using Onboarding Components

```tsx
import {
  OnboardingLayout,
  IntroStep,
  ConnectionStep,
  // ... other steps
} from "@/components/onboarding";

function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const TOTAL_STEPS = 9;
  
  return (
    <OnboardingLayout
      currentStep={currentStep}
      totalSteps={TOTAL_STEPS}
      onNext={() => setCurrentStep(s => s + 1)}
      onBack={() => setCurrentStep(s => s - 1)}
      onLanguageToggle={toggleLanguage}
    >
      {currentStep === 1 && <IntroStep />}
      {currentStep === 7 && (
        <ConnectionStep
          isConnecting={isConnecting}
          error={connectionError}
          onConnect={handleConnect}
        />
      )}
      {/* ... other steps */}
    </OnboardingLayout>
  );
}
```

### Step Props

**OnboardingLayout Props:**
```typescript
{
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack?: () => void;
  onLanguageToggle: () => void;
  showBack?: boolean;
  showNext?: boolean;
  nextLabel?: string;
  isLoading?: boolean;
}
```

**ConnectionStep Props:**
```typescript
{
  isConnecting: boolean;
  error: string | null;
  onConnect: () => void;
}
```

**SignatureStep Props:**
```typescript
{
  isSigning: boolean;
  success: boolean;
  error: string | null;
  onSign: () => void;
}
```

**CelebrationStep Props:**
```typescript
{
  onComplete: () => void;
}
```

### Reusable Step Components

**StepContent** - Base component for step content:
```tsx
<StepContent
  title="Step Title"
  description="Optional description"
  highlight="Important highlight text"
  icon={<SomeIcon className="w-16 h-16" />}
>
  {/* Additional content */}
</StepContent>
```

**CardGrid** - Grid layout for cards:
```tsx
<CardGrid>
  <InfoCard title="..." description="..." />
  <InfoCard title="..." description="..." />
</CardGrid>
```

**InfoCard** - Styled card with optional pros/cons:
```tsx
<InfoCard
  title="Card Title"
  description="Card description"
  pros="Good thing"
  cons="Bad thing"
  icon={<SomeIcon />}
  featured={true}  // Highlights the card
/>
```

### Animations

The onboarding uses Framer Motion for step transitions:

- **Slide transitions** between steps (left/right)
- **Staggered animations** for lists and cards
- **Progress bar** animation
- **Confetti** animation on celebration step

### Routes

- `/onboarding` - Full onboarding wizard
- `/` - Main landing page

---

## Testing Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

---

## Adding New Onboarding Steps

1. Create new component in `src/components/onboarding/steps/`
2. Export it from `src/components/onboarding/index.ts`
3. Add translation keys to `en.ts` and `es.ts`
4. Import and add to the switch statement in `src/pages/onboarding.tsx`
5. Update `TOTAL_STEPS` constant
