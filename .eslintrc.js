module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    '@react-native-community',
    'plugin:prettier/recommended',
    'prettier/react',
  ],

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
      ],
    },
  ],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    'import',
    'prettier',
    'react',
    'react-hooks',
    'react-native',
    'simple-import-sort',
  ],

  root: true,

  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/order': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    // 'react-hooks/exhaustive-deps': 'warn',
    // 'react-hooks/rules-of-hooks': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react-native/no-raw-text': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
