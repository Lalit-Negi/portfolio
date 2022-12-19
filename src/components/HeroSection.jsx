import React from "react";
import heroImage from "../assets/images/home-right.webp";
import heroBg from "../assets/images/home-banner.png";
import { motion } from "framer-motion";
import resume from "../assets/resume/resume.pdf"

const HeroSection = () => {
	return (
		<div
			className="web-container grid grid-cols-12 lg:px-24 py-12 items-center mt-16"
			id="home">
			<motion.div
				className="col-span-12 md:col-span-7 sm:pl-12 relative"
				initial={{ y: -100, scale: 0 }}
				animate={{ y: -100, scale: 0 }}
				whileInView={{ y: 0, scale: 1 }}
				transition={{ duration: 0.9 }}>
				<img
					src={heroBg}
					alt=""
					className="absolute -z-10 h-[130%] w-full -left-12 -top-[30%]"
				/>
				<h2 className="text-black lg:text-[3rem] md:text-[2.4rem] sm:text-[2.6rem] text-[2rem] font-semibold after:content-[''] after:absolute after:w-[30%] after:h-1 after:bg-main md:after:translate-y-7 sm:after:translate-y-8 after:translate-y-6 lg:after:translate-y-10 after:ml-6">
					Hello
				</h2>
				<h1 className="text-black lg:text-[5rem] md:text-[3.7rem] sm:text-[3rem]  text-[2.4rem] font-bold">
					I AM LALIT
				</h1>
				<h3 className="text-black lg:text-[2rem] md:text-[2.1rem] sm:text-[2.4rem] text-[1.6rem] font-medium">
					Full Stack <span className="text-main">MERN</span> Developer
				</h3>

				<div className="mt-8">
					<a href="tel:+91 7452011681">
						<button className="btn btn-primary">call me</button>
					</a>
					<a href={resume} target="_blank">
						<button className="btn btn-secondary ml-4">get resume</button>
					</a>
				</div>
			</motion.div>

			<motion.div
				className="col-span-12 md:col-span-5 sm:col-span-10 sm:pl-16 mt-8 hidden md:block image-animation"
				initial={{ y: -100, scale: 0 }}
				animate={{ y: -100, scale: 0 }}
				whileInView={{ y: 0, scale: 1 }}
				transition={{ duration: 0.9 }}>
				<img src={heroImage} alt="hero image" />
			</motion.div>
		</div>
	);
};

export default HeroSection;
