import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'

const prod = process.env.PRODUCTION
const mode = prod ? 'production' : 'development'

console.log(`Creating ${mode} bundle...`)

export default {
  entry: 'src/index.js',
  moduleName: 'ReactInteractable',
  external: ['react', 'animated'],
  globals: {
    react: 'React',
    animated: 'Animated',
  },
  targets: [
    {
      dest: 'dist/react-interactable.js',
      format: 'umd',
    },
  ],
  plugins: [
    resolve(),
    commonjs({ include: 'node_modules/**' }),
    json(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        ['es2015', { modules: false }],
        'stage-0',
        'react',
        'react-native',
      ],
      plugins: ['external-helpers'],
    }),
  ],
  sourceMap: true,
}
