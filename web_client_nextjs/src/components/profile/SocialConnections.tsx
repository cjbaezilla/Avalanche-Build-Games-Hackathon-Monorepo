import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import * as Avatar from '@radix-ui/react-avatar';
import {
  Users,
  UserPlus,
  MessageCircle,
  UserCheck,
  ExternalLink,
} from 'lucide-react';

interface Connection {
  id: string;
  username: string;
  address: string;
  level: number;
  tier: 'initiate' | 'apprentice' | 'journeyman' | 'wizard' | 'archmage';
}

interface SocialConnectionsProps {
  followers: Connection[];
  following: Connection[];
}

const TIER_COLORS = {
  initiate: 'bg-gray-500',
  apprentice: 'bg-green-500',
  journeyman: 'bg-blue-500',
  wizard: 'bg-purple-500',
  archmage: 'bg-yellow-500',
};

export function SocialConnections({ followers, following }: SocialConnectionsProps) {
  const { t } = useI18n();

  const allConnections = [...followers, ...following];
  const displayConnections = allConnections.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="rounded-2xl bg-card border border-border p-6"
    >
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Users className="h-5 w-5 text-primary" />
        {t.profile.social.title}
      </h2>

      <div className="flex gap-6 mb-6">
        <div className="text-center">
          <p className="text-2xl font-bold">{followers.length}</p>
          <p className="text-sm text-muted-foreground">{t.profile.social.followers}</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{following.length}</p>
          <p className="text-sm text-muted-foreground">{t.profile.social.following}</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{allConnections.length}</p>
          <p className="text-sm text-muted-foreground">{t.profile.social.connections}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {displayConnections.map((connection, index) => {
          const avatarUrl = `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${connection.address}`;
          const isFollowing = following.some(c => c.id === connection.id);

          return (
            <motion.div
              key={connection.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="relative">
                <Avatar.Root className="h-12 w-12 rounded-full overflow-hidden mx-auto">
                  <Avatar.Image src={avatarUrl} alt={connection.username} className="h-full w-full" />
                  <Avatar.Fallback className="h-full w-full bg-secondary flex items-center justify-center">
                    <Users className="h-5 w-5 text-muted-foreground" />
                  </Avatar.Fallback>
                </Avatar.Root>
                <div className={cn(
                  'absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card',
                  TIER_COLORS[connection.tier]
                )} />
              </div>
              <p className="text-sm font-medium text-center mt-2 truncate">
                {connection.username}
              </p>
              <p className="text-xs text-muted-foreground text-center">
                {t.profile.social.lvl} {connection.level}
              </p>
              <div className="flex justify-center gap-1 mt-2">
                <button className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                  {isFollowing ? (
                    <UserCheck className="h-4 w-4 text-green-500" />
                  ) : (
                    <UserPlus className="h-4 w-4" />
                  )}
                </button>
                <button className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                  <MessageCircle className="h-4 w-4" />
                </button>
                <button className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {displayConnections.length === 0 && (
        <p className="text-muted-foreground text-center py-4">
          {t.profile.social.noConnections}
        </p>
      )}
    </motion.div>
  );
}
