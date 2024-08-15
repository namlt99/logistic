import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		outDir: 'dist',
		sourcemap: true,
		minify: true,
		target: 'es6',
		assetsDir: 'assets'
	}
});
