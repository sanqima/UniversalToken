module.exports = {
    testCommand: 'node --max-old-space-size=4096 ../node_modules/.bin/truffle test --network coverage',
    compileCommand: 'node --max-old-space-size=4096 ../node_modules/.bin/truffle compile --network coverage',
    skipFiles: [
        'certificate/ERC1400CertificateNonce',
        'certificate/ERC1400CertificateSalt',
        'certificate/certificateControllers/CertificateControllerNonce',
        'certificate/certificateControllers/CertificateControllerSalt',
        'mocks/BlacklistMock',
        'mocks/CertificateControllerMock',
        'mocks/ERC1400CertificateMock',
        'mocks/AztecCryptographyEngineMock',
        'tokens/ERC20Token',
        'tokens/ERC721Token',
        'tools/FundIssuer',
    ],
    copyPackages: ['openzeppelin-solidity'],
}
