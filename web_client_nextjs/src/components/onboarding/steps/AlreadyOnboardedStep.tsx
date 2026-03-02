import { motion } from 'framer-motion';
import { CheckCircle2, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';
import { useRouter } from 'next/router';

export function AlreadyOnboardedStep() {
    const { t } = useI18n();
    const router = useRouter();
    const strings = t.onboarding.alreadyOnboarded;

    return (
        <StepContent
            title={strings.title}
            description={strings.description}
            icon={
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                    <CheckCircle2 className="w-16 h-16 text-primary relative z-10" />
                </motion.div>
            }
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col items-center"
            >
                <div className="p-6 bg-secondary/30 rounded-2xl border border-secondary mb-8 w-full max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground">{strings.badgeTitle}</h4>
                            <p className="text-sm text-muted-foreground">{strings.badgeSubtitle}</p>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                        "{strings.quote}"
                    </p>
                </div>

                <Button
                    onClick={() => router.push('/profile')}
                    size="lg"
                    className="group px-8 py-6 text-lg font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-105"
                >
                    <User className="mr-2 h-5 w-5" />
                    {strings.button}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </motion.div>
        </StepContent>
    );
}
