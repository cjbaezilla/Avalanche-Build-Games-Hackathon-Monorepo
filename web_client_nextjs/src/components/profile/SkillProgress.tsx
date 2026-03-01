import { motion } from 'framer-motion';
import * as Progress from '@radix-ui/react-progress';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import {
  Code2,
  Shield,
  Coins,
  Image,
  Palette,
  Star,
} from 'lucide-react';

interface SkillProgress {
  name: string;
  progress: number;
  level: number;
  xp: number;
}

interface SkillProgressProps {
  skills: SkillProgress[];
}

const SKILL_ICONS = {
  Solidity: Code2,
  Security: Shield,
  DeFi: Coins,
  NFTs: Image,
  Frontend: Palette,
};

const SKILL_COLORS = {
  Solidity: 'from-blue-500 to-cyan-500',
  Security: 'from-red-500 to-orange-500',
  DeFi: 'from-green-500 to-emerald-500',
  NFTs: 'from-purple-500 to-pink-500',
  Frontend: 'from-yellow-500 to-orange-500',
};

export function SkillProgressComponent({ skills }: SkillProgressProps) {
  const { t } = useI18n();

  const skillTranslations: Record<string, string> = {
    Solidity: t.profile.skills.solidity,
    Security: t.profile.skills.security,
    DeFi: t.profile.skills.defi,
    NFTs: t.profile.skills.nft,
    Frontend: t.profile.skills.frontend,
  };

  const defaultSkills: SkillProgress[] = [
    { name: 'Solidity', progress: 65, level: 5, xp: 2500 },
    { name: 'Security', progress: 40, level: 3, xp: 1200 },
    { name: 'DeFi', progress: 55, level: 4, xp: 1800 },
    { name: 'NFTs', progress: 80, level: 6, xp: 3200 },
    { name: 'Frontend', progress: 30, level: 2, xp: 800 },
  ];

  const displaySkills = skills.length > 0 ? skills : defaultSkills;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="rounded-2xl bg-card border border-border p-6"
    >
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Star className="h-5 w-5 text-primary" />
        {t.profile.skills.title}
      </h2>

      <div className="space-y-4">
        {displaySkills.map((skill, index) => {
          const Icon = SKILL_ICONS[skill.name as keyof typeof SKILL_ICONS] || Code2;
          const colorClass = SKILL_COLORS[skill.name as keyof typeof SKILL_COLORS] || 'from-gray-500 to-gray-600';
          const translatedName = skillTranslations[skill.name] || skill.name;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    'w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center',
                    colorClass
                  )}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">{translatedName}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">{t.profile.skills.lvl} {skill.level}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{skill.xp} {t.profile.xp}</span>
                </div>
              </div>
              
              <div className="relative">
                <Progress.Root className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <Progress.Indicator
                    className={cn(
                      'h-full bg-gradient-to-r transition-all duration-500',
                      colorClass
                    )}
                    style={{ width: `${skill.progress}%` }}
                  />
                </Progress.Root>
                <div className="absolute -top-1 right-0 text-[10px] text-muted-foreground">
                  {skill.progress}%
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
