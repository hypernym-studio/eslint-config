import { defineConfig } from '@hypernym/bundler'
import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  entries: [
    { input: './src/index.js', output: './dist/index.mjs' },
    { dts: './src/types/index.ts' },
    {
      input: './src/svelte/index.js',
      output: './dist/svelte/index.mjs',
      externals: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
    },
    { dts: './src/types/svelte/index.ts' },
    {
      input: './src/vue/index.js',
      output: './dist/vue/index.mjs',
      externals: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'vue-eslint-parser',
      ],
    },
    { dts: './src/types/vue/index.ts' },
    {
      input: './src/react/index.js',
      output: './dist/react/index.mjs',
      externals: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
    },
    { dts: './src/types/react/index.ts' },
  ],
})
