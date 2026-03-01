import { motion } from 'framer-motion';
import * as Avatar from '@radix-ui/react-avatar';
import * as Progress from '@radix-ui/react-progress';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Edit2,
  MapPin,
  Calendar,
  Zap,
  Shield,
  Crown,
  Star,
  Sparkles,
  Code2,
  Coins,
  Image,
  Palette,
} from 'lucide-react';

interface UserProfile {
  address: string;
  username: string;
  bio?: string;
  level: number;
  experience: number;
  joinedDate: string;
  location?: string;
  website?: string;
  tier: 'initiate' | 'apprentice' | 'journeyman' | 'wizard' | 'archmage';
  rank: number;
  totalUsers: number;
}

interface SkillData {
  name: string;
  progress: number;
}

interface ProfileHeaderProps {
  user: UserProfile;
  skills?: SkillData[];
}

const TIER_CONFIG = {
  initiate: { icon: Star, color: 'from-gray-400 to-gray-600', label: 'Initiate' },
  apprentice: { icon: Sparkles, color: 'from-green-400 to-emerald-600', label: 'Apprentice' },
  journeyman: { icon: Zap, color: 'from-blue-400 to-cyan-600', label: 'Journeyman' },
  wizard: { icon: Shield, color: 'from-purple-400 to-pink-600', label: 'Wizard' },
  archmage: { icon: Crown, color: 'from-yellow-400 to-orange-500', label: 'Archmage' },
};

const SKILL_ICONS: Record<string, typeof Code2> = {
  Solidity: Code2,
  DeFi: Coins,
  NFTs: Image,
  Frontend: Palette,
};

const SKILL_COLORS: Record<string, string> = {
  Solidity: 'from-blue-500 to-cyan-500',
  DeFi: 'from-green-500 to-emerald-500',
  NFTs: 'from-purple-500 to-pink-500',
  Frontend: 'from-yellow-500 to-orange-500',
};

export function ProfileHeader({ user, skills = [] }: ProfileHeaderProps) {
  const { t } = useI18n();
  const avatarUrl = `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${user.address}`;
  const maxExp = (user.level + 1) * 500;
  const expProgress = (user.experience / maxExp) * 100;
  const tierConfig = TIER_CONFIG[user.tier];
  const TierIcon = tierConfig.icon;

  const defaultSkills: SkillData[] = [
    { name: 'Solidity', progress: 65 },
    { name: 'DeFi', progress: 45 },
    { name: 'NFTs', progress: 80 },
  ];

  const displaySkills = skills.length > 0 ? skills : defaultSkills;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 lg:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative">
            <Avatar.Root className="h-28 w-28 lg:h-32 lg:w-32 rounded-full overflow-hidden bg-secondary ring-4 ring-primary/30">
              <Avatar.Image src={avatarUrl} alt={user.username} className="h-full w-full" />
              <Avatar.Fallback className="h-full w-full flex items-center justify-center bg-secondary">
                <Star className="h-10 w-10 text-muted-foreground" />
              </Avatar.Fallback>
            </Avatar.Root>
            <div className={cn(
              'absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r flex items-center gap-1',
              tierConfig.color
            )}>
              <TierIcon className="h-3 w-3" />
              {t.profile.passport.tiers[user.tier]}
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="mt-4">
            <Edit2 className="h-4 w-4 mr-2" />
            {t.profile.editProfile}
          </Button>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold">{user.username}</h1>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className={cn(
                'px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r',
                tierConfig.color
              )}>
                {t.profile.level} {user.level}
              </span>
              <span className="text-sm text-muted-foreground">
                #{user.rank.toLocaleString()} {t.profile.rank}
              </span>
            </div>
          </div>

          {user.bio && (
            <p className="mt-2 text-muted-foreground max-w-xl">{user.bio}</p>
          )}

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4 text-sm text-muted-foreground">
            {user.location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {user.location}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {t.profile.member} {user.joinedDate}
            </span>
          </div>

          <div className="mt-6 max-w-md">
            <div className="flex justify-between text-sm mb-1">
              <span className="flex items-center gap-1 text-muted-foreground">
                <Zap className="h-4 w-4 text-yellow-500" />
                {t.profile.experience}
              </span>
              <span className="text-muted-foreground">
                {user.experience.toLocaleString()} / {maxExp.toLocaleString()} {t.profile.xp}
              </span>
            </div>
            <Progress.Root className="h-3 w-full overflow-hidden rounded-full bg-secondary">
              <Progress.Indicator
                className="h-full bg-gradient-to-r from-primary to-red-400 transition-all duration-500"
                style={{ width: `${expProgress}%` }}
              />
            </Progress.Root>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-4 min-w-[200px]">
          <div className="w-full">
            <h3 className="text-sm font-medium text-muted-foreground mb-3 text-center lg:text-right">
              {t.profile.skills.title}
            </h3>
            <div className="space-y-2">
              {displaySkills.slice(0, 4).map((skill) => {
                const Icon = SKILL_ICONS[skill.name] || Code2;
                const colorClass = SKILL_COLORS[skill.name] || 'from-gray-500 to-gray-600';
                
                return (
                  <div key={skill.name} className="flex items-center gap-2">
                    <div className={cn('w-6 h-6 rounded flex items-center justify-center shrink-0', colorClass)}>
                      <Icon className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex-1">
                      <Progress.Root className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                        <Progress.Indicator
                          className={cn('h-full bg-gradient-to-r transition-all duration-500', colorClass)}
                          style={{ width: `${skill.progress}%` }}
                        />
                      </Progress.Root>
                    </div>
                    <span className="text-xs text-muted-foreground w-8 text-right">{skill.progress}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
