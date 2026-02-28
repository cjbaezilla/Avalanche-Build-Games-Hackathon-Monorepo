import { motion } from 'framer-motion';
import { Wallet, Smartphone, Globe, HardDrive, FileText } from 'lucide-react';
import { StepContent, CardGrid, InfoCard } from '../StepContent';
import { useI18n } from '@/i18n';

const icons = {
  paper: FileText,
  mobile: Smartphone,
  extension: Globe,
  hardware: HardDrive,
};

export function WalletTypesStep() {
  const { t } = useI18n();
  const steps = t.onboarding.steps.walletTypes;
  const types = steps.types as Record<string, {
    title: string;
    description: string;
    pros?: string;
    cons?: string;
  }>;
  
  return (
    <StepContent
      title={steps.title}
      description={steps.description}
      highlight={steps.highlight}
      icon={<Wallet className="w-16 h-16 text-primary" />}
    >
      <CardGrid>
        {Object.entries(types).map(([key, value], index) => {
          const Icon = icons[key as keyof typeof icons] || Wallet;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <InfoCard
                title={value.title}
                description={value.description}
                pros={value.pros}
                cons={value.cons}
                icon={<Icon className="w-5 h-5" />}
                featured={key === 'extension'}
              />
            </motion.div>
          );
        })}
      </CardGrid>
    </StepContent>
  );
}
