# eslint-config-rn-ts

An [ESLint](https://eslint.org/) config for [React Native](https://facebook.github.io/react-native/) projects written in [TypeScript](https://www.typescriptlang.org/)

Includes rules for:
* [eslint:recommended](https://eslint.org/docs/rules/)
* [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslin)
* [import](https://www.npmjs.com/package/eslint-plugin-import)
* [react](https://github.com/yannickcr/eslint-plugin-react)
* [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
* [react-native](https://github.com/intellicode/eslint-plugin-react-native)
* [react-native-community](https://www.npmjs.com/package/@react-native-community/eslint-config)
* [prettier](https://github.com/prettier/eslint-config-prettier)
* [simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)

## Installation

```sh
yarn add -D eslint eslint-config-rn-ts
```

## Usage

In `.eslintrc.js` file, add:

```js
{
  extends: ['rn-ts'],
  rules: {
    // override rules
  }
}
```

To run prettier and rearrange import statements run:

```
eslint --fix
```

## License

MIT
