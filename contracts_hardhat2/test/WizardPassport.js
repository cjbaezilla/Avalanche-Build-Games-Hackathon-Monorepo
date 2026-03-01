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
        wizardPassport = await WizardPassport.deploy();
    });

    describe("Deployment", function () {

        it("Should have the right name and symbol", async function () {
            expect(await wizardPassport.name()).to.equal("WizardPassport");
            expect(await wizardPassport.symbol()).to.equal("WIZARD");
        });
    });

    describe("Minting", function () {
        it("Should allow anyone to mint for themselves and generate on-chain metadata", async function () {
            await expect(wizardPassport.connect(otherAccount).safeMint())
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
            await wizardPassport.connect(otherAccount).safeMint();

            // Second mint for otherAccount - should fail
            await expect(
                wizardPassport.connect(otherAccount).safeMint()
            ).to.be.revertedWith("WizardPassport: Each wallet can only have one passport");
        });

        it("Should fail to transfer because it is soulbound", async function () {
            // Mint one for owner
            await wizardPassport.safeMint();

            // Attempt to transfer owner's passport to otherAccount - should fail with Soulbound error
            await expect(
                wizardPassport.transferFrom(owner.address, otherAccount.address, 0)
            ).to.be.revertedWith("WizardPassport: This NFT is soulbound and cannot be transferred");
        });
    });
});
