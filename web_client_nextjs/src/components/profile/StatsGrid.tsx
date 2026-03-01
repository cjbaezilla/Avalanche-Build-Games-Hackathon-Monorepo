import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import {
  Rocket,
  Award,
  CheckCircle2,
  Users,
  Heart,
} from 'lucide-react';

interface UserStats {
  deployments: number;
  badges: number;
  tasksCompleted: number;
  referrals: number;
  karma: number;
}

interface StatsGridProps {
  stats: UserStats;
}

const STAT_ICONS = {
  deployments: Rocket,
  badges: Award,
  tasksCompleted: CheckCircle2,
  referrals: Users,
  karma: Heart,
};

const STAT_COLORS = {
  deployments: 'text-blue-500',
  badges: 'text-yellow-500',
  tasksCompleted: 'text-green-500',
  referrals: 'text-purple-500',
  karma: 'text-cyan-500',
};

export function StatsGrid({ stats }: StatsGridProps) {
  const { t } = useI18n();

  const statItems = [
    { key: 'deployments' as const, value: stats.deployments },
    { key: 'badges' as const, value: stats.badges },
    { key: 'tasksCompleted' as const, value: stats.tasksCompleted },
    { key: 'referrals' as const, value: stats.referrals },
    { key: 'karma' as const, value: stats.karma },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="rounded-xl bg-card border border-border px-4 py-3"
    >
      <div className="flex items-center gap-6 overflow-x-auto">
        {statItems.map((item, index) => {
          const Icon = STAT_ICONS[item.key];
          const colorClass = STAT_COLORS[item.key];
          
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="flex items-center gap-2 shrink-0"
            >
              <Icon className={cn('h-4 w-4 shrink-0', colorClass)} />
              <span className="text-lg font-bold">{item.value}</span>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {t.profile.stats[item.key as keyof typeof t.profile.stats]}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
