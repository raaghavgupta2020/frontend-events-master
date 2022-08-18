import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import logo from "../../logo.svg";
import metalogo from "../../components/metamask-unscreen.gif";

function Login() {
	const [reg_no, setRegno] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  const [data, setData] = useState();
  const [name,setName] = useState("username");
	 
	const Handle = async (e) => {
		e.preventDefault();
	}	
	const HandleReset = (e) => {
		e.target.value = "";
	};
	let navigate = useNavigate();
		return (
			<div className="w-full h-screen">
			  
			  <div className="h-1/10 text-center border-black">
				<div className="text-center w-full items-center text-sm">
				  <form className="w-5/5 bg-white rounded-none ">
					<div className="input-field divname">
					  <label className="m-2 p-5 " htmlFor="name">
						Username
					  </label>
					  <input
						type="name"
						placeholder="Username"
						className="border rounded-sm border-solid  my-2 ml-2 mr-8 p-1 mt-40 "
						value={reg_no}
						onChange={(e) => setRegno(e.target.value)}
						required
					  />
					</div>
		
					<div className="input-field">
					  <label className="m-2 p-5" htmlFor="password">
						Password{" "}
					  </label>
					  <input
						type="password"
						placeholder="Password"
						className="border rounded-sm border-solid  my-2 ml-2 mr-8 p-1 "
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					  />
					</div>
		
					<div className="mt-4">
					  <button
						className=" rounded-md hover:bg-blue-700 cursor-pointer h-10 mr-1 mb-5 ml-24 text-white sm:w-30 bg-[#0083CA] w-20 "
						onClick={(e) => HandleReset(e)}
					  >
						Reset
					  </button>
					  <button
						className="rounded-md hover:bg-blue-700 cursor-pointer h-10 mr-5 mb-5 ml-16 text-white  sm:w-30 bg-[#0083CA] w-20 "
						onClick={(e) => {
						  Handle(e);
						}}
					  >
						Submit
					  </button>
					  <br></br>
					  
					</div>
				  </form>
				</div>
			  </div>
		
			  {/* {loginError && <LoginError mssg={loginError} />} */}
			</div>
	);
}

export default Login;
