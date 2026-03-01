import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, Wallet } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance } from 'wagmi';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';

interface ConnectionStepProps {
  onNext: () => void;
}

export function ConnectionStep({ onNext }: ConnectionStepProps) {
  const { t } = useI18n();
  const { isConnected, address } = useAccount();
  const { data: balanceData } = useBalance({
    address,
    query: {
      enabled: !!address,
    },
  });
  const steps = t.onboarding.steps.connection;


  return (
    <StepContent
      title={steps.title}
      description={steps.description}
      icon={<Link className="w-16 h-16 text-primary" />}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-col items-center gap-6"
      >
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
          <motion.div
            animate={isConnected ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5 }}
            className="relative w-24 h-24 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center shadow-xl"
          >
            {isConnected ? (
              <Wallet className="w-10 h-10 text-green-500" />
            ) : (
              <Link className="w-10 h-10 text-primary" />
            )}
          </motion.div>
        </div>

        <p className="text-center text-muted-foreground max-w-sm">
          {isConnected
            ? "Your wallet is successfully connected! Get ready for your first spell..."
            : steps.instruction}
        </p>

        <div className="transform transition-transform hover:scale-105 active:scale-95">
          <ConnectButton />
        </div>

        {!isConnected && (
          <p className="text-xs text-muted-foreground/60">{steps.hint}</p>
        )}
      </motion.div>
    </StepContent>
  );
}
