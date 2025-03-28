/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow usage of moment.js in favor of more modern alternatives',
    },
    schema: [], // no options
    messages: {
      noMoment: 'Use date-fns, luxon, or dayjs instead of moment',
    },
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
    };
  },
}; 