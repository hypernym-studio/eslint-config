export interface TsConfig {
  files: string[]
  languageOptions: {
    parser: any
    parserOptions: {
      sourceType: string
      ecmaVersion: string
    }
    globals: {
      [globalName: string]: boolean
    }
  }
  plugins: {
    [pluginName: string]: any
  }
  rules: {
    [ruleName: string]: string
  }
}

export declare const tsConfig: TsConfig
