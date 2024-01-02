// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

////TA BORT???

// https://docs.openzeppelin.com/contracts/5.x/wizard
// ERC721
/* 
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {ERC721Votes} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Votes.sol";

contract GovToken is ERC721, EIP712, ERC721Votes {
    mapping(address => uint256) private _userToToken;

    constructor() ERC721("MyToken", "MTK") EIP712("MyToken", "1") {}

    function associateTokenWithUser(address user, uint256 tokenId) public {
        require(user != address(0), "Invalid user address");
        require(tokenId > 0 && tokenId <= totalSupply(), "Invalid token ID");

        _userToToken[user] = tokenId;
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Votes) returns (address) {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(
        address account,
        uint128 value
    ) internal override(ERC721, ERC721Votes) {
        super._increaseBalance(account, value);
    }
}
 */
