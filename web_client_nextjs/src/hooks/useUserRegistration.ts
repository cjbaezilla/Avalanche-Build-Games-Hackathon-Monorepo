import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { UserRegistrationABI } from '@/contracts/UserRegistration';
import { useEffect } from 'react';

export function useUserRegistration() {
    const { address } = useAccount();
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_USER_REGISTRATION_ADDRESS as `0x${string}`;

    // Read registration status
    const {
        data: registrationStatus,
        refetch: refetchRegistrationStatus,
        isLoading: isRegistrationLoading,
    } = useReadContract({
        address: contractAddress,
        abi: UserRegistrationABI,
        functionName: 'isRegistered',
        args: address ? [address] : undefined,
        query: {
            enabled: !!address,
        }
    });

    // Read user profile
    const {
        data: userProfile,
        refetch: refetchUserProfile,
        isLoading: isProfileLoading,
    } = useReadContract({
        address: contractAddress,
        abi: UserRegistrationABI,
        functionName: 'getUser',
        args: address ? [address] : undefined,
        query: {
            enabled: !!address,
        }
    });

    const isRegistered = !!registrationStatus;

    // Registration logic
    const {
        data: hash,
        writeContract,
        isPending: isWriting,
        error: writeError
    } = useWriteContract();

    const {
        isLoading: isWaiting,
        isSuccess: isRegistrationSuccess,
        error: waitError
    } = useWaitForTransactionReceipt({
        hash,
    });

    const isProcessing = isWriting || isWaiting;

    useEffect(() => {
        if (isRegistrationSuccess) {
            refetchRegistrationStatus();
            refetchUserProfile();
        }
    }, [isRegistrationSuccess, refetchRegistrationStatus, refetchUserProfile]);

    const registerUser = (
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        twitterUrl: string,
        instagramUrl: string,
        linkedinUrl: string,
        telegramUrl: string,
        avatarUrl: string
    ) => {
        writeContract({
            address: contractAddress,
            abi: UserRegistrationABI,
            functionName: 'registerUser',
            args: [
                username,
                firstName,
                lastName,
                email,
                twitterUrl,
                instagramUrl,
                linkedinUrl,
                telegramUrl,
                avatarUrl
            ],
        });
    };

    return {
        isRegistered,
        userProfile,
        isRegistrationLoading,
        isProfileLoading,
        registerUser,
        isProcessing,
        isRegistrationSuccess,
        hash,
        writeError,
        waitError,
        refetchRegistrationStatus,
        refetchUserProfile,
        address,
        contractAddress,
    };
}
