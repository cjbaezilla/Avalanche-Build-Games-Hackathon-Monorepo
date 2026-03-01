import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '@/i18n';
import { Button } from '@/components/ui/button';

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack?: () => void;
  onLanguageToggle: () => void;
  showBack?: boolean;
  showNext?: boolean;
  nextLabel?: string;
  isLoading?: boolean;
}

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export function OnboardingLayout({
  children,
  currentStep,
  totalSteps,
  onNext,
  onBack,
  onLanguageToggle,
  showBack = true,
  showNext = true,
  nextLabel,
  isLoading = false,
}: OnboardingLayoutProps) {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl">
          <div className="bg-black border border-border rounded-xl p-6 md:p-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium text-foreground">
                  {t.onboarding.stepIndicator.replace('{{current}}', String(currentStep)).replace('{{total}}', String(totalSteps))}
                </span>
                <span className="text-lg font-medium text-foreground">
                  {Math.round((currentStep / totalSteps) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait" custom={currentStep}>
                <motion.div
                  key={currentStep}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, type: 'spring', damping: 25 }}
                  className="w-full"
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between mt-8">
              {showBack && onBack ? (
                <Button
                  variant="outline"
                  onClick={onBack}
                  disabled={isLoading}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  {t.onboarding.backButton}
                </Button>
              ) : (
                <div />
              )}
              
              {showNext && (
                <Button
                  onClick={onNext}
                  disabled={isLoading}
                >
                  {nextLabel || t.onboarding.nextButton}
                  {!isLoading && <ChevronRight className="w-4 h-4 ml-2" />}
                  {isLoading && (
                    <motion.div
                      className="w-4 h-4 ml-2 border-2 border-primary-foreground border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
