module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow the use of Moment.js',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [], // no options
    messages: {
      noMoment: 'Do not use Moment.js. Consider using date-fns, Luxon, or Day.js instead.',
    },
  },

  create(context)
  {
    return {
      ImportDeclaration(node)
      {
        if (node.source.value === 'moment')
        {
          context.report({
            node,
            messageId: 'noMoment',
          });
        }
      },
      CallExpression(node)
      {
        if (
          node.callee.type === 'Identifier' &&
          node.callee.name === 'require' &&
          node.arguments.length > 0 &&
          node.arguments[0].type === 'Literal' &&
          node.arguments[0].value === 'moment'
        )
        {
          context.report({
            node,
            messageId: 'noMoment',
          });
        }
      },
    };
  },
}; 