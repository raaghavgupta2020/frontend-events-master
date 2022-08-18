import { useState } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3Modal from "web3modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

// import { creatorAddress } from "../../blockchain/config";

// import CreatorNFT from "../../blockchain/artifacts/contracts/CreatorNFT.sol/CreatorNFT.json";
import AdminNav from "../AdminNav";

export default function SignupForm() {
	const [fileUrl, setFileUrl] = useState(null);
	const [formInput, updateFormInput] = useState({
		price: "2",
		name: "",
		description: "",
		email_id: "",
		wallet_address: "",
	});

	// async function onChange(e) {
	// 	const file = e.target.files[0];
	// 	console.log("inside onchange");
	// 	try {
	// 		const added = await client.add(file, {
	// 			progress: (prog) => console.log(`received: ${prog}`),
	// 		});
	// 		const url = `https://ipfs.infura.io/ipfs/${added.path}`;
	// 		console.log(url);
	// 		setFileUrl(url);
	// 	} catch (error) {
	// 		console.log("Error uploading file: ", error);
	// 	}
	// }
	// async function uploadToIPFS() {
	// 	const { name, description, price, email_id } = formInput;
	// 	if (!name || !description || !price || !fileUrl || !email_id) return;
	// 	/* first, upload to IPFS */
	// 	const data = JSON.stringify({
	// 		name,
	// 		description,
	// 		image: fileUrl,
	// 		wallet_address: localStorage.getItem("wallet_address"),
	// 		email_id,
	// 	});
	// 	try {
	// 		const added = await client.add(data);
	// 		const url = `https://ipfs.infura.io/ipfs/${added.path}`;
	// 		/* after file is uploaded to IPFS, return the URL to use it in the transaction */
	// 		return url;
	// 	} catch (error) {
	// 		console.log("Error uploading file: ", error);
	// 	}
	// }

	// async function listNFTForSale() {
	// 	const url = await uploadToIPFS();
	// 	const web3Modal = new Web3Modal();
	// 	const connection = await web3Modal.connect();
	// 	const provider = new ethers.providers.Web3Provider(connection);
	// 	const signer = provider.getSigner();

	// 	/* next, create the item */
	// 	const price = ethers.utils.parseUnits(formInput.price, "ether");
	// 	let contract = new ethers.Contract(creatorAddress, CreatorNFT.abi, signer);
	// 	console.log(contract);
	// 	let listingPrice = await contract.getListingPrice();
	// 	listingPrice = listingPrice.toString();
	// 	let transaction = await contract.createToken(url, price, {
	// 		value: listingPrice,
	// 	});
	// 	console.log("inside list after");
	// 	toast("Profile Created Successfully");
	// 	await transaction.wait();
		
	// }

	return (
		<>
			<AdminNav />
			<div className="flex justify-center mt-20 items-center">
				<div className="w-1/2 flex flex-col pb-12">
					<h1 className="font-bold leading-normal ">Add your company with just as little as 0.025 eth</h1>
					<input
						placeholder="Company name"
						className="mt-8 border rounded p-2 text-black"
						onChange={(e) =>
							updateFormInput({ ...formInput, name: e.target.value })
						}
					/>
					<input
						placeholder="Company email address"
						className="mt-2 border rounded p-4 text-black"
						onChange={(e) =>
							updateFormInput({ ...formInput, email_id: e.target.value })
						}
					/>
					<textarea
						placeholder="Company description"
						className="mt-2 border rounded p-4 text-black"
						onChange={(e) =>
							updateFormInput({ ...formInput, description: e.target.value })
						}
					/>
					
					<input type="file" name="Asset" className="my-4" onChange={onChange} />
					{fileUrl && <img className="rounded mt-4" width="350" src={fileUrl} />}
					<button
						onClick={listNFTForSale}
						className="font-bold mt-4 bg-gray-800 text-white rounded p-4 shadow-lg"
					>
						Add company profile
					</button>
				</div>
			</div>
			<ToastContainer />
		</>
	);
}
