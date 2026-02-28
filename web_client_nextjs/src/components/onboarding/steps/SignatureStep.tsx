import { motion } from 'framer-motion';
import { PenTool, AlertCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';

interface SignatureStepProps {
  isSigning: boolean;
  success: boolean;
  error: string | null;
  onSign: () => void;
}

export function SignatureStep({ isSigning, success, error, onSign }: SignatureStepProps) {
  const { t } = useI18n();
  const steps = t.onboarding.steps.signature;
  
  return (
    <StepContent
      title={steps.title}
      description={steps.description}
      icon={
        success ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center"
          >
            <Check className="w-10 h-10 text-green-500" />
          </motion.div>
        ) : (
          <PenTool className="w-16 h-16 text-primary" />
        )
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6"
      >
        <div className="flex flex-col items-center gap-4">
          {success ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-600 dark:text-green-400 font-medium"
            >
              {steps.success}
            </motion.p>
          ) : (
            <>
              <motion.div
                animate={isSigning ? { rotate: [0, -10, 10, 0] } : {}}
                transition={isSigning ? { duration: 0.5, repeat: Infinity } : {}}
                className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center"
              >
                <PenTool className={`w-10 h-10 text-primary ${isSigning ? 'opacity-50' : ''}`} />
              </motion.div>
              
              <p className="text-center text-muted-foreground">
                {isSigning ? steps.signing : steps.instruction}
              </p>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </motion.div>
              )}
              
              <Button
                onClick={onSign}
                disabled={isSigning}
                size="lg"
              >
                {isSigning ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                ) : (
                  <PenTool className="w-5 h-5 mr-2" />
                )}
                {isSigning ? steps.signing : steps.signButton}
              </Button>
            </>
          )}
        </div>
      </motion.div>
    </StepContent>
  );
}
