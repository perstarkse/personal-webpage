// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./ProofOfVisit.sol";

contract SynthwavePunk is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint256 public _totalSupply;
    address public proofOfVisitAddress;

    mapping(address => bool) public hasClaimed;

    constructor(
        uint256 _maxTokens,
        address _proofOfVisitAddress
    ) ERC721("SynthwavePunk", unicode"✊") {
        _totalSupply = _maxTokens;
        proofOfVisitAddress = _proofOfVisitAddress;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function totalMinted() public view returns (uint256) {
        return _tokenIdCounter.current();
    }

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://synthwavepunk.infura-ipfs.io/ipfs/QmXURKxiHi9XUHZUvtD1gBZce2eQUTpmCJ9awnFUozjvt5/";
    }

    modifier hasProofOfVisitToken() {
        require(
            ProofOfVisit(proofOfVisitAddress).balanceOf(msg.sender) > 0,
            "you have to have a ProofOfVisit token"
        );
        _;
    }

    modifier hasAlreadyClaimed() {
        require(hasClaimed[msg.sender] != true, "has already claimed");
        _;
    }
    modifier outOfMints() {
        require(_tokenIdCounter.current() < _totalSupply, "out of mints");
        _;
    }

    function safeMint()
        public
        hasAlreadyClaimed
        outOfMints
        hasProofOfVisitToken
    {
        uint256 tokenId = _tokenIdCounter.current();
        hasClaimed[msg.sender] = true;
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
    }
}
