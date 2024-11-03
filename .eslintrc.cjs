/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  rules:{
    'perfectionist/sort-vue-attributes': [
      'error',
      {
        type: 'line-length',
        ignoreCase: true,
        customGroups: {},
        order: 'desc',
        groups: [],
      },
    ],
    "vue/no-multi-spaces": ["error", {
      "ignoreProperties": false
    }],
    // 'vue/html-quotes':["error", "single"],
    'vue/html-indent':['error',4],
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'plugin:perfectionist/recommended-line-length-legacy',
  ], 
  overrides: [
    {
      parser: 'vue-eslint-parser',
      files: ['*.vue']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins:[
    'perfectionist'
  ],
  "env": {
    "node": true
  },
  root: true
}
