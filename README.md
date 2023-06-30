# ESLint Config

Hypernym ESLint config.

<sub><a href="https://github.com/hypernym-studio/eslint-config">Repository</a> | <a href="https://www.npmjs.com/package/@hypernym/eslint-config">Package</a> | <a href="https://github.com/hypernym-studio/eslint-config/releases">Releases</a> | <a href="https://github.com/hypernym-studio/eslint-config/discussions">Discussions</a></sub>

## Features

- ESLint + Prettier + TypeScript
- Standard recommended settings

## Installation

```sh
npm i -D @hypernym/eslint-config
```

## Usage

### Simple

```js
// package.json

{
  "eslintConfig": {
    "extends": "@hypernym/eslint-config"
  }
}
```

### Custom

```js
// eslint.config.cjs

module.exports = {
  extends: ['@hypernym/eslint-config']

  // custom options...
}
```

### Types

```js
// eslint.config.cjs

/** @type {import('@hypernym/eslint-config').Config} */
module.exports = {
  extends: ['@hypernym/eslint-config']

  // custom options...
}
```

## Community

Feel free to use the official [discussions](https://github.com/hypernym-studio/eslint-config/discussions) for any additional questions.

## License

Developed in 🇭🇷 Croatia

Released under the [MIT](LICENSE.txt) license.

© Hypernym Studio
