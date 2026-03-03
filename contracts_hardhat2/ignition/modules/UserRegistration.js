const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("UserRegistrationModule", (m) => {
    const userRegistration = m.contract("UserRegistration", ["0x2341452ba859F19fF6D93054cb9759E118DdA50C"]);

    return { userRegistration };
});
