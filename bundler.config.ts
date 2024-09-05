import { defineConfig } from '@hypernym/bundler'
import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  entries: [
    { input: './src/index.js', output: './dist/index.mjs' },
    { types: './src/types/index.ts' },
    {
      input: './src/svelte/index.js',
      output: './dist/svelte/index.mjs',
      externals: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
    },
    { types: './src/types/svelte/index.ts' },
    {
      input: './src/vue/index.js',
      output: './dist/vue/index.mjs',
      externals: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'vue-eslint-parser',
      ],
    },
    { types: './src/types/vue/index.ts' },
  ],
})
