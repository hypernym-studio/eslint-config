import { defineConfig } from '@hypernym/bundler'
import { dependencies, devDependencies } from './package.json'

const externals = [
  ...Object.keys(dependencies),
  ...Object.keys(devDependencies),
  'eslint/config',
]

export default defineConfig({
  externals,
  entries: [
    { input: './src/index.mjs' },
    {
      dts: './src/types.ts',
      output: './dist/index.d.mts',
    },
    { input: './src/svelte/index.mjs' },
    {
      dts: './src/svelte/types.ts',
      output: './dist/svelte/index.d.mts',
    },
    { input: './src/vue/index.mjs' },
    {
      dts: './src/vue/types.ts',
      output: './dist/vue/index.d.mts',
    },
    { input: './src/react/index.mjs' },
    {
      dts: './src/react/types.ts',
      output: './dist/react/index.d.mts',
    },
  ],
})
