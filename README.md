<h1 align="center">@hypernym/eslint-config</h1>

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

## Usage

### Linting Commands

Add `lint` commands for manual linting (optional):

```js
// package.json

{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint --fix ."
  }
}
```

### JavaScript Config

```js
// eslint.config.js

import { defineConfig, jsConfig, ignoresConfig } from '@hypernym/eslint-config'

export default defineConfig([jsConfig, ignoresConfig])
```

### TypeScript Config

```js
// eslint.config.js

import {
  defineConfig,
  jsConfig,
  tsConfig,
  ignoresConfig,
} from '@hypernym/eslint-config'

export default defineConfig([jsConfig, tsConfig, ignoresConfig])
```

### Svelte/SvelteKit Config

> [!NOTE]
>
> Install the required `Svelte` dependencies before using:
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

import {
  defineConfig,
  jsConfig,
  tsConfig,
  ignoresConfig,
} from '@hypernym/eslint-config'
import { svelteConfig } from '@hypernym/eslint-config/svelte'

export default defineConfig([jsConfig, tsConfig, svelteConfig, ignoresConfig])
```

### Vue/Nuxt Config

> [!NOTE]
>
> Install the required `Vue` dependencies before using:
>
> ```sh
> pnpm add -D eslint-plugin-vue vue-eslint-parser
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

import {
  defineConfig,
  jsConfig,
  tsConfig,
  ignoresConfig,
} from '@hypernym/eslint-config'
import { vueConfig } from '@hypernym/eslint-config/vue'

export default defineConfig([jsConfig, tsConfig, vueConfig, ignoresConfig])
```

### React/Next Config

> [!NOTE]
>
> Install the required `React` dependencies before using:
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

import { defineConfig, ignoresConfig } from '@hypernym/eslint-config'
import { jsxConfig, tsxConfig } from '@hypernym/eslint-config/react'

export default defineConfig([jsxConfig, tsxConfig, ignoresConfig])
```

## Custom Setup

```js
// eslint.config.js

import {
  defineConfig,
  globalIgnores,
  jsConfig,
  tsConfig,
  ignores,
} from '@hypernym/eslint-config'

export default defineConfig([
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
  globalIgnores([...ignores, '**/dir/']),
])
```

For more info on how to `ignore files`, see the official [docs](https://eslint.org/docs/latest/use/configure/ignore).

## License

Developed in 🇭🇷 Croatia, © Hypernym Studio.

Released under the [MIT](LICENSE.txt) license.
