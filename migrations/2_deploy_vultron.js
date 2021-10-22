const MyContract = artifacts.require("Vultron");

module.exports = async function (deployer, network, accounts) {
  // deployment steps
  await deployer.deploy(MyContract);
};