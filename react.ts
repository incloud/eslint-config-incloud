import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['react-app', './index'],
  rules: {
    'no-console': ['error', { allow: ['error', 'warn'] }],
  },
};

export = config;
