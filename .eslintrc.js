module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false
    },
    extends: [
      'plugin:vue/vue3-recommended',
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
      'vue/html-self-closing': ['error', {
        'html': {
          'void': 'always',
          'normal': 'never',
          'component': 'any'
        }
      }],
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off'
    }
  }
  