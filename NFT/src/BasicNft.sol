// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

//forge install OpenZeppelin/openzeppelin-contracts --no-commit
//remappings = ['@openzeppelin/contracts=lib/openzeppelin-contracts/contracts']    i foundry.toml

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BasicNft is ERC721 {
    error BasicNft__TokenUriNotFound();

    mapping(uint256 => string) private s_tokenIdToUri;
    uint256 private s_tokenCounter;

    constructor() ERC721("Horse", "HORSE") {
        s_tokenCounter = 0;
    }

    function mintNft(string memory tokenUri) public {
        s_tokenIdToUri[s_tokenCounter] = tokenUri;
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenCounter++;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        if (ownerOf(tokenId) == address(0)) {
            revert BasicNft__TokenUriNotFound();
        }
        return s_tokenIdToUri[tokenId];
        //return "ipfs://http://QmNMtCYX8eGZcZb6v4AKtgaXM1LafBH4MFQYUi2GSmygBT"; //destributed decentralised network
        //mha IPFS deploy
        //i browser: http://ipfs.io/ipfs/bildens hash  //detta blir endast på en node
    }
}
