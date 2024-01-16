// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {ERC721} from "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

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
        checkTokenOwnership(tokenAddress, tokenId);
        proposals.push(Proposal(title, description, 0, 0));
    }

    function vote(
        uint256 proposalId,
        address tokenAddress,
        uint256 tokenId,
        bool isFor
    ) public {
        require(proposalId < proposals.length, "Proposal ID is out of range");
        checkTokenOwnership(tokenAddress, tokenId);
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

    function checkTokenOwnership(
        address tokenAddress,
        uint256 tokenId
    ) private view {
        ERC721 token = ERC721(tokenAddress);
        require(
            token.ownerOf(tokenId) == msg.sender,
            "You do not own this token"
        );
    }
}
