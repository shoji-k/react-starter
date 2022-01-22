module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'prettier',
  ],
  plugins: ['react', 'cypress'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    'cypress/globals': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 0,
  },
}
