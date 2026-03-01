import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import {
  OnboardingLayout,
  IntroStep,
  BackgroundStep,
  WalletsStep,
  WalletTypesStep,
  RecommendedWalletsStep,
  InstallationStep,
  ConnectionStep,
  SignatureStep,
  CelebrationStep,
} from '@/components/onboarding';
import { I18nProvider, useI18n } from '@/i18n';

const TOTAL_STEPS = 9;

function OnboardingContent() {
  const router = useRouter();
  const { t, toggleLanguage } = useI18n();
  const [currentStep, setCurrentStep] = useState(1);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [signatureError, setSignatureError] = useState<string | null>(null);
  const [signatureSuccess, setSignatureSuccess] = useState(false);

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

  const handleConnect = useCallback(async () => {
    setIsConnecting(true);
    setConnectionError(null);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const win = typeof window !== 'undefined' ? window : null;
    const ethereum = win && (win as unknown as { ethereum?: { isMetaMask?: boolean; isRabby?: boolean } }).ethereum;
    const hasWallet = ethereum && (ethereum.isMetaMask || ethereum.isRabby);
    
    if (hasWallet) {
      setIsConnecting(false);
      handleNext();
    } else {
      setIsConnecting(false);
      setConnectionError(t.onboarding.steps.connection.notFound);
    }
  }, [handleNext, t]);

  const handleSign = useCallback(async () => {
    setIsSigning(true);
    setSignatureError(null);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const shouldSucceed = Math.random() > 0.3;
    
    if (shouldSucceed) {
      setIsSigning(false);
      setSignatureSuccess(true);
      setTimeout(() => {
        handleNext();
      }, 1500);
    } else {
      setIsSigning(false);
      setSignatureError(t.onboarding.steps.signature.error);
    }
  }, [handleNext, t]);

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
        return <RecommendedWalletsStep />;
      case 6:
        return <InstallationStep />;
      case 7:
        return (
          <ConnectionStep
            isConnecting={isConnecting}
            error={connectionError}
            onConnect={handleConnect}
          />
        );
      case 8:
        return (
          <SignatureStep
            isSigning={isSigning}
            success={signatureSuccess}
            error={signatureError}
            onSign={handleSign}
          />
        );
      case 9:
        return <CelebrationStep onComplete={handleComplete} />;
      default:
        return <IntroStep />;
    }
  };

  const getStepProps = () => {
    if (currentStep === 7) {
      return { showNext: false, isLoading: isConnecting };
    }
    if (currentStep === 8) {
      return { 
        showNext: false, 
        isLoading: isSigning || signatureSuccess,
        nextLabel: signatureSuccess ? t.onboarding.steps.signature.success : undefined
      };
    }
    if (currentStep === 9) {
      return { showBack: false, showNext: false };
    }
    return {};
  };

  return (
    <OnboardingLayout
      currentStep={currentStep}
      totalSteps={TOTAL_STEPS}
      onNext={handleNext}
      onBack={currentStep > 1 && currentStep < 9 ? handleBack : undefined}
      onLanguageToggle={toggleLanguage}
      showBack={currentStep > 1 && currentStep < 9}
      showNext={currentStep < 7}
      {...getStepProps()}
    >
      {renderStep()}
    </OnboardingLayout>
  );
}

export default function OnboardingPage() {
  return <OnboardingContent />;
}
