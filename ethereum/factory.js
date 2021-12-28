import web3 from "./we3";
import { abi } from "./build/CampaignFactory.json";
import { campaignFactory } from "./contracts/ContractAddresses.json";

const instance = new web3.eth.Contract(abi, campaignFactory);

export default instance;