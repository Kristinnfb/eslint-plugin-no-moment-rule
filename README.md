# eslint-plugin-no-moment

An ESLint plugin that disallows the use of Moment.js, encouraging the use of modern alternatives like date-fns, Luxon, or Day.js.

## Installation

```bash
npm install --save-dev eslint-plugin-no-moment
```

## Usage

Add `no-moment` to the plugins section of your `.eslintrc` configuration file:

```json
{
    "plugins": [
        "no-moment"
    ],
    "rules": {
        "no-moment/no-moment": "error"
    }
}
```

Or if you're using ESLint v9+, add it to your `eslint.config.js`:

```js
import noMomentPlugin from 'eslint-plugin-no-moment';

export default [
    {
        plugins: {
            'no-moment': noMomentPlugin
        },
        rules: {
            'no-moment/no-moment': 'error'
        }
    }
];
```

## Why?

Moment.js is now in maintenance mode and the team recommends using modern alternatives like:
- [date-fns](https://date-fns.org/)
- [Luxon](https://moment.github.io/luxon/)
- [Day.js](https://day.js.org/)

These alternatives are more modern, smaller, and often have better performance characteristics.

## License

ISC