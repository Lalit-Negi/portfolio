import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import menuIcon from "../assets/icons/menu.png";
import { links } from "../constants";

const Navigation = () => {

	const [toggleMenu , setToggleMenu] = useState(false)

	return (
		<header className="web-container flex justify-between items-center lg:px-24 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
			<div className="w-[140px] md:w-[150px]">
				<img src={logo} alt="" />
			</div>

			<nav>
				<ul className="md:flex lg:space-x-16 md:space-x-10 hidden">
					{links.map((ele, key) => {
						return (
							<li
								key={key}
								className="font-semibold hover:text-main relative menu-hover transition-all duration-300 capitalize text-lg">
								<a href={`#${ele.link}`}>{ele.link}</a>
							</li>
						);
					})}
				</ul>
			</nav>

			<div className="md:hidden">
				<img src={menuIcon} alt="menu" className="w-6" onClick={() => setToggleMenu(prev => !prev)}/>

				<nav>
					<ul className={toggleMenu ?  "absolute w-[60%] top-[110%] right-0 mobile-menu-bg shadow-2xl menu" : "hidden"}>
						{links.map((ele, key) => {
							return (
								<li
									onClick={() => setToggleMenu(false)}
									key={key}
									className="font-bold hover:text-main my-2 py-3 px-6 text-center rounded-md capitalize">
									<a href={`#${ele.link}`}>{ele.link}</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navigation;
