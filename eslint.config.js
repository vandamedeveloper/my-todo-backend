const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      ...js.configs.recommended.rules,
      ...(tseslint.configs['recommended'] || {}).rules,

      // 🛑 ❌ Bloquear `console.log`
      'no-console': ['error', { allow: ['warn', 'error'] }],

      // 🛑 ❌ Bloquear `debugger`
      'no-debugger': 'error',

      // ✅ Reglas de Prettier
      'prettier/prettier': 'error',

      // ✅ Reglas de formato
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@eslint/js': js,
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      ...js.configs.recommended.rules,

      // 🛑 ❌ Bloquear `console.log`
      'no-console': ['error', { allow: ['warn', 'error'] }],

      // 🛑 ❌ Bloquear `debugger`
      'no-debugger': 'error',

      'prettier/prettier': 'error',
    },
  },
  {
    ignores: ['node_modules/', 'dist/'],
  },
];
