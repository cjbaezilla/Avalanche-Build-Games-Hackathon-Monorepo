import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { UserRegistrationABI } from '@/contracts/UserRegistration';
import { useEffect } from 'react';

export function useUserRegistration(targetAddress?: `0x${string}`) {
    const { address: connectedAddress } = useAccount();
    const address = targetAddress || connectedAddress;
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

    // Read user count
    const {
        data: userCount,
        refetch: refetchUserCount
    } = useReadContract({
        address: contractAddress,
        abi: UserRegistrationABI,
        functionName: 'getUserCount',
    });

    // Read all users
    const {
        data: allUsers,
        refetch: refetchAllUsers
    } = useReadContract({
        address: contractAddress,
        abi: UserRegistrationABI,
        functionName: 'getAllUsers',
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
            refetchUserCount?.();
            refetchAllUsers?.();
        }
    }, [isRegistrationSuccess, refetchRegistrationStatus, refetchUserProfile, refetchUserCount, refetchAllUsers]);

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
        userCount,
        allUsers,
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
        refetchUserCount,
        refetchAllUsers,
        address,
        connectedAddress,
        contractAddress,
    };
}

// Separate hook for searching users by username
export function useUserLookup(username: string) {
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_USER_REGISTRATION_ADDRESS as `0x${string}`;

    return useReadContract({
        address: contractAddress,
        abi: UserRegistrationABI,
        functionName: 'getUserByUsername',
        args: [username],
        query: {
            enabled: !!username,
        }
    });
}
