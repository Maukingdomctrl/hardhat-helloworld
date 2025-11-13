import { expect } from "chai";
import hre from "hardhat";

describe("ChessBaserContract", function () {
  let chessBaserContract;
  let owner;
  let addr1;

  beforeEach(async function () {
    // Get signers
    [owner, addr1] = await hre.ethers.getSigners();

    // Deploy contract
    const ChessBaserContract = await hre.ethers.getContractFactory("ChessBaserContract");
    chessBaserContract = await ChessBaserContract.deploy();
    
    // Wait for deployment to complete (ethers v6)
    await chessBaserContract.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should deploy successfully", async function () {
      // Use getAddress() for ethers v6 or target property
      const address = await chessBaserContract.getAddress();
      expect(address).to.not.equal(hre.ethers.ZeroAddress);
    });

    it("Should set the right owner", async function () {
      expect(await chessBaserContract.owner()).to.equal(owner.address);
    });
  });

  describe("Basic functionality", function () {
    it("Should execute basic operations", async function () {
      // Add your test logic here
      expect(true).to.equal(true);
    });
  });
});

