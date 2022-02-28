import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import autoExternal from 'rollup-plugin-auto-external';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
		},
	],
	plugins: [
		typescript({
			tsconfig: './tsconfig.json',
		}),
		terser(),
		autoExternal(),
	],
};
