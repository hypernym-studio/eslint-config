<h1 align="center">ESLint Config</h1>

<p align="center">Hypernym's internal config for ESLint.</p>

<p align="center">
  <a href="https://github.com/hypernym-studio/eslint-config">Repository</a>
  <span>✦</span>
  <a href="https://www.npmjs.com/package/@hypernym/eslint-config">Package</a>
  <span>✦</span>
  <a href="https://github.com/hypernym-studio/eslint-config/releases">Releases</a>
  <span>✦</span>
  <a href="https://github.com/hypernym-studio/eslint-config/discussions">Discussions</a>
</p>

<br>

<pre align="center">pnpm add -D @hypernym/eslint-config</pre>

<br>

## Setup

Add `lint` commands for manual linting (optionally):

```js
// package.json

{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint --fix ."
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

### Svelte/SvelteKit

> [!NOTE]
>
> Install the required `Svelte` dev dependencies before using:
>
> ```sh
> pnpm add -D eslint-plugin-svelte svelte-eslint-parser
> ```
>
> Also, don't forget to add the `svelte` lang key to the `eslint.validate` vscode setting:
>
> ```js
> // .vscode/settings.json
>
> {
>   "eslint.validate": ["javascript", "typescript", "svelte"]
> }
> ```

```js
// eslint.config.js

import { jsConfig, tsConfig, ignoresConfig } from '@hypernym/eslint-config'
import { svelteConfig } from '@hypernym/eslint-config/svelte'

export default [jsConfig, tsConfig, svelteConfig, ignoresConfig]
```

### Vue/Nuxt

> [!NOTE]
>
> Install the required `Vue` dev dependencies before using:
>
> ```sh
> pnpm add -D eslint-plugin-vue
> ```
>
> Also, don't forget to add the `vue` lang key to the `eslint.validate` vscode setting:
>
> ```js
> // .vscode/settings.json
>
> {
>   "eslint.validate": ["javascript", "typescript", "vue"]
> }
> ```

```js
// eslint.config.js

import { jsConfig, tsConfig, ignoresConfig } from '@hypernym/eslint-config'
import { vueConfig } from '@hypernym/eslint-config/vue'

export default [jsConfig, tsConfig, vueConfig, ignoresConfig]
```

### React/Next

> [!NOTE]
>
> Install the required `React` dev dependencies before using:
>
> ```sh
> pnpm add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
> ```
>
> Also, don't forget to add the `react` lang keys to the `eslint.validate` vscode setting:
>
> ```js
> // .vscode/settings.json
>
> {
>   "eslint.validate": ["javascript", "typescript", "javascriptreact", "typescriptreact"]
> }
> ```

```js
// eslint.config.js

import { ignoresConfig } from '@hypernym/eslint-config'
import { jsxConfig, tsxConfig } from '@hypernym/eslint-config/react'

export default [jsxConfig, tsxConfig, ignoresConfig]
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

Feel free to ask questions or share new ideas.

Use the official [discussions](https://github.com/hypernym-studio/eslint-config/discussions) to get involved.

## License

Developed in 🇭🇷 Croatia, © Hypernym Studio.

Released under the [MIT](LICENSE.txt) license.
