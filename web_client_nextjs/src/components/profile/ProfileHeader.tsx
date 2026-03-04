import { motion } from 'framer-motion';
import * as Avatar from '@radix-ui/react-avatar';
import * as Progress from '@radix-ui/react-progress';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Twitter,
  Instagram,
  Linkedin,
  Send,
  ExternalLink,
  ShieldAlert,
  Edit2,
  MapPin,
  Calendar,
  Zap,
  Star,
  Trophy,
  User,
  Mail,
  Users,
  UserCheck
} from 'lucide-react';

interface UserProfile {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  telegramUrl?: string;
  avatarUrl?: string;
  isRegistered?: boolean;
}

interface ProfileHeaderProps {
  userAddress?: `0x${string}`;
  profile?: UserProfile;
  level?: number;
  xp?: number;
  nextLevelXP?: number;
  hasPassport?: boolean;
  levelImage?: string;
  isLoading?: boolean;
  onEdit?: () => void;
  followersCount?: number;
  followingCount?: number;
}

export function ProfileHeader({
  userAddress,
  profile,
  level = 1,
  xp = 0,
  nextLevelXP = 1000,
  hasPassport = false,
  levelImage,
  isLoading = false,
  onEdit,
  followersCount = 0,
  followingCount = 0
}: ProfileHeaderProps) {
  const { t } = useI18n();

  const avatarUrl = profile?.avatarUrl || `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${userAddress || 'wizard'}`;
  // Calculate level progress based on contract logic
  const expProgress = (xp / nextLevelXP) * 100;

  const getTier = (lvl: number) => {
    if (lvl >= 10) return 'archmage';
    if (lvl >= 7) return 'wizard';
    if (lvl >= 4) return 'journeyman';
    if (lvl >= 2) return 'apprentice';
    return 'initiate';
  };

  const tier = getTier(level);
  const tierConfig = {
    initiate: 'from-gray-400 to-gray-600',
    apprentice: 'from-green-400 to-emerald-600',
    journeyman: 'from-blue-400 to-cyan-600',
    wizard: 'from-purple-400 to-pink-600',
    archmage: 'from-yellow-400 to-orange-500',
  }[tier];

  if (isLoading) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 lg:p-8 animate-pulse">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex flex-col items-center shrink-0">
            <div className="h-28 w-28 lg:h-32 lg:w-32 rounded-2xl bg-secondary" />
            <div className="flex gap-4 mt-4 mb-1">
              <div className="flex flex-col items-center gap-1">
                <div className="h-4 w-8 bg-secondary rounded" />
                <div className="h-4 w-4 bg-secondary rounded-full" />
                <div className="h-2 w-12 bg-secondary rounded" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-4 w-8 bg-secondary rounded" />
                <div className="h-4 w-4 bg-secondary rounded-full" />
                <div className="h-2 w-12 bg-secondary rounded" />
              </div>
            </div>
            <div className="h-6 w-20 bg-secondary rounded-full mt-2" />
          </div>
          <div className="flex-1 space-y-4">
            <div className="h-10 w-48 bg-secondary rounded-lg" />
            <div className="h-6 w-full max-w-md bg-secondary rounded opacity-50" />
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="h-8 w-8 bg-secondary rounded-lg" />
              <div className="h-8 w-8 bg-secondary rounded-lg" />
              <div className="h-8 w-8 bg-secondary rounded-lg" />
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="h-20 w-20 rounded-2xl bg-secondary shrink-0" />
              <div className="flex-1 space-y-4">
                <div className="h-4 w-24 bg-secondary rounded" />
                <div className="h-4 w-full bg-secondary rounded-full" />
              </div>
            </div>
          </div>
          {/* NFT Skeleton */}
          <div className="hidden lg:block w-48 xl:w-56 aspect-square rounded-2xl bg-secondary/50" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 lg:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
        {/* Left Side: Avatar and Tier */}
        <div className="flex flex-col items-center shrink-0 lg:pt-2">
          <Avatar.Root className="h-28 w-28 lg:h-32 lg:w-32 rounded-2xl overflow-hidden bg-secondary ring-4 ring-primary/30 shadow-xl">
            <Avatar.Image src={avatarUrl} alt={profile?.username || 'User'} className="h-full w-full object-cover" />
            <Avatar.Fallback className="h-full w-full flex items-center justify-center bg-secondary">
              <User className="h-10 w-10 text-muted-foreground" />
            </Avatar.Fallback>
          </Avatar.Root>

          {/* Social Stats Mockup */}
          <div className="flex gap-6 mt-4 mb-1">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold leading-none">{followingCount}</span>
              <UserCheck className="h-4 w-4 text-primary/70 my-1" />
              <span className="text-[10px] uppercase font-bold tracking-tight text-muted-foreground">
                {t.profile.social.following}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold leading-none">{followersCount}</span>
              <Users className="h-4 w-4 text-primary/70 my-1" />
              <span className="text-[10px] uppercase font-bold tracking-tight text-muted-foreground">
                {t.profile.social.followers}
              </span>
            </div>
          </div>

          {!hasPassport && (
            <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full border border-amber-500/20">
              <ShieldAlert className="h-3.3 w-3.3" />
              Unverified
            </div>
          )}
        </div>

        {/* Middle: User Info */}
        <div className="flex-1 text-center lg:text-left lg:pt-2">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4 mb-4">
            {profile?.username ? (
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">{profile.username}</h1>
            ) : (
              <h1 className="text-xl lg:text-2xl font-medium text-muted-foreground italic">
                {t.profile.registration.username} Not Set
              </h1>
            )}
            <Button variant="outline" size="sm" onClick={onEdit} className="w-fit mx-auto lg:mx-0">
              <Edit2 className="h-4 w-4 mr-2" />
              {profile?.isRegistered ? t.profile.registration.editTitle : t.profile.registration.title}
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4 text-sm text-muted-foreground">
            {profile?.email && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/30">
                <Mail className="h-4 w-4" />
                {profile.email}
              </span>
            )}
            {userAddress && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/30">
                <Calendar className="h-4 w-4" />
                <span className="font-mono text-xs">{`${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`}</span>
              </span>
            )}
          </div>

          {/* Social Icons Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-5">
            {profile?.twitterUrl && (
              <a href={profile.twitterUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {profile?.instagramUrl && (
              <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all">
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {profile?.linkedinUrl && (
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {profile?.telegramUrl && (
              <a href={profile.telegramUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all">
                <Send className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="mt-8 max-w-2xl mx-auto lg:mx-0 flex flex-col md:flex-row items-center gap-6">
            {/* Massive Level Display */}
            <div className={cn(
              "shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-2xl shadow-lg border-2 border-white/10 bg-gradient-to-br text-white",
              tierConfig
            )}>
              <span className="text-[10px] uppercase font-black tracking-tighter opacity-80 leading-none mb-1">{t.profile.level}</span>
              <span className="text-3xl font-black leading-none">{level}</span>
            </div>

            <div className="flex-1 w-full bg-secondary/20 p-4 rounded-xl border border-border/50">
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <Zap className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  {t.profile.experience}
                </span>
                <span className="text-muted-foreground font-mono">
                  {xp.toLocaleString()} / {nextLevelXP.toLocaleString()} {t.profile.xp}
                </span>
              </div>
              <Progress.Root className="h-4 w-full overflow-hidden rounded-full bg-secondary shadow-inner">
                <Progress.Indicator
                  className="h-full bg-gradient-to-r from-primary via-primary/80 to-accent transition-all duration-700 ease-in-out"
                  style={{ width: `${Math.min(100, expProgress)}%` }}
                />
              </Progress.Root>
            </div>
          </div>
        </div>

        {/* Right Side: NFT Card */}
        {hasPassport && (
          <div className="flex-shrink-0 w-full lg:w-48 xl:w-56 mt-6 lg:mt-0 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80 text-center lg:text-left pl-1">
              Wizard Passport NFT
            </h3>
            <div className="relative aspect-square rounded-2xl border border-border bg-card overflow-hidden group shadow-lg">
              {levelImage ? (
                <img
                  src={levelImage}
                  alt="Wizard NFT"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                  <span className="text-muted-foreground text-xs italic">NFT Loading...</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
