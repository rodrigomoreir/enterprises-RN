import 'react-native-gesture-handler'

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import AppProvider from './Hooks'
import Routes from './routes'

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle='light-content'/>
    <AppProvider>
      <Routes />
    </AppProvider>
  </NavigationContainer>
);

export default App;
