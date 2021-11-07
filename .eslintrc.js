module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 'off',
    semi: [2, 'never'],
  },
}

// Sempre instalar eslint - ```yarn add eslint -D```
// Iniciar o eslint - ```yarn run eslint --init```

// module.exports = {
//   root: true,
//   extends: '@react-native-community',
//   rules: {
//     'react-native/no-inline-styles': 'off',
//     semi: [2, 'never'],
//     'react/jsx-filename-extension': [
//       'error',
//       {
//         'extensions': ['.js', '.jsx', '.ts', '.tsx']
//       }
//     ]
//   },
// }
