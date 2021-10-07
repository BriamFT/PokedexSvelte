import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		paths: {
			base: 'https://github.com/BriamFT/PokedexSvelte.git',
		},
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		appDir: 'internal',
	}
};