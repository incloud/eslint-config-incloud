import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['react-app', './index'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': ['error', { allow: ['error', 'warn'] }],
  },
};

export = config;
