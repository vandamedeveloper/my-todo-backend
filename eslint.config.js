// eslint.config.js
const eslint = require("@eslint/js");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = [
  {
    ignores: ["node_modules", "dist"],
  },
  eslint.configs.recommended,
  {
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
