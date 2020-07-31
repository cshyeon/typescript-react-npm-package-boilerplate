module.exports = {
  env: {
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  ignorePatterns: ['build/**/*', 'docs/**/*'], // ignore eslint on build directory
  rules: {
  },
  settings: {
    react: {
      version: "detect"
    }
  },
};
