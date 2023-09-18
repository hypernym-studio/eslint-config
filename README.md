# @hypernym/eslint-config

Hypernym's internal config for ESLint.

<sub><a href="https://github.com/hypernym-studio/eslint-config">Repository</a> | <a href="https://www.npmjs.com/package/@hypernym/eslint-config">Package</a> | <a href="https://github.com/hypernym-studio/eslint-config/releases">Releases</a> | <a href="https://github.com/hypernym-studio/eslint-config/discussions">Discussions</a></sub>

```sh
npm i -D @hypernym/eslint-config
```

## Setup

1. Enable `useFlatConfig` option in `vscode` settings:

> [!NOTE]\
> This step won't be necessary in the future releases.

```js
// .vscode/settings.json
{
  "eslint.experimental.useFlatConfig": true
}
```

2. Optionally, add `lint` commands for manual linting:

```js
// package.json
{
  "scripts": {
    "lint": "ESLINT_USE_FLAT_CONFIG=true eslint .",
    "lint:fix": "ESLINT_USE_FLAT_CONFIG=true eslint --fix ."
  }
}
```

## Usage

### JS

```js
// eslint.config.js

import { jsConfig, ignoresConfig } from '@hypernym/eslint-config'

export default [jsConfig, ignoresConfig]
```

### TS

```js
// eslint.config.js

import { jsConfig, tsConfig, ignoresConfig } from '@hypernym/eslint-config'

export default [jsConfig, tsConfig, ignoresConfig]
```

### Custom

```js
// eslint.config.js

import { jsConfig, tsConfig, ignores } from '@hypernym/eslint-config'

export default [
  jsConfig,
  tsConfig,
  {
    files: tsConfig.files,
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true },
      ],
    },
  },
  {
    ignores: [...ignores, '**/dir/**/*'],
  },
]
```

## Community

Feel free to use the official [discussions](https://github.com/hypernym-studio/eslint-config/discussions) for any additional questions.

## License

Developed in 🇭🇷 Croatia

Released under the [MIT](LICENSE.txt) license.

© Hypernym Studio
