import recordNft_abi from "../src/recordNft_abi.json";

import { ethers } from "ethers";

// initialize provider
const provider = new ethers.providers.Web3Provider(window.ethereum);
// //Request permission to metamask to connect to user's account
// await provider.send("eth_requestAccounts", []);

// initialize signer
const signer = provider.getSigner();

// initialize contract
const contractAddress = "0x939bCdc4E176eC8B58CB72033627F94D7064626c";
const contract = new ethers.Contract(contractAddress, recordNft_abi, signer);

export { provider, signer, contract };
