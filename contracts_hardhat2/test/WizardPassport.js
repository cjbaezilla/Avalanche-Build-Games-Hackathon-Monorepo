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
        it("Should allow anyone to mint and generate on-chain metadata", async function () {
            await expect(wizardPassport.connect(otherAccount).safeMint(otherAccount.address))
                .to.emit(wizardPassport, "Transfer")
                .withArgs(ethers.ZeroAddress, otherAccount.address, 0);

            expect(await wizardPassport.ownerOf(0)).to.equal(otherAccount.address);

            const uri = await wizardPassport.tokenURI(0);
            expect(uri).to.include("data:application/json;base64,");

            // Verifying it's a valid Base64 JSON
            const base64Data = uri.split(",")[1];
            const decodedJson = JSON.parse(Buffer.from(base64Data, 'base64').toString());
            expect(decodedJson.name).to.include("Wizard Passport #0");
            expect(decodedJson.image).to.include("data:image/svg+xml;base64,");
        });

        it("Should fail if an address already has a passport", async function () {
            // First mint for otherAccount
            await wizardPassport.safeMint(otherAccount.address);

            // Second mint for otherAccount - should fail
            await expect(
                wizardPassport.safeMint(otherAccount.address)
            ).to.be.revertedWith("WizardPassport: Each wallet can only have one passport");
        });

        it("Should fail to transfer because it is soulbound", async function () {
            // Mint one for owner
            await wizardPassport.safeMint(owner.address);

            // Attempt to transfer owner's passport to otherAccount - should fail with Soulbound error
            await expect(
                wizardPassport.transferFrom(owner.address, otherAccount.address, 0)
            ).to.be.revertedWith("WizardPassport: This NFT is soulbound and cannot be transferred");
        });
    });
});
