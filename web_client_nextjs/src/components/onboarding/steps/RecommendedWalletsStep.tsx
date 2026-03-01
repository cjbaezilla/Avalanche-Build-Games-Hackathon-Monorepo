import { motion } from 'framer-motion';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import { StepContent, CardGrid, InfoCard } from '../StepContent';
import { useI18n } from '@/i18n';

const WALLET_LINKS: Record<string, string> = {
  core: 'https://core.app',
  metamask: 'https://metamask.io',
  rabby: 'https://rabby.io/',
};

export function RecommendedWalletsStep() {
  const { t } = useI18n();
  const steps = t.onboarding.steps.recommended;
  const wallets = steps.wallets;
  
  const coreWallet = {
    key: 'core',
    name: wallets.core.name,
    tagline: wallets.core.tagline,
    description: wallets.core.description,
    features: wallets.core.features,
    color: 'bg-orange-500',
  };

  const secondaryWallets = [
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

  const renderWalletCard = (wallet: typeof coreWallet, featured: boolean = false) => (
    <motion.div
      key={wallet.key}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg border ${featured ? 'bg-primary/10 border-primary/30' : 'bg-card border-border'}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-lg ${wallet.color} flex items-center justify-center`}>
            <span className="text-white font-bold text-lg">
              {wallet.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className={`font-semibold ${wallet.key === 'core' ? 'text-primary' : 'text-foreground'}`}>
              {wallet.name}
            </h3>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
              {wallet.tagline}
            </span>
          </div>
        </div>
        <a
          href={WALLET_LINKS[wallet.key]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
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
    </motion.div>
  );
  
  return (
    <StepContent
      title={steps.title}
      description={steps.description}
      highlight={steps.highlight}
      icon={<Star className="w-16 h-16 text-primary" />}
    >
      <div className="mt-6 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {renderWalletCard(coreWallet, true)}
        </motion.div>

        <CardGrid>
          {secondaryWallets.map((wallet, index) => (
            <motion.div
              key={wallet.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + index * 0.15 }}
            >
              {renderWalletCard(wallet, false)}
            </motion.div>
          ))}
        </CardGrid>
      </div>
    </StepContent>
  );
}
