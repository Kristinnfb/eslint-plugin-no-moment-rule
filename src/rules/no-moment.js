/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow usage of moment.js',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [], // no options
    messages: {
      noMoment: 'Use date-fns instead of moment',
    },
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'moment') {
          context.report({
            node,
            messageId: 'noMoment',
          });
        }
      },
    };
  },
}; 