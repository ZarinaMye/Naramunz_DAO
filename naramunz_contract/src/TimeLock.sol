// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// TimeLock owns MyGovenor
import {TimelockController} from "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimeLock is TimelockController {
    // minDelay is how long you have to wait before executing
    // proposer is the list of addresses that can propose a new proposal - update to anybody
    // executor is the list of addresses that can execute the proposal - update to anybody
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors
    ) TimelockController(minDelay, proposers, executors, msg.sender) {}
}
