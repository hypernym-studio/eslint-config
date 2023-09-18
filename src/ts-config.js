import globals from 'globals'
import jsPlugin from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'

export const tsConfig = {
  files: ['**/*.{ts,mts,cts}'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    globals: {
      ...globals.es2021,
      ...globals.browser,
      ...globals.nodeBuiltin,
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    ...jsPlugin.configs['recommended'].rules,
    ...tsPlugin.configs['eslint-recommended'].rules,
    ...tsPlugin.configs['recommended'].rules,
  },
}
