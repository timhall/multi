import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json';

const banner = `//! ${pkg.name} v${pkg.version} - ${pkg.homepage} - @license: ${pkg.license}`;

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/multi.es.js',
        format: 'es',
        banner
      }
    ],
    plugins: [typescript(), filesize()]
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/multi.cjs.min.js',
        format: 'cjs',
        sourcemap: true,
        banner
      },
      {
        file: 'dist/multi.umd.min.js',
        format: 'umd',
        name: 'multi',
        sourcemap: true,
        banner
      }
    ],
    plugins: [typescript(), terser(), filesize()]
  }
];
