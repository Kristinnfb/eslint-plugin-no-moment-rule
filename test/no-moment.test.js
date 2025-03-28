import { RuleTester } from 'eslint';
import rule from '../src/rules/no-moment.js';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  }
});

ruleTester.run('no-moment', rule, {
  valid: [
    "import { format } from 'date-fns';",
    "import dayjs from 'dayjs';",
    "import { DateTime } from 'luxon';"
  ],
  invalid: [
    {
      code: "import moment from 'moment';",
      errors: [{ message: 'Use date-fns, luxon, or dayjs instead of moment' }]
    },
    {
      code: "import { moment } from 'moment';",
      errors: [{ message: 'Use date-fns, luxon, or dayjs instead of moment' }]
    }
  ]
}); 