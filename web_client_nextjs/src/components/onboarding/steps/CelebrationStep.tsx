import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';

interface CelebrationStepProps {
  onComplete: () => void;
}

export function CelebrationStep({ onComplete }: CelebrationStepProps) {
  const { t } = useI18n();
  const steps = t.onboarding.steps.celebration;
  const reward = steps.reward;
  
  useEffect(() => {
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
    
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
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
      
      confetti.length = confetti.filter(c => c.y < canvas.height).length;
      
      if (confetti.length > 0) {
        animationId = requestAnimationFrame(animate);
      }
    }
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      document.body.removeChild(canvas);
    };
  }, []);
  
  return (
    <StepContent
      title={steps.title}
      description={steps.description}
      icon={
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          <Trophy className="w-16 h-16 text-yellow-500" />
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
          className="p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <h3 className="text-xl font-bold text-foreground">{reward.title}</h3>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          
          <p className="text-center text-muted-foreground mb-4">
            {reward.explanation}
          </p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
              <Award className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {reward.meaning}
          </p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center text-foreground font-medium"
        >
          {steps.message}
        </motion.p>
        
        <div className="mt-6 flex justify-center">
          <Button onClick={onComplete} size="lg">
            {steps.continueButton}
          </Button>
        </div>
      </motion.div>
    </StepContent>
  );
}
