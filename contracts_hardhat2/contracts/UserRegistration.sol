// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/**
 * @title UserRegistration
 * @dev Stores user profile information, requiring a Wizard Passport NFT to register.
 */
contract UserRegistration {
    struct UserProfile {
        string username;
        string firstName;
        string lastName;
        string email;
        string twitterUrl;
        string instagramUrl;
        string linkedinUrl;
        string telegramUrl;
        string avatarUrl;
        bool isRegistered;
    }

    // The Wizard Passport NFT contract
    IERC721 public immutable wizardPassport;

    // Mapping from user address to their profile
    mapping(address => UserProfile) private _users;

    // List of all registered usernames to check for uniqueness
    string[] private _allUsernames;

    // List of all registered user addresses for enumeration
    address[] private _userAddresses;

    // Events
    event UserRegistered(address indexed userAddress, string username);
    event UserUpdated(address indexed userAddress, string username);

    /**
     * @dev Constructor that sets the Wizard Passport NFT address.
     * @param _wizardPassportAddress Address of the WizardPassport contract.
     */
    constructor(address _wizardPassportAddress) {
        require(_wizardPassportAddress != address(0), "Invalid passport address");
        wizardPassport = IERC721(_wizardPassportAddress);
    }

    /**
     * @dev Modifier to ensure the caller owns a Wizard Passport NFT.
     */
    modifier onlyWithPassport() {
        require(wizardPassport.balanceOf(msg.sender) > 0, "Must own a Wizard Passport NFT to register");
        _;
    }

    /**
     * @dev Modifier to validate username uniqueness and immutability.
     * @param _username The username to validate.
     */
    modifier validateRegistration(string memory _username) {
        require(bytes(_username).length > 0, "Username cannot be empty");

        if (_users[msg.sender].isRegistered) {
            // Requirement: Username cannot be changed once set
            require(
                keccak256(bytes(_users[msg.sender].username)) == keccak256(bytes(_username)),
                "Username cannot be changed"
            );
        } else {
            // Requirement: Check uniqueness using an array since mappings cannot be iterated
            for (uint256 i = 0; i < _allUsernames.length; i++) {
                require(
                    keccak256(bytes(_allUsernames[i])) != keccak256(bytes(_username)),
                    "Username already taken"
                );
            }
        }
        _;
    }

    /**
     * @dev Registers or updates a user profile.
     * @param _username User's unique and immutable username
     * @param _firstName User's first name
     * @param _lastName User's last name
     * @param _email User's email address
     * @param _twitterUrl User's Twitter profile URL
     * @param _instagramUrl User's Instagram profile URL
     * @param _linkedinUrl User's LinkedIn profile URL
     * @param _telegramUrl User's Telegram URL
     * @param _avatarUrl User's avatar image URL
     */
    function registerUser(
        string memory _username,
        string memory _firstName,
        string memory _lastName,
        string memory _email,
        string memory _twitterUrl,
        string memory _instagramUrl,
        string memory _linkedinUrl,
        string memory _telegramUrl,
        string memory _avatarUrl
    ) external onlyWithPassport validateRegistration(_username) {
        bool alreadyRegistered = _users[msg.sender].isRegistered;

        _users[msg.sender] = UserProfile({
            username: _username,
            firstName: _firstName,
            lastName: _lastName,
            email: _email,
            twitterUrl: _twitterUrl,
            instagramUrl: _instagramUrl,
            linkedinUrl: _linkedinUrl,
            telegramUrl: _telegramUrl,
            avatarUrl: _avatarUrl,
            isRegistered: true
        });

        if (!alreadyRegistered) {
            _allUsernames.push(_username);
            _userAddresses.push(msg.sender);
            emit UserRegistered(msg.sender, _username);
        } else {
            emit UserUpdated(msg.sender, _username);
        }
    }

    /**
     * @dev Returns the profile of a registered user.
     * @param _userAddress The address of the user to query.
     */
    function getUser(
        address _userAddress
    ) external view returns (UserProfile memory) {
        require(_users[_userAddress].isRegistered, "User not registered");
        return _users[_userAddress];
    }

    /**
     * @dev Returns the profile of a user by their username.
     * @param _username The username to query.
     */
    function getUserByUsername(string memory _username) external view returns (UserProfile memory) {
        for (uint256 i = 0; i < _allUsernames.length; i++) {
            if (keccak256(bytes(_allUsernames[i])) == keccak256(bytes(_username))) {
                return _users[_userAddresses[i]];
            }
        }
        revert("User not found");
    }

    /**
     * @dev Checks if a user is registered.
     * @param _userAddress The address of the user to check.
     */
    function isRegistered(address _userAddress) external view returns (bool) {
        return _users[_userAddress].isRegistered;
    }

    /**
     * @dev Returns all registered user addresses.
     */
    function getAllUsers() external view returns (address[] memory) {
        return _userAddresses;
    }

    /**
     * @dev Returns the total number of registered users.
     */
    function getUserCount() external view returns (uint256) {
        return _userAddresses.length;
    }
}
