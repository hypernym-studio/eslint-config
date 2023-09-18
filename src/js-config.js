import globals from 'globals'
import jsPlugin from '@eslint/js'
import babelParser from '@babel/eslint-parser'

export const jsConfig = {
  files: ['**/*.{js,mjs,cjs}'],
  languageOptions: {
    parser: babelParser,
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      requireConfigFile: false,
      babelOptions: {
        babelrc: false,
        configFile: false,
        plugins: ['@babel/plugin-syntax-import-assertions'],
      },
    },
    globals: {
      ...globals.es2021,
      ...globals.browser,
      ...globals.nodeBuiltin,
    },
  },
  rules: {
    ...jsPlugin.configs['recommended'].rules,
  },
}
