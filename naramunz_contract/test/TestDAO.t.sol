// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {Test} from "forge-std/Test.sol";
import {DAO} from "../src/DAO.sol";
import {DeployDAO} from "../script/DeployDAO.s.sol";
import {MockERC721} from "../src/MockERC721.sol";

contract TestDAO is Test {
    DAO public dao;
    MockERC721 token = new MockERC721();

    function setUp() external {
        DeployDAO deployer = new DeployDAO();
        dao = deployer.run();

        token.mint(address(this), 1);
        token.transferFrom(address(this), address(this), 1);
    }

    function testCreateProposal() public {
        string memory title = "Test Title";
        string memory description = "Test Description";
        address tokenAddress = address(token);
        uint256 tokenId = 1;

        dao.createProposal(title, description, tokenAddress, tokenId);

        DAO.Proposal[] memory proposals = dao.getProposals();
        DAO.Proposal memory proposal = proposals[0];

        assert(
            keccak256(abi.encodePacked((proposal.title))) ==
                keccak256(abi.encodePacked((title)))
        );
        assert(
            keccak256(abi.encodePacked((proposal.description))) ==
                keccak256(abi.encodePacked((description)))
        );
        assert(proposal.yesVotes == 0);
        assert(proposal.noVotes == 0);
    }

    function testVote() public {
        string memory title = "Test Title";
        string memory description = "Test Description";
        address tokenAddress = address(token);
        uint256 tokenId = 1;

        dao.createProposal(title, description, tokenAddress, tokenId);

        bool isFor = true;
        uint256 proposalId = 0;

        dao.vote(proposalId, tokenAddress, tokenId, isFor);

        DAO.Proposal[] memory proposals = dao.getProposals();
        DAO.Proposal memory proposal = proposals[proposalId];

        assert(proposal.yesVotes == 1);
        assert(!dao.voted(proposalId, msg.sender));
    }
}
