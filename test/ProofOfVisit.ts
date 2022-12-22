export { };

const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ProofOfVisit", function () {

    async function deployed() {
        const [Deployer, SecondAccount] = await ethers.getSigners();

        const ProofOfVisit = await ethers.getContractFactory("contracts/ProofOfVisit.sol:ProofOfVisit");
        const proofOfVisit = await ProofOfVisit.deploy();

        return { Deployer, SecondAccount, proofOfVisit };
    }

    describe("deployment", function () {
        it("should be deployed", async function () {
            const { proofOfVisit } = await loadFixture(deployed);
            expect(await proofOfVisit.address).is.not.null;
        });

        it("should transfer ownership to dev account", async function () {
            const { proofOfVisit, SecondAccount } = await loadFixture(deployed);
            expect(await proofOfVisit.transferOwnership(SecondAccount.address)).not.to.be.reverted;
        })

        it("should be dev account that is owner", async () => {
            const { Deployer, proofOfVisit, SecondAccount } = await loadFixture(deployed);
            await proofOfVisit.transferOwnership(SecondAccount.address);
            expect(await proofOfVisit.owner()).is.not.equal(Deployer.address);
        })
    });
    describe("minting", () => {
        it("should be able to mint an nft to deployer", async () => {
            const { proofOfVisit, Deployer } = await loadFixture(deployed);
            expect(await proofOfVisit.safeMint(Deployer.address)).not.to.be.reverted;
        });
        it("should have a balance after minting", async () => {
            const { proofOfVisit, Deployer } = await loadFixture(deployed);
            await proofOfVisit.safeMint(Deployer.address);
            expect(await proofOfVisit.balanceOf(Deployer.address)).to.equal("1");
        });

        it("should be able to transfer an nft to another account", async () => {
            const { proofOfVisit, Deployer, SecondAccount } = await loadFixture(deployed);
            await proofOfVisit.safeMint(Deployer.address);
            expect(await proofOfVisit.transferFrom(Deployer.address, SecondAccount.address, "0")).not.to.be.reverted;
        });
    })
    describe("error handling", () => {
        it("should not be able to transfer a token that doesnt exist", async () => {
            const { proofOfVisit, Deployer, SecondAccount } = await loadFixture(deployed);
            await expect(proofOfVisit.transferFrom(Deployer.address, SecondAccount.address, "0")).to.be.revertedWith("ERC721: invalid token ID");
        });
        it("should not be able to transfer a token it doesnt own", async () => {
            const { proofOfVisit, Deployer, SecondAccount } = await loadFixture(deployed);
            await proofOfVisit.safeMint(Deployer.address);
            await expect(proofOfVisit.transferFrom(SecondAccount.address, Deployer.address, "0")).to.be.revertedWith('ERC721: transfer from incorrect owner');
        });
    })

    describe("renouncing ownership", () => {
        it("should be able to mint an nft to deployer", async () => {
            const { proofOfVisit, Deployer } = await loadFixture(deployed);
            expect(await proofOfVisit.safeMint(Deployer.address)).not.to.be.reverted;
        });
        it("should be able to transfer an nft to second account", async () => {
            const { proofOfVisit, Deployer, SecondAccount } = await loadFixture(deployed);
            await proofOfVisit.safeMint(Deployer.address);
            expect(await proofOfVisit.transferFrom(Deployer.address, SecondAccount.address, "0")).not.to.be.reverted;
        });
        it("should be able to renounce ownership", async () => {
            const { proofOfVisit } = await loadFixture(deployed);
            expect(await proofOfVisit.renounceOwnership()).not.to.be.reverted;
        });
        it("deployer should no longer be owner", async () => {
            const { proofOfVisit, Deployer } = await loadFixture(deployed);
            await proofOfVisit.renounceOwnership();
            expect(await proofOfVisit.owner()).not.to.be.equal(Deployer.address);
        });
    })


})