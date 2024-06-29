module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: false,
    node: true,
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
