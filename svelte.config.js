import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
// for more information about preprocessors
const config = {
	preprocess: preprocess({}),
	kit: {
		target: '#svelte',
		paths: {
			base: '/lotus',
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
	},
};

export default config;
