// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

error PriceNotMet(address nftAddress, uint256 tokenId, uint256 price);
error ItemNotForSale(address nftAddress, uint256 tokenId);
error NotListed(address nftAddress, uint256 tokenId);
error AlreadyListed(address nftAddress, uint256 tokenId);
error NoProceeds();
error NotOwner();
error PriceMustBeAboveZero();

contract NftMarketplace  {
    uint256 public s_tokenCounter=0;
    uint256 public s_factoryCounter=0;

    struct CarbonCredit {
        uint256 serial;
        uint256 price;
        address owner;
    }

    struct Factory{
         uint256 serial;
         string  person;
         string  factoryName;
         uint256 electricity;
         address owner;
         uint256 paper;
         uint256 water;
    }
    event FactoryCreated(
       uint256 serial,
       address owner,
       string person,
       string factoryName
    );
    event FactoryEdited(
        uint256 serial,
        address owner,
        uint256 paper,
        uint256 electricity,
        uint256 water);

    event ItemListed(
        address seller,
        uint256 serial,
        uint256 price
    );
    event ItemBought(
        address  buyer,
        uint256 serial,
        uint256 price
    );

    mapping(uint256 => CarbonCredit) private s_credits;
    mapping(address => uint256) private s_proceeds;
    mapping(uint256=> Factory) private s_factories;
    /////////////////////
    // Main Functions //
    /////////////////////
  
    function listItem(
        address _owner,
        uint256 price
    )
        public
    {
        s_credits[s_tokenCounter]=CarbonCredit(s_tokenCounter,price,_owner);
        emit ItemListed( msg.sender,s_tokenCounter, price);
        s_tokenCounter++;
    }

    function addFactory(address _owner,string memory _person, string memory _factoryName) public{

        s_factories[s_factoryCounter]=Factory(s_factoryCounter,_person,_factoryName,0,_owner,0,0);
        
        emit FactoryCreated(s_factoryCounter,s_factories[s_factoryCounter].owner,s_factories[s_factoryCounter].person,s_factories[s_factoryCounter].factoryName);
        s_factoryCounter+=1;
    }


    function editFactory(uint256 serial,uint256 _electricity,uint256 _paper,uint256 _water) public{
        s_factories[serial].electricity+=_electricity;
        s_factories[serial].paper+=_paper;
        s_factories[serial].water+=_water;
       emit FactoryEdited(s_factoryCounter,s_factories[serial].owner,s_factories[serial].paper,s_factories[serial].electricity,s_factories[serial].water);
    }


    function buyItem(uint256 serial)
        external
        payable
      
    {
        s_proceeds[s_credits[serial].owner] += s_credits[serial].price;
        s_credits[serial].owner=msg.sender;

        emit ItemBought(msg.sender, serial, s_credits[serial].price);
    }

    /////////////////////
    // Getter Functions //
    /////////////////////

    function getNft(uint256 _serial) external view returns(CarbonCredit memory){

        return s_credits[_serial];
    }

    function getFactory(uint256 _serial) external view returns(Factory memory){
       return s_factories[_serial];
    }

    function getProceeds(address seller) external view returns (uint256) {
        return s_proceeds[seller];
    }

}
