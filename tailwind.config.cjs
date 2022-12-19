/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				main: "#713df5"
			},
			screens: {
				sm: "440px"
			}
		},
	},
	plugins: [],
};
