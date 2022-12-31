export { };

const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SynthwavePunk", function () {
    async function deployed() {
        const [Deployer, SecondAccount] = await ethers.getSigners();

        const ProofOfVisit = await ethers.getContractFactory("contracts/ProofOfVisit.sol:ProofOfVisit");
        const proofOfVisit = await ProofOfVisit.deploy();

        const maxTokens = 1;

        const SynthwavePunk = await ethers.getContractFactory("contracts/SynthwavePunk.sol:SynthwavePunk");
        const synthwavePunk = await SynthwavePunk.deploy(maxTokens, proofOfVisit.address);


        return { Deployer, SecondAccount, synthwavePunk, proofOfVisit, maxTokens }
    }

    describe("deployment", function () {
        it("should be deployed", async function () {
            const { synthwavePunk } = await loadFixture(deployed);
            await expect(synthwavePunk.address).is.not.null;
        });

        it("should transfer ownership to dev account", async function () {
            const { synthwavePunk, SecondAccount } = await loadFixture(deployed);
            await expect(await synthwavePunk.transferOwnership(SecondAccount.address)).not.to.be.reverted;
        })

        it("should be dev account that is owner", async () => {
            const { Deployer, synthwavePunk, SecondAccount } = await loadFixture(deployed);
            await synthwavePunk.transferOwnership(SecondAccount.address);
            expect(await synthwavePunk.owner()).is.not.equal(Deployer.address);
        });
        it("maxToken value should be set from deployment", async function () {
            const { synthwavePunk, maxTokens } = await loadFixture(deployed);
            expect(await synthwavePunk.totalSupply()).to.be.equal(maxTokens);
        });

    });

    describe("integration with proofofvisit", function () {
        it("proofOfVisit should be deployed", async function () {
            const { proofOfVisit } = await loadFixture(deployed);
            await expect(proofOfVisit.address).is.not.null;
        });
        it("proofofvisit address should be set from deployment", async function () {
            const { proofOfVisit, synthwavePunk } = await loadFixture(deployed);
            expect(await synthwavePunk.proofOfVisitAddress()).to.be.equal(proofOfVisit.address);
        });
        it("should be able to mint both tokens", async function () {
            const { proofOfVisit, synthwavePunk } = await loadFixture(deployed);
            await proofOfVisit.safeMint();
            await expect(synthwavePunk.safeMint()).not.to.be.reverted;
        });
        it("should not be able to mint two punks", async function () {
            const { proofOfVisit, synthwavePunk } = await loadFixture(deployed);
            await proofOfVisit.safeMint();
            await synthwavePunk.safeMint();
            await expect(synthwavePunk.safeMint()).to.be.revertedWith('has already claimed');
        });
        it("should not be able to mint twice per account", async function () {
            const { proofOfVisit, synthwavePunk} = await loadFixture(deployed);
            await proofOfVisit.safeMint();
            await synthwavePunk.safeMint();
            await expect(synthwavePunk.safeMint()).to.be.revertedWith('has already claimed');
        });
        it("should not be able to mint more tokens than maxTokens", async function () {
            const { proofOfVisit, synthwavePunk, SecondAccount } = await loadFixture(deployed);
            await proofOfVisit.safeMint();
            await synthwavePunk.safeMint();
            await proofOfVisit.connect(SecondAccount).safeMint();
            await expect(synthwavePunk.connect(SecondAccount).safeMint()).to.be.revertedWith('out of mints');
        });
    })
})


