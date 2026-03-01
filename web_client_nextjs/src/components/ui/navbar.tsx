import { useState, createContext, useContext, ReactNode, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as Avatar from '@radix-ui/react-avatar';
import * as Progress from '@radix-ui/react-progress';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDown,
  Sparkles,
  Trophy,
  Star,
  Zap,
  Home,
  Wallet,
  Settings,
  HelpCircle,
  Award,
  Flame,
  Shield,
  Crown,
  Twitter,
  MessageCircle,
  Github,
  Menu,
  X,
} from 'lucide-react';

interface UserData {
  address: string;
  level: number;
  experience: number;
  badges: string[];
}

interface NavbarContextType {
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

const DEMO_USER: UserData = {
  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f8E7B1',
  level: 7,
  experience: 2450,
  badges: ['Early Adopter', 'Wizard', 'Collector'],
};

const LANGUAGES = [
  { code: 'en', name: 'English', flagCode: 'us' },
  { code: 'es', name: 'Español', flagCode: 'es' },
];

const NAV_ITEMS = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Wallet, label: 'Wallets', href: '/wallets' },
  { icon: Sparkles, label: 'Magic', href: '/magic' },
  { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
  { icon: Award, label: 'Achievements', href: '/achievements' },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Help', href: '/help' },
];

const SOCIAL_ICONS = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: MessageCircle, href: 'https://discord.com', label: 'Discord' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

const BADGE_ICONS: Record<string, typeof Sparkles> = {
  'Early Adopter': Star,
  'Wizard': Sparkles,
  'Collector': Trophy,
  'VIP': Crown,
  'Pro': Zap,
  'Verified': Shield,
};

function TopBar({ onMobileToggle }: { onMobileToggle: () => void }) {
  const { language, setLanguage } = useI18n();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    if (langOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langOpen]);

  return (
    <div className="h-10 bg-secondary/50 border-b border-border px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onMobileToggle}
          className="lg:hidden p-1.5 rounded-md hover:bg-background transition-colors"
        >
          <Menu className="h-4 w-4" />
        </button>
        
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200',
                'hover:bg-background hover:text-foreground',
                'text-muted-foreground text-xs font-medium'
              )}
            >
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {SOCIAL_ICONS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-background transition-colors text-muted-foreground hover:text-foreground"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        
        <div className="h-5 w-px bg-border" />
        
        <div className="relative" ref={langRef}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-background transition-colors text-sm text-muted-foreground hover:text-foreground"
          >
            <span className={`fi fi-${LANGUAGES.find(l => l.code === language)?.flagCode}`}></span>
            <span>{LANGUAGES.find(l => l.code === language)?.name}</span>
            <ChevronDown className={cn("h-3 w-3 transition-transform", langOpen && "rotate-180")} />
          </button>
          
          {langOpen && (
            <div className="absolute right-0 top-full mt-1 min-w-[140px] rounded-lg bg-secondary border border-border p-1 shadow-xl z-50">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as 'en' | 'es');
                    setLangOpen(false);
                  }}
                  className={cn(
                    'flex items-center gap-2 w-full px-3 py-2 rounded-md cursor-pointer transition-colors',
                    language === lang.code 
                      ? 'bg-primary/20 text-primary' 
                      : 'hover:bg-primary hover:text-primary-foreground'
                  )}
                >
                  <span className={`fi fi-${lang.flagCode}`}></span>
                  <span className="text-sm">{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function UserAvatar({ address, size = 'default' }: { address: string; size?: 'default' | 'small' }) {
  const avatarUrl = `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${address}`;
  const sizeClass = size === 'small' ? 'h-8 w-8' : 'h-10 w-10';

  return (
    <Avatar.Root className={cn(sizeClass, 'rounded-full overflow-hidden bg-secondary shrink-0')}>
      <Avatar.Image
        src={avatarUrl}
        alt="User avatar"
        className="h-full w-full"
      />
      <Avatar.Fallback className="h-full w-full flex items-center justify-center bg-secondary text-secondary-foreground">
        <Home className={size === 'small' ? 'h-4 w-4' : 'h-5 w-5'} />
      </Avatar.Fallback>
    </Avatar.Root>
  );
}

function UserLevelBadge({ level }: { level: number }) {
  const getLevelColor = (lvl: number) => {
    if (lvl >= 50) return 'from-yellow-400 to-orange-500';
    if (lvl >= 25) return 'from-purple-400 to-pink-500';
    if (lvl >= 10) return 'from-blue-400 to-cyan-500';
    return 'from-red-500 to-red-700';
  };

  return (
    <div className={cn(
      'px-2 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r',
      getLevelColor(level)
    )}>
      Lvl {level}
    </div>
  );
}

function ExperienceBar({ experience, level }: { experience: number; level: number }) {
  const maxExp = (level + 1) * 500;
  const progress = (experience / maxExp) * 100;

  return (
    <div className="space-y-1 w-32">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Zap className="h-3 w-3 text-yellow-500" />
          XP
        </span>
        <span>{experience}/{maxExp}</span>
      </div>
      <Progress.Root
        className="h-1.5 w-full overflow-hidden rounded-full bg-secondary"
        value={progress}
      >
        <Progress.Indicator
          className="h-full bg-gradient-to-r from-primary to-red-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </Progress.Root>
    </div>
  );
}

function UserBadges({ badges }: { badges: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {badges.map((badge) => {
        const Icon = BADGE_ICONS[badge] || Award;
        return (
          <div
            key={badge}
            className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-secondary/50 text-[10px] text-muted-foreground border border-border"
          >
            <Icon className="h-3 w-3 text-primary" />
            {badge}
          </div>
        );
      })}
    </div>
  );
}

function MainNav() {
  return (
    <div className="bg-card border-b border-border px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="relative shrink-0">
          <Image
            src="/logo_text.jpg"
            alt="Vibe2Wizard"
            width={160}
            height={40}
            className="h-auto w-40"
          />
        </Link>
        <div className="flex items-center gap-4">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 left-0 h-full w-[280px] bg-card border-r border-border z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-4 flex justify-between items-center border-b border-border">
              <Link href="/" className="relative" onClick={onClose}>
                <Image
                  src="/logo_text.jpg"
                  alt="Vibe2Wizard"
                  width={130}
                  height={40}
                  className="h-auto w-32"
                />
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="p-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                    'hover:bg-secondary hover:text-foreground',
                    'text-muted-foreground'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import { AnimatePresence } from 'framer-motion';

export function Navbar({ children }: { children: ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ isMobileOpen, setIsMobileOpen }}>
      <div className="min-h-screen bg-background flex flex-col">
        <TopBar onMobileToggle={() => setIsMobileOpen(!isMobileOpen)} />
        <MainNav />
        <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
        
        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>
      </div>
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within Navbar');
  }
  return context;
}

export { UserAvatar, UserLevelBadge, ExperienceBar, UserBadges };
