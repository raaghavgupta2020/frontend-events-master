import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import AdminNav from "./AdminNav";

// import { marketplaceAddress } from "../blockchain/config";

// import NFTMarketplace from "../blockchain/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function CreatorDashboard() {
    // const [nfts, setNfts] = useState([]);
    // const [loadingState, setLoadingState] = useState("not-loaded");
    // useEffect(() => {
    //     loadNFTs();
    // }, []);
    // async function loadNFTs() {
    //     const web3Modal = new Web3Modal({
    //         network: "mainnet",
    //         cacheProvider: true,
    //     });
    //     const connection = await web3Modal.connect();
    //     const provider = new ethers.providers.Web3Provider(connection);
    //     const signer = provider.getSigner();

    //     const contract = new ethers.Contract(
    //         marketplaceAddress,
    //         NFTMarketplace.abi,
    //         signer
    //     );
    //     const data = await contract.fetchItemsListed();

    //     const items = await Promise.all(
    //         data.map(async (i) => {
    //             const tokenUri = await contract.tokenURI(i.tokenId);
    //             const meta = await axios.get(tokenUri);
    //             let price = ethers.utils.formatUnits(i.price.toString(), "ether");
    //             let item = {
    //                 price,
    //                 tokenId: i.tokenId.toNumber(),
    //                 seller: i.seller,
    //                 owner: i.owner,
    //                 image: meta.data.image,
    //                 type: meta.data.type,
    //             };
    //             return item;
    //         })
    //     );

    //     setNfts(items);
    //     setLoadingState("loaded");
    // }
    return (
        <>
            <AdminNav />
            {
                loadingState === "loaded" && !nfts.length ? (
                    <h1 className="py-10 px-20 text-3xl">No products listed</h1>
                ) : (
                    <div>
                        <div className="p-4">
                            <h2 className="text-2xl py-2">Products listed</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                                {nfts.map((nft, i) => (
                                    <div key={i} className="border shadow rounded-xl overflow-hidden">
                                        {nft.type ? (
                                            <video
                                                className="w-full h-full object-cover object-center transform group-hover:scale-125 group-hover:rotate-6 transition duration-200"
                                                controls
                                                src={nft.image}
                                            />
                                        ) : (
                                            <img
                                                src={nft.image}
                                                alt="blogImage"
                                                className="w-full h-full object-cover object-center transform group-hover:scale-125 group-hover:rotate-6 transition duration-200"
                                            />
                                        )}
                                        <div className="p-4 bg-black">
                                            <p className="text-2xl font-bold text-white">
                                                Price - {nft.price} Eth
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    );
}
