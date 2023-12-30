// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

//forge install openzeppelin/openzeppelin-contracts --no-commit
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/*
contract Box is Ownable {
    uint256 private value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Stores a new value in the contract
    function store(uint256 newValue) public onlyOwner {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
} */

contract Box is Ownable {
    uint256 private value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Constructor - tillagd
    constructor(address _initialOwner) Ownable(_initialOwner) {}

    // Stores a new value in the contract
    function store(uint256 newValue) public onlyOwner {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
}
