module.exports = {
  "extends": [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier/react"
  ],
  "plugins": [
    "prettier",
    "react"
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
    "es6": true
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