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
    { input: './src/index.js' },
    {
      dts: './src/types.ts',
      output: './dist/index.d.ts',
    },
    { input: './src/svelte/index.js' },
    {
      dts: './src/svelte/types.ts',
      output: './dist/svelte/index.d.ts',
    },
    { input: './src/vue/index.js' },
    {
      dts: './src/vue/types.ts',
      output: './dist/vue/index.d.ts',
    },
    { input: './src/react/index.js' },
    {
      dts: './src/react/types.ts',
      output: './dist/react/index.d.ts',
    },
  ],
})
