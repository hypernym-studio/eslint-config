export interface Config {
  /**
   * @default true
   */
  root: boolean
  /**
   * An environment provides predefined global variables.
   */
  env: {
    /**
     * Browser global variables.
     *
     * @default true
     */
    browser: boolean
    /**
     * Node.js global variables and Node.js scoping.
     *
     * @default true
     */
    node: boolean
    /**
     * Adds all ECMAScript 2022 globals and automatically sets the ecmaVersion parser option to 13.
     *
     * @default true
     */
    es2022: boolean
  }
  /**
   * Specify a custom parser.
   *
   * @default '@typescript-eslint/parser'
   */
  parser: string
  /**
   * Specify the JavaScript language options you want to support.
   */
  parserOptions: {
    /**
     * Specify the ECMAScript modules.
     *
     * @default 'module'
     */
    sourceType: 'script' | 'module'
    /**
     * Specify the version of ECMAScript syntax.
     *
     * @default 2022
     */
    ecmaVersion: number
  }
  /**
   * Extend the set of enabled rules from base configurations.
   *
   * @default ['eslint:recommended', 'plugin:@typescript-eslint/recommended']
   */
  extends: string[]
  /**
   * Specify third-party plugins.
   *
   * @default ['@typescript-eslint']
   */
  plugins: string[]
  /**
   * Ignore certain files and directories while linting by specifying one or more glob patterns.
   *
   * @default ['.DS_Store', 'node_modules', 'package*', '*-lock.*', '*.log*', '.private', '.cache', '.env', 'dist']
   */
  ignorePatterns: string[]
}
