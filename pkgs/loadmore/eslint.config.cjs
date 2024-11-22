/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('configs/base.eslint')
// eslint-disable-next-line no-undef
module.exports = {
  ...base,
  overrides: [
    {
      files: ['*.ts'],
      plugins: ['lit', 'lit-a11y'],
      extends: [
        'plugin:wc/recommended',
        'plugin:lit/recommended',
        'plugin:lit-a11y/recommended',
      ],
      rules: {
        'lit/no-template-map': 'error',
      },
    },
  ],
}
