const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("WizardPassportModule", (m) => {
    const wizardPassport = m.contract("WizardPassport", []);

    return { wizardPassport };
});
