import { defineConfig } from '@hypernym/bundler'
import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  entries: [
    { input: './src/index.js' },
    { dts: './src/types/index.ts' },
    {
      input: './src/svelte/index.js',
      externals: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
    },
    { dts: './src/types/svelte/index.ts' },
    {
      input: './src/vue/index.js',
      externals: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'vue-eslint-parser',
      ],
    },
    { dts: './src/types/vue/index.ts' },
    {
      input: './src/react/index.js',
      externals: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
    },
    { dts: './src/types/react/index.ts' },
  ],
})
