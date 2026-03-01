import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import * as Avatar from '@radix-ui/react-avatar';
import {
  Activity,
  Rocket,
  Award,
  CheckCircle2,
  Users,
  Wallet,
  FileSignature,
  ExternalLink,
} from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'deployed' | 'earned' | 'completed' | 'referred' | 'connected' | 'signed';
  title: string;
  description: string;
  timestamp: string;
  user?: {
    username: string;
    address: string;
  };
  link?: string;
}

interface ActivityFeedProps {
  activities: ActivityItem[];
}

const ACTIVITY_ICONS = {
  deployed: Rocket,
  earned: Award,
  completed: CheckCircle2,
  referred: Users,
  connected: Wallet,
  signed: FileSignature,
};

const ACTIVITY_COLORS = {
  deployed: 'from-blue-500 to-cyan-500',
  earned: 'from-yellow-500 to-orange-500',
  completed: 'from-green-500 to-emerald-500',
  referred: 'from-purple-500 to-pink-500',
  connected: 'from-cyan-500 to-blue-500',
  signed: 'from-red-500 to-pink-500',
};

export function ActivityFeed({ activities }: ActivityFeedProps) {
  const { t } = useI18n();

  if (activities.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl bg-card border border-border p-6"
      >
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          {t.profile.activity.title}
        </h2>
        <p className="text-muted-foreground text-center py-8">
          {t.profile.activity.empty}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-2xl bg-card border border-border p-6"
    >
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Activity className="h-5 w-5 text-primary" />
        {t.profile.activity.title}
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = ACTIVITY_ICONS[activity.type];
          const colorClass = ACTIVITY_COLORS[activity.type];
          const avatarUrl = activity.user 
            ? `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${activity.user.address}`
            : undefined;

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <div className={cn(
                'w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0',
                colorClass
              )}>
                <Icon className="h-5 w-5 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {activity.user && (
                    <Avatar.Root className="h-5 w-5 rounded-full overflow-hidden">
                      <Avatar.Image src={avatarUrl} className="h-full w-full" />
                      <Avatar.Fallback className="h-full w-full bg-secondary" />
                    </Avatar.Root>
                  )}
                  <p className="text-sm font-medium">
                    {activity.title}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {activity.timestamp}
                </p>
              </div>

              {activity.link && (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
