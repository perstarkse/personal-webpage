export { };

const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const ProofOfVisit = await hre.ethers.getContractFactory("contracts/ProofOfVisit.sol:ProofOfVisit");
  const proofOfVisit = await ProofOfVisit.deploy();

  const maxTokens = 90;

  const SynthwavePunk = await hre.ethers.getContractFactory("contracts/SynthwavePunk.sol:SynthwavePunk");
  const synthwavePunk = await SynthwavePunk.deploy(maxTokens, proofOfVisit.address);

  await proofOfVisit.deployed();
  await synthwavePunk.deployed();

  console.log(
    `ProofOfVisit deployed to ${proofOfVisit.address} and SynthwavePunk deployed to ${synthwavePunk.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
