// SPDX-License-Identifier: MIT

/* pragma solidity ^0.8.19;

import {Test} from "forge-std/Test.sol";
import {DAO} from "../src/DAO.sol";
import {ERC721} from "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

 */
pragma solidity ^0.8.19;

import {Test} from "forge-std/Test.sol";
import {DAO} from "../src/DAO.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TestDAO is Test {
    DAO dao;
    ERC721URIStorage token;

    function setUp() public {
        dao = new DAO();
        token = new ERC721URIStorage("Test Token", "TT");
        token.mint(address(this), 1);
    }

    function testCreateProposal() public {
        dao.createProposal("Test Title", "Test Description", address(token), 1);
        assertTrue(dao.getProposals().length == 1, "Proposal was not created");
    }

    function testVote() public {
        dao.createProposal("Test Title", "Test Description", address(token), 1);
        dao.vote(0, address(token), 1, true);
        assertTrue(
            dao.getProposals()[0].yesVotes == 1,
            "Vote was not counted correctly"
        );
    }
}

/* contract DAOTest is Test {
    DAO public dao;
    ERC721 public erc721;
    address constant OWNER = address(0x5E11E7);

    struct Proposal {
        string title;
        string description;
        uint256 yesVotes;
        uint256 noVotes;
    }

    function setUp() public {
        erc721 = new ERC721();
        dao = new DAO();
    }

    function testCreateProposal() public {
        erc721.mint(OWNER, 1);
        dao.createProposal(
            "Test Proposal",
            "This is a test proposal",
            erc721.address,
            1
        );

        Proposal memory proposal = dao.getProposals(0);
        assertEq(proposal.title, "Test Proposal");
        assertEq(proposal.description, "This is a test proposal");
    }

    function testVote() public {
        erc721.mint(OWNER, 2);
        dao.createProposal(
            "Test Proposal",
            "This is a test proposal",
            erc721.address,
            1
        );

        dao.vote(0, erc721.address, 2, true);

        Proposal memory proposal = dao.getProposals(0);
        assertEq(proposal.yesVotes, 1);
        assertEq(proposal.noVotes, 0);
    }
} */

/* contract TestDAO is Test {
    DAO dao;

    function beforeEach() public {
        dao = new DAO();
    }

    function testCreateProposal() public {
        dao.createProposal("title", "description", address(this), 0);
        DAO.Proposal memory proposal = dao.proposals(0);
        assertEq(proposal.title, "title");
        assertEq(proposal.description, "description");
        assertEq(proposal.yesVotes, 0);
        assertEq(proposal.noVotes, 0);
    }

    function testVote() public {
        dao.createProposal("title", "description", address(this), 0);
        dao.vote(0, address(this), 0, true);
        DAO.Proposal memory proposal = dao.proposals(0);
        assertEq(proposal.yesVotes, 1);
        assertEq(proposal.noVotes, 0);
    }

    function testVoteFail() public {
        dao.createProposal("title", "description", address(this), 0);
        dao.vote(0, address(this), 0, true);
        dao.vote(0, address(this), 0, true);
        DAO.Proposal memory proposal = dao.proposals(0);
        assertEq(proposal.yesVotes, 1);
        assertEq(proposal.noVotes, 0);
    }
}
 */
