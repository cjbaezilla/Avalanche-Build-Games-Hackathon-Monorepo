require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, FUJI_RPC_URL, SNOWTRACE_API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      evmVersion: "paris",
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    }
  },
  networks: {
    fuji: {
      url: FUJI_RPC_URL || "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      fuji: SNOWTRACE_API_KEY || "snowtrace", // Snowtrace doesn't require a real key for Fuji usually, but it's good to have it
    },
    customChains: [
      {
        network: "fuji",
        chainId: 43113,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/43113/etherscan",
          browserURL: "https://testnet.snowtrace.io",
        },
      },
    ],
  },
};

