import React from 'react'
import { Link } from 'react-router-dom'

function Common() {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1 className='text-5xl pt-4 font-bold tracking-wider absolute top-12'>Eventify!</h1>
            </div>
            <div className="flex items-center justify-center h-screen">

                <button className="relative bg-blue-500 w-60 h-60 text-2xl hover:bg-blue-700 text-white mx-5 font-bold px-4 rounded">

                    <Link to="/studentlogin">
                        Participant
                    </Link>
                </button>
                <Link to="/adminlogin">
                    <button className="relative bg-yellow-300 h-60	w-60  text-2xl  hover:bg-yellow-400 text-white mx-5 font-bold px-4 rounded">
                        Admin
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Common