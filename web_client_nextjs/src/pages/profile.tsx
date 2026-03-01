import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';
import {
  ProfileHeader,
  StatsGrid,
  BadgesSection,
  ActivityFeed,
  SocialConnections,
  ProtocolInterest,
} from '@/components/profile';

const DEMO_USER = {
  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f8E7B1',
  username: 'WizardDev_42',
  bio: 'Building the future of decentralized applications. Passionate about DeFi and smart contract security. Always learning, always growing.',
  level: 7,
  experience: 2450,
  joinedDate: 'Jan 2025',
  location: 'Crypto City',
  tier: 'wizard' as const,
  rank: 127,
  totalUsers: 5420,
};

const DEMO_STATS = {
  deployments: 42,
  badges: 15,
  tasksCompleted: 87,
  streak: 7,
  referrals: 12,
  karma: 2450,
};

const DEMO_BADGES = [
  { id: '1', name: 'First Deploy', description: 'Deployed your first smart contract', earnedAt: 'Jan 15, 2025', rarity: 'common' as const },
  { id: '2', name: 'Bug Hunter', description: 'Found and reported 5 security vulnerabilities', earnedAt: 'Jan 22, 2025', rarity: 'rare' as const },
  { id: '3', name: 'Early Adopter', description: 'Joined during beta phase', earnedAt: 'Jan 5, 2025', rarity: 'rare' as const },
  { id: '4', name: 'Top Contributor', description: 'Helped 10 other learners', earnedAt: 'Feb 1, 2025', rarity: 'epic' as const },
  { id: '5', name: 'DeFi Master', description: 'Completed all DeFi quests', earnedAt: 'Feb 10, 2025', rarity: 'epic' as const },
  { id: '6', name: 'NFT Creator', description: 'Minted your first NFT collection', earnedAt: 'Jan 28, 2025', rarity: 'rare' as const },
  { id: '7', name: 'Wizard', description: 'Reached level 10', earnedAt: 'Feb 15, 2025', rarity: 'legendary' as const },
  { id: '8', name: 'Community Hero', description: 'Active community member for 30 days', earnedAt: 'Feb 20, 2025', rarity: 'epic' as const },
];

const DEMO_ACTIVITIES = [
  { id: '1', type: 'deployed' as const, title: 'Deployed contract', description: 'TokenVault.sol on Avalanche', timestamp: '2 hours ago', link: '#' },
  { id: '2', type: 'earned' as const, title: 'Earned badge', description: 'DeFi Master - Completed all DeFi quests', timestamp: '5 hours ago' },
  { id: '3', type: 'completed' as const, title: 'Quest completed', description: 'Build Your First Token', timestamp: '1 day ago' },
  { id: '4', type: 'referred' as const, title: 'Referral bonus', description: 'Your friend @CryptoNewbie joined!', timestamp: '2 days ago' },
  { id: '5', type: 'connected' as const, title: 'Wallet connected', description: 'Connected Core Wallet', timestamp: '3 days ago' },
];

const DEMO_FOLLOWERS = [
  { id: '1', username: 'DeFiKing', address: '0x1234567890abcdef', level: 12, tier: 'wizard' as const },
  { id: '2', username: 'SolidityPro', address: '0xabcdef1234567890', level: 8, tier: 'journeyman' as const },
  { id: '3', username: 'NFTArtist', address: '0xdeadbeef12345678', level: 5, tier: 'apprentice' as const },
];

const DEMO_FOLLOWING = [
  { id: '4', username: 'Web3Builder', address: '0x9876543210fedcba', level: 15, tier: 'archmage' as const },
  { id: '5', username: 'ChainBreaker', address: '0xfedcba9876543210', level: 10, tier: 'wizard' as const },
];

const DEMO_SKILLS = [
  { name: 'Solidity', progress: 65 },
  { name: 'DeFi', progress: 45 },
  { name: 'NFTs', progress: 80 },
  { name: 'Frontend', progress: 30 },
];

export default function ProfilePage() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<'overview' | 'badges' | 'activity' | 'skills'>('overview');

  return (
    <>
      <Head>
        <title>{t.profile.title} | Vibe2Wizard</title>
      </Head>
      
      <div className="space-y-6">
        <StatsGrid stats={DEMO_STATS} />
        
        <ProfileHeader user={DEMO_USER} skills={DEMO_SKILLS} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <BadgesSection badges={DEMO_BADGES.slice(0, 4)} />
            <ProtocolInterest />
          </div>
          <div className="space-y-6">
            <ActivityFeed activities={DEMO_ACTIVITIES} />
            <SocialConnections followers={DEMO_FOLLOWERS} following={DEMO_FOLLOWING} />
          </div>
        </div>

        </div>
    </>
  );
}
