import { jsConfig, tsConfig, ignoresConfig } from '../src/index.js'

export default [
  jsConfig,
  tsConfig,
  ignoresConfig,
  {
    files: tsConfig.files,
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
