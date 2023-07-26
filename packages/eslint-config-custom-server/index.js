module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint-config-base"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: ["warn", 2],
    quotes: ["warn", "single"],
    semi: ["warn", "never"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
