import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import logo from "../../logo.svg";
import metalogo from "../../components/metamask-unscreen.gif";

function Login() {
	// const [haveMetamask, sethaveMetamask] = useState(true);
	// const [accountAddress, setAccountAddress] = useState("");
	// const [accountBalance, setAccountBalance] = useState("");
	// const [isConnected, setIsConnected] = useState(false);

	// const { ethereum } = window;
	// const provider = new ethers.providers.Web3Provider(window.ethereum);

	// useEffect(() => {
	// 	const { ethereum } = window;
	// 	const checkMetamaskAvailability = async () => {
	// 		if (!ethereum) {
	// 			sethaveMetamask(false);
	// 		}
	// 		sethaveMetamask(true);
	// 		localStorage.setItem("haveMetamask", true);
	// 		localStorage.setItem("address", accountAddress);
	// 		// window.location.href = '/home';
	// 	};
	// 	checkMetamaskAvailability();
	// }, []);

	// const connectWallet = async () => {
	// 	try {
	// 		if (!ethereum) {
	// 			sethaveMetamask(false);
	// 		}
	// 		const accounts = await ethereum.request({
	// 			method: "eth_requestAccounts",
	// 		});
	// 		let balance = await provider.getBalance(accounts[0]);
	// 		let bal = ethers.utils.formatEther(balance);
	// 		setAccountAddress(accounts[0]);
	// 		localStorage.setItem('accountAddress', accounts[0]);

	// 		setAccountBalance(bal);
	// 		setIsConnected(true);
	// 	} catch (error) {
	// 		setIsConnected(false);
	// 	}
	// };
	return (
		<header className="App-header">
			
			<button className="bg-blue-500 text-xl hover:bg-blue-700 text-white mx-5 font-bold py-2 px-4 rounded" onClick={() => window.location.href = '/home'}>View brands</button>

		</header>
	);
}

export default Login;
