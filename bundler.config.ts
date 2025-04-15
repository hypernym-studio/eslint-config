import { defineConfig } from '@hypernym/bundler'
import { dependencies, devDependencies } from './package.json'

const externals = [
  ...Object.keys(dependencies),
  ...Object.keys(devDependencies),
  'eslint/config',
]

export default defineConfig({
  entries: [
    {
      input: './src/index.js',
      externals,
    },
    {
      dts: './src/types/index.ts',
      output: './dist/index.d.mts',
      externals,
    },
    {
      input: './src/svelte/index.js',
      externals,
    },
    {
      dts: './src/types/svelte/index.ts',
      output: './dist/svelte/index.d.mts',
    },
    {
      input: './src/vue/index.js',
      externals,
    },
    {
      dts: './src/types/vue/index.ts',
      output: './dist/vue/index.d.mts',
    },
    {
      input: './src/react/index.js',
      externals,
    },
    {
      dts: './src/types/react/index.ts',
      output: './dist/react/index.d.mts',
    },
  ],
})
