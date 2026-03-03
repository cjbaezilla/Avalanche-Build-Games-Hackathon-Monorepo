import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, Award, Loader2, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';
import { useWizardPassport } from '@/hooks/useWizardPassport';
import Image from 'next/image';

interface CelebrationStepProps {
  onComplete: () => void;
}

export function CelebrationStep({ onComplete }: CelebrationStepProps) {
  const { t } = useI18n();
  const steps = t.onboarding.steps.celebration;
  const reward = steps.reward;
  const mintStrings = steps.mint;

  const {
    hasPassport,
    mintPassport,
    isMinting,
    isMintedSuccess,
    hash,
    writeError,
    refetchBalance,
  } = useWizardPassport();

  const explorerUrl = process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL;

  const canProceed = hasPassport || isMintedSuccess;

  const handleMint = () => {
    mintPassport();
  };

  useEffect(() => {
    // Only run confetti when we either already have the passport OR we just successfully minted it
    if (!canProceed) return;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const context = ctx;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#EF4444', '#DC2626', '#991B1B', '#F87171', '#FCD34D', '#F59E0B'];
    const confetti: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    for (let i = 0; i < 150; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }

    let animationId: number;

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      confetti.forEach(c => {
        c.x += c.vx;
        c.y += c.vy;
        c.rotation += c.rotationSpeed;
        c.vy += 0.05;

        context.save();
        context.translate(c.x, c.y);
        context.rotate((c.rotation * Math.PI) / 180);
        context.fillStyle = c.color;
        context.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6);
        context.restore();
      });

      const activeConfetti = confetti.filter(c => c.y < canvas.height);
      if (activeConfetti.length > 0) {
        animationId = requestAnimationFrame(animate);
      } else {
        document.body.removeChild(canvas);
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    };
  }, [canProceed]);

  return (
    <StepContent
      title={canProceed ? steps.title : mintStrings.title}
      description={canProceed ? steps.description : mintStrings.description}
      icon={
        <motion.div
          animate={canProceed ? { rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {canProceed ? (
            <Trophy className="w-16 h-16 text-yellow-500" />
          ) : (
            <Award className="w-16 h-16 text-primary animate-pulse" />
          )}
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', damping: 10 }}
          className="p-6 bg-gradient-to-br from-primary/20 via-red-500/10 to-rose-900/20 rounded-xl border border-primary/30 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">
              {canProceed ? reward.title : mintStrings.title}
            </h3>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>

          <p className="text-center text-muted-foreground mb-4">
            {canProceed ? reward.explanation : mintStrings.description}
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center"
          >
            <div className={`w-64 h-64 rounded-3xl bg-gradient-to-br from-primary/10 to-rose-900/40 p-1 flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.2)] border border-primary/20 relative overflow-hidden group ${!canProceed ? 'animate-pulse grayscale opacity-70' : ''}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
              <Image
                src="https://ipfs.io/ipfs/bafybeicd5pabcwgppnekgimxur4n3jjagc2n3b6pmu5blp5td3kvuz2osu"
                alt="Wizard Badge"
                width={240}
                height={240}
                className="relative z-10 drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]"
              />
            </div>
          </motion.div>

          {canProceed && (
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {hasPassport ? mintStrings.alreadyMinted : reward.meaning}
            </p>
          )}

          {hash && explorerUrl && (
            <div className="mt-2 flex justify-center">
              <a
                href={`${explorerUrl}${explorerUrl.endsWith('/') ? '' : '/'}tx/${hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline hover:text-primary/80 transition-colors flex items-center gap-1.5 opacity-80 hover:opacity-100"
              >
                {mintStrings.viewOnExplorer}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {writeError && (
            <p className="mt-4 text-center text-sm text-red-500">
              {mintStrings.error}: {writeError.message.split('\n')[0]}
            </p>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {canProceed ? (
            <motion.div
              key="proceed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6"
            >
              <p className="text-center text-foreground font-medium mb-6">
                {steps.message}
              </p>
              <div className="flex justify-center">
                <Button onClick={onComplete} size="lg" className="px-8 py-6 text-lg font-bold">
                  {steps.continueButton}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 flex flex-col items-center"
            >
              <Button
                onClick={handleMint}
                disabled={isMinting}
                size="lg"
                className="px-12 py-8 text-xl font-black bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                {isMinting ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                    {mintStrings.minting}
                  </>
                ) : (
                  mintStrings.button
                )}
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                Avalanche Fuji Testnet
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </StepContent>
  );
}
