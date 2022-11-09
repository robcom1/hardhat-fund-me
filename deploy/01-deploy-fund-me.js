const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {
	const { deploy, log } = deployments
	const { deployer } = await getNamedAccounts()
	const chainId = network.config.chainId

	// if contract doesn't exist , we deploy a minimla version for local testing:
	let ethUsdPriceFeedAddress
	if (chainId == 31337) {
		const ethUsdAggregator = await deployments.get("MockV3Aggregator")
		ethUsdPriceFeedAddress = ethUsdAggregator.address
	} else {
		ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
	}
	log("----------------------------------------------------")
	log("Deploying FundMe and waiting for confirmations...")

	// when going for localhost or hardhat network we want to use a mock
	const fundMe = await deploy("FundMe", {
		from: deployer,
		args: [ethUsdPriceFeedAddress], // put pricefeed address
		log: true,
		waitConfirmation: network.config.blockConfirmations || 1,
	})

	log(`FundMe deployed at ${fundMe.address}`)

	if (
		!developmentChains.includes(network.name) &&
		process.env.ETHERSCAN_API_KEY
	) {
		//verify contracts
		await verify(fundMe.address, [ethUsdPriceFeedAddress])
	}
}

module.exports.tags = ["all", "fundme"]
