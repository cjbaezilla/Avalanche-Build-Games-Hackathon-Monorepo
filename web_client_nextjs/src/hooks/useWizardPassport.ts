import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { WizardPassportABI } from '@/contracts/WizardPassport';
import { useEffect } from 'react';

export function useWizardPassport(targetAddress?: `0x${string}`) {
    const { address: connectedAddress } = useAccount();
    const address = targetAddress || connectedAddress;
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_WIZARD_PASSPORT_ADDRESS as `0x${string}`;

    // Read balance to check ownership
    const {
        data: balance,
        refetch: refetchBalance,
        isLoading: isBalanceLoading,
        isError: isBalanceError
    } = useReadContract({
        address: contractAddress,
        abi: WizardPassportABI,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
        query: {
            enabled: !!address,
        }
    });

    // Read user stats (XP and Level)
    const {
        data: userStats,
        refetch: refetchStats,
        isLoading: isStatsLoading,
    } = useReadContract({
        address: contractAddress,
        abi: WizardPassportABI,
        functionName: 'getUserStats',
        args: address ? [address] : undefined,
        query: {
            enabled: !!address,
        }
    });

    const hasPassport = balance ? Number(balance) > 0 : false;
    const xp = userStats ? Number((userStats as any).xp) : 0;
    const level = userStats ? Number((userStats as any).level) : 1;

    // Read level image
    const {
        data: levelImage,
    } = useReadContract({
        address: contractAddress,
        abi: WizardPassportABI,
        functionName: 'getLevelImage',
        args: [BigInt(level)],
        query: {
            enabled: hasPassport,
        }
    });

    // Read next level XP threshold
    const {
        data: nextLevelXP,
        isLoading: isXPThresholdLoading,
    } = useReadContract({
        address: contractAddress,
        abi: WizardPassportABI,
        functionName: 'getXPThreshold',
        args: [BigInt(level + 1)],
        query: {
            enabled: hasPassport,
        }
    });

    // Minting logic
    const {
        data: hash,
        writeContract,
        isPending: isWriting,
        error: writeError
    } = useWriteContract();

    const {
        isLoading: isWaiting,
        isSuccess: isMintedSuccess,
        error: waitError
    } = useWaitForTransactionReceipt({
        hash,
    });

    const isMinting = isWriting || isWaiting;

    useEffect(() => {
        if (isMintedSuccess) {
            refetchBalance();
            refetchStats();
        }
    }, [isMintedSuccess, refetchBalance, refetchStats]);

    const mintPassport = () => {
        writeContract({
            address: contractAddress,
            abi: WizardPassportABI,
            functionName: 'safeMint',
        });
    };

    return {
        hasPassport,
        balance,
        xp,
        level,
        nextLevelXP: nextLevelXP ? Number(nextLevelXP) : (level + 1) * 500, // Fallback to old formula if loading or error
        levelImage: levelImage as string,
        isBalanceLoading,
        isBalanceError,
        isStatsLoading,
        isXPThresholdLoading,
        mintPassport,
        isMinting,
        isMintedSuccess,
        hash,
        writeError,
        waitError,
        refetchBalance,
        refetchStats,
        address,
        connectedAddress,
        contractAddress,
    };
}

// Separate hook for XP Thresholds
export function useXPThreshold(level: number) {
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_WIZARD_PASSPORT_ADDRESS as `0x${string}`;

    return useReadContract({
        address: contractAddress,
        abi: WizardPassportABI,
        functionName: 'getXPThreshold',
        args: [BigInt(level)],
    });
}
