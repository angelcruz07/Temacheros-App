import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-custom': 'linear-gradient(to right,#000000,  #434343)'
			},
			colors: {
				'bg-deg': '#060606',
				'bg-deg-2': '#5D5D5D',
				'color-red': '#F00404',
				'color-bg-component': '#888888',
				'color-bg-button': '#888888',
				'color-bg-button-2': '#5D5D5D',
				'color-text-advertisement': '#888888'
			}
		}
	},
	plugins: []
}

export default config
