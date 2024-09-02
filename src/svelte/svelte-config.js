import globals from 'globals'
import jsPlugin from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import sveltePlugin from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'

/** @type {import("eslint").Linter.Config} */
export const svelteConfig = {
  files: ['**/*.svelte'],
  languageOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    parser: svelteParser,
    globals: {
      ...globals.es2021,
      ...globals.browser,
      ...globals.nodeBuiltin,
    },
  },
  plugins: {
    svelte: sveltePlugin,
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    ...jsPlugin.configs.recommended.rules,
    ...tsPlugin.configs.recommended.rules,
    ...sveltePlugin.configs.recommended.rules,
    'no-undef': 'off',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
  },
}
