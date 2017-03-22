/**
 * This defines the Incloud ESLint ruleset which should
 * not be modified without further discussion about the
 * to-be-modified rule.
 */
module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  globals: {
    modules: true,
  },
  extends: 'eslint-config-airbnb',
  rules: {
    indent: ['error', 2],
  },
};
