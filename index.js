module.exports = {
    env: {
        es6: true,
        node: true,
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
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        "import/order": "off",
        'import/no-unresolved': 'off',
        'prettier/prettier': ['error', {
            bracketSpacing: true,
            jsxBracketSameLine: true,
            singleQuote: true,
            trailingComma: 'all',
        }],
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-single-element-style-arrays': 'error',
        // this one is broken and triggers a false positive with new lines
        // 'react-native/no-raw-text': 'error',
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        "simple-import-sort/sort": "error",
        "sort-imports": "off",
    },

    settings: {
        react: {
            version: 'detect',
        },
    },
};
