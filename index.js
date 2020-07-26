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
    'plugin:react-native/all',
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
      rules: {
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
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

  plugins: ['import', 'prettier', 'react','react-native', 'react-hooks', 'simple-import-sort'],

  root: true,

  rules: {
    'import/order': 'off',
    'import/namespace': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
