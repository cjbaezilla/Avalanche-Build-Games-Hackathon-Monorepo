import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import {
  Rocket,
  Award,
  CheckCircle2,
  Flame,
  Users,
  Heart,
} from 'lucide-react';

interface UserStats {
  deployments: number;
  badges: number;
  tasksCompleted: number;
  streak: number;
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
  streak: Flame,
  referrals: Users,
  karma: Heart,
};

const STAT_COLORS = {
  deployments: 'from-blue-500 to-cyan-500',
  badges: 'from-yellow-500 to-orange-500',
  tasksCompleted: 'from-green-500 to-emerald-500',
  streak: 'from-red-500 to-pink-500',
  referrals: 'from-purple-500 to-pink-500',
  karma: 'from-cyan-500 to-blue-500',
};

export function StatsGrid({ stats }: StatsGridProps) {
  const { t } = useI18n();

  const statItems = [
    { key: 'deployments' as const, value: stats.deployments },
    { key: 'badges' as const, value: stats.badges },
    { key: 'tasksCompleted' as const, value: stats.tasksCompleted },
    { key: 'streak' as const, value: stats.streak },
    { key: 'referrals' as const, value: stats.referrals },
    { key: 'karma' as const, value: stats.karma },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="rounded-2xl bg-card border border-border p-6"
    >
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Award className="h-5 w-5 text-primary" />
        {t.profile.stats.title}
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statItems.map((item, index) => {
          const Icon = STAT_ICONS[item.key];
          const colorClass = STAT_COLORS[item.key];
          
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="relative p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className={cn(
                'absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity',
                colorClass
              )} />
              <div className={cn(
                'w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center mb-3',
                colorClass
              )}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <p className="text-2xl font-bold">{item.value.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">
                {t.profile.stats[item.key as keyof typeof t.profile.stats]}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
