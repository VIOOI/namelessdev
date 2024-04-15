export const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@namelessdev/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				nameless: {
					1: "var(--nameless-1, #13131e)",
					2: "var(--nameless-2, #171625)",
					3: "var(--nameless-3, #202248)",
					4: "var(--nameless-4, #262a65)",
					5: "var(--nameless-5, #262a65)",
					6: "var(--nameless-6, #303374)",
					7: "var(--nameless-7, #4a4a95)",
					8: "var(--nameless-8, #5958b1)",
					9: "var(--nameless-9, #5b5bd6)",
					10: "var(--nameless-10, #6e6ade)",
					11: "var(--nameless-11, #b1a9ff)",
					12: "var(--nameless-12, #e0dffe)",
				},
			},
		},
	},
	plugins: [],
};
