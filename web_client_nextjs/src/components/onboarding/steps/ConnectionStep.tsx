import { motion } from 'framer-motion';
import { Link, Unlink, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';

interface ConnectionStepProps {
  isConnecting: boolean;
  error: string | null;
  onConnect: () => void;
}

export function ConnectionStep({ isConnecting, error, onConnect }: ConnectionStepProps) {
  const { t } = useI18n();
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
        className="mt-6"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div
            animate={isConnecting ? { rotate: 360 } : {}}
            transition={isConnecting ? { duration: 1, repeat: Infinity, ease: 'linear' } : {}}
            className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center"
          >
            <Link className={`w-10 h-10 text-primary ${isConnecting ? 'opacity-50' : ''}`} />
          </motion.div>
          
          <p className="text-center text-muted-foreground">
            {isConnecting ? steps.checking : steps.instruction}
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
            onClick={onConnect}
            disabled={isConnecting}
            size="lg"
          >
            {isConnecting ? (
              <motion.div
                className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            ) : (
              <Unlink className="w-5 h-5 mr-2" />
            )}
            {isConnecting ? steps.checking : steps.connectButton}
          </Button>
          
          {!isConnecting && !error && (
            <p className="text-xs text-muted-foreground">{steps.hint}</p>
          )}
        </div>
      </motion.div>
    </StepContent>
  );
}
