import { motion } from 'framer-motion';
import { History, Globe, Lock } from 'lucide-react';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';

export function BackgroundStep() {
  const { t } = useI18n();
  const steps = t.onboarding.steps.background;
  
  return (
    <StepContent
      title={steps.title}
      description={steps.description}
      highlight={steps.highlight}
      icon={<History className="w-16 h-16 text-primary" />}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-4 bg-card rounded-lg border border-border"
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Globe className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-left">
            <p className="font-medium text-foreground">Web2</p>
            <p className="text-sm text-muted-foreground">Companies own your data</p>
          </div>
        </div>
        
        <div className="flex justify-center my-3">
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          >
            ↓
          </motion.div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <Lock className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-left">
            <p className="font-medium text-foreground">Web3</p>
            <p className="text-sm text-muted-foreground">You own your data!</p>
          </div>
        </div>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 text-sm text-muted-foreground italic"
      >
        💡 {steps.funFact}
      </motion.p>
    </StepContent>
  );
}
