import recordNft_abi from "../src/recordNft_abi.json";

import { ethers } from "ethers";

// initialize provider
const provider = new ethers.providers.Web3Provider(window.ethereum);
// //Request permission to metamask to connect to user's account
// await provider.send("eth_requestAccounts", []);

// initialize signer
const signer = provider.getSigner();

// initialize contract
const contractAddress = "0xF4514e5839b9FA297A4a67c3F4e0EEc9B4e0Aa89";
const contract = new ethers.Contract(contractAddress, recordNft_abi, signer);

export { provider, signer, contract };
