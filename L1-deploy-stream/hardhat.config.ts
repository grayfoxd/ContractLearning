import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";

const config: HardhatUserConfig = {
  solidity: {
    version:"0.8.19",
    settings: {
      optimizer: {
        enabled: true,  // 是否开启优化
        runs: 200       // 转数
      },
      viaIR: true,      // 合约代码太大，无法编译，设置true，强制编译
    }
  },
  networks:{
    sepolia:{
      url:"https://sepolia.infura.io/v3/3f692893d84740beb3b76c203bb9e39f",
      chainId:11155111,
      accounts:[process.env.TESTNET_PRIVKEY!],
    },
    hardhat: {
      allowUnlimitedContractSize: true,
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        count: 100,
        accountsBalance: "1000000000000000000000000000"
      },
    },
  },
  etherscan:{
    apiKey:{
      sepolia:"C24UYWACG59VYJXWSEI1IW8XYAJGNR8TZ7"
    },
    customChains: [
      {
        network: "sepolia",
        chainId: 11155111,
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.etherscan.io/"
        }
      }
    ]
  },
};

export default config;
