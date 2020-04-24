module.exports = {
  "extends": [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier/react",
    "plugin:cypress/recommended"
  ],
  "plugins": [
    "prettier",
    "react",
    "cypress"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "es6": true,
    "cypress/globals": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "prettier/prettier": "error",
    "react/prop-types": 0
  }
}