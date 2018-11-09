/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

let HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      provider: function () {
        return new HDWalletProvider("mnemonic", 'http://localhost:8545')
      },
      network_id: '1',
      gas: 4500000,
      gasPrice: 0,
    }
  }
};
