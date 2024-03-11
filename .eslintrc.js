module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': [
      'error',
      {
        doubleQuotes: true,
        endOfLine: 'auto',
      },
    ],
  },
};
