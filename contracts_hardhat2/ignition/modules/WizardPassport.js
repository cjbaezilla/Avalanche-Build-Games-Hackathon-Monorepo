const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("WizardPassportModule", (m) => {
    // Use the deployer address as the initial owner
    const deployer = m.getAccount(0);

    const wizardPassport = m.contract("WizardPassport", [deployer]);

    return { wizardPassport };
});
