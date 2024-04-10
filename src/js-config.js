import globals from 'globals'
import jsPlugin from '@eslint/js'

export const jsConfig = {
  files: ['**/*.{js,mjs,cjs}'],
  languageOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
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
