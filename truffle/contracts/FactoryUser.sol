// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;


contract FactoryUser{

   struct Factory {
        uint256 electricity;
        uint256 water;
        uint256 paper;
        address owner;
        uint256 credits;
    }

    mapping(address=>Factory) s_factories;
     
 function getter()public returns(uint256) {
        return 0;
    }


}