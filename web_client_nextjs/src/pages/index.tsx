import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Trophy, Wallet, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    icon: Wallet,
    title: 'Connect Wallets',
    description: 'Seamlessly connect your Web3 wallets',
  },
  {
    icon: Zap,
    title: 'Instant Swaps',
    description: 'Lightning fast token swaps across chains',
  },
  {
    icon: Trophy,
    title: 'Earn Rewards',
    description: 'Collect badges and level up your profile',
  },
  {
    icon: Sparkles,
    title: 'Magic Features',
    description: 'Discover exclusive wizard utilities',
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vibe2Wizard - Web3 Magic</title>
        <meta name="description" content="Your Web3 wizard companion" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            Welcome to <span className="text-primary">Vibe2Wizard</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your magical companion for the Web3 universe. Connect wallets, swap tokens, 
            earn rewards, and unlock exclusive wizard utilities.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <ConnectButton />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="p-6 rounded-xl bg-secondary border border-border hover:border-primary transition-colors group cursor-pointer"
            >
              <feature.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary border border-primary/30"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Ready to Start Your Journey?
              </h2>
              <p className="text-muted-foreground">
                Complete the onboarding wizard to unlock your wizard profile and earn rewards.
              </p>
            </div>
            <Link
              href="/onboarding"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Onboarding
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
