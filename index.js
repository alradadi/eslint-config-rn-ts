module.exports = {
    env: {
        es6: true,
    },

    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    plugins: ['@typescript-eslint', 'import','prettier', 'react', 'react-hooks', 'react-native', 'simple-import-sort'],

    root: true,

    rules: {
        "sort-imports": "off",
        "import/order": "off",
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/camelcase': 'off',
        'import/no-unresolved': 'off',
        'prettier/prettier': ['error', {
            bracketSpacing: true,
            jsxBracketSameLine: true,
            singleQuote: true,
            trailingComma: 'all',
        }],
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        // this one is broken and triggers a false positive with new lines
        // 'react-native/no-raw-text': 'error',
        "simple-import-sort/sort": "error",
    },

    settings: {
        react: {
            version: 'detect',
        },
    },
};
