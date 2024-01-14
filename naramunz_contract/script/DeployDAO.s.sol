// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {Script} from "forge-std/Script.sol";
import {DAO} from "../src/DAO.sol";

contract DeployDAO is Script {
    function run() external returns (DAO) {
        vm.startBroadcast();
        DAO dao = new DAO();
        vm.stopBroadcast();
        return dao;
    }
}

// Deploy with terminal on Sepholia:
// source .env
// forge script script/DeployDAO.s.sol --rpc-url $SEPHOLIA_RPC_URL --private-key $PRIVATE_KEY --broadcast
