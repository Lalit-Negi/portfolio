import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
	return (
		<motion.div className="web-container App"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}>
			<Navigation />
			<HeroSection />
			<About />
			<Skills />
			<Projects />
			<Contact/>
		</motion.div>
	);
};

export default App;
