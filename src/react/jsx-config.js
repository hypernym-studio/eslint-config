import globals from 'globals'
import jsPlugin from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import reactPluginHooks from 'eslint-plugin-react-hooks'
import reactPluginRefresh from 'eslint-plugin-react-refresh'

/** @type {import("eslint").Linter.Config} */
export const jsxConfig = {
  files: ['**/*.{js,jsx,mjs}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
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
    react: reactPlugin,
    'react-hooks': reactPluginHooks,
    'react-refresh': reactPluginRefresh,
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    ...jsPlugin.configs.recommended.rules,
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
