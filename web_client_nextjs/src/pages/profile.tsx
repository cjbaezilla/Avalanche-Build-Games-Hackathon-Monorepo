import { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';
import { useAccount } from 'wagmi';
import {
  useUserRegistration,
  useUserLookup
} from '@/hooks/useUserRegistration';
import {
  useWizardPassport
} from '@/hooks/useWizardPassport';
import {
  ProfileHeader,
  StatsGrid,
  BadgesSection,
  ActivityFeed,
  EditProfileModal,
  OnboardingInviteCard
} from '@/components/profile';

// Placeholder data for sections not under refactor (as per user request focus)
const DEMO_STATS = { deployments: 0, badges: 0, tasksCompleted: 0, streak: 0, referrals: 0, karma: 0 };
const DEMO_BADGES: any[] = [];
const DEMO_ACTIVITIES: any[] = [];
const DEMO_FOLLOWERS: any[] = [];
const DEMO_FOLLOWING: any[] = [];

export default function ProfilePage() {
  const { t } = useI18n();
  const { address: connectedAddress } = useAccount();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Contract Hooks
  const {
    isRegistered,
    userProfile,
    isProfileLoading,
    registerUser,
    isProcessing: isRegProcessing,
    isRegistrationSuccess,
    refetchUserProfile,
    refetchRegistrationStatus
  } = useUserRegistration(connectedAddress);

  const {
    hasPassport,
    level,
    xp,
    nextLevelXP,
    levelImage,
    isStatsLoading,
    isBalanceLoading,
    isXPThresholdLoading
  } = useWizardPassport(connectedAddress);

  const isLoading = isProfileLoading || isStatsLoading || isBalanceLoading || isXPThresholdLoading;

  // Cleanup/Refresh after transaction
  useEffect(() => {
    if (isRegistrationSuccess) {
      setIsEditModalOpen(false);
      refetchUserProfile();
      refetchRegistrationStatus();
    }
  }, [isRegistrationSuccess, refetchUserProfile, refetchRegistrationStatus]);

  const handleEditClick = useCallback(() => {
    setIsEditModalOpen(true);
  }, []);

  const handleSaveProfile = useCallback((formData: any) => {
    registerUser(
      formData.username,
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.twitterUrl,
      formData.instagramUrl,
      formData.linkedinUrl,
      formData.telegramUrl,
      formData.avatarUrl
    );
  }, [registerUser]);

  return (
    <>
      <Head>
        <title>{t.profile.title} | Vibe2Wizard</title>
      </Head>

      <div className="space-y-6">
        <StatsGrid stats={DEMO_STATS} />

        <ProfileHeader
          userAddress={connectedAddress}
          profile={userProfile as any}
          level={level}
          xp={xp}
          nextLevelXP={nextLevelXP}
          hasPassport={hasPassport}
          levelImage={levelImage}
          isLoading={isLoading}
          onEdit={handleEditClick}
          followersCount={DEMO_FOLLOWERS.length}
          followingCount={DEMO_FOLLOWING.length}
        />

        {!isLoading && !hasPassport && (
          <OnboardingInviteCard />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <BadgesSection badges={DEMO_BADGES} />

          </div>
          <div className="space-y-6">
            <ActivityFeed activities={DEMO_ACTIVITIES} />
          </div>
        </div>
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        initialData={userProfile}
        onSave={handleSaveProfile}
        isProcessing={isRegProcessing}
        isRegistered={isRegistered}
      />
    </>
  );
}
