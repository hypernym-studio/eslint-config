import { jsConfig, tsConfig, ignoresConfig } from '../src/index.js'

/** @type {import("eslint").Linter.Config[]} */
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
