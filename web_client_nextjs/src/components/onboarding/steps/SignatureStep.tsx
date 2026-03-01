import { motion } from 'framer-motion';
import { PenTool, AlertCircle, Check, ShieldCheck, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAccount, useSignMessage, useChainId } from 'wagmi';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';
import { useState, useCallback } from 'react';

interface SignatureStepProps {
  onNext: () => void;
  onSuccess?: () => void;
}

export function SignatureStep({ onNext, onSuccess }: SignatureStepProps) {
  const { t } = useI18n();
  const { address } = useAccount();
  const chainId = useChainId();
  const { signMessageAsync, isPending: isSigning } = useSignMessage();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const steps = t.onboarding.steps.signature;

  const handleSign = useCallback(async () => {
    if (!address) return;

    setError(null);
    try {
      const domain = window.location.host;
      const origin = window.location.origin;
      const statement = 'Welcome to Vibe2Wizard! Sign this message to verify your wizardly identity and start your journey.';
      const issuedAt = new Date().toISOString();

      // SIWE format
      const message = `${domain} wants you to sign in with your Ethereum account:
${address}

${statement}

URI: ${origin}
Version: 1
Chain ID: ${chainId}
Nonce: ${Math.floor(Math.random() * 1000000)}
Issued At: ${issuedAt}`;

      await signMessageAsync({ message });

      setSuccess(true);
      onSuccess?.();
    } catch (err: any) {
      console.error(err);
      setError(steps.error);
    }
  }, [address, chainId, signMessageAsync, onSuccess, steps.error]);

  return (
    <StepContent
      title={steps.title}
      description={steps.description}
      icon={
        success ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center shadow-lg shadow-green-500/20"
          >
            <Check className="w-10 h-10 text-green-500" />
          </motion.div>
        ) : (
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <ShieldCheck className="w-16 h-16 text-primary relative" />
          </div>
        )
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <div className="flex flex-col items-center gap-6">
          {success ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
                {steps.success}
              </p>
              <p className="text-sm text-muted-foreground">
                The magic is binding...
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div
                animate={isSigning ? {
                  scale: [1, 1.05, 1]
                } : {}}
                transition={isSigning ? { duration: 0.5, repeat: Infinity } : {}}
                className="w-24 h-24 rounded-3xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center shadow-inner"
              >
                <PenTool className={`w-12 h-12 text-primary ${isSigning ? 'opacity-50' : ''}`} />
              </motion.div>

              <div className="text-center space-y-2">
                <p className="text-muted-foreground font-medium">
                  {isSigning ? steps.signing : steps.instruction}
                </p>
                <p className="text-xs text-muted-foreground/60 max-w-xs mx-auto">
                  By signing, you prove ownership of your wallet without revealing any private keys.
                </p>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 max-w-sm"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
                </motion.div>
              )}

              <Button
                onClick={handleSign}
                disabled={isSigning || !address}
                size="lg"
                className="px-8 h-12 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95"
              >
                {isSigning ? (
                  <motion.div
                    className="w-6 h-6 border-3 border-primary-foreground border-t-transparent rounded-full mr-3"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                ) : (
                  <PenTool className="w-5 h-5 mr-3" />
                )}
                {isSigning ? steps.signing : steps.signButton}
              </Button>

              {!address && (
                <p className="text-xs text-destructive font-medium animate-pulse">
                  Please connect your wallet first!
                </p>
              )}
            </>
          )}

          <div className="max-w-xs mt-4 pt-4 border-t border-border/40 text-center">
            <p className="text-[10px] text-muted-foreground/70 leading-relaxed mb-2">
              {steps.eipExplanation}
            </p>
            <a
              href="https://eips.ethereum.org/EIPS/eip-4361"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-medium text-primary hover:underline group"
            >
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              {steps.eipLink}
            </a>
          </div>
        </div>
      </motion.div>
    </StepContent>
  );
}
