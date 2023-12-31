// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {MyGovernor} from "../src/MyGovernor.sol";
import {GovToken} from "../src/GovToken.sol";

//Behöver göra om!!

contract DeployContracts is Script {
    function run() public {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        // Deploy GovToken
        GovToken govToken = new GovToken();

        // Deploy MyGovernor
        MyGovernor myGovernor = new MyGovernor(govToken, govToken);

        vm.stopBroadcast();
    }
}

//I detta script skapas först en instans av GovToken-kontraktet. Sedan skapas en instans av MyGovernor-kontraktet, där GovToken-instansen används som argument till MyGovernor-konstruktorn.

//För att köra detta script:

//forge script DeployContracts --rpc-url https://eth-sepolia.g.alchemy.com/v2/<API_KEY> --private-key <PRIVATE_KEY> --broadcast
//Ersätt <API_KEY> med din Alchemy API-nyckel och <PRIVATE_KEY> med din privata nyckel.
