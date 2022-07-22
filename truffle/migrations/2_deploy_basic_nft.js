require("dotenv").config()

const government=process.env.GOV

const BasicNft = artifacts.require("BasicNft");

module.exports = function (deployer) {
  deployer.deploy(BasicNft);
};
