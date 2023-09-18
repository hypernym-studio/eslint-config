export interface JsConfig {
  files: string[]
  languageOptions: {
    parser: any
    parserOptions: {
      sourceType: string
      ecmaVersion: string
      requireConfigFile: boolean
      babelOptions: {
        babelrc: boolean
        configFile: boolean
        plugins: string[]
      }
    }
    globals: {
      [globalName: string]: boolean
    }
  }
  rules: {
    [ruleName: string]: string
  }
}

export declare const jsConfig: JsConfig
