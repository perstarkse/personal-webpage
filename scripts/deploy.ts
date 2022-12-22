export { };

const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const ProofOfVisit = await hre.ethers.getContractFactory("contracts/ProofOfVisit.sol:ProofOfVisit");
  const proofOfVisit = await ProofOfVisit.deploy();

  const maxTokens = 1;

  const SynthwavePunk = await hre.ethers.getContractFactory("contracts/SynthwavePunk.sol:SynthwavePunk");
  const synthwavePunk = await SynthwavePunk.deploy(maxTokens, proofOfVisit.address);

  await proofOfVisit.deployed();
  await synthwavePunk.deployed();

  //transfer ownership to burn address
  // await proofOfVisit.transferOwnership("0x0000000000000000000000000000000000000000");

  // give dev account 1 ether for testing
  // let [addressDeployer] = await ethers.getSigners();
  // await addressDeployer.sendTransaction({ to: "0x95279D41e64743D20514F32e6F0b2a51696143c8", value: ethers.utils.parseEther("1.0") });

  console.log(
    `ProofOfVisist deployed to ${proofOfVisit.address} and SynthwavePunk deployed to ${synthwavePunk.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
