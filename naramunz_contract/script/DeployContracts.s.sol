// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console2} from "forge-std/Script.sol";
import {MyGovernor} from "../src/MyGovernor.sol";

//import {GovToken} from "../src/GovToken.sol";

//Behöver göra om!!

contract DeployContracts is Script {
    function run() external returns (MyGovernor) {
        //vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
        vm.startBroadcast();

        // Deploy GovToken, Box, TimeLock
        //GovToken govToken = new GovToken();

        // Deploy MyGovernor
        MyGovernor myGovernor = new MyGovernor();

        vm.stopBroadcast();
        return myGovernor;
    }
}

//I detta script skapas först en instans av GovToken-kontraktet. Sedan skapas en instans av MyGovernor-kontraktet, där GovToken-instansen används som argument till MyGovernor-konstruktorn.

//För att köra detta script:
