# A Crowdfunding Dapp

In this repository it can be found the 'backend' code for a crowdfunding decentralized application ([dapp](https://ethereum.org/en/developers/docs/dapps/)) within the [ethereum blockchain](https://ethereum.org/en/developers/docs/intro-to-ethereum/).

This was implemented as an exercise to learn [blockchain basis](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-is-a-blockchain) and experiment [smart contract](https://ethereum.org/en/developers/docs/smart-contracts/) development with [Solidity](https://soliditylang.org/).

## Usage

[Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) are required.

- Install all dependencies:
```console
$ npm install
```

- Compile smart contracts:
```console
$ node compile.js
```

- Run the following unit tests on the smart contracts:
  - Deploys a factory and a campaign
  - The caller is the campaign manager
  - Contribute with money as approvers
  - Requires a minimum contribution
  - Allows manager to make payment request
  - Process requests
```console
$ npm test
```

- Deploy Campaign Factory smart contract:
```console
$ node deploy.js
```