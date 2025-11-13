const hre = require("hardhat");

async function main() {
  console.log("Starting deployment...");
  
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);
  
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", hre.ethers.formatEther(balance), "ETH");
  
  const ChessBaserContract = await hre.ethers.getContractFactory("ChessBaserContract");
  console.log("Deploying ChessBaserContract...");
  
  const chessBaserContract = await ChessBaserContract.deploy();
  await chessBaserContract.waitForDeployment();
  
  const address = await chessBaserContract.getAddress();
  console.log("ChessBaserContract deployed to:", address);
  
  console.log("\nDeployment complete!");
  console.log("Contract address:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
