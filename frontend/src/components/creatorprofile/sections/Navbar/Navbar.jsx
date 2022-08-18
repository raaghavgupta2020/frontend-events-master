/* eslint-disable react/destructuring-assignment */
import React from "react";
// import '../../../home/home.css'
import {Link} from "react-router-dom";

import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
} from "react-router-dom";
import Portfolio from "./../../pages/Portfolio/Portfolio";
import Blog from "./../../pages/Blog/Blog";

const navbarData = [
	// {
	// 	id: 3,
	// 	title: "Highlights",
	// 	to: "/landingPage",
	// },
	{
		id: 4,
		title: "Trending Products",
		to: "/blogs",
	},
	// {
	// 	id: 5,
	// 	title: "Back",
	// 	to: "/home",
	// }

	
];

function Navbar({ wallet_address }) {
	return (
		<Router>
			<nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
				<ul className="flex flex-wrap">
					{navbarData.map((el, id) => (
						<LinkItem el={el} key={id} wallet_address={wallet_address} />
					))}
				</ul>
			</nav>

			<Switch>
				<Route path="/landingPage">
					{/* <Portfolio /> */}
					
					{/* <landingPage/> */}
				</Route>
				<Route path="/blogs">
					<Blog wallet_address={wallet_address}/>
				</Route>
			</Switch>
		</Router>
	);
}

export default Navbar;

function LinkItem(props) {
	const { title, to } = props.el;
	return (
		<li className="m-3 lg:mx-5">
			<NavLink
				to={to}
				activeClassName="text-purple-600"
				className="text-gray-800 text-medium hover:text-purple-600"
			>
				{title}
			</NavLink>
		</li>
	);
}
