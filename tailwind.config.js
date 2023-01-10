/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
			nunito: ["Nunito", "sans-serif"],
			},
			aspectRatio: {
				'2/1': '2 / 1',
				'3/1': '3 / 1',
			  },
			scale: {
				'200': '2',
			  }
		},
	},
	plugins: [],
}
