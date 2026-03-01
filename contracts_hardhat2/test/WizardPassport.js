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
            expect(await wizardPassport.symbol()).to.equal("WZP");
        });
    });

    describe("Minting", function () {
        it("Should allow owner to mint", async function () {
            const tokenURI = "ipfs://QmWizardPassportMetadata";

            await expect(wizardPassport.safeMint(otherAccount.address, tokenURI))
                .to.emit(wizardPassport, "Transfer")
                .withArgs(ethers.ZeroAddress, otherAccount.address, 0);

            expect(await wizardPassport.ownerOf(0)).to.equal(otherAccount.address);
            expect(await wizardPassport.tokenURI(0)).to.equal(tokenURI);
        });

        it("Should fail if a non-owner tries to mint", async function () {
            const tokenURI = "ipfs://QmWizardPassportMetadata";

            await expect(
                wizardPassport.connect(otherAccount).safeMint(otherAccount.address, tokenURI)
            ).to.be.revertedWithCustomError(wizardPassport, "OwnableUnauthorizedAccount");
        });
    });
});
