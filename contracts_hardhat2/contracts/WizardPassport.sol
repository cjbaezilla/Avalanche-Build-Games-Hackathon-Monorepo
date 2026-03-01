// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title WizardPassport
 * @dev Soulbound ERC721 implementation for the Vibe2Wizard ecosystem.
 * Features:
 * - Public minting (everyone can mint)
 * - Restrict to 1 NFT per wallet
 * - Soulbound (transfers are disabled)
 */
contract WizardPassport is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor(address initialOwner)
        ERC721("WizardPassport", "WIZARD")
        Ownable(initialOwner)
    {}

    /**
     * @dev Function to mint a new NFT. Open to everyone.
     * @param to The address that will receive the minted NFT.
     * @param uri The metadata URI for the NFT.
     */
    function safeMint(address to, string memory uri) public {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    /**
     * @dev Override the internal _update function to enforce contract rules:
     * 1. Soulbound: Disables all transfers except minting and burning.
     * 2. Limit 1: Ensures a wallet cannot hold more than one passport.
     *
     * @param to Address receiving the token (or address(0) for burning).
     * @param tokenId The ID of the token being updated.
     * @param auth The address authorized for the update.
     * @return The previous owner of the token.
     */
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721)
        returns (address)
    {
        address from = super._update(to, tokenId, auth);

        // Soulbound: Revert if the transaction is a transfer between non-zero addresses.
        if (from != address(0) && to != address(0)) {
            revert("WizardPassport: This NFT is soulbound and cannot be transferred");
        }

        // Limit 1: Revert if the recipient ends up with more than one passport.
        if (to != address(0)) {
            require(balanceOf(to) == 1, "WizardPassport: Each wallet can only have one passport");
        }

        return from;
    }

    // The following functions are overrides required by Solidity for multiple inheritance.

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
