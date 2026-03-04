import { motion } from 'framer-motion';
import Link from 'next/link';
import { useI18n } from '@/i18n';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

export function OnboardingInviteCard() {
    const { t } = useI18n();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-2xl border border-dashed border-primary/50 bg-primary/5 p-6 flex flex-col items-center justify-center text-center gap-4 min-h-[200px]"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

            <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                </div>
            </div>

            <div className="relative space-y-2">
                <h3 className="font-bold text-lg leading-tight">
                    {t.profile.registration.wizardNftMissing}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                    {t.profile.registration.onboardingRequired}
                </p>
            </div>

            <div className="relative w-full pt-2">
                <Link href="/onboarding" className="w-full text-white">
                    <Button className="w-full group" size="lg">
                        {t.profile.registration.goToOnboarding}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
