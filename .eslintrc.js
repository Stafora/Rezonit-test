module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    semi: 'off',
    'space-before-blocks': 'off',
    indent: 'off',
    'key-spacing': 'off',
    'no-trailing-spaces': 'off',
	'no-tabs': 'off',
	'keyword-spacing': 'off'
  }
}
