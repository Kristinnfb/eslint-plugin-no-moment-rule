module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow usage of moment.js in favor of more modern alternatives',
      category: 'Best Practices',
      recommended: 'error',
    }
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'moment') {
          context.report({
            node,
            message: 'Use date-fns, luxon, or dayjs instead of moment',
          });
        }
      },
      CallExpression(node) {
        if (
          node.callee.name === 'require' &&
          node.callee.type === 'Identifier' &&
          node.arguments[0] &&
          node.arguments[0].value === 'moment'
        ) {
          context.report({
            node,
            message: 'Use date-fns, luxon, or dayjs instead of moment',
          });
        }
      },     
    };
  },
}; 