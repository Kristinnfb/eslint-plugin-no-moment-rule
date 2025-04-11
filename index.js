export default {
    rules: {
      'no-moment': require('./src/rules/no-moment')
    },
    configs: {
      recommended: {
        plugins: ['no-moment'],
        rules: {
          'no-moment/no-moment': 'error'
        }
      }
    }
  }; 