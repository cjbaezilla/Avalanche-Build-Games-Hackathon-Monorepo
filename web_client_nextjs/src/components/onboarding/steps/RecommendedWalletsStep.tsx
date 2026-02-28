import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import { StepContent, CardGrid, InfoCard } from '../StepContent';
import { useI18n } from '@/i18n';

export function RecommendedWalletsStep() {
  const { t } = useI18n();
  const steps = t.onboarding.steps.recommended;
  const wallets = steps.wallets;
  
  const walletList = [
    {
      key: 'avalanche',
      name: wallets.avalanche.name,
      tagline: wallets.avalanche.tagline,
      description: wallets.avalanche.description,
      features: wallets.avalanche.features,
      color: 'bg-orange-500',
    },
    {
      key: 'metamask',
      name: wallets.metamask.name,
      tagline: wallets.metamask.tagline,
      description: wallets.metamask.description,
      features: wallets.metamask.features,
      color: 'bg-orange-600',
    },
    {
      key: 'rabby',
      name: wallets.rabby.name,
      tagline: wallets.rabby.tagline,
      description: wallets.rabby.description,
      features: wallets.rabby.features,
      color: 'bg-blue-500',
    },
  ];
  
  return (
    <StepContent
      title={steps.title}
      description={steps.description}
      highlight={steps.highlight}
      icon={<Star className="w-16 h-16 text-primary" />}
    >
      <CardGrid>
        {walletList.map((wallet, index) => (
          <motion.div
            key={wallet.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15 }}
          >
            <div className={`p-4 rounded-lg border ${wallet.key === 'avalanche' ? 'bg-primary/10 border-primary/30' : 'bg-card border-border'}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg ${wallet.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {wallet.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className={`font-semibold ${wallet.key === 'avalanche' ? 'text-primary' : 'text-foreground'}`}>
                      {wallet.name}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {wallet.tagline}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="mt-3 text-sm text-muted-foreground">
                {wallet.description}
              </p>
              
              <div className="mt-3 space-y-1">
                {wallet.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </CardGrid>
    </StepContent>
  );
}
