/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ProofOfVisit,
  ProofOfVisitInterface,
} from "../../contracts/ProofOfVisit";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hasClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600c81526020017f50726f6f664f66566973697400000000000000000000000000000000000000008152506040518060400160405280600381526020017fe29a91000000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000412565b508060019081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b612a5280620005096000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad578063a2309ff811610071578063a2309ff814610306578063b88d4fde14610324578063c87b56dd14610340578063e985e9c514610370578063f2fde38b146103a057610121565b8063715018a61461027457806373b2e80e1461027e5780638da5cb5b146102ae57806395d89b41146102cc578063a22cb465146102ea57610121565b806323b872dd116100f457806323b872dd146101c057806340d097c3146101dc57806342842e0e146101f85780636352211e1461021457806370a082311461024457610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190611a74565b6103bc565b60405161014d9190611abc565b60405180910390f35b61015e61049e565b60405161016b9190611b67565b60405180910390f35b61018e60048036038101906101899190611bbf565b610530565b60405161019b9190611c2d565b60405180910390f35b6101be60048036038101906101b99190611c74565b610576565b005b6101da60048036038101906101d59190611cb4565b61068d565b005b6101f660048036038101906101f19190611d07565b6106ed565b005b610212600480360381019061020d9190611cb4565b6107fe565b005b61022e60048036038101906102299190611bbf565b61081e565b60405161023b9190611c2d565b60405180910390f35b61025e60048036038101906102599190611d07565b6108cf565b60405161026b9190611d43565b60405180910390f35b61027c610986565b005b61029860048036038101906102939190611d07565b61099a565b6040516102a59190611abc565b60405180910390f35b6102b66109ba565b6040516102c39190611c2d565b60405180910390f35b6102d46109e4565b6040516102e19190611b67565b60405180910390f35b61030460048036038101906102ff9190611d8a565b610a76565b005b61030e610a8c565b60405161031b9190611d43565b60405180910390f35b61033e60048036038101906103399190611eff565b610a9d565b005b61035a60048036038101906103559190611bbf565b610aff565b6040516103679190611b67565b60405180910390f35b61038a60048036038101906103859190611f82565b610b67565b6040516103979190611abc565b60405180910390f35b6103ba60048036038101906103b59190611d07565b610bfb565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061048757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610497575061049682610c7e565b5b9050919050565b6060600080546104ad90611ff1565b80601f01602080910402602001604051908101604052809291908181526020018280546104d990611ff1565b80156105265780601f106104fb57610100808354040283529160200191610526565b820191906000526020600020905b81548152906001019060200180831161050957829003601f168201915b5050505050905090565b600061053b82610ce8565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105818261081e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e890612094565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610610610d33565b73ffffffffffffffffffffffffffffffffffffffff16148061063f575061063e81610639610d33565b610b67565b5b61067e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067590612126565b60405180910390fd5b6106888383610d3b565b505050565b61069e610698610d33565b82610df4565b6106dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d4906121b8565b60405180910390fd5b6106e8838383610e89565b505050565b60011515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151503610780576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077790612224565b60405180910390fd5b600061078c60076110ef565b90506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506107f060076110fd565b6107fa8282611113565b5050565b61081983838360405180602001604052806000815250610a9d565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108bd90612290565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361093f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093690612322565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61098e611131565b61099860006111af565b565b60086020528060005260406000206000915054906101000a900460ff1681565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546109f390611ff1565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1f90611ff1565b8015610a6c5780601f10610a4157610100808354040283529160200191610a6c565b820191906000526020600020905b815481529060010190602001808311610a4f57829003601f168201915b5050505050905090565b610a88610a81610d33565b8383611275565b5050565b6000610a9860076110ef565b905090565b610aae610aa8610d33565b83610df4565b610aed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae4906121b8565b60405180910390fd5b610af9848484846113e1565b50505050565b6060610b0a82610ce8565b6000610b1461143d565b90506000815111610b345760405180602001604052806000815250610b5f565b80610b3e84611454565b604051602001610b4f92919061237e565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610c03611131565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6990612414565b60405180910390fd5b610c7b816111af565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610cf1816115b4565b610d30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2790612290565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610dae8361081e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610e008361081e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610e425750610e418185610b67565b5b80610e8057508373ffffffffffffffffffffffffffffffffffffffff16610e6884610530565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610ea98261081e565b73ffffffffffffffffffffffffffffffffffffffff1614610eff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef6906124a6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6590612538565b60405180910390fd5b610f79838383611620565b610f84600082610d3b565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fd49190612587565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461102b91906125bb565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110ea838383611625565b505050565b600081600001549050919050565b6001816000016000828254019250508190555050565b61112d82826040518060200160405280600081525061162a565b5050565b611139610d33565b73ffffffffffffffffffffffffffffffffffffffff166111576109ba565b73ffffffffffffffffffffffffffffffffffffffff16146111ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a49061263b565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036112e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112da906126a7565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113d49190611abc565b60405180910390a3505050565b6113ec848484610e89565b6113f884848484611685565b611437576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142e90612739565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000820361149b576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506115af565b600082905060005b600082146114cd5780806114b690612759565b915050600a826114c691906127d0565b91506114a3565b60008167ffffffffffffffff8111156114e9576114e8611dd4565b5b6040519080825280601f01601f19166020018201604052801561151b5781602001600182028036833780820191505090505b5090505b600085146115a8576001826115349190612587565b9150600a856115439190612801565b603061154f91906125bb565b60f81b81838151811061156557611564612832565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856115a191906127d0565b945061151f565b8093505050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b611634838361180c565b6116416000848484611685565b611680576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167790612739565b60405180910390fd5b505050565b60006116a68473ffffffffffffffffffffffffffffffffffffffff166119e5565b156117ff578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026116cf610d33565b8786866040518563ffffffff1660e01b81526004016116f194939291906128b6565b6020604051808303816000875af192505050801561172d57506040513d601f19601f8201168201806040525081019061172a9190612917565b60015b6117af573d806000811461175d576040519150601f19603f3d011682016040523d82523d6000602084013e611762565b606091505b5060008151036117a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179e90612739565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611804565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361187b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161187290612990565b60405180910390fd5b611884816115b4565b156118c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118bb906129fc565b60405180910390fd5b6118d060008383611620565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461192091906125bb565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46119e160008383611625565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611a5181611a1c565b8114611a5c57600080fd5b50565b600081359050611a6e81611a48565b92915050565b600060208284031215611a8a57611a89611a12565b5b6000611a9884828501611a5f565b91505092915050565b60008115159050919050565b611ab681611aa1565b82525050565b6000602082019050611ad16000830184611aad565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b11578082015181840152602081019050611af6565b60008484015250505050565b6000601f19601f8301169050919050565b6000611b3982611ad7565b611b438185611ae2565b9350611b53818560208601611af3565b611b5c81611b1d565b840191505092915050565b60006020820190508181036000830152611b818184611b2e565b905092915050565b6000819050919050565b611b9c81611b89565b8114611ba757600080fd5b50565b600081359050611bb981611b93565b92915050565b600060208284031215611bd557611bd4611a12565b5b6000611be384828501611baa565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c1782611bec565b9050919050565b611c2781611c0c565b82525050565b6000602082019050611c426000830184611c1e565b92915050565b611c5181611c0c565b8114611c5c57600080fd5b50565b600081359050611c6e81611c48565b92915050565b60008060408385031215611c8b57611c8a611a12565b5b6000611c9985828601611c5f565b9250506020611caa85828601611baa565b9150509250929050565b600080600060608486031215611ccd57611ccc611a12565b5b6000611cdb86828701611c5f565b9350506020611cec86828701611c5f565b9250506040611cfd86828701611baa565b9150509250925092565b600060208284031215611d1d57611d1c611a12565b5b6000611d2b84828501611c5f565b91505092915050565b611d3d81611b89565b82525050565b6000602082019050611d586000830184611d34565b92915050565b611d6781611aa1565b8114611d7257600080fd5b50565b600081359050611d8481611d5e565b92915050565b60008060408385031215611da157611da0611a12565b5b6000611daf85828601611c5f565b9250506020611dc085828601611d75565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e0c82611b1d565b810181811067ffffffffffffffff82111715611e2b57611e2a611dd4565b5b80604052505050565b6000611e3e611a08565b9050611e4a8282611e03565b919050565b600067ffffffffffffffff821115611e6a57611e69611dd4565b5b611e7382611b1d565b9050602081019050919050565b82818337600083830152505050565b6000611ea2611e9d84611e4f565b611e34565b905082815260208101848484011115611ebe57611ebd611dcf565b5b611ec9848285611e80565b509392505050565b600082601f830112611ee657611ee5611dca565b5b8135611ef6848260208601611e8f565b91505092915050565b60008060008060808587031215611f1957611f18611a12565b5b6000611f2787828801611c5f565b9450506020611f3887828801611c5f565b9350506040611f4987828801611baa565b925050606085013567ffffffffffffffff811115611f6a57611f69611a17565b5b611f7687828801611ed1565b91505092959194509250565b60008060408385031215611f9957611f98611a12565b5b6000611fa785828601611c5f565b9250506020611fb885828601611c5f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061200957607f821691505b60208210810361201c5761201b611fc2565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061207e602183611ae2565b915061208982612022565b604082019050919050565b600060208201905081810360008301526120ad81612071565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000612110603e83611ae2565b915061211b826120b4565b604082019050919050565b6000602082019050818103600083015261213f81612103565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b60006121a2602e83611ae2565b91506121ad82612146565b604082019050919050565b600060208201905081810360008301526121d181612195565b9050919050565b7f68617320616c726561647920636c61696d656400000000000000000000000000600082015250565b600061220e601383611ae2565b9150612219826121d8565b602082019050919050565b6000602082019050818103600083015261223d81612201565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061227a601883611ae2565b915061228582612244565b602082019050919050565b600060208201905081810360008301526122a98161226d565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061230c602983611ae2565b9150612317826122b0565b604082019050919050565b6000602082019050818103600083015261233b816122ff565b9050919050565b600081905092915050565b600061235882611ad7565b6123628185612342565b9350612372818560208601611af3565b80840191505092915050565b600061238a828561234d565b9150612396828461234d565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006123fe602683611ae2565b9150612409826123a2565b604082019050919050565b6000602082019050818103600083015261242d816123f1565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612490602583611ae2565b915061249b82612434565b604082019050919050565b600060208201905081810360008301526124bf81612483565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612522602483611ae2565b915061252d826124c6565b604082019050919050565b6000602082019050818103600083015261255181612515565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061259282611b89565b915061259d83611b89565b92508282039050818111156125b5576125b4612558565b5b92915050565b60006125c682611b89565b91506125d183611b89565b92508282019050808211156125e9576125e8612558565b5b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612625602083611ae2565b9150612630826125ef565b602082019050919050565b6000602082019050818103600083015261265481612618565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612691601983611ae2565b915061269c8261265b565b602082019050919050565b600060208201905081810360008301526126c081612684565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612723603283611ae2565b915061272e826126c7565b604082019050919050565b6000602082019050818103600083015261275281612716565b9050919050565b600061276482611b89565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361279657612795612558565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006127db82611b89565b91506127e683611b89565b9250826127f6576127f56127a1565b5b828204905092915050565b600061280c82611b89565b915061281783611b89565b925082612827576128266127a1565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b600061288882612861565b612892818561286c565b93506128a2818560208601611af3565b6128ab81611b1d565b840191505092915050565b60006080820190506128cb6000830187611c1e565b6128d86020830186611c1e565b6128e56040830185611d34565b81810360608301526128f7818461287d565b905095945050505050565b60008151905061291181611a48565b92915050565b60006020828403121561292d5761292c611a12565b5b600061293b84828501612902565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061297a602083611ae2565b915061298582612944565b602082019050919050565b600060208201905081810360008301526129a98161296d565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006129e6601c83611ae2565b91506129f1826129b0565b602082019050919050565b60006020820190508181036000830152612a15816129d9565b905091905056fea2646970667358221220ee1bd826e393bcafd0c8c7baaf7fd3fcc070822a9399e5b5cb92cce8a12bbb2c64736f6c63430008110033";

type ProofOfVisitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProofOfVisitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProofOfVisit__factory extends ContractFactory {
  constructor(...args: ProofOfVisitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProofOfVisit> {
    return super.deploy(overrides || {}) as Promise<ProofOfVisit>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProofOfVisit {
    return super.attach(address) as ProofOfVisit;
  }
  override connect(signer: Signer): ProofOfVisit__factory {
    return super.connect(signer) as ProofOfVisit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProofOfVisitInterface {
    return new utils.Interface(_abi) as ProofOfVisitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProofOfVisit {
    return new Contract(address, _abi, signerOrProvider) as ProofOfVisit;
  }
}