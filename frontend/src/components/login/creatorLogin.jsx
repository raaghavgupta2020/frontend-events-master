import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import logo from "../../logo.svg";
import metalogo from "../../components/metamask-unscreen.gif";
import CreateItem from "./creatorLoginForm";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3Modal from "web3modal";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

function CreatorLogin() {
	

	
	return (
		<div className="App">
			<header className="App-header">
				
							<button className="mb-24 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 text-xl rounded" onClick={connectWallet}>
								Sign up 
							</button>
						
			</header>
		</div>
	);
}

export default CreatorLogin;
