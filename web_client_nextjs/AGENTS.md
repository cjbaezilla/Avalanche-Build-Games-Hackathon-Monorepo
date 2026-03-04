# Vibe2Wizard - Implementation Guide

## Overview

**Vibe2Wizard** is a gamified Web3 & Solidity learning platform that helps users transition from "vibe coder" to "onchain wizard". The project uses **Next.js 15** with **Tailwind CSS v4**, **shadcn/ui components**, **Radix UI**, **Framer Motion** for animations, and **RainbowKit/Wagmi** for wallet integration.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (Pages Router) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion ^12.34.3 |
| Wallet | RainbowKit + Wagmi |
| Icons | Lucide React |
| i18n | Custom React Context |
| State | TanStack Query |

---

## Installed Packages

### Dependencies

```bash
npm install framer-motion @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react @rainbow-me/rainbowkit viem wagmi @tanstack/react-query flag-icons
```

### Dev Dependencies

```bash
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer eslint-config-next typescript @types/react @types/node
```

### Full Package List

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | ^15.3.7 | React framework |
| `react` | ^19.1.3 | UI library |
| `framer-motion` | ^12.34.3 | Animation library |
| `@rainbow-me/rainbowkit` | ^2.2.10 | Wallet UI |
| `wagmi` | ^2.19.3 | Ethereum interaction |
| `viem` | 2.38.0 | Ethereum library |
| `@tanstack/react-query` | ^5.55.3 | Data fetching |
| `@radix-ui/*` | various | UI primitives |
| `lucide-react` | ^0.575.0 | Icons |
| `flag-icons` | ^7.5.0 | Country flags |
| `class-variance-authority` | ^0.7.1 | Variant props |
| `clsx` | ^2.1.1 | Conditional classes |
| `tailwind-merge` | ^3.5.0 | Tailwind merge |

---

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx       # Button component with variants
│   │   └── navbar.tsx        # Navigation bar with wallet connection
│   └── onboarding/
│       ├── index.ts         # Exports
│       ├── OnboardingLayout.tsx
│       ├── StepContent.tsx
│       └── steps/
│           ├── IntroStep.tsx
│           ├── BackgroundStep.tsx
│           ├── WalletsStep.tsx
│           ├── WalletTypesStep.tsx
│           ├── RecommendedWalletsStep.tsx
│           ├── InstallationStep.tsx
│           ├── ConnectionStep.tsx
│           ├── SignatureStep.tsx
│           └── CelebrationStep.tsx
├── hooks/
│   ├── useWizardPassport.ts   # Contract interaction (mint/stats/levels)
│   └── useUserRegistration.ts # Profile registration and lookup
├── contracts/
│   ├── WizardPassport.ts     # ABI for the Passport NFT
│   └── UserRegistration.ts   # ABI for User Profiles
├── lib/
│   └── utils.ts             # cn() utility
├── styles/
│   ├── globals.css          # Tailwind + CSS variables
│   └── Home.module.css
├── i18n/
│   ├── index.tsx            # i18n provider + hooks
│   ├── en.ts                # English translations
│   └── es.ts                # Spanish translations
├── pages/
│   ├── _app.tsx             # App wrapper with providers
│   ├── _document.tsx        # HTML document
│   ├── index.tsx            # Landing page
│   └── onboarding.tsx       # Onboarding wizard
├── wagmi.ts                 # RainbowKit/Wagmi config
public/
├── logo.png
├── logo_text.jpg
└── portrait_full_mage.png
```

---

## Configuration

### Wagmi/RainbowKit Config

Located at `src/wagmi.ts`:

- **Network**: Avalanche Fuji (testnet)
- **App Name**: Vibe2Wizard
- **Project ID**: From `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` env var

### Theme

Red/black/silver wizard theme with dark mode default.

---

## Key Components

### Button

```tsx
import { Button } from "@/components/ui/button";

// Variants: default, destructive, outline, secondary, ghost, link
// Sizes: default, sm, lg, icon

<Button variant="outline" size="sm">Click me</Button>
```

### cn() Utility

```tsx
import { cn } from "@/lib/utils";

cn("px-2 py-1", condition && "bg-red-500", className)
```

---

## Navbar Component

### Features

- Top utility bar (40px): Nav items, social icons, language selector
- Main nav bar (64px): Logo, user profile, RainbowKit ConnectButton
- Mobile hamburger menu with slide-in drawer
- Demo user data with level, XP, badges
- DiceBear avatar generation

### Exports

```tsx
import { Navbar, useNavbar, UserAvatar, ExperienceBar, UserBadges } from "@/components/ui/navbar";

// Hook for mobile menu state
const { isMobileOpen, setIsMobileOpen } = useNavbar();
```

---

## Internationalization (i18n)

### Usage

```tsx
import { I18nProvider, useI18n } from "@/i18n";

// Wrap app in _app.tsx
<I18nProvider>
  <App />
</I18nProvider>

// Use in components
const { t, toggleLanguage, language } = useI18n();
```

### Translation Keys

```typescript
// t.onboarding - Onboarding flow
// t.common - Shared strings
// t.home - Landing page content
//   t.home.hero - Hero section
//   t.home.features - Feature cards
//   t.home.benefits - Benefits section
//   t.home.forStakeholders - Organizations section
```

---

## Onboarding System

### 9-Step Wizard

| Step | Component | Purpose |
|------|-----------|---------|
| 1 | IntroStep | Welcome screen |
| 2 | BackgroundStep | Web2 vs Web3 |
| 3 | WalletsStep | Wallet explanation |
| 4 | WalletTypesStep | Wallet types comparison |
| 5 | RecommendedWalletsStep | Core, MetaMask, Rabby |
| 6 | InstallationStep | Installation guide |
| 7 | ConnectionStep | Connect wallet |
| 8 | SignatureStep | Sign message |
| 9 | CelebrationStep | Mint Passport NFT + Completion ceremony |

### Usage

```tsx
import {
  OnboardingLayout,
  IntroStep,
  ConnectionStep,
  // ... other steps
} from "@/components/onboarding";

<OnboardingLayout
  currentStep={1}
  totalSteps={9}
  onNext={() => {}}
  onBack={() => {}}
  onLanguageToggle={() => {}}
>
  <IntroStep />
</OnboardingLayout>
```

---

## Landing Page (index.tsx)

Sections:
1. **Hero**: Title, description, CTA button
2. **Features Grid**: 4 cards (Learn Solidity, Soulbound Credentials, Gamified Progress, Onchain Wizard)
3. **CTA Banner**: Start onboarding prompt
4. **Benefits**: 6 benefit cards with icons
5. **For Stakeholders**: Protocols, DAOs, Employers sections
6. **Contact CTA**: Partner with us button

---

## Running the Project

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

---

```env
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your-project-id
NEXT_PUBLIC_CONTRACT_WIZARD_PASSPORT_ADDRESS=0x...
NEXT_PUBLIC_CONTRACT_USER_REGISTRATION_ADDRESS=0x...
```

---

## Smart Contracts & ABIs

### WizardPassport (ERC721)

The core NFT contract representing the user's progress.

**Key Functions:**
- `safeMint()`: Mints a new Passport (one per address).
- `getUserStats(address user)`: Returns `(xp, level)`.
- `getLevelImage(uint256 level)`: returns the IPFS URI for a specific level.
- `getXPThreshold(uint256 level)`: returns the XP needed for a certain level.
- `balanceOf(address owner)`: standard ERC721 balance check.
- `ownerOf(uint256 tokenId)`: standard ERC721 owner check.
- `tokenURI(uint256 tokenId)`: returns metadata URI (level-based images).

**Hook: `useWizardPassport(targetAddress?)`**
- Parameters: `targetAddress` (optional `0x` address, defaults to connected user).
- Properties: `hasPassport`, `xp`, `level`, `levelImage`, `isMinting`, `isMintedSuccess`.
- Methods: `mintPassport()`, `refetchStats()`.
- External Hooks: `useXPThreshold(level)`.

### UserRegistration

Handles extended user profile data. Requires ownership of a Wizard Passport.

**Key Functions:**
- `registerUser(username, firstName, lastName, email, twitter, instagram, linkedin, telegram, avatar)`: Create/update profile.
- `isRegistered(address user)`: Check if user has a profile.
- `getUser(address user)`: Returns full profile tuple.
- `getUserByUsername(string username)`: Lookup profile by username.
- `getUserCount()`: Total registered users.
- `getAllUsers()`: List of all registered addresses.
- `wizardPassport()`: Returns the address of the Passport contract.

**Hook: `useUserRegistration(targetAddress?)`**
- Parameters: `targetAddress` (optional `0x` address, defaults to connected user).
- Properties: `isRegistered`, `userProfile`, `userCount`, `allUsers`, `isProcessing`.
- Methods: `registerUser(...)`.
- External Hooks: `useUserLookup(username)`.

---

## Routes

| Path | Page |
|------|------|
| `/` | Landing page |
| `/onboarding` | 9-step onboarding wizard |
| `/profile` | User profile page |

---

## Design Guidelines

### Page Container Margins

- All page sections should use consistent horizontal margins
- **Do NOT** use `max-w` on section containers - let content flow naturally to full width
- Use `space-y-X` for vertical spacing between sections
- Example: `<div className="space-y-8">` (no `max-w-X mx-auto`)

### Profile Components

All profile components are located in `src/components/profile/`:
- `ProfileHeader.tsx` - User info, avatar, skills
- `StatsGrid.tsx` - User statistics
- `BadgesSection.tsx` - Earned badges
- `ActivityFeed.tsx` - Recent activity
- `SocialConnections.tsx` - Followers/following
- `ProtocolInterest.tsx` - Protocol interests
- `SkillProgress.tsx` - Skill progress bars

---

- Uses **Pages Router** (not App Router)
- RainbowKit uses `darkTheme` with red accent (`#ef4444`)
- Wallet detection checks for MetaMask or Rabby
- Onboarding connection/signature uses mock delay (2s)
- **Soulbound NFT**: Final onboarding step requires minting a `WizardPassport` NFT on Avalanche Fuji.
- **Contract Dependencies**: `UserRegistration` requires the user to own a `WizardPassport` NFT.
- **useWizardPassport Hook**: Handles XP, levels, and minting.
- **useUserRegistration Hook**: Handles profile data including social links and avatar via Ipfs or DiceBear.
- Confetti on celebration step (triggers after successful mint)
- Language toggle between English and Spanish
