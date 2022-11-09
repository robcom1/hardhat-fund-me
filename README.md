# Hardhat Fund Me

This is a section of the Javascript Blockchain/Smart Contract FreeCodeCamp Course.

_[⌨️ (10:00:48) Lesson 7: Hardhat Fund Me](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=36048s)_

-   [Hardhat Fund Me](#hardhat-fund-me)
-   [Usage](#usage)
    -   [Testing](#testing)
        -   [Test Coverage](#test-coverage)
-   [Deployment to a testnet or mainnet](#deployment-to-a-testnet-or-mainnet)
    -   [Scripts](#scripts)
    -   [Estimate gas](#estimate-gas)
        -   [Estimate gas cost in USD](#estimate-gas-cost-in-usd)
-   [Thank you!](#thank-you)

# Getting Started

## Requirements

-   [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    -   You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
-   [Nodejs](https://nodejs.org/en/)
    -   You'll know you've installed nodejs right if you can run:
        -   `node --version` and get an ouput like: `vx.x.x`
-   [Npm](https://www.npmjs.com/)

# Deployment to a testnet or mainnet

1. Setup environment variables

You'll want to set your `GOERLI_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file, similar to what you see in `.env.example`.

-   `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)). **NOTE:** FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
    -   You can [learn how to export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
-   `GOERLI_RPC_URL`: This is url of the goerli testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?a=673c802981)

2. Get testnet ETH

Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH. You should see the ETH show up in your metamask.

3. Deploy

```
npx hardhat deploy --network goerli
```

## Scripts

After deploy to a testnet or local net, you can run the scripts.

```
npx hardhat run scripts/fund.js
```

or

```
npx hardhat run scripts/withdraw.js
```

## Estimate gas

You can estimate how much gas things cost by running:

```
npx hardhat test
```

And you'll see and output file called `gas-report.txt`

### Estimate gas cost in USD

To get a USD estimation of gas cost, you'll need a `COINMARKETCAP_API_KEY` environment variable. You can get one for free from [CoinMarketCap](https://pro.coinmarketcap.com/signup).

Then, uncomment the line `coinmarketcap: COINMARKETCAP_API_KEY,` in `hardhat.config.js` to get the USD estimation. Just note, everytime you run your tests it will use an API call, so it might make sense to have using coinmarketcap disabled until you need it. You can disable it by just commenting the line back out.

# Thank you!

[![Rob Com Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/RobComOne)

[![Rob Com Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/roberto-cominetti/)