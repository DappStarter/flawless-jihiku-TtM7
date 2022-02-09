require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remember essay half ensure tail gas'; 
let testAccounts = [
"0x0110f23a09ffad616eebd9b865282ca59cbd02a6ccb543ed1e17f5f9641630a3",
"0xb189f9aa82c3f3d5d44ee33c21105c5ddcfc307f820adc7340320551d5dd5f81",
"0xe2c83149beac3ff58b1089a44580ed69a8317e4dec61148fdaf9f54f1636fe28",
"0xaffb0ae7f0cd561c88bfef8a2d625f66fde9e76b200f4dfef5c6af0a1203db41",
"0xe4a51087b377088ec22f6e06496063c12a262d0abf0f3927f935a9c69b369f47",
"0x85c6673c5a4689095288922ec43bc3a783414f04162e051f93c6825986a60368",
"0xc1f2798401733031c9e03f9d494b3bb3065ef24fa44e378d57fbee6933fa59e9",
"0xba859b62aea28b2b60e320c5d64ff20b0dbcec06ecb2f2f136bd9b4b61668443",
"0x6cdb3da513a24856a90488e2ecead33430d11a6072fca85d31834da1acdd8e7a",
"0x436e48724a650be787fb0b0fc35d24471db131d11278487a8a9854dd605f19b0"
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

