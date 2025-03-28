export default {
    extends: [
      'next/core-web-vitals',
      'eslint:recommended'
    ],
    rules: {
      'no-restricted-imports': ['error', {
        paths: [{
          name: 'moment',
          message: 'Please use date-fns or native Date methods instead of moment.js for better performance and smaller bundle size.'
        }]
      }],
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    }
  }; 