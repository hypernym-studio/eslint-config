import { defineConfig } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    { input: './src/index.js', output: './dist/index.mjs' },
    { types: './src/types/index.ts' },
  ],
})
