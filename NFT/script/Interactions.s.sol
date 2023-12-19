// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;
// forge install ChainAccelOrg/foundry-devops --no-commit

import {Script} from "forge-std/Script.sol";
import {DevOpsTools} from "../lib/foundry-devops/src/DevOpsTools.sol";
import {BasicNft} from "../src/BasicNft.sol";

contract MintBasicNft is Script {
    string public constant HORSE_URI =
        "ipfs://bafybeiaakdkzpe4yzxpkhuiaw2kt3tpqeqgjfo6k2mabqpnevot5kto2hi";

    //"ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json";

    function run() external {
        address mostRecentlyDeployedBasicNft = DevOpsTools
            .get_most_recent_deployment("BasicNft", block.chainid);
        mintNftOnContract(mostRecentlyDeployedBasicNft);
    }

    function mintNftOnContract(address contractAddress) public {
        vm.startBroadcast();
        BasicNft(contractAddress).mintNft(HORSE_URI);
        vm.stopBroadcast();
    }
}
