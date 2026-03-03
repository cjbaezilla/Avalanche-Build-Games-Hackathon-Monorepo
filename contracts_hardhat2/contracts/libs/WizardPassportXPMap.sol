// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

library WizardPassportXPMap {
    /**
     * @dev Returns the entire array of XP thresholds.
     */
    function getXPThresholds() public pure returns (uint256[100] memory) {
        return [
            uint256(0), 2000, 4620, 8040, 12489, 18258, 25712, 35309, 47471, 62769,
            81931, 105793, 135427, 172083, 217361, 273061, 341428, 425110, 527223, 651530,
            802642, 986112, 1208548, 1477742, 1802810, 2195341, 2667558, 3234503, 3913153, 4723663,
            5689640, 6840547, 8212351, 9846152, 11789353, 14096463, 16831047, 20067853, 23885296, 28378235,
            33661101, 39871432, 47173938, 55765952, 65874345, 77766357, 91752952, 108198746, 127528381, 150233722,
            176882007, 208205006, 245016005, 288220454, 338928478, 398466146, 468288982, 550197494, 646254491, 758906078,
            890894689, 1045579877, 1227076973, 1439953851, 1689282561, 1981631254, 2324140947, 2725587325, 3196283708, 3748202637,
            4394954871, 5153811745, 6043925470, 7087448321, 8311582169, 9747519362, 11432482473, 13408792998, 15726957889, 18445881030,
            21635100420, 25377133183, 29766851639, 34916073804, 40958389294, 48048108993, 56366324108, 66126186368, 77572434323, 90996763558,
            106745589938, 125224543914, 146906813839, 172344275890, 202180583800, 237168325084, 278217312092, 326427859821, 383023228791, 449406276829
        ];
    }

    /**
     * @dev Returns the total XP required for a given level (1-100).
     */
    function getXPThreshold(uint256 level) public pure returns (uint256) {
        if (level <= 1) return 0;
        if (level > 100) level = 100;

        return getXPThresholds()[level - 1];
    }

    /**
     * @dev Calculates the level based on total XP using binary search.
     */
    function calculateLevel(uint256 xp) public pure returns (uint256) {
        if (xp >= 449406276829) return 100;
        
        uint256 low = 1;
        uint256 high = 100;

        while (low < high) {
            uint256 mid = (low + high + 1) / 2;
            if (getXPThreshold(mid) <= xp) {
                low = mid;
            } else {
                high = mid - 1;
            }
        }
        return low;
    }
}
