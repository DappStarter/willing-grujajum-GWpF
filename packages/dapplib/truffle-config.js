require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note oven exchange heavy area outer sweet'; 
let testAccounts = [
"0x49e502885fd905a81e34d113fad5eb6f7d2f5db45614cca9aca9da6a47c14f93",
"0x00ed5219c48a0b0956abde9c3046b612ff73d91d99979323d4af674732fd4445",
"0x237d28d3b42c479d0df4bc7d535a652aba2a57797ac996e60e76a27a9c50f09d",
"0x1a7eeb78866625b3d5dbc7615be21a4c0d0ee7680cddde63dcd61e2c391f2043",
"0xdf00ccc4d10f4015acd1d1d61a71c9b0618923b60e541e965ecec2cf0afbda05",
"0x38058269b855f42cb06ec8fb4c05fd6f0123444b6b24daeea831db83578fe939",
"0x3fe59445f18616162d97aefc21f3d8ad5bcb2c92837b479c37a60c168819d42a",
"0xbfef2028a53c7106604855109c5404ad0f2bd4ea9e8f5a40fb8419ddfc28ea1a",
"0xf94ec288876111a1784542b57c0b8bda0812fca0cf02a57a414a100e62f58367",
"0xf79d0d103aaf9471fd420c9466eb1613278827043ce6f21272293f0385c3bbd1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

