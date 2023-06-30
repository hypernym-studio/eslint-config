/** @type {import('./index').Config} */
module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es2022: true
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022
  },

  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],

  ignorePatterns: [
    '.DS_Store',
    'node_modules',
    'package*',
    '*-lock.*',
    '*.log*',
    '.private',
    '.cache',
    '.env',
    'dist'
  ]
}
