const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WizardPassport", function () {
    let wizardPassport;
    let owner;
    let otherAccount;

    beforeEach(async function () {
        // Get signers
        [owner, otherAccount] = await ethers.getSigners();

        // Deploy contract
        const WizardPassport = await ethers.getContractFactory("WizardPassport");
        wizardPassport = await WizardPassport.deploy(owner.address);
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await wizardPassport.owner()).to.equal(owner.address);
        });

        it("Should have the right name and symbol", async function () {
            expect(await wizardPassport.name()).to.equal("WizardPassport");
            expect(await wizardPassport.symbol()).to.equal("WIZARD");
        });
    });

    describe("Minting", function () {
        it("Should allow anyone to mint", async function () {
            const tokenURI = "ipfs://QmWizardPassportMetadata";

            await expect(wizardPassport.connect(otherAccount).safeMint(otherAccount.address, tokenURI))
                .to.emit(wizardPassport, "Transfer")
                .withArgs(ethers.ZeroAddress, otherAccount.address, 0);

            expect(await wizardPassport.ownerOf(0)).to.equal(otherAccount.address);
            expect(await wizardPassport.tokenURI(0)).to.equal(tokenURI);
        });

        it("Should fail if an address already has a passport", async function () {
            const tokenURI = "ipfs://QmWizardPassportMetadata";

            // First mint for otherAccount
            await wizardPassport.safeMint(otherAccount.address, tokenURI);

            // Second mint for otherAccount - should fail
            await expect(
                wizardPassport.safeMint(otherAccount.address, "ipfs://AnotherOne")
            ).to.be.revertedWith("WizardPassport: Each wallet can only have one passport");
        });

        it("Should fail to transfer because it is soulbound", async function () {
            const tokenURI = "ipfs://QmWizardPassportMetadata";

            // Mint one for owner
            await wizardPassport.safeMint(owner.address, tokenURI);

            // Attempt to transfer owner's passport to otherAccount - should fail with Soulbound error
            await expect(
                wizardPassport.transferFrom(owner.address, otherAccount.address, 0)
            ).to.be.revertedWith("WizardPassport: This NFT is soulbound and cannot be transferred");
        });
    });
});
