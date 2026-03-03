// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IWizardPassport
 * @dev Interface for the WizardPassport level and experience system.
 */
interface IWizardPassport {
    struct UserStats {
        uint256 xp;
        uint256 level;
    }

    /**
     * @dev Returns the stats for a given user.
     */
    function getUserStats(address user) external view returns (UserStats memory);

    /**
     * @dev Returns the XP required for a specific level.
     * @param level The level to query (1-100).
     */
    function getXPThreshold(uint256 level) external pure returns (uint256);

    /**
     * @dev Emitted when a user's level increases.
     */
    event LevelUp(address indexed user, uint256 newLevel);

    /**
     * @dev Emitted when XP is added to a user.
     */
    event XPGained(address indexed user, uint256 amount, uint256 totalXP);
}
