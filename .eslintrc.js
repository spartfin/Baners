module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
  },
  parserOptions: {
      ecmaVersion: 2017,
      parser: 'babel-eslint'
  },
  extends: [
      'plugin:vue/recommended',
      'plugin:nuxt/recommended',
      'airbnb-base',
      'plugin:lodash/recommended',
      'plugin:sonarjs/recommended'
  ],
  plugins: [
      'vue',
      'nuxt',
      'lodash',
      'sonarjs',
  ],
  rules: {
      'lodash/import-scope': ['off'],
      'lodash/preferred-alias': ['off'],
      "lodash/prefer-lodash-method": [2, { "ignoreObjects": ["_"] }],
      'linebreak-style': ['off', 'windows'],
      'indent': ['error', 4],
      'no-new': 'off',
      'max-len': 'off',
      'arrow-parens': ['error', 'as-needed', {
          'requireForBlockBody': false
      }],
      'prefer-template': 'off',

      'sonarjs/no-duplicate-string': ['off', 6],

      'vue/html-indent': ['error', 4],
      'vue/singleline-html-element-content-newline': ['off'],
      'vue/html-self-closing': ['off'],
      'vue/max-attributes-per-line': ["warn", {
        "singleline": 6,
        "multiline": {
          "max": 6,
          "allowFirstLine": true
          }
        }],
      'vue/no-v-html': ['off'],
    'no-param-reassign': ["error", { "props": false }],
    'import/no-extraneous-dependencies': ['off'],
  }
}
