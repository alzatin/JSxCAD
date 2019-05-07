// rollup.config.js
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import hypothetical from 'rollup-plugin-hypothetical';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'main.js',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  external: [
    'buffer',
    'events',
    'process'
  ],
  plugins: [
    hypothetical(
      {
        allowFallthrough: true,
        files: {
          '@jsxcad/convert-jscad': `export const scriptToOperator = () => {};`,
          '@jsxcad/convert-threejs': `export const toThreejsGeometry = () => {};
                                             export const toThreejsPage = () => {};
                                            `
        }
      }),
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    globals(),
    builtins()
  ]
};
