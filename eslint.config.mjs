import globals from "globals";
import noMomentPlugin from "./src/index.js";

export default [
  {
    ignores: ["node_modules/**"],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    }
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser
      },
    },
    plugins: {
      noMoment: noMomentPlugin
    },
    rules: {
      'noMoment/no-moment': 'error'
    }
  }
];