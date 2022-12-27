import React from "react";
import aboutImage from "../assets/images/about-us.webp";
import { motion } from "framer-motion";
import resume from "../assets/resume/RESUME.pdf";

const About = () => {
	return (
		<>
			<div className="grid grid-cols-12 lg:px-24 md:py-8 mt-4" id="about">
				<motion.div
					className="col-span-12 sm:col-span-10 sm:pl-16 md:col-span-5 image-animation"
					initial={{ y: 70, opacity: 0, scale: 0 }}
					whileInView={{ y: 0, opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}>
					<img src={aboutImage} alt="" />
				</motion.div>

				<motion.div
					className="col-span-12 md:col-span-7 pl-5 md:pl-[20%] mt-8"
					whileInView={{ y: 0, x: 0 }}
					animate={{ y: 70, x: -100 }}
					transition={{ duration: 0.6 }}>
					<h1 className="capitalize text-[2rem] sm:text-[2.4rem] font-bold">
						let's <br />
						introduce about <br />
						myself
					</h1>
					<p className="my-3">
						My name is lalit negi. I'm 21 years old. I was born in uttarakhand ,
						India. I'm looking for competitive environment where i can apply my
						skills to make something usefull for people and thier business.
					</p>
					<p className="my-3">
						<span className="font-semibold">Skills</span> - React.js (
						Redux-Toolkit , Axios , React-Router-DOM ) , Node.js ( socket.io , Mongoose ,
						jsonWebToken ) , MongoDb ( aggregation framework ), Express.js ,
						Tailwind css , Javascript (ES6) , HTML5 , CSS3 <br />
						<p className="my-3">
							<span className="font-semibold">Basic</span> - Bootstrap ,
							Framer-Motion ( animation library ) , JIMP ( image processing
							library) , JOI (data validation library) , React-Query
						</p>
					</p>
					<p className="mb-8">
						<span className="font-semibold">Education</span> - i completed my
						diploma (UBTER) in Computer science & Engineering (2020 - 2022) and
						i did my X and XII from UBSE.
					</p>
					<a href={resume} target="_blank">
						<button className="btn btn-primary">Get resume</button>
					</a>
				</motion.div>
			</div>
		</>
	);
};

export default About;
