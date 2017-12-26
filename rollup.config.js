import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import pkg from './package.json';

export default {
  input: 'lib/index.js',
  external: ['react', 'prop-types'],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    postcss({
      plugins: [cssnext()],
      sourceMap: false,
      extract: 'dist/style.css',
      extensions: ['.css']
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
