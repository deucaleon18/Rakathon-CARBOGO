const FactoryUser = artifacts.require("FactoryUser");

module.exports = function (deployer) {
  deployer.deploy(FactoryUser);
};
