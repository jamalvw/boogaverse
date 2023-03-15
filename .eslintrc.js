module.exports = {
    env: {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    extends: [
    //    'eslint:recommended',
    //    'plugin:react/recommended',
    //    'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
    //    'indent': ['error', 4],
    //    'quotes': ['error', 'single'],
    //    'semi': ['error', 'always']
    }
};
