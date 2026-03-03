// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./libs/WizardPassportXPMap.sol";
import "./interfaces/IWizardPassport.sol";

/**
 * @title WizardPassport
 * @dev Fully on-chain Soulbound ERC721 implementation for the Vibe2Wizard ecosystem.
 */
contract WizardPassport is ERC721, IWizardPassport {
    using Strings for uint256;
    using WizardPassportXPMap for uint256;

    uint256 private _nextTokenId;

    // Mapping to track user stats
    mapping(address => UserStats) private _userStats;

    // Events
    event PassportMinted(address indexed wizard, uint256 indexed tokenId);

    constructor()
        ERC721("WizardPassport", "WIZARD")
    {}

    /**
     * @dev Function to mint a new Wizard Passport. 
     * The passport is minted directly to the sender (msg.sender).
     * Publicly accessible, but restricted to one per wallet.
     */
    function safeMint() public {
        uint256 tokenId = _nextTokenId++;
        
        // Initialize level if needed
        if (_userStats[msg.sender].level == 0) {
            _userStats[msg.sender].level = 1;
        }

        _safeMint(msg.sender, tokenId);
        emit PassportMinted(msg.sender, tokenId);
    }

    /**
     * @dev Adds experience points to a user and handles leveling up.
     * @param user The address of the user.
     * @param amount The amount of XP to add.
     * Note: Private to prevent arbitrary external manipulation.
     */
    function _addXP(address user, uint256 amount) private {
        UserStats storage stats = _userStats[user];
        stats.xp += amount;
        
        uint256 newLevel = WizardPassportXPMap.calculateLevel(stats.xp);
        
        emit XPGained(user, amount, stats.xp);

        if (newLevel > stats.level) {
            stats.level = newLevel;
            emit LevelUp(user, newLevel);
        }
    }

    /**
     * @dev Returns the stats for a given user.
     */
    function getUserStats(address user) external view override returns (UserStats memory) {
        return _userStats[user];
    }

    /**
     * @dev Returns the XP required for a specific level.
     */
    function getXPThreshold(uint256 level) external pure override returns (uint256) {
        return WizardPassportXPMap.getXPThreshold(level);
    }

    /**
     * @dev Generates the on-chain metadata as a Base64 encoded JSON.
     * @param tokenId The ID of the token to query.
     */
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        _requireOwned(tokenId);
        address owner = ownerOf(tokenId);
        UserStats memory stats = _userStats[owner];

        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(
                    bytes(
                        abi.encodePacked(
                            '{"name": "Wizard Passport #', tokenId.toString(), 
                            '", "description": "An official identity passport for the Vibe2Wizard ecosystem. Fully on-chain.", ',
                            '"image": "data:image/svg+xml;base64,', 
                            Base64.encode(bytes(_generateSVG(tokenId, stats))), 
                            '", "attributes": [',
                            '{"trait_type": "Level", "value": ', stats.level.toString(), '}, ',
                            '{"trait_type": "XP", "value": ', stats.xp.toString(), '}, ',
                            '{"trait_type": "Type", "value": "Onboarding Passport"}]}'
                        )
                    )
                )
            )
        );
    }

    /**
     * @dev Internal function to generate a dynamic SVG for the passport.
     */
    function _generateSVG(uint256 tokenId, UserStats memory stats) internal pure returns (string memory) {
        return string(abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
            '<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">',
            '<stop offset="0%" style="stop-color:#4a00e0" /><stop offset="100%" style="stop-color:#8e2de2" />',
            '</linearGradient></defs><rect width="100%" height="100%" fill="url(#g)" />',
            '<rect x="20" y="20" width="310" height="310" fill="none" stroke="white" stroke-width="2" rx="15" />',
            '<text x="50%" y="30%" fill="white" font-family="Arial" font-size="28" font-weight="bold" text-anchor="middle">WIZARD</text>',
            '<text x="50%" y="40%" fill="white" font-family="Arial" font-size="18" text-anchor="middle">PASSPORT</text>',
            '<text x="50%" y="60%" fill="white" font-family="monospace" font-size="24" text-anchor="middle">LEVEL ', stats.level.toString(), '</text>',
            '<text x="50%" y="70%" fill="white" font-family="monospace" font-size="14" text-anchor="middle">XP: ', stats.xp.toString(), '</text>',
            '<text x="50%" y="85%" fill="white" font-family="monospace" font-size="32" text-anchor="middle">#', tokenId.toString(), '</text></svg>'
        ));
    }

    /**
     * @dev Override the internal _update function to enforce soulbound and limit rules.
     */
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721)
        returns (address)
    {
        address from = super._update(to, tokenId, auth);

        if (from != address(0) && to != address(0)) {
            revert("WizardPassport: This NFT is soulbound and cannot be transferred");
        }

        if (to != address(0)) {
            require(balanceOf(to) <= 1, "WizardPassport: Each wallet can only have one passport");
        }

        return from;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721)
        returns (bool)
    {
        return interfaceId == type(IWizardPassport).interfaceId || super.supportsInterface(interfaceId);
    }
}
