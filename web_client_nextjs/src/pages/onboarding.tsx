import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  OnboardingLayout,
  IntroStep,
  BackgroundStep,
  WalletsStep,
  WalletTypesStep,
  WalletInstallationStep,
  ConnectionStep,
  SignatureStep,
  FaucetStep,
  CelebrationStep,
  AlreadyOnboardedStep,
} from '@/components/onboarding';
import { useAccount, useBalance } from 'wagmi';
import { useWizardPassport } from '@/hooks/useWizardPassport';
import { useI18n } from '@/i18n';

const TOTAL_STEPS = 9;

function OnboardingContent() {
  const router = useRouter();
  const { toggleLanguage } = useI18n();
  const { isConnected, address } = useAccount();
  const { data: balanceData } = useBalance({ address });
  const { hasPassport } = useWizardPassport();
  const [currentStep, setCurrentStep] = useState(1);
  const [hasSigned, setHasSigned] = useState(false);

  useEffect(() => {
    setHasSigned(false);
  }, [address]);

  const handleNext = useCallback(() => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep]);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const handleComplete = useCallback(() => {
    router.push('/');
  }, [router]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <IntroStep />;
      case 2:
        return <BackgroundStep />;
      case 3:
        return <WalletsStep />;
      case 4:
        return <WalletTypesStep />;
      case 5:
        return <WalletInstallationStep />;
      case 6:
        return <ConnectionStep onNext={handleNext} />;
      case 7:
        return <SignatureStep onNext={handleNext} onSuccess={() => setHasSigned(true)} />;
      case 8:
        return <FaucetStep onNext={handleNext} />;
      case 9:
        return <CelebrationStep onComplete={handleComplete} />;
      default:
        return <IntroStep />;
    }
  };

  const getStepProps = () => {
    // Custom disable logic for connection/signature/faucet steps
    if (currentStep === 6) {
      return { showNext: true, isNextDisabled: !isConnected };
    }
    if (currentStep === 7) {
      return { showNext: true, isNextDisabled: !isConnected || !hasSigned };
    }
    if (currentStep === 8) {
      const balance = balanceData ? parseFloat(balanceData.formatted) : 0;
      return { showNext: true, isNextDisabled: balance <= 0 };
    }
    if (currentStep === 9) {
      return { showBack: false, showNext: false };
    }

    if (hasPassport && currentStep < 9) {
      return { showBack: false, showNext: false };
    }

    return { showNext: true };
  };

  return (
    <OnboardingLayout
      currentStep={currentStep}
      totalSteps={TOTAL_STEPS}
      onNext={handleNext}
      onBack={currentStep > 1 && currentStep < 9 ? handleBack : undefined}
      onLanguageToggle={toggleLanguage}
      {...getStepProps()}
    >
      {hasPassport && currentStep < 9 ? (
        <AlreadyOnboardedStep />
      ) : (
        renderStep()
      )}
    </OnboardingLayout>
  );
}

export default function OnboardingPage() {
  return (
    <>
      <div className="page-background-decoration" />
      <OnboardingContent />
    </>
  );
}
