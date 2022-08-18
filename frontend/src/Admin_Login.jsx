import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types'

function Admin_Login(props) {
    const [reg_no, setRegno] = useState("");
    const [password, setPassword] = useState(""); 
    const Handle = async (e) => {
		e.preventDefault();
	}	
	const HandleReset = (e) => {
		
        setRegno="";
        setPassword="";
        e.preventDefault();
	};



    
    return (
        <div className="w-full h-screen">
          
          <div className="h-1/10 text-center border-black">
          <h1 className='text-5xl pt-4 self-center font-bold tracking-wider relative top-12'>Admin Login Page</h1>
            <div className="text-center w-full items-center text-sm">
              <form className="w-5/5 rounded-none ">
                <div className="input-field divname mt-40">
                  <label className="m-2 p-5 text-xl " htmlFor="name">
                    Username
                  </label>
                  <input
                    type="name"
                    placeholder="Username"
                    className="mt-8 border rounded p-2 text-black"
                    value={reg_no}
                    onChange={(e) => setRegno(e.target.value)}
                    required
                  />
                </div>
    
                <div className="input-field">
                  <label className="m-2 p-5 text-xl " htmlFor="password">
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="mt-8 border rounded p-2 text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
    
                <div className="mt-4">
                  
                  <button
                    className="font-bold mt-4 ml-30 bg-gray-800 text-white rounded p-4 pt-4 shadow-lg"
                    onClick={(e) => {
                      Handle(e);
                    }}
                  >
                    Log In
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


export default Admin_Login;

