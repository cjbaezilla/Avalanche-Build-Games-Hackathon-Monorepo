import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Award,
  Star,
  Sparkles,
  Trophy,
  Crown,
  Zap,
  Shield,
  Flame,
  Target,
  Code,
  Lock,
} from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  earnedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface BadgesSectionProps {
  badges: Badge[];
}

const BADGE_ICONS: Record<string, typeof Sparkles> = {
  'First Deploy': Code,
  'Bug Hunter': Shield,
  'Early Adopter': Star,
  'Top Contributor': Crown,
  'Security Expert': Lock,
  'DeFi Master': Zap,
  'NFT Creator': Trophy,
  'Community Hero': Flame,
  'Quest Complete': Target,
  'Wizard': Sparkles,
};

const RARITY_CONFIG = {
  common: { color: 'from-gray-400 to-gray-600', border: 'border-gray-500/30' },
  rare: { color: 'from-blue-400 to-blue-600', border: 'border-blue-500/30' },
  epic: { color: 'from-purple-400 to-pink-600', border: 'border-purple-500/30' },
  legendary: { color: 'from-yellow-400 to-orange-500', border: 'border-yellow-500/30' },
};

export function BadgesSection({ badges }: BadgesSectionProps) {
  const { t } = useI18n();

  const badgeNameKeys: Record<string, keyof typeof t.profile.badges.names> = {
    'First Deploy': 'firstDeploy',
    'Bug Hunter': 'bugHunter',
    'Early Adopter': 'earlyAdopter',
    'Top Contributor': 'topContributor',
    'Security Expert': 'securityExpert',
    'DeFi Master': 'defiMaster',
    'NFT Creator': 'nftCreator',
    'Community Hero': 'communityHero',
    'Quest Complete': 'questComplete',
    'Wizard': 'wizard',
  };

  const badgeDescKeys: Record<string, keyof typeof t.profile.badges.descriptions> = {
    'First Deploy': 'firstDeploy',
    'Bug Hunter': 'bugHunter',
    'Early Adopter': 'earlyAdopter',
    'Top Contributor': 'topContributor',
    'Security Expert': 'securityExpert',
    'DeFi Master': 'defiMaster',
    'NFT Creator': 'nftCreator',
    'Community Hero': 'communityHero',
    'Quest Complete': 'questComplete',
    'Wizard': 'wizard',
  };

  if (badges.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-2xl bg-card border border-border p-6"
      >
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          {t.profile.badges.title}
        </h2>
        <p className="text-muted-foreground text-center py-8">
          {t.profile.badges.empty}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-2xl bg-card border border-border p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          {t.profile.badges.title}
        </h2>
        <span className="text-sm text-muted-foreground">
          {badges.length} {t.profile.badges.earned}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {badges.map((badge, index) => {
          const Icon = BADGE_ICONS[badge.name] || Award;
          const rarity = RARITY_CONFIG[badge.rarity];

          return (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className={cn(
                'relative p-4 rounded-xl bg-secondary/50 border transition-all hover:scale-105 cursor-pointer group',
                rarity.border
              )}
            >
              <div className={cn(
                'absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity',
                rarity.color
              )} />
                <div className="relative">
                <div className={cn(
                  'w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 mx-auto',
                  rarity.color
                )}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-sm font-bold text-center">
                  {t.profile.badges.names[badgeNameKeys[badge.name]] || badge.name}
                </p>
                <p className="text-xs text-muted-foreground text-center mt-1 line-clamp-2">
                  {t.profile.badges.descriptions[badgeDescKeys[badge.name]] || badge.description}
                </p>
                <p className="text-[10px] text-muted-foreground text-center mt-2">
                  {badge.earnedAt}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 text-center">
        <Button variant="ghost" size="sm">
          {t.profile.badges.viewAll}
        </Button>
      </div>
    </motion.div>
  );
}
