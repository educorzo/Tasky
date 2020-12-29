/* eslint-env node */
module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
    'plugin:compat/recommended',
    'plugin:jest/recommended',
    '.eslintrc.rules'
  ],
  'plugins': [
    'react',
    'sonarjs',
    'jest'
  ],
  'settings': {
    react: {
      version: 'detect'
    }
  },
  'env': {
    browser: true,
    es2021: true
  },
  'parserOptions': {
    sourceType: 'module'
  },
  'ignorePatterns': ['dist/', 'src/config.js', '.*'],
  'rules': {
    'react/jsx-curly-spacing': ['error', 'never']
  }
};
