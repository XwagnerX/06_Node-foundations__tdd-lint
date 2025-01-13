import globals from "globals";
import pluginJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Define global environment
  { languageOptions: { globals: globals.browser } },

  // Extend recommended ESLint rules
  pluginJs.configs.recommended,

  // Include Prettier plugin
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      "prettier/prettier": "error", // Treat Prettier issues as errors
    },
  },

  // Disable ESLint rules conflicting with Prettier
  prettierConfig,
];
