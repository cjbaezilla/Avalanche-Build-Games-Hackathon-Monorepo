# 🧙‍♂️ Vibe2Wizard Hardhat

This repository contains the smart contracts and deployment scripts for the **WizardPassport** NFT, part of the Vibe2Wizard ecosystem.

## 📜 Smart Contracts

### `WizardPassport.sol`
A secure and simple **ERC721** NFT contract built using the **OpenZeppelin 5.0** library.

- **Standard**: ERC721 with URI Storage.
- **Access Control**: Ownable (only the owner can mint).
- **Metadata**: Support for individualized token URIs via `ERC721URIStorage`.

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

2. **Testnet/Mainnet**:
   Configure your network in `hardhat.config.js` and run:
   ```bash
   npx hardhat ignition deploy ./ignition/modules/WizardPassport.js --network <network_name>
   ```

## 🧪 Testing
Run the test suite:
```bash
npx hardhat test
```

## ⚙️ Configuration
The project is configured with **Solidity 0.8.20** and the `paris` EVM version to ensure compatibility across all EVM-compatible chains.

---
Built with ❤️ for the Vibe2Wizard community.
