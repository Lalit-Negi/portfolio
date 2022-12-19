import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../constants";


const Skills = () => {
	return (
		<>
			<div className="mt-24">
				<div className="flex justify-center">
					<h1 className="menu-hover font-bold font-serif text-[1.6rem] md:text-4xl mb-8 relative after:content-['']  after:-bottom-2 after:absolute after:block after:w-[70%] after:h-0.9 after:bg-main ">
						Service & skills
					</h1>
				</div>
			</div>


			<div
				id="skills"
				className="mx-auto flex flex-wrap gap-6 items-center justify-center max-w-[700px] sm:py-16">
				{Skill.map((skill, key) => {
					return (
						<motion.div							
							whileInView={{ scale: 1, opacity: 1, y: 0 , x : 0}}
							animate={{ x :- 50 , y : 100 , scale : 0 , opacity : 0.3}}
							transition={{ duration: 0.7 }}
							whileHover={{ scale: 1.2 }}
							key={key}
							className="w-[7rem] h-[7rem] sm:w-[8rem] sm:h-[8rem] p-4">
							<img src={skill.src} alt="skill" className="h-full w-full object-cover" />
						</motion.div>
					);
				})}
			</div>
		</>
	);
};

export default Skills;
