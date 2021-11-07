import 'react-native-gesture-handler'

import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
// import { ThemeProvider } from 'styled-components'
import ThemeProvider from './core/ThemeProvider'
// import theme from './theme/theme'
import store from './services/store'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes'

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Provider store={store}>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </Provider>
  </NavigationContainer>
)

export default App
