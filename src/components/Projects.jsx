import { useState } from "react";
import { motion } from "framer-motion";

import { Mern, Websites } from "../constants";

const Projects = () => {
	const [category, setCategory] = useState("mern");

	return (
		<div className="lg:px-24 mt-12 px-4" id="projects">
			<h1 className="lg:text-4xl text-[1.6rem] sm:text-3xl font-extrabold ">
				Quality Work <br />
				Recently Done Projects
			</h1>
			<div className="text-md md:text-xl font-bold mt-6 md:mt-12 flex space-x-8 ">
				<h3
					className={
						category === "mern"
							? "menu-hover menu-active relative hover:text-main transition-all duration-300"
							: "menu-hover relative hover:text-main transition-all duration-300"
					}
					onClick={() => setCategory((prev) => "mern")}>
					Mern
				</h3>
				<h3
					className={
						category === "websites"
							? "menu-hover menu-active relative hover:text-main transition-all duration-300"
							: "menu-hover relative hover:text-main transition-all duration-300"
					}
					onClick={() => setCategory((prev) => "websites")}>
					Responsive Websites
				</h3>
			</div>

			<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{category === "mern"
					? Mern.map((ele, key) => (
							<a href={ele.link} key={key} target="_blank">
								<motion.div
									key={key}
									initial={{ scale: 0, opacity: 0 }}
									animate={{ x: -100, opacity: 0, scale: 0.6 }}
									whileInView={{ opacity: 1, scale: 1, x: 0 }}
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.5 }}
									className="mt-4">
									<img
										src={ele.src}
										alt=""
										className="border border-slate-200"
									/>
									<h4 className="text-gray-600 capitalize text-center mt-3 font-semibold text-lg">
										{ele.projectName}
									</h4>
								</motion.div>
							</a>
					  ))
					: Websites.map((ele, key) => (
							<a href={ele.link} key={key} target="_blank">
								<motion.div
									initial={{ scale: 0, opacity: 0 }}
									animate={{ x: -100, opacity: 0, scale: 0.6 }}
									whileInView={{ opacity: 1, scale: 1, x: 0 }}
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.5 }}
									className="mt-4">
									<img
										src={ele.src}
										alt=""
										className="border border-slate-200"
									/>
									<p className="text-gray-600 capitalize text-center mt-3 font-semibold text-lg">
										{ele.projectName}
									</p>
								</motion.div>
							</a>
					  ))}
			</div>
		</div>
	);
};

export default Projects;
