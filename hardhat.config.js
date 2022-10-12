/* global task */

require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-web3');

require('dotenv').config();
const { DEPLOYER_PRIVATE_KEY, POLYGONSCAN_API_KEY } = process.env;

const ether = (n) => `${n}${'0'.repeat(18)}`;

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.17',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      {
        version: '0.4.26',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      blockGasLimit: 2e7,
      allowUnlimitedContractSize: true,
      accounts: {
        count: 100,
        accountsBalance: ether(1000000),
      },
    },
    dev: {
      url: 'http://localhost:9001',
      chainId: 999,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
      gasPrice: 250000000,
      gas: 4712388,
    },
    apothem: {
      url: 'https://rpc.apothem.network',
      chainId: 51,
    },
    xinfin: {
      url: 'https://rpc.xinfin.network',
      chainId: 50,
    },
    mumbai: {
      url: `https://rpc.ankr.com/polygon_mumbai`,
      chainId: 80001,
    },
    polygon: {
      url: `https://rpc.ankr.com/polygon`,
      chainId: 137,
    },
  },
  etherscan: {
    apiKey: {
      // polygon
      polygon: POLYGONSCAN_API_KEY,
      polygonMumbai: POLYGONSCAN_API_KEY,
    },
  },
  mocha: {
    timeout: 20000,
  },
};
