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
     * @dev Returns the image URL for a specific level.
     */
    function getLevelImage(uint256 level) public pure override returns (string memory) {
        if (level >= 100) return "https://ipfs.io/ipfs/bafybeiaq4ned3zzjaxeyrpomwemqa4a7e323bdemql3bjaz2yha6342i5q";
        if (level >= 90) return "https://ipfs.io/ipfs/bafybeih62jvinvvccfmsdhylev2eigyorgxpy4igmxvcoes5p7ftokaeie";
        if (level >= 80) return "https://ipfs.io/ipfs/bafybeicvihyvmo3d7euimen3bcbuftbho3hfapaenfh6j2stiomsrrc57u";
        if (level >= 70) return "https://ipfs.io/ipfs/bafybeic7oozlteewjzxf243smhvat6jcmrewhryb367u5ohqzq5zu7znlu";
        if (level >= 60) return "https://ipfs.io/ipfs/bafybeifgwdnylz6jjyruuqasmlwakeijz3pzs4kkly3bg6ci6puurm5lwm";
        if (level >= 50) return "https://ipfs.io/ipfs/bafybeigmnycqbpico4lqznj6xagdwjaocaqzzssjrumyffyt2duzd76u6m";
        if (level >= 40) return "https://ipfs.io/ipfs/bafybeidfmztwlyiw223mubieumegpvhb5fdfcvpmuc3sgj323iw5mkqule";
        if (level >= 30) return "https://ipfs.io/ipfs/bafybeidzduxp2rytrx2eqxg6skx6huffju6uvmdrnde4oashbw6lcticsq";
        if (level >= 20) return "https://ipfs.io/ipfs/bafybeie4ufdq7kqm6gk24kpekcpwkfijmxsxc33ogtxgeixxxnjtl5gzny";
        return "https://ipfs.io/ipfs/bafybeicd5pabcwgppnekgimxur4n3jjagc2n3b6pmu5blp5td3kvuz2osu";
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
                            '", "description": "An official identity passport for the Vibe2Wizard ecosystem.", ',
                            '"image": "', getLevelImage(stats.level), 
                            '", "attributes": [',
                            '{"trait_type": "Level", "value": ', stats.level.toString(), '}, ',
                            '{"trait_type": "XP", "value": ', stats.xp.toString(), '}, ',
                            '{"trait_type": "Type", "value": "Wizard Onboarding Passport"}]}'
                        )
                    )
                )
            )
        );
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
