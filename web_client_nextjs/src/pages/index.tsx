import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Shield, Sparkles, Trophy } from 'lucide-react';
import { useI18n } from '@/i18n';

const Home: NextPage = () => {
  const { t } = useI18n();
  return (
    <>
      <Head>
        <title>Vibe2Wizard - Gamified Web3 & Solidity Learning Platform</title>
        <meta name="description" content="From Vibe Coder to Onchain Wizard. Master Web3 & Solidity and earn onchain soulbound credentials." />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div className="page-background-decoration" />

      <div className="relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            {t.home.hero.title} <br /><span className="text-primary">{t.home.hero.titleHighlight}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.home.hero.description}
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/onboarding"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              {t.home.hero.cta}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {t.home.features.cards.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="p-6 rounded-xl bg-secondary border border-border hover:border-primary transition-colors group cursor-pointer"
            >
              {index === 0 && <BookOpen className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />}
              {index === 1 && <Shield className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />}
              {index === 2 && <Trophy className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />}
              {index === 3 && <Sparkles className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />}
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
                {t.home.features.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.features.description}
              </p>
            </div>
            <Link
              href="/onboarding"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              {t.home.features.cta}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
