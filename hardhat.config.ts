import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();


const { INFURAAPI, PRIVATEKEY, ETHERSCANKEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "localhost",
  networks: {
    hardhat: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURAAPI}`,
      accounts: [`0x${PRIVATEKEY}`]
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURAAPI}`,
      accounts: [`0x${PRIVATEKEY}`]
    },
  },
  etherscan: {
    apiKey: {
      goerli: `${ETHERSCANKEY}`,
      sepolia: `${ETHERSCANKEY}`,
    }
  }
};

export default config;
