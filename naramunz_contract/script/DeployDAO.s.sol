// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {Script} from "forge-std/Script.sol";
import {DAO} from "../src/DAO.sol";

contract DeployDAO is Script {
    function run() external returns (DAO) {
        vm.startBroadcast(); //vm cheat code in Foundry, forge - std
        DAO dao = new DAO();
        vm.stopBroadcast();
        return dao;
    } //forge script script/DeployDAO.s.sol  för att testa filen på tillfällig url -anvil
    // för att deploya mha anvil, ge RPC_URL o private key från anvil:
    // anvil
    // ny terminal:
    // forge script script/DeployDAO.s.sol --rpc-url http://127.0.0.1:8545 --broadcast --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

    /* function run() public {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        // Deploy GovToken
        GovToken govToken = new GovToken();

        // Deploy MyGovernor
        MyGovernor myGovernor = new MyGovernor(govToken, govToken);

        vm.stopBroadcast();
     */
}
