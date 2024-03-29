// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {ERC721} from "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockERC721 is ERC721 {
    constructor() ERC721("MockERC721", "MCK") {}

    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }
}
