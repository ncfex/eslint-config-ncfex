const path = require('path');

module.exports = {
  extends: [
    'eslint:recommended',
    path.resolve(__dirname, './rules/es6.js'), // not effective, airbnb overrides
    path.resolve(__dirname, './rules/variables.js'), // not effective, airbnb overrides
    'airbnb-base',
    'plugin:n/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {}
};
