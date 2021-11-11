import deployments from './deployments.json';

const BSC_MAINNET_ID = 56;
const ROPSTEN_ID = 3;
const config = {
  networks: {
    [BSC_MAINNET_ID]: {
      networkName: 'Binance Smart Chain Mainnet',
      addresses: {
        TokenSender: deployments[56].bscmainnet.contracts.TokenSender.address,
        Token: '0xCa2483727292bA552AEc12DfEE4dc105CB1376B9', // ELEN token adddres
      },
    },
    [ROPSTEN_ID]: {
      networkName: 'Ropsten',
      addresses: {
        TokenSender: deployments[3].ropsten.contracts.TokenSender.address,
        Token: '0x638a1827e5d3B7b08aE51cf53876d4d3773970E8', // ELEN token adddres
      },
    },
  },
};
export default config;
