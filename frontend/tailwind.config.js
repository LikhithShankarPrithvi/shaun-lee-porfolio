/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			animation: {
				slider: 'move 8s ease-in-out infinite alternate',
			},
			keyframes: {
				slider: {
					'33.3%': { transform: 'translateY(-65px)' },
					'66.6%': { transform: 'translateY(-130px)' },
					'100%': { transform: 'translateY(-195px)' },
				},
			},
		},
	},
	plugins: [],
}
