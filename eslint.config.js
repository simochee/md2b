import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
    },
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsEslintParser,
    },
    rules: tsEslintPlugin.configs["recommended"].rules,
  },
  eslintPluginUnicorn.configs["flat/recommended"],
];
