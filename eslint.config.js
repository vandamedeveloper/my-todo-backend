// eslint.config.js
const pluginJs = require("@eslint/js");
const pluginTs = require("@typescript-eslint/eslint-plugin");
const parserTs = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "commonjs", // Especifica que estás utilizando CommonJS
      },
    },
    plugins: {
      "@typescript-eslint": pluginTs,
    },
    rules: {
      // Añade aquí las reglas específicas que desees
    },
  },
  {
    files: ["*.js", "*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // Especifica que estás utilizando CommonJS
    },
    plugins: {
      "@eslint/js": pluginJs,
    },
    rules: {
      // Añade aquí las reglas específicas que desees
    },
  },
];
