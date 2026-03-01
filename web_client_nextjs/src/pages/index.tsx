import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Shield, Sparkles, Trophy, Badge, Briefcase, DoorOpen, Globe, Gamepad, Users, Building2, Handshake } from 'lucide-react';
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
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-xl bg-card/80 border border-border hover:border-primary transition-colors group cursor-pointer"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="py-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.home.benefits.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.home.benefits.description}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center mb-6">
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.home.benefits.cards.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.03 }}
                    className="p-5 rounded-xl bg-card/80 border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        {benefit.icon === 'Shield' && <Shield className="h-5 w-5 text-primary" />}
                        {benefit.icon === 'Badge' && <Badge className="h-5 w-5 text-primary" />}
                        {benefit.icon === 'Briefcase' && <Briefcase className="h-5 w-5 text-primary" />}
                        {benefit.icon === 'Door' && <DoorOpen className="h-5 w-5 text-primary" />}
                        {benefit.icon === 'Globe' && <Globe className="h-5 w-5 text-primary" />}
                        {benefit.icon === 'Gamepad' && <Gamepad className="h-5 w-5 text-primary" />}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl bg-gradient-to-br from-secondary to-secondary/30 border border-border flex flex-col items-center justify-center p-8"
              >
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{t.home.benefits.placeholder.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    {t.home.benefits.placeholder.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.home.forStakeholders.title}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t.home.forStakeholders.description}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl bg-gradient-to-br from-secondary to-secondary/30 border border-border flex flex-col items-center justify-center p-8"
              >
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">Protocols</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">DAOs</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">Employers</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t.home.forStakeholders.imageAlt}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 space-y-8">
              {t.home.forStakeholders.sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + (sectionIndex * 0.1) }}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 rounded-xl bg-card/80 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      {sectionIndex === 0 && <Building2 className="h-5 w-5 text-primary" />}
                      {sectionIndex === 1 && <Users className="h-5 w-5 text-primary" />}
                      {sectionIndex === 2 && <Handshake className="h-5 w-5 text-primary" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                  <div className="space-y-3 pl-2">
                    {section.benefits.map((benefit, benefitIndex) => (
                      <div key={benefit.title} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-foreground">{benefit.title}</h4>
                          <p className="text-xs text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary border border-primary/30 mt-12"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t.home.forStakeholders.ctaTitle}
                </h3>
                <p className="text-muted-foreground">
                  {t.home.forStakeholders.ctaDescription}
                </p>
              </div>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                {t.home.forStakeholders.cta}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
