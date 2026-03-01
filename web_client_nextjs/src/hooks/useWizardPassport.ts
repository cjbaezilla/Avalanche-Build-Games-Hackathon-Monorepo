import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { WizardPassportABI } from '@/contracts/WizardPassport';
import { useEffect } from 'react';

export function useWizardPassport() {
    const { address } = useAccount();
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

    const hasPassport = balance ? Number(balance) > 0 : false;

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
        }
    }, [isMintedSuccess, refetchBalance]);

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
        isBalanceLoading,
        isBalanceError,
        mintPassport,
        isMinting,
        isMintedSuccess,
        hash,
        writeError,
        waitError,
        refetchBalance,
        address,
        contractAddress,
    };
}
