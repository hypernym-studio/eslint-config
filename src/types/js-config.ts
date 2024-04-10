export interface JsConfig {
  files: string[]
  languageOptions: {
    sourceType: string
    ecmaVersion: string
    globals: {
      [globalName: string]: boolean
    }
  }
  rules: {
    [ruleName: string]: string
  }
}

export declare const jsConfig: JsConfig
