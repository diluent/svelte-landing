// this file will not afect the sandbox but will
// afect the deployment and dowload

import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/bundle.js"
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write("public/bundle.css");
      }
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),

    // serve('dist'),

    // Watch the `public` directory and refresh the
		// browser on changes when not in production
    !production && livereload('public'),

    copy({
      targets: [
        { src: 'src/index.html', dest: 'public' },
        // { src: ['assets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
        { src: 'src/static', dest: 'public' },
      ]
    })
  ]
};
