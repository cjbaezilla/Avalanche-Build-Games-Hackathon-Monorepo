import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Building2,
  Users,
  ArrowRight,
  CheckCircle2,
  Gift,
  Zap,
} from 'lucide-react';

interface Protocol {
  id: string;
  name: string;
  logo: string;
  description: string;
  interestedSince: string;
  opportunities: number;
  hired?: boolean;
}

interface ProtocolInterestProps {
  protocols?: Protocol[];
}

const MOCK_PROTOCOLS: Protocol[] = [
  {
    id: '1',
    name: 'Avalanche',
    logo: '🧊',
    description: 'Interested in your DeFi skills',
    interestedSince: '2 days ago',
    opportunities: 3,
  },
  {
    id: '2',
    name: 'LayerZero',
    logo: '🌉',
    description: 'Looking for cross-chain developers',
    interestedSince: '1 week ago',
    opportunities: 5,
  },
  {
    id: '3',
    name: 'Uniswap',
    logo: '🦄',
    description: 'Hiring for protocol development',
    interestedSince: '3 days ago',
    opportunities: 2,
  },
];

export function ProtocolInterest({ protocols = MOCK_PROTOCOLS }: ProtocolInterestProps) {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="rounded-2xl bg-card border border-border p-6"
    >
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Building2 className="h-5 w-5 text-primary" />
        {t.profile.protocols.title}
      </h2>

      {protocols.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">
          {t.profile.protocols.noInterest}
        </p>
      ) : (
        <div className="space-y-3">
          {protocols.map((protocol, index) => (
            <motion.div
              key={protocol.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                  {protocol.logo}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-bold">{protocol.name}</p>
                    {protocol.hired && (
                      <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-500 text-xs font-medium flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        {t.profile.protocols.hired}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {protocol.description}
                  </p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span>Interested {protocol.interestedSince}</span>
                    <span className="flex items-center gap-1">
                      <Gift className="h-3 w-3 text-primary" />
                      {protocol.opportunities} {t.profile.protocols.opportunities.toLowerCase()}
                    </span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {t.profile.protocols.viewDetails}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium">Want more opportunities?</p>
            <p className="text-sm text-muted-foreground">
              Complete more quests and earn badges to attract protocol attention!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
