import globals from 'globals'
import jsPlugin from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import reactPluginHooks from 'eslint-plugin-react-hooks'
import reactPluginRefresh from 'eslint-plugin-react-refresh'

/** @type {import("eslint").Linter.Config} */
export const tsxConfig = {
  files: ['**/*.{ts,tsx,mts}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
    globals: {
      ...globals.es2021,
      ...globals.browser,
      ...globals.nodeBuiltin,
      React: true,
      JSX: true,
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
    react: reactPlugin,
    'react-hooks': reactPluginHooks,
    'react-refresh': reactPluginRefresh,
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    ...jsPlugin.configs.recommended.rules,
    ...tsPlugin.configs.recommended.rules,
    ...reactPlugin.configs.flat.recommended.rules,
    ...reactPluginHooks.configs.recommended.rules,
    ...reactPlugin.configs.flat['jsx-runtime'].rules,
    'react-refresh/only-export-components': [
      'warn',
      {
        allowExportNames: [
          'config',
          'generateStaticParams',
          'metadata',
          'generateMetadata',
          'viewport',
          'generateViewport',
        ],
      },
    ],
  },
}
