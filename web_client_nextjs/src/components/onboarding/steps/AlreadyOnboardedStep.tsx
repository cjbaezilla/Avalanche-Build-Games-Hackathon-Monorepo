import { motion } from 'framer-motion';
import { CheckCircle2, User, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StepContent } from '../StepContent';
import { useI18n } from '@/i18n';
import { useRouter } from 'next/router';
import { useWizardPassport } from '@/hooks/useWizardPassport';
import { useUserRegistration } from '@/hooks/useUserRegistration';
import Image from 'next/image';

export function AlreadyOnboardedStep() {
    const { t } = useI18n();
    const router = useRouter();
    const strings = t.onboarding.alreadyOnboarded;
    const { level, xp, levelImage, hasPassport, isStatsLoading } = useWizardPassport();
    const { userProfile } = useUserRegistration();

    const username = (userProfile as any)?.username || 'Wizard';

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
                className="mt-8 flex flex-col items-center w-full"
            >

                {hasPassport && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-10 w-full max-w-md bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl border border-primary/30 p-8 shadow-2xl backdrop-blur-md relative overflow-hidden"
                    >


                        <div className="flex flex-col items-center relative z-10">
                            <div className="relative mb-8">
                                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full animate-pulse" />
                                {levelImage ? (
                                    <div className="w-56 h-56 relative rounded-2xl overflow-hidden border-4 border-primary/40 shadow-2xl group transition-transform hover:scale-105 duration-500">
                                        <Image
                                            src={levelImage}
                                            alt="Wizard Passport NFT"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                ) : (
                                    <div className="w-56 h-56 rounded-2xl bg-secondary/50 flex items-center justify-center border-4 border-dashed border-primary/20">
                                        {isStatsLoading ? (
                                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                                        ) : (
                                            <ShieldCheck className="w-12 h-12 text-primary/40" />
                                        )}
                                    </div>
                                )}
                                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-2 rounded-full font-bold text-sm shadow-xl border-2 border-background flex items-center gap-1.5 animate-bounce-subtle">
                                    <ShieldCheck className="w-4 h-4" />
                                    {strings.verifiedLabel}
                                </div>
                            </div>

                            <div className="text-center space-y-3 w-full">
                                <h3 className="text-3xl font-black text-foreground tracking-tighter">
                                    {username}
                                </h3>
                                <div className="flex items-center justify-center gap-4 text-sm font-medium">
                                    <span className="flex items-center gap-1.5 px-4 py-1.5 bg-primary/15 rounded-full text-primary border border-primary/30 shadow-inner">
                                        <Zap className="w-4 h-4 fill-primary" />
                                        {strings.levelLabel} {level}
                                    </span>
                                    <span className="flex items-center gap-1.5 px-4 py-1.5 bg-secondary/40 rounded-full text-muted-foreground border border-secondary shadow-inner">
                                        {xp.toLocaleString()} {strings.xpLabel}
                                    </span>
                                </div>


                            </div>
                        </div>
                    </motion.div>
                )}

                <Button
                    onClick={() => router.push('/profile')}
                    size="lg"
                    className="group px-8 py-6 text-lg font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                >
                    <User className="mr-2 h-5 w-5" />
                    {strings.button}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </motion.div>
        </StepContent>
    );
}
