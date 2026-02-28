import { motion } from 'framer-motion';
import { Wallet, Key, Shield } from 'lucide-react';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';

export function WalletsStep() {
  const { t } = useI18n();
  const steps = t.onboarding.steps.wallets;
  
  return (
    <StepContent
      title={steps.title}
      description={steps.description}
      highlight={steps.highlight}
      icon={<Wallet className="w-16 h-16 text-primary" />}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/30"
      >
        <div className="flex items-center justify-center gap-8">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center"
          >
            <Key className="w-10 h-10 text-primary" />
          </motion.div>
          
          <div className="text-2xl font-bold text-foreground">=</div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center"
          >
            <Shield className="w-10 h-10 text-accent" />
          </motion.div>
        </div>
        
        <p className="mt-4 text-center text-foreground font-medium">
          {steps.metaphor}
        </p>
      </motion.div>
    </StepContent>
  );
}
