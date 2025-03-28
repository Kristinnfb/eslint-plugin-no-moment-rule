import { test } from 'node:test';
import assert from 'node:assert/strict';
import { RuleTester } from 'eslint';

// Rule to be tested
import rule from '../src/rules/no-moment.js';

test('no-moment rule', async (t) => {
  const ruleTester = new RuleTester({
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    }
  });

  ruleTester.run('no-moment', rule, {
    valid: [
      {
        code: "import { format } from 'date-fns';"
      }
    ],
    invalid: [
      {
        code: "import moment from 'moment';",
        errors: [{ message: 'Use date-fns instead of moment' }]
      }
    ]
  });
}); 