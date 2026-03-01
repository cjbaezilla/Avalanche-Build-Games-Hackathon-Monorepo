# 🧙‍♂️ Vibe2Wizard Hardhat

This repository contains the smart contracts and deployment scripts for the **WizardPassport** NFT, part of the Vibe2Wizard ecosystem.

## 📜 Smart Contracts

### `WizardPassport.sol`
A specialized **ERC721** NFT contract built using the **OpenZeppelin 5.0** library, serving as the primary identity token for the ecosystem.

- **Standard**: ERC721 with Fully On-chain Metadata.
- **Soulbound**: Non-transferable identity token (transfers are disabled).
- **Public Minting**: Open access for everyone to mint their own passport.
- **Wallet Restriction**: Strictly enforced limit of **1 NFT per wallet**.
- **Metadata**: Fully on-chain JSON and SVG generation using **Base64 encoding**. No external storage (IPFS/HTTPS) required.

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
Clone the repository and install dependencies:
```bash
npm install
```

### Compilation
Compile the smart contracts:
```bash
npx hardhat compile
```

### Deployment
The project uses **Hardhat Ignition** for deployments. To deploy the WizardPassport contract:

1. **Local Node (Dev)**:
   ```bash
   npx hardhat node
   # Then in another terminal:
   npx hardhat ignition deploy ./ignition/modules/WizardPassport.js --network localhost
   ```

2. **Testnet (Avalanche Fuji)**:
   Ensure you have a `.env` file with your `PRIVATE_KEY`.
   ```bash
   npx hardhat ignition deploy ./ignition/modules/WizardPassport.js --network fuji
   ```


## 🧪 Testing
Run the comprehensive test suite (including validation for soulbound transfers and wallet limits):
```bash
npx hardhat test
```

## ⚙️ Configuration
The project is configured for **Avalanche Fuji** testnet and local development.
- **Solidity**: 0.8.20 (EVM: `paris`)
- **Network**: `fuji` (Chain ID: 43113)
- **Environment**: Uses `dotenv` for secrets. See `.env.example`.


---
Built with ❤️ for the Vibe2Wizard community.
