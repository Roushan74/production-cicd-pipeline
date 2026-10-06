const eslint = require("@eslint/js");
const globals = require("globals");

module.exports = [
  eslint.configs.recommended,

  {
    ignores: [
      "node_modules/**",
      "coverage/**"
    ]
  },

  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },

  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    }
  }
];