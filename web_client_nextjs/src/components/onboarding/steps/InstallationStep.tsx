import { motion } from 'framer-motion';
import { Download, Shield, Check } from 'lucide-react';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';

export function InstallationStep() {
  const { t } = useI18n();
  const steps = t.onboarding.steps.installation;
  
  const installationSteps = [
    steps.steps[1],
    steps.steps[2],
    steps.steps[3],
    steps.steps[4],
    steps.steps[5],
  ];
  
  return (
    <StepContent
      title={steps.title}
      description={steps.description}
      highlight={steps.highlight}
      icon={<Download className="w-16 h-16 text-primary" />}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 space-y-3"
      >
        {installationSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-semibold">{index + 1}</span>
            </div>
            <p className="text-foreground text-sm mt-1">{step}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg"
      >
        <div className="flex items-start gap-2">
          <Shield className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            💡 {steps.tip}
          </p>
        </div>
      </motion.div>
    </StepContent>
  );
}
