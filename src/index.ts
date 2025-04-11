const noMomentRule = require('./rules/no-moment');

module.exports = {
  rules: {
    'no-moment': noMomentRule
  },
  configs: {
    recommended: {
      plugins: ['no-moment'],
      rules: {
        'no-moment/no-moment': 'error'
      },
    },
  },
}; 