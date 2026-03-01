import { motion } from 'framer-motion';
import { Star, CheckCircle, ExternalLink, Download, Shield } from 'lucide-react';
import { StepContent, CardGrid } from '../StepContent';
import { useI18n } from '@/i18n';

const WALLET_LINKS: Record<string, string> = {
    core: 'https://core.app',
    metamask: 'https://metamask.io',
    rabby: 'https://rabby.io/',
};

export function WalletInstallationStep() {
    const { t } = useI18n();
    const steps = t.onboarding.steps.walletInstallation;

    const wallets = [
        {
            key: 'core',
            name: steps.wallets.core.name,
            tagline: steps.wallets.core.tagline,
            description: steps.wallets.core.description,
            features: steps.wallets.core.features,
            color: 'bg-orange-500',
            featured: true,
        },
        {
            key: 'metamask',
            name: steps.wallets.metamask.name,
            tagline: steps.wallets.metamask.tagline,
            description: steps.wallets.metamask.description,
            features: steps.wallets.metamask.features,
            color: 'bg-orange-600',
            featured: false,
        },
        {
            key: 'rabby',
            name: steps.wallets.rabby.name,
            tagline: steps.wallets.rabby.tagline,
            description: steps.wallets.rabby.description,
            features: steps.wallets.rabby.features,
            color: 'bg-blue-500',
            featured: false,
        },
    ];

    const installStepsList = [
        steps.installSteps[1],
        steps.installSteps[2],
        steps.installSteps[3],
        steps.installSteps[4],
    ];

    const featuredWallet = wallets.find(w => w.key === 'core');
    const secondaryWallets = wallets.filter(w => w.key !== 'core');

    const renderWalletCard = (wallet: any, index: number) => (
        <motion.div
            key={wallet.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={`p-4 rounded-xl border transition-all hover:shadow-lg ${wallet.featured ? 'bg-primary/10 border-primary/30 ring-1 ring-primary/20' : 'bg-card border-border'
                }`}
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${wallet.color} flex items-center justify-center shadow-inner`}>
                        <span className="text-white font-bold text-xl">
                            {wallet.name.charAt(0)}
                        </span>
                    </div>
                    <div>
                        <h3 className="font-bold text-foreground flex items-center gap-2">
                            {wallet.name}
                            {wallet.featured && (
                                <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                    Recommended
                                </span>
                            )}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                            {wallet.tagline}
                        </span>
                    </div>
                </div>
                <a
                    href={WALLET_LINKS[wallet.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                >
                    <ExternalLink className="w-5 h-5" />
                </a>
            </div>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {wallet.description}
            </p>

            <div className="mt-4 space-y-2">
                {wallet.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground/80">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
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
            <div className="mt-6 space-y-6">
                {featuredWallet && renderWalletCard(featuredWallet, 0)}

                <CardGrid>
                    {secondaryWallets.map((wallet, index) => renderWalletCard(wallet, index + 1))}
                </CardGrid>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="p-5 bg-card/50 backdrop-blur-sm border border-border rounded-xl shadow-sm"
                >
                    <h4 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                        <Download className="w-4 h-4 text-primary" />
                        {steps.installSteps.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {installStepsList.map((step: string, index: number) => (
                            <div key={index} className="flex items-start gap-3 p-2 group">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    {index + 1}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1 leading-snug">{step}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl"
                >
                    <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-700 dark:text-amber-400 font-medium">
                            Wizard Tip: {steps.tip}
                        </p>
                    </div>
                </motion.div>
            </div>
        </StepContent>
    );
}
