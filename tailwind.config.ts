import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'slide-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-out': {
					'0%': { transform: 'translateY(0)', opacity: '1' },
					'100%': { transform: 'translateY(20px)', opacity: '0' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'circle-scale': {
					'0%': { transform: 'scale(0)' },
					'60%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(3)', opacity: '0' }
				},
				'text-cycle': {
					'0%, 20%': { opacity: '1', transform: 'translateY(0)' },
					'25%, 45%': { opacity: '0', transform: 'translateY(-20px)' },
					'50%, 70%': { opacity: '1', transform: 'translateY(0)' },
					'75%, 95%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				grid: {
					"0%": { transform: "translateY(-50%)" },
					"100%": { transform: "translateY(0)" },
				},
				"background-gradient": {
					"0%, 100%": {
						transform: "translate(0, 0)",
						animationDelay: "var(--background-gradient-delay, 0s)",
					},
					"20%": {
						transform:
							"translate(calc(100% * var(--tx-1, 1)), calc(100% * var(--ty-1, 1)))",
					},
					"40%": {
						transform:
							"translate(calc(100% * var(--tx-2, -1)), calc(100% * var(--ty-2, 1)))",
					},
					"60%": {
						transform:
							"translate(calc(100% * var(--tx-3, 1)), calc(100% * var(--ty-3, -1)))",
					},
					"80%": {
						transform:
							"translate(calc(100% * var(--tx-4, -1)), calc(100% * var(--ty-4, -1)))",
					},
				},
				'star-movement-bottom': {
					'0%': { transform: 'translate(0%, 0%)', opacity: '1' },
					'100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
				},
				'star-movement-top': {
					'0%': { transform: 'translate(0%, 0%)', opacity: '1' },
					'100%': { transform: 'translate(100%, 0%)', opacity: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'slide-out': 'slide-out 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.7s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'circle-scale': 'circle-scale 1.5s ease-out forwards',
				'text-cycle': 'text-cycle 9s ease-in-out infinite',
				'grid': 'grid 15s linear infinite',
				"background-gradient":
					"background-gradient var(--background-gradient-speed, 15s) cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite",
				'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
				'star-movement-top': 'star-movement-top linear infinite alternate',
				'float': 'float 3s ease-in-out infinite',
				'rotate': 'rotate 10s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
