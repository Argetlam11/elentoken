import deployments from './deployments.json';

const BSC_MAINNET_ID = 56;
const ROPSTEN_ID = 3;
const config = {
  networks: {
    [BSC_MAINNET_ID]: {
      networkName: 'Binance Smart Chain Mainnet',
      addresses: {
        TokenSender: deployments[56].bscmainnet.contracts.TokenSender.address,
        Token: '0xBA5Fe23f8a3a24BEd3236F05F2FcF35fd0BF0B5C', // ELEN token adddres
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
