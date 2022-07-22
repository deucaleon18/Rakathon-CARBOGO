const BasicNft = artifacts.require("BasicNft");

module.exports = function (deployer) {
  deployer.deploy(BasicNft);
};
