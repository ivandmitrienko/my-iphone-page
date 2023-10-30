module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: "standard",
  parser: "@babel/eslint-parser",
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    requireConfigFile: false,
    babelOptions: {
      plugins: ["@babel/plugin-syntax-import-assertions"]
    }
  },
  rules: {
    "no-console": "off",
    quotes: ["error", "double"]
  }
}
