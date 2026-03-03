export const UserRegistrationABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_wizardPassportAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "username",
                "type": "string"
            }
        ],
        "name": "UserRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "username",
                "type": "string"
            }
        ],
        "name": "UserUpdated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "getAllUsers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_userAddress",
                "type": "address"
            }
        ],
        "name": "getUser",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "username",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "firstName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "lastName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "twitterUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "instagramUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "linkedinUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "telegramUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "avatarUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isRegistered",
                        "type": "bool"
                    }
                ],
                "internalType": "struct UserRegistration.UserProfile",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_username",
                "type": "string"
            }
        ],
        "name": "getUserByUsername",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "username",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "firstName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "lastName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "twitterUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "instagramUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "linkedinUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "telegramUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "avatarUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isRegistered",
                        "type": "bool"
                    }
                ],
                "internalType": "struct UserRegistration.UserProfile",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUserCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_userAddress",
                "type": "address"
            }
        ],
        "name": "isRegistered",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_username",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_firstName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_lastName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_twitterUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_instagramUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_linkedinUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_telegramUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_avatarUrl",
                "type": "string"
            }
        ],
        "name": "registerUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "wizardPassport",
        "outputs": [
            {
                "internalType": "contract IERC721",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
] as const;
