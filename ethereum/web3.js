import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {

  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/e61e5a8b1b0845d584905facfb322688"
  );
  web3 = new Web3(provider);
}

export default web3;
