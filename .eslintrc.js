module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    es2021: true,
  },
  extends: '@react-native',

  // Reglas específicas
  rules: {
    'no-trailing-spaces': 'off',
    'import-spacing': 'off',
    'space-before-function-paren': ['error', 'never'],
    indent: ['error', 2],
    semi: ['error', 'never'],
  },
}
