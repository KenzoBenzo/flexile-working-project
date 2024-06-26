// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	// animations
	runtimeConfig: {
		public: {
			motion: {
				directives: {
					"pop-bottom": {
						initial: {
							scale: 0,
							opacity: 0,
							y: 100,
						},
						visible: {
							scale: 1,
							opacity: 1,
							y: 0,
						},
					},
				},
			},
		},
	},
});
