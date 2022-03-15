import { Linter } from 'eslint';

const variables: Linter.Config = {
  rules: {
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // disallow deletion of variables
    'no-delete-var': 'error',

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // disallow use of variables before they are defined
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  },
};

export = variables
