import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

const input = "src/utils.js";
export default [
  // UMD build for Browser
  {
    external: ['vue'],
    input: input,
    output: {
      format: 'umd',
      name: pkg.name,
      file: pkg.browser,
    },
    plugins: [
      json(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [["@babel/env", { "modules": false }]]
      })
    ]
  },

  // CommonJS build for Node.
  // And ES module build for bundlers.
  {
    input: input,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' }
    ],
    plugins: [
      json(),
      commonjs(),
      babel({ exclude: 'node_modules/**' })
    ]
  }
];