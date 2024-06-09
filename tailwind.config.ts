import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"card-bg": "var(--card-bg)",
				"card-border": "var(--card-border)",
				"card-bg-light": "var(--card-bg-light)",
				hover: "var(--hover)",
				divider: "var(--divider)",
				"error-text": "var(--error-text)",
				"error-bg": "var(--error-bg)",
				"success-text": "var(--success-text)",
				"success-bg": "var(--success-bg)",
				"info-text": "var(--info-text)",
				"info-bg": "var(--info-bg)",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			display: ["group-hover"],
		},
	},
	plugins: [],
};
export default config;
