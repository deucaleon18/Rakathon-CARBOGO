const NftMarketplace = artifacts.require('./NftMarketplace.sol')
const BasicNft = artifacts.require('./BasicNft.sol')
const BasicNftTwo = artifacts.require('./BasicNftTwo.sol')
const FactoryUser =artifacts.require9('./FactoryUser.sol')

module.exports ={ 
  function (deployer) {
  deployer.deploy(NftMarketplace)
},


 function (deployer) {
  deployer.deploy(BasicNft)
},

 function (deployer) {
  deployer.deploy(BasicNftTwo)
},

function (deployer){
  deployer.deploy(FactoryUser)
}

}