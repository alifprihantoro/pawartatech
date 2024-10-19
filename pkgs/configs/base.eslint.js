// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': ['@typescript-eslint'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'prefer-template': ['error'],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-trailing-spaces': ['error'],
    'no-mixed-spaces-and-tabs': ['error'],
    'camelcase': ['error'],
    'indent': ['error', 2],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'never',
    ],
    'no-console': ['warn'],
    'no-alert': ['warn'],
  },
}