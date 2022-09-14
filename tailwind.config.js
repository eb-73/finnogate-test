module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		// Make tailwind breakpoints same as bootstrap
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1500px",
		},
		container: (theme) => ({
			center: true,
			padding: theme("spacing.4"),
		}),
		fontFamily: {
			dana: "dana",
		},
		extend: {
			boxShadow: {
				card: "0px 6px 30px #0000000F",
				button: "rgba(0, 0, 0, 0.1) 0px 10px 20px -10px",
			},
			colors: {
				primary: {
					main: "#3B5266",
				},
				secondary: {
					main: "#879DB2",
				},
				blue: {
					main: "#00BEDF",
					light: "#B3EBF7",
				},
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
	],
};
