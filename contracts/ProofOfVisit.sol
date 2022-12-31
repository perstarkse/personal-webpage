// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ProofOfVisit is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    mapping(address => bool) public hasClaimed;

    constructor() ERC721("ProofOfVisit", unicode"⚑") {}

    function totalMinted() public view returns (uint256) {
        return _tokenIdCounter.current();
    }

    modifier hasAlreadyClaimed() {
        require(hasClaimed[msg.sender] != true, "has already claimed");
        _;
    }

    function safeMint() public hasAlreadyClaimed {
        uint256 tokenId = _tokenIdCounter.current();
        hasClaimed[msg.sender] = true;
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
    }
}
