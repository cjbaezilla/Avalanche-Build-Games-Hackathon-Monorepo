import { motion } from 'framer-motion';
import { Fuel, Droplets, ArrowRight, ExternalLink, Network, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StepContent, InfoCard } from '../StepContent';
import { useI18n } from '@/i18n';

import { useAccount, useBalance } from 'wagmi';

const FAUCET_URL = 'https://faucet.avax.network/?subnet=fuji';
const CONSOLE_FAUCET_URL = 'https://build.avax.network/console/primary-network/faucet';

interface FaucetStepProps {
    onNext: () => void;
}

export function FaucetStep({ onNext }: FaucetStepProps) {
    const { t } = useI18n();
    const { address } = useAccount();
    const { data: balanceData, refetch: refetchBalance } = useBalance({ address });

    const steps = t.onboarding.steps.faucet;

    const balance = balanceData ? parseFloat(balanceData.formatted) : 0;
    const hasBalance = balance > 0;

    return (
        <StepContent
            title={steps.title}
            description={steps.description}
            highlight={steps.highlight}
            icon={<Fuel className="w-16 h-16 text-primary" />}
        >
            <div className="mt-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-4 bg-card border border-border rounded-xl shadow-sm hover:border-primary/30 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                <Fuel className="w-5 h-5" />
                            </div>
                            <h4 className="font-semibold text-foreground">{steps.gasFees.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {steps.gasFees.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-4 bg-card border border-border rounded-xl shadow-sm hover:border-primary/30 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                <Droplets className="w-5 h-5" />
                            </div>
                            <h4 className="font-semibold text-foreground">{steps.faucetInfo.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {steps.faucetInfo.description}
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 bg-card border border-border rounded-2xl relative overflow-hidden shadow-sm"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Network className="w-32 h-32" />
                    </div>

                    <h4 className="font-bold text-lg text-foreground flex items-center gap-2 mb-6">
                        <ArrowRight className="w-5 h-5 text-primary" />
                        Wizard's Instructions
                    </h4>

                    <div className="space-y-4 relative z-10 mb-8">
                        {steps.instruction.split('\n').map((line: string, i: number) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold border border-primary/20">
                                    {i + 1}
                                </div>
                                <p className="text-muted-foreground mt-1 leading-relaxed">
                                    {line.replace(/^\d+\.\s*/, '')}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/50">
                        <Button
                            asChild
                            variant="outline"
                            className="h-14 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all group"
                        >
                            <a href={FAUCET_URL} target="_blank" rel="noopener noreferrer">
                                <Droplets className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform" />
                                <div className="text-left">
                                    <div className="text-xs text-muted-foreground font-normal">Primary Option</div>
                                    <div className="font-semibold">{steps.faucetButton}</div>
                                </div>
                                <ExternalLink className="w-4 h-4 ml-auto opacity-40" />
                            </a>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="h-14 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all group"
                        >
                            <a href={CONSOLE_FAUCET_URL} target="_blank" rel="noopener noreferrer">
                                <Network className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform" />
                                <div className="text-left">
                                    <div className="text-xs text-muted-foreground font-normal">Builder Portal</div>
                                    <div className="font-semibold">{steps.faucetConsoleButton}</div>
                                </div>
                                <ExternalLink className="w-4 h-4 ml-auto opacity-40" />
                            </a>
                        </Button>
                    </div>
                </motion.div>

                {/* Prominent Balance Display */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="p-8 bg-card border-2 border-primary/20 rounded-3xl relative overflow-hidden shadow-lg flex flex-col items-center justify-center text-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

                    <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2 relative z-10">
                        Current Magical Balance
                    </span>

                    <div className="flex items-baseline gap-2 relative z-10">
                        <span className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">
                            {balanceData ? balanceData.formatted.substring(0, 6) : '0.00'}
                        </span>
                        <span className="text-xl md:text-2xl font-bold text-primary">
                            {balanceData?.symbol || 'AVAX'}
                        </span>
                    </div>

                    {hasBalance ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 space-y-2 relative z-10"
                        >
                            <div className="flex items-center justify-center gap-2 text-green-500 font-bold text-lg">
                                <CheckCircle className="w-6 h-6" />
                                {steps.success}
                            </div>
                            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                                {steps.congratulations}
                            </p>
                        </motion.div>
                    ) : (
                        <div className="mt-4 relative z-10">
                            {balanceData && (
                                <p className="text-amber-500 text-sm font-medium flex items-center gap-2">
                                    <Star className="w-4 h-4 animate-pulse" />
                                    {steps.noTokens}
                                </p>
                            )}
                        </div>
                    )}
                </motion.div>

                {/* Manual Check Button - Only shown if no balance */}
                {!hasBalance && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center"
                    >
                        <div className="relative group w-full max-w-md">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 to-rose-500 rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />
                            <Button
                                onClick={() => refetchBalance()}
                                size="lg"
                                className="relative w-full h-14 rounded-2xl bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white font-bold text-lg shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <Star className="w-5 h-5 mr-3 text-white animate-pulse" />
                                {steps.verifyButton}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </StepContent>
    );
}
