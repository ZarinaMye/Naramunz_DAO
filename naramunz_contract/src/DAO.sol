// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {ERC721} from "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

//npm install @openzeppelin/contracts

contract DAO {
    struct Proposal {
        string title;
        string description;
        uint256 yesVotes;
        uint256 noVotes;
    }

    Proposal[] public proposals;
    mapping(uint256 => mapping(address => bool)) public voted;

    function createProposal(
        string memory title,
        string memory description,
        address tokenAddress,
        uint256 tokenId
    ) public {
        ERC721 token = ERC721(tokenAddress);
        require(
            token.ownerOf(tokenId) == msg.sender,
            "You do not own this token"
        );

        proposals.push(Proposal(title, description, 0, 0));
    }

    function vote(
        uint256 proposalId,
        address tokenAddress,
        uint256 tokenId,
        bool isFor
    ) public {
        require(proposalId < proposals.length, "Proposal ID is out of range");

        ERC721 token = ERC721(tokenAddress);
        require(
            token.ownerOf(tokenId) == msg.sender,
            "You do not own this token"
        );
        require(
            !voted[proposalId][msg.sender],
            "You have already voted on this proposal"
        );

        Proposal storage proposal = proposals[proposalId];
        if (isFor) {
            proposal.yesVotes++;
        } else {
            proposal.noVotes++;
        }

        voted[proposalId][msg.sender] = true;
    }

    function getProposals() public view returns (Proposal[] memory) {
        return proposals;
    }
}

//Fungerar om man deployer med metamask och att skapa förslag med nft, samt rösta på förslag m nft.
//Oavsett vem som åropar, så länge de äger nft fungerar det. Även rösträknadet fungerar.