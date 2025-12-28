// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({
			scss: {
				// Optional: If you want to prepend a global file (like variables)
				// prependData: `@use "src/styles/variables.scss" as *;`
			},
			postcss: true
		}),
		vitePreprocess()
	],

	kit: {
		adapter: adapter(),
		appDir: 'internal',
		paths: {
			base: ''
		}
	}
};

export default config;
