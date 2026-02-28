import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';

export function IntroStep() {
  const { t } = useI18n();
  
  return (
    <StepContent
      title={t.onboarding.steps.intro.title}
      description={t.onboarding.steps.intro.description}
      highlight={t.onboarding.steps.intro.highlight}
      icon={
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Rocket className="w-16 h-16 text-primary" />
        </motion.div>
      }
    />
  );
}
