// eslint.config.mjs (note the .mjs extension)
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["node_modules", "dist"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
);
