const path = require('path');

module.exports = {
  extends: [
    path.resolve(__dirname, './rules/es6.js'), // not effective, airbnb overrides
    path.resolve(__dirname, './rules/variables.js'), // not effective, airbnb overrides
    'airbnb-base',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
};
